import { clinicConfig } from "@/data/clinic";

export function MedicalClinicJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["MedicalClinic", "Pharmacy"],
    name: clinicConfig.name,
    description: clinicConfig.description,
    url: "https://monorogclinics.theajitkumar.online",
    telephone: clinicConfig.contact.landline,
    medicalSpecialty: [
      "Psychiatric",
      "CommunityHealth",
      "PrimaryCare",
    ],
    physician: {
      "@type": "Physician",
      name: clinicConfig.doctor.name,
      jobTitle: clinicConfig.doctor.title,
      memberOf: [
        {
          "@type": "MedicalOrganization",
          name: "Indian Psychiatric Society",
        },
        {
          "@type": "MedicalOrganization",
          name: "Indian Medical Association Amritsar",
        },
      ],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: clinicConfig.ratings.score.toString(),
      bestRating: "5",
      reviewCount: clinicConfig.ratings.reviewCount.toString(),
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: `${clinicConfig.address.building}, ${clinicConfig.address.street}`,
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
        opens: "17:00",
        closes: "19:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Sunday"],
        opens: "11:00",
        closes: "14:00",
      },
    ],
    isAccessibleForFree: false,
    availableService: [
      {
        "@type": "MedicalTherapy",
        name: "Clinical Psychiatric Consultation & Checkup",
      },
      {
        "@type": "MedicalTherapy",
        name: "Depression and Mood Disorder Evaluation",
      },
      {
        "@type": "MedicalTherapy",
        name: "Anxiety and Panic Management",
      },
      {
        "@type": "MedicalTherapy",
        name: "Sleep and Insomnia Consultation",
      },
      {
        "@type": "MedicalBusiness",
        name: "On-Premises Pharmacy & Medicine Dispensary",
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
