/* eslint-disable @typescript-eslint/no-explicit-any */
// Base form types
export type FormType = "equipment" | "profile" | "contact" | "job";

// Equipment Inquiry Form
export interface EquipmentFormData {
  fullName: string;
  phone: string;
  email?: string;
  rentalDateTime: string;
  duration: string;
  equipmentType: string;
  worksiteLocation: string;
  additionalNotes?: string;
}

// Send Profile Form (CV Upload)
export interface ProfileFormData {
  email: string;
  description: string;
  cvFile?: File | null;
}

// Contact Us Form
export interface ContactFormData {
  fullName: string;
  companyName?: string;
  email: string;
  phone: string;
  equipmentType?: string;
  message: string;
}

// Job Application Form
export interface JobFormData {
  fullName: string;
  phoneNo?: string;
  email: string;
  introduction: string;
  cvFile?: File | null;
}

// API Response
export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data?: T;
  error?: string;
}

// Email Options
export interface EmailOptions {
  to?: string | string[];
  from?: string;
  subject?: string;
  replyTo?: string;
  cc?: string | string[];
  bcc?: string | string[];
}
