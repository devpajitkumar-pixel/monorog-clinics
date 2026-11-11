import { ClinicConfig } from "@/types";

export const clinicConfig: ClinicConfig = {
  name: "Manorog Clinic",
  tagline: "Accessible & Compassionate Psychiatric and Mental Healthcare in Amritsar",
  description:
    "Manorog Clinic, led by Dr. Ravinder Mohan Sharma (Member, Indian Psychiatric Society), is a trusted psychiatric and medical clinic on Majitha Road, Amritsar. Dedicated to evidence-based mental healthcare, mood and anxiety treatment, and convenient attached pharmacy services.",
  establishedYear: "2005",
  address: {
    building: "Bhandari Niwas",
    street: "Majitha Road, Bhawani Nagar / Guru Gobind Singh Nagar",
    locality: "Majitha Road",
    city: "Amritsar",
    state: "Punjab",
    postalCode: "143001",
    country: "India",
    landmark: "Opposite Canara Bank & Opposite Sharma Sanitary Store",
  },
  geo: {
    latitude: 31.651561,
    longitude: 74.886636,
  },
  contact: {
    landline: "01832423856",
    landlineFormatted: "0183-2423856",
    phone: "+919316526212",
    phoneFormatted: "+91 93165 26212",
    whatsapp: "+919316526212",
    email: "drrmsharma@rediffmail.com",
    emergencyHelpline: "112 / 108 (National Emergency Services)",
  },
  hours: {
    days: "Monday – Saturday",
    morningShift: "10:00 AM – 02:00 PM",
    eveningShift: "05:00 PM – 07:30 PM",
    sunday: "11:00 AM – 02:00 PM (Prior telephone confirmation recommended)",
    note: "Consultation timings may vary depending on patient volume. Patients traveling from rural Amritsar or neighboring districts are advised to confirm doctor availability by calling 0183-2423856 before arrival.",
  },
  ratings: {
    score: 4.0,
    maxScore: 5.0,
    reviewCount: 123,
    source: "Google Maps Business Listing",
    highlights: [
      "Affordable consultation and medicines",
      "Experienced psychiatric care",
      "Convenient Majitha Road location",
      "On-premises pharmacy support",
    ],
  },
  facilities: [
    "Specialized Psychiatric Consultations",
    "On-Premises Pharmacy & Medicine Dispensary",
    "Prescription Review & Medication Monitoring",
    "Confidential Consultation Space",
    "Convenient Ground-Floor Patient Access",
  ],
  maps: {
    googleMapsUrl:
      "https://www.google.com/maps/place/Manorog+Clinic/@31.651561,74.886636,15z/",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=31.651561,74.886636",
    embedUrl:
      "https://maps.google.com/maps?q=31.651561,74.886636&hl=en&z=15&output=embed",
  },
  doctor: {
    name: "Dr. Ravinder Mohan Sharma",
    title: "Consultant Psychiatrist & Physician",
    role: "Chief Medical Officer",
    qualifications: ["M.B.B.S.", "Specialist in Psychiatry & Behavioral Medicine"],
    associations: [
      "Indian Psychiatric Society (IPS) Directory Member",
      "Indian Medical Association (IMA) Amritsar Branch",
    ],
    specialty: "Psychiatry, Clinical Psychopharmacology & Psychosomatic Disorders",
    experienceYears: 20,
    registrationNumber: "Registered with Punjab Medical Council / IMA Amritsar",
    bio: [
      "Dr. Ravinder Mohan Sharma is an established medical practitioner associated with Manorog Clinic on Majitha Road, Amritsar. He holds membership in the Indian Psychiatric Society (IPS) and the Indian Medical Association (IMA) Amritsar.",
      "Serving the people of Amritsar and surrounding districts across Punjab, Dr. Sharma brings decades of practical clinical experience in diagnosing and treating psychiatric conditions, mood disorders, anxiety, and stress-related physical complaints.",
      "His outpatient practice emphasizes accessible, low-cost clinical care, disciplined medication management, and ongoing treatment follow-ups to support patients on their path to recovery.",
    ],
    focusAreas: [
      "Clinical Psychiatric Assessment & Diagnosis",
      "Depression, Low Mood & Bipolar Disorders",
      "Anxiety, Panic Attacks & Phobic States",
      "Chronic Stress & Psychosomatic Ailments",
      "Sleep Disorders, Insomnia & Restlessness",
      "Rational Medication Management & Follow-Up",
    ],
    isPlaceholder: false,
  },
  features: {
    enableWhatsAppBooking: true,
    enableBackendApiBooking: true,
    showEmergencyNotice: true,
  },
  disclaimer:
    "The information on this website is intended for educational and appointment coordination purposes only. It does not replace emergency clinical intervention. In situations involving acute psychiatric crisis or immediate physical danger, please contact national emergency services (112 / 108) or visit the emergency casualty ward of the nearest hospital.",
};
