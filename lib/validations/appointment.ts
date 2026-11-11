import { z } from "zod";

const phoneRegex = /^(\+91[\-\s]?)?[0]?(91)?[6789]\d{9}$/;

export const appointmentSchema = z.object({
  patientName: z
    .string()
    .min(2, "Please enter your full name (at least 2 characters)")
    .max(100, "Name cannot exceed 100 characters"),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .regex(phoneRegex, "Please enter a valid 10-digit Indian mobile number"),
  email: z
    .string()
    .email("Please enter a valid email address")
    .optional()
    .or(z.literal("")),
  preferredDate: z
    .string()
    .min(1, "Please select your preferred date"),
  preferredTimeSlot: z.enum(["morning", "afternoon", "evening"], {
    message: "Please choose a time slot",
  }),
  serviceId: z
    .string()
    .min(1, "Please choose a service or consultation area"),
  consultationType: z.enum(["in-person", "video"], {
    message: "Please select consultation type",
  }),
  notes: z
    .string()
    .max(500, "Notes cannot exceed 500 characters")
    .optional()
    .or(z.literal("")),
});

export type AppointmentFormValues = z.infer<typeof appointmentSchema>;
