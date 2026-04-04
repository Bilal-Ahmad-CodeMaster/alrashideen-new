/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { CONFIG } from "@/config";
import { ApiResponse, FormType } from "../types/form.types";

interface UseFormSubmitOptions {
  onSuccess?: (data: any) => void;
  onError?: (error: string) => void;
  resetForm?: () => void;
}

export function useFormSubmit(
  formType: FormType,
  options?: UseFormSubmitOptions,
) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | "info";
    message: string;
  } | null>(null);

  const endpoints = {
    equipment: CONFIG.inquiries,
    profile: "/api/forms/profile",
    contact: CONFIG.inquiries,
    job: CONFIG.inquiries,
  };

  const formatTimeTo12Hour = (time24: string) => {
    const [hourStr, minute = "00"] = time24.split(":");
    const hour = Number.parseInt(hourStr, 10);

    if (Number.isNaN(hour)) {
      return time24;
    }

    const period = hour >= 12 ? "PM" : "AM";
    const hour12 = ((hour + 11) % 12) + 1;
    return `${hour12}:${minute} ${period}`;
  };

  const normalizeDuration = (duration: string) => {
    const numericValue = Number.parseInt(duration, 10);
    if (duration.trim() === "" || Number.isNaN(numericValue)) {
      return duration;
    }
    return numericValue;
  };

  const buildEquipmentPayload = (data: any) => {
    const [rentalDate = "", rentalTimeRaw = ""] =
      data.rentalDateTime?.split("T") ?? [];

    return {
      fullName: data.fullName,
      phoneNumber: data.phone,
      rentalDate,
      rentalTime: rentalTimeRaw ? formatTimeTo12Hour(rentalTimeRaw) : "",
      duration: normalizeDuration(data.duration),
      equipmentType: data.equipmentType,
      worksiteLocation: data.worksiteLocation,
      type: "inqury",
    };
  };

  const buildEquipmentFormData = (data: any) => {
    const payload = buildEquipmentPayload(data);
    const formData = new FormData();

    Object.entries(payload).forEach(([key, value]) => {
      if (value === undefined || value === null) {
        return;
      }
      formData.append(key, String(value));
    });

    return formData;
  };

  const buildContactPayload = (data: any) => ({
    fullName: data.fullName,
    phoneNumber: data.phone,
    equipmentType: data.equipmentType,
    type: "contact",
    companyName: data.companyName,
    email: data.email,
    yourMessage: data.message,
  });

  const buildContactFormData = (data: any) => {
    const payload = buildContactPayload(data);
    const formData = new FormData();

    Object.entries(payload).forEach(([key, value]) => {
      if (value === undefined || value === null) {
        return;
      }
      formData.append(key, String(value));
    });

    return formData;
  };

  const buildJobPayload = (data: any) => ({
    type: "job",
    fullName: data.fullName,
    phoneNumber: data.phoneNo,
    email: data.email,
    introduction: data.introduction,
  });

  const buildJobFormData = (data: any) => {
    const payload = buildJobPayload(data);
    const formData = new FormData();

    Object.entries(payload).forEach(([key, value]) => {
      if (value === undefined || value === null) {
        return;
      }
      formData.append(key, String(value));
    });

    if (data.cvFile) {
      formData.append("cv", data.cvFile);
    }

    return formData;
  };

  const submitForm = async (
    formData: any,
    isFormData: boolean = false,
  ): Promise<ApiResponse> => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const endpoint = endpoints[formType];

      const requestOptions: RequestInit = {
        method: "POST",
      };

      if (isFormData) {
        // For file uploads (profile form)
        requestOptions.body = formData as FormData;
      } else {
        if (formType === "equipment") {
          requestOptions.body = buildEquipmentFormData(formData);
        } else if (formType === "contact") {
          requestOptions.body = buildContactFormData(formData);
        } else if (formType === "job") {
          requestOptions.body = buildJobFormData(formData);
        } else {
          // For JSON data
          requestOptions.headers = {
            "Content-Type": "application/json",
          };
          requestOptions.body = JSON.stringify(formData);
        }
      }

      const response = await fetch(endpoint, requestOptions);
      const result: ApiResponse = await response.json();

      if (result.success) {
        setSubmitStatus({
          type: "success",
          message: result.message,
        });
        options?.onSuccess?.(result.data);
        if (options?.resetForm) {
          options.resetForm();
        }
      } else {
        setSubmitStatus({
          type: "error",
          message: result.message || "Failed to submit form.",
        });
        options?.onError?.(result.message || "Unknown error");
      }

      return result;
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Network error";

      setSubmitStatus({
        type: "error",
        message: "An error occurred. Please try again.",
      });

      options?.onError?.(errorMessage);

      return {
        success: false,
        message: errorMessage,
      };
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetStatus = () => {
    setSubmitStatus(null);
  };

  return {
    submitForm,
    isSubmitting,
    submitStatus,
    resetStatus,
  };
}
