"use server";

import {
  consultationValidationSchema,
  quoteRequestValidationSchema,
} from "@/constants/validation-schemas/validation";

export const bookConsultant = async (prevState: any, formData: FormData) => {
  const data = Object.fromEntries(formData.entries());
  //   console.log(data);
  const { success, error } = consultationValidationSchema.safeParse(data);
  if (!success) {
    const errorList = error?.errors.map((err) => {
      return { path: err.path[0], msg: err.message };
    });
    console.log(error.errors);
    console.log({ errorList });
    return { errors: errorList, success: false, data };
  }
  return { errors: null, success: true, data };
};

export const requestQuote = async (prevState: any, formData: FormData) => {
  const data = Object.fromEntries(formData.entries());
  //   console.log(data);
  const { success, error } = quoteRequestValidationSchema.safeParse(data);
  if (!success) {
    const errorList = error?.errors.map((err) => {
      return { path: err.path[0], msg: err.message };
    });
    console.log(error.errors);
    console.log({ errorList });
    return { errors: errorList, success: false, data };
  }
  return { errors: null, success: true, data };
};
