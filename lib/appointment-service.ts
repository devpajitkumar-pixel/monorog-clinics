import { AppointmentFormValues } from "./validations/appointment";
import { servicesData } from "@/data/services";
import { clinicConfig } from "@/data/clinic";

export function formatTimeSlot(slot: string): string {
  switch (slot) {
    case "morning":
      return "Morning (10:00 AM – 02:00 PM)";
    case "afternoon":
      return "Afternoon (02:00 PM – 04:30 PM)";
    case "evening":
      return "Evening (05:00 PM – 07:30 PM)";
    default:
      return slot;
  }
}

export function getServiceTitle(serviceId: string): string {
  if (serviceId === "general") return "General Consultation";
  const found = servicesData.find((s) => s.id === serviceId);
  return found ? found.title : serviceId;
}

export function generateWhatsAppAppointmentUrl(
  data: AppointmentFormValues,
  whatsappNumber: string = clinicConfig.contact.whatsapp
): string {
  const serviceName = getServiceTitle(data.serviceId);
  const formattedSlot = formatTimeSlot(data.preferredTimeSlot);
  const consultType = data.consultationType === "video" ? "Online Video Consultation" : "In-Person Clinic Visit";

  const message = [
    `*Appointment Request - Manorog Clinic, Amritsar*`,
    `----------------------------------------`,
    `*Patient Name:* ${data.patientName}`,
    `*Contact Number:* ${data.phone}`,
    data.email ? `*Email:* ${data.email}` : null,
    `*Consultation:* ${serviceName}`,
    `*Visit Type:* ${consultType}`,
    `*Preferred Date:* ${data.preferredDate}`,
    `*Preferred Slot:* ${formattedSlot}`,
    data.notes ? `*Reason / Notes:* ${data.notes}` : null,
    `----------------------------------------`,
    `_Hello, please check slot availability and confirm my appointment request. Thank you._`,
  ]
    .filter(Boolean)
    .join("\n");

  // Clean phone number: remove non-digits
  const cleanNumber = whatsappNumber.replace(/[^\d]/g, "");

  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
}

export interface AppointmentSubmissionResult {
  success: boolean;
  mode: "whatsapp" | "api";
  whatsappUrl?: string;
  bookingRef?: string;
  message: string;
}

export async function processAppointmentRequest(
  data: AppointmentFormValues
): Promise<AppointmentSubmissionResult> {
  // If backend API mode is toggled on in features
  if (clinicConfig.features.enableBackendApiBooking) {
    try {
      const response = await fetch("/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Server booking request failed");
      }

      const result = await response.json();
      return {
        success: true,
        mode: "api",
        bookingRef: result.id || `M-APP-${Date.now().toString().slice(-6)}`,
        message: "Your appointment request has been logged successfully.",
      };
    } catch {
      // Graceful fallback to WhatsApp if API fails
      const waUrl = generateWhatsAppAppointmentUrl(data);
      return {
        success: true,
        mode: "whatsapp",
        whatsappUrl: waUrl,
        message: "Redirecting to clinic WhatsApp reception...",
      };
    }
  }

  // Default Mode 1: WhatsApp
  const waUrl = generateWhatsAppAppointmentUrl(data);
  return {
    success: true,
    mode: "whatsapp",
    whatsappUrl: waUrl,
    message: "Appointment request generated. Connecting to WhatsApp...",
  };
}

