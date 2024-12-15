"use server";
import {
  BookingRequest,
  QuoteRequest,
} from "@/constants/validation-schemas/validation";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: process.env.SMTP_SECURE === "true", // Use TLS if specified
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const sendBookingRequest = async (data: BookingRequest) => {
  try {
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.RECIPIENT_EMAIL,
      subject: `Booking for consultation from ${data.name}`,
      html: `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa; border-radius: 10px;">
          <div style="background-color: #007bff; padding: 20px; border-radius: 8px 8px 0 0;">
            <h2 style="color: white; margin: 0; text-align: center;">New Consultation Request</h2>
          </div>
          
          <div style="background-color: white; padding: 20px; border-radius: 0 0 8px 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <div style="margin-bottom: 20px;">
              <h3 style="color: #007bff; margin-bottom: 10px;">Client Information</h3>
              <p style="margin: 5px 0;"><strong style="color: #495057;">Name:</strong> <span style="color: #212529;">${data.name}</span></p>
              <p style="margin: 5px 0;"><strong style="color: #495057;">Email:</strong> <span style="color: #212529;">${data.email}</span></p>
              <p style="margin: 5px 0;"><strong style="color: #495057;">Contact:</strong> <span style="color: #212529;">${data.contactNo}</span></p>
            </div>

            <div style="margin-bottom: 20px;">
              <h3 style="color: #007bff; margin-bottom: 10px;">Booking Details</h3>
              <p style="margin: 5px 0;"><strong style="color: #495057;">Category:</strong> <span style="color: #212529;">${data.category}</span></p>
              <p style="margin: 5px 0;"><strong style="color: #495057;">Date:</strong> <span style="color: #212529;">${data.date}</span></p>
            </div>

            <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin-top: 20px;">
              <h3 style="color: #007bff; margin-bottom: 10px;">Message</h3>
              <p style="color: #212529; line-height: 1.6;">${data.description}</p>
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 20px; color: #6c757d; font-size: 12px;">
            <p>This is an automated email. Please do not reply directly to this email.</p>
          </div>
        </div>
      `,
      replyTo: data.email,
    };

    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error("Error sending email: ", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
};
const sendQuoteRequest = async (data: QuoteRequest) => {
  try {
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.RECIPIENT_EMAIL,
      subject: `Quote Request from ${data.name}`,
      html: `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa; border-radius: 10px;">
          <div style="background-color: #28a745; padding: 20px; border-radius: 8px 8px 0 0;">
            <h2 style="color: white; margin: 0; text-align: center;">New Quote Request</h2>
          </div>
          
          <div style="background-color: white; padding: 20px; border-radius: 0 0 8px 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <div style="margin-bottom: 20px;">
              <h3 style="color: #28a745; margin-bottom: 10px;">Client Information</h3>
              <p style="margin: 5px 0;"><strong style="color: #495057;">Name:</strong> <span style="color: #212529;">${data.name}</span></p>
              <p style="margin: 5px 0;"><strong style="color: #495057;">Email:</strong> <span style="color: #212529;">${data.email}</span></p>
              <p style="margin: 5px 0;"><strong style="color: #495057;">Contact:</strong> <span style="color: #212529;">${data.contactNo}</span></p>
            </div>

            <div style="margin-bottom: 20px;">
              <h3 style="color: #28a745; margin-bottom: 10px;">Project Details</h3>
              <p style="margin: 5px 0;"><strong style="color: #495057;">Timeline:</strong> <span style="color: #212529;">${data.timeline}</span></p>
              <p style="margin: 5px 0;"><strong style="color: #495057;">Budget:</strong> <span style="color: #212529;">${data.budget}</span></p>
            </div>

            <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin-top: 20px;">
              <h3 style="color: #28a745; margin-bottom: 10px;">Project Description</h3>
              <p style="color: #212529; line-height: 1.6;">${data.description}</p>
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 20px; color: #6c757d; font-size: 12px;">
            <p>This is an automated email. Please do not reply directly to this email.</p>
          </div>
        </div>
      `,
      replyTo: data.email,
    };

    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error("Error sending email: ", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
};

export { sendBookingRequest, sendQuoteRequest };
