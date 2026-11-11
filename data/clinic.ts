import { ClinicConfig } from "@/types";

export const clinicConfig: ClinicConfig = {
  name: "Manorog Clinic",
  tagline: "Compassionate, Confidential & Evidence-Based Healthcare in Amritsar",
  description:
    "Manorog Clinic provides comprehensive medical and neuropsychiatric consultations in Amritsar, Punjab. Dedicated to patient dignity, privacy, and individualized healing in a calm, modern clinical environment.",
  establishedYear: "2018",
  address: {
    street: "Near Mall Road / Court Road Area",
    locality: "Civil Lines",
    city: "Amritsar",
    state: "Punjab",
    postalCode: "143001",
    country: "India",
    landmark: "Conveniently accessible from major transit hubs in Amritsar",
  },
  geo: {
    latitude: 31.651561,
    longitude: 74.8675816,
  },
  contact: {
    // Configurable contact numbers
    phone: "+919876543210",
    phoneFormatted: "+91 98765 43210",
    whatsapp: "+919876543210",
    email: "contact@manorogclinic.com",
    emergencyHelpline: "112 / 108 (National Emergency Services)",
  },
  hours: {
    days: "Monday – Saturday",
    morningShift: "10:00 AM – 02:00 PM",
    eveningShift: "04:30 PM – 08:00 PM",
    sunday: "By Prior Appointment Only",
    note: "Emergency walk-ins are advised to call in advance or visit the nearest tertiary hospital.",
  },
  maps: {
    googleMapsUrl: "https://www.google.com/maps/place/Manorog+Clinic/@31.651561,74.8675816,15z/",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13586.376839352924!2d74.85728196656717!3d31.651561000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391964aa569e7355%3A0x8e09f4b553ad8d7f!2sManorog%20Clinic!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin",
  },
  doctor: {
    name: "Dr. [Physician Name Placeholder]",
    title: "Senior Consultant Psychiatrist & Behavioral Physician",
    role: "Chief Medical Director",
    qualifications: ["M.B.B.S.", "M.D. (Psychiatry / Neuropsychiatry)", "D.N.B."],
    specialty: "Psychiatry, Psychosomatic Medicine & Stress Management",
    experienceYears: 14,
    registrationNumber: "PMC/REG/XXXXX [Verified Medical Council Placeholder]",
    bio: [
      "Dedicated to advancing accessible, humane, and destigmatized medical care in Punjab, Dr. [Placeholder] combines rigorous clinical diagnostic acumen with an empathetic, unhurried patient approach.",
      "With over a decade of outpatient and inpatient clinical experience, treatment plans are tailored to individual physiological, cognitive, and psychosocial contexts, upholding the highest standards of confidentiality and medical ethics.",
    ],
    focusAreas: [
      "Clinical Anxiety & Mood Disorders",
      "Stress & Psychosomatic Conditions",
      "Sleep Health & Insomnia Interventions",
      "Addiction Recovery & Lifestyle Support",
      "Geriatric Cognitive Wellness",
    ],
    isPlaceholder: true, // Clearly indicated until official credential documentation is finalized
  },
  features: {
    enableWhatsAppBooking: true,
    enableBackendApiBooking: false, // Ready for backend integration
    showEmergencyNotice: true,
  },
  disclaimer:
    "The information on this website is intended for general educational and informational purposes only. It does not constitute medical advice or establish a formal doctor-patient relationship. In cases of acute psychiatric crises or medical emergencies, please visit the nearest hospital emergency room or contact emergency services immediately.",
};
