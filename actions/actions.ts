"use server";

import {
  consultationValidationSchema,
  quoteRequestValidationSchema,
} from "@/constants/validation-schemas/validation";

export const bookConsultant = async (formData: FormData) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const data = Object.fromEntries(formData.entries());
  console.log(data);
  const { success, error } = consultationValidationSchema.safeParse(data);
  if (!success) {
    return {
      errors: error.flatten().fieldErrors,
      success: false,
      data,
    };
  }
  return { success: true, data };
};

export const requestQuote = async (formData: FormData) => {
  const data = Object.fromEntries(formData.entries());
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const { success, error } = quoteRequestValidationSchema.safeParse(data);
  if (!success) {
    return {
      errors: error.flatten().fieldErrors,
      success: false,
    };
  }
  return { success: true, data };
};
