import z from "zod";

export const consultationValidationSchema = z.object({
  name: z.string().min(1, "Name is required").max(100, "Name is too long"),
  email: z.string().email("Invalid email address"),
  contactNo: z
    .string()
    .min(10, "Contact number must be at least 10 digits")
    .max(15, "Contact number cannot exceed 15 digits")
    .regex(/^\+?\d{10,15}$/, "Invalid contact number format"),
  description: z
    .string()
    .min(1, "Description is required")
    .max(1000, "Description is too long"),
  date: z.string().date("Invalid valid date"),
  category: z.enum(["Tech", "Legal", "Business", "Finance"]),
});

export type BookingRequest = z.infer<typeof consultationValidationSchema>;

export const quoteRequestValidationSchema = z.object({
  name: z.string().min(1, "Name is required").max(100, "Name is too long"),
  email: z.string().email("Invalid email address"),
  contactNo: z
    .string()
    .min(10, "Contact number must be at least 10 digits")
    .max(15, "Contact number cannot exceed 15 digits")
    .regex(/^\+?\d{10,15}$/, "Invalid contact number format"),
  description: z
    .string()
    .min(1, "Description is required")
    .max(1000, "Description is too long"),
  timeline: z.coerce
    .number({ invalid_type_error: "Enter valid number" })
    .nonnegative("Timeline must be greater than 0"),
  budget: z.coerce
    .number({ invalid_type_error: "Enter valid number" })
    .nonnegative("Budget must be greater than 0"),
});

export type QuoteRequest = z.infer<typeof quoteRequestValidationSchema>;
