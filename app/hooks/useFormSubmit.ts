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
  formType: FormType | "inquiry", // Added 'inquiry' to allowed types
  options?: UseFormSubmitOptions,
) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | "info";
    message: string;
  } | null>(null);

  const endpoints: Record<string, string> = {
    equipment: CONFIG.inquiries,
    profile: "/api/forms/profile",
    contact: CONFIG.inquiries,
    job: CONFIG.inquiries,
    inquiry: CONFIG.inquiries, // Map inquiry to the inquiries endpoint
  };

  const formatTimeTo12Hour = (time24: string) => {
    const [hourStr, minute = "00"] = time24.split(":");
    const hour = Number.parseInt(hourStr, 10);
    if (Number.isNaN(hour)) return time24;
    const period = hour >= 12 ? "PM" : "AM";
    const hour12 = ((hour + 11) % 12) + 1;
    return `${hour12}:${minute} ${period}`;
  };

  const normalizeDuration = (duration: string) => {
    const numericValue = Number.parseInt(duration, 10);
    if (duration.trim() === "" || Number.isNaN(numericValue)) return duration;
    return numericValue;
  };

  const buildEquipmentFormData = (data: any) => {
    const [rentalDate = "", rentalTimeRaw = ""] = data.rentalDateTime?.split("T") ?? [];
    const formData = new FormData();
    formData.append("fullName", data.fullName);
    formData.append("phoneNumber", data.phone);
    formData.append("rentalDate", rentalDate);
    formData.append("rentalTime", rentalTimeRaw ? formatTimeTo12Hour(rentalTimeRaw) : "");
    formData.append("duration", String(normalizeDuration(data.duration)));
    formData.append("equipmentType", data.equipmentType);
    formData.append("worksiteLocation", data.worksiteLocation);
    formData.append("type", "enquiry");
    return formData;
  };

  const buildContactFormData = (data: any, typeOverride?: string) => {
    const formData = new FormData();
    formData.append("fullName", data.fullName);
    formData.append("phoneNumber", data.phone);
    formData.append("equipmentType", data.equipmentType || "General");
    formData.append("type", typeOverride || "contact"); // Uses 'inquiry' or 'contact'
    formData.append("companyName", data.companyName || "");
    formData.append("email", data.email);
    formData.append("yourMessage", data.message);
    return formData;
  };

  const buildJobFormData = (data: any) => {
    const formData = new FormData();
    formData.append("type", "job");
    formData.append("fullName", data.fullName);
    formData.append("phoneNumber", data.phone);
    formData.append("email", data.email);
    formData.append("yourMessage", data.message || "Job Application");
    if (data.cvFile) formData.append("cv", data.cvFile);
    return formData;
  };

  const submitForm = async (
    data: any,
    isFormData: boolean = false,
  ): Promise<ApiResponse> => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const endpoint = endpoints[formType] || CONFIG.inquiries;
      const requestOptions: RequestInit = { method: "POST" };

      if (isFormData) {
        requestOptions.body = data as FormData;
      } else {
        // Refactored logic to handle the new 'inquiry' type
        switch (formType) {
          case "equipment":
            requestOptions.body = buildEquipmentFormData(data);
            break;
          case "job":
            requestOptions.body = buildJobFormData(data);
            break;
          case "inquiry":
            // Reuse contact builder but set type to 'inquiry'
            requestOptions.body = buildContactFormData(data, "inquiry");
            break;
          case "contact":
          default:
            requestOptions.body = buildContactFormData(data, "contact");
            break;
        }
      }

      const response = await fetch(endpoint, requestOptions);

      const result: ApiResponse = await response.json().catch(() => ({
        success: response.ok,
        message: response.ok ? "Success" : "Server Error"
      }));

      if (result.success || response.ok) {
        setSubmitStatus({
          type: "success",
          message: result.message || "Message sent successfully!",
        });
        options?.onSuccess?.(result.data);
        if (options?.resetForm) options.resetForm();
        return { success: true, message: result.message, data: result.data };
      } else {
        throw new Error(result.message || "Failed to submit form.");
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Network error";
      setSubmitStatus({ type: "error", message: errorMessage });
      options?.onError?.(errorMessage);
      return { success: false, message: errorMessage };
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    submitForm,
    isSubmitting,
    submitStatus,
    resetStatus: () => setSubmitStatus(null),
  };
}