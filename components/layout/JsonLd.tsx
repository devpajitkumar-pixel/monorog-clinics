import { clinicConfig } from "@/data/clinic";

export function MedicalClinicJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: clinicConfig.name,
    description: clinicConfig.description,
    url: "https://manorogclinic.com",
    telephone: clinicConfig.contact.phone,
    medicalSpecialty: [
      "Psychiatric",
      "CommunityHealth",
      "PublicHealth",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: clinicConfig.address.street,
      addressLocality: clinicConfig.address.locality,
      addressRegion: clinicConfig.address.state,
      postalCode: clinicConfig.address.postalCode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: clinicConfig.geo.latitude,
      longitude: clinicConfig.geo.longitude,
    },
    hasMap: clinicConfig.maps.googleMapsUrl,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "10:00",
        closes: "14:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "16:30",
        closes: "20:00",
      },
    ],
    isAccessibleForFree: false,
    availableService: [
      {
        "@type": "MedicalTherapy",
        name: "Stress & Anxiety Management Consultation",
      },
      {
        "@type": "MedicalTherapy",
        name: "Depression and Mood Disorder Evaluation",
      },
      {
        "@type": "MedicalTherapy",
        name: "Sleep and Insomnia Consultation",
      },
      {
        "@type": "MedicalTherapy",
        name: "Addiction Recovery Support",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
