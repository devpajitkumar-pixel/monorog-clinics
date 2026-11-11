export interface ClinicAddress {
  street: string;
  locality: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  landmark?: string;
}

export interface ClinicGeo {
  latitude: number;
  longitude: number;
}

export interface ClinicContact {
  phone: string;
  phoneFormatted: string;
  whatsapp: string;
  email: string;
  emergencyHelpline?: string;
}

export interface ClinicHours {
  days: string;
  morningShift: string;
  eveningShift: string;
  sunday: string;
  note?: string;
}

export interface DoctorProfile {
  name: string;
  title: string;
  role: string;
  qualifications: string[];
  specialty: string;
  experienceYears: number;
  registrationNumber?: string;
  bio: string[];
  focusAreas: string[];
  isPlaceholder: boolean;
}

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  category: "mental-health" | "general-care" | "wellness";
  symptomsAddressed: string[];
  whatToExpect: string[];
  whoShouldConsult: string[];
  consultationFormat: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}

export interface ClinicConfig {
  name: string;
  tagline: string;
  description: string;
  establishedYear: string;
  address: ClinicAddress;
  geo: ClinicGeo;
  contact: ClinicContact;
  hours: ClinicHours;
  maps: {
    googleMapsUrl: string;
    embedUrl: string;
  };
  doctor: DoctorProfile;
  features: {
    enableWhatsAppBooking: boolean;
    enableBackendApiBooking: boolean;
    showEmergencyNotice: boolean;
  };
  disclaimer: string;
}

export interface AppointmentFormData {
  patientName: string;
  phone: string;
  email?: string;
  preferredDate: string;
  preferredTimeSlot: "morning" | "afternoon" | "evening";
  serviceId: string;
  consultationType: "in-person" | "video";
  notes?: string;
}
