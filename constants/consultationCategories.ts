export const CONSULTATION_CATEGORIES = [
  "Tech",
  "Legal",
  "Finance",
  "Business",
] as const;

export type TConsultationCategories = (typeof CONSULTATION_CATEGORIES)[number];
