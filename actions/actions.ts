"use server";
import {
  consultationValidationSchema,
  quoteRequestValidationSchema,
} from "@/constants/validation-schemas/validation";
import z from "zod";
import axios from "axios";
import { sendBookingRequest, sendQuoteRequest } from "./sendMail";

export const bookConsultant = async (formData: FormData) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const data = Object.fromEntries(formData.entries());
  const { data: parseResult, success } =
    consultationValidationSchema.safeParse(data);
  if (!success) {
    return {
      error: "Validation error",
      success: false,
      data,
    };
  }
  return await sendBookingRequest(parseResult);
};

export const requestQuote = async (formData: FormData) => {
  const data = Object.fromEntries(formData.entries());
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const {
    success,
    error,
    data: parseResult,
  } = quoteRequestValidationSchema.safeParse(data);
  if (!success) {
    return {
      errors: error.flatten().fieldErrors,
      success: false,
    };
  }
  return await sendQuoteRequest(parseResult);
};

export const subscribe = async (email: string) => {
  const schema = z.string().email("Invalid Email Address");
  const parseResult = schema.safeParse(email);
  if (!parseResult.success)
    return {
      success: false,
      error: "Validation Error",
    };

  const options = {
    method: "POST",
    url: "https://a.klaviyo.com/api/profile-subscription-bulk-create-jobs",
    headers: {
      accept: "application/vnd.api+json",
      revision: "2024-10-15",
      "content-type": "application/vnd.api+json",
      Authorization: `Klaviyo-API-Key ${
        process.env.KLAVIYO_PRIVATE_API_KEY ?? ""
      }`,
    },
    data: {
      data: {
        type: "profile-subscription-bulk-create-job",
        attributes: {
          profiles: {
            data: [
              {
                type: "profile",
                attributes: {
                  email,
                  subscriptions: {
                    email: {
                      marketing: {
                        consent: "SUBSCRIBED",
                      },
                    },
                  },
                },
              },
            ],
          },
        },
        relationships: {
          list: {
            data: {
              type: "list",
              id: process.env.KLAVIYO_LIST_ID,
            },
          },
        },
      },
    },
  };
  // console.log(JSON.stringify(options.data, null, 2));
  try {
    const response = await axios.request(options);
    return {
      success: true,
      data: response.data,
    };
  } catch (error: any) {
    // console.log(error);
    return {
      success: false,
      errors: error.response?.data?.errors || [
        { message: "An unexpected error occured" },
      ],
    };
  }
};
