# Manorog Clinic Website — Amritsar, Punjab

A modern, responsive, accessible, and compassionate healthcare web platform built for **Manorog Clinic**, located in Amritsar, Punjab, India.

- **Google Maps Reference:** [Manorog Clinic (31.651561, 74.8675816)](https://www.google.com/maps/place/Manorog+Clinic/@31.651561,74.8675816,15z/)
- **Target Location:** Amritsar, Punjab, India

---

## 1. Technologies & Architecture

- **Framework:** Next.js (App Router, Server/Client Hybrid Components)
- **Language:** TypeScript (Strict Mode)
- **Styling:** Tailwind CSS (Custom healthcare palette: medical teal `#0E4D54`, deep slate, soft mint `#D1E7DD`)
- **Icons:** Lucide React
- **Forms & Validation:** React Hook Form + Zod (`lib/validations/appointment.ts`)
- **SEO & Structured Data:** Next.js Metadata API + `MedicalClinic` JSON-LD Schema
- **Interactive Integrations:** Dual-Mode Appointment Booking Engine & WhatsApp Deep-link Integration

---

## 2. Key Pages & Routes

- `/` — **Home Page:** Hero with trust indicators, core care pillars, clinic preview, services grid, doctor leadership profile with ethical disclaimer, dual-mode appointment request module, accessible FAQ accordion, and interactive Amritsar Google Map.
- `/about` — **About Page:** Clinic mission, dignified care philosophy, what to expect during the first visit, physician profile, and hygiene/consultation standards.
- `/services` — **Services Catalog:** Complete listing of medical and neuropsychiatric consultations with symptom breakdowns and session timings.
- `/services/[slug]` — **Dynamic Service Detail Pages:** Pre-rendered dynamic routes (`stress-and-anxiety-management`, `mood-and-depression-care`, `sleep-and-insomnia-evaluation`, `deaddiction-and-lifestyle-support`, `cognitive-and-memory-care`, `psychosomatic-and-general-consultation`) with symptom checklists, clinical timelines, and direct booking actions.
- `/contact` — **Contact & Location:** Quick dial phone trigger, WhatsApp contact desk, Google Maps turn-by-turn route link, message inquiry form, and weekly shift timings.
- `/privacy` — **Privacy Policy & Disclaimer:** Patient confidentiality standards, WhatsApp communication disclosures, and explicit healthcare emergency disclaimer.
- `/sitemap.xml` & `/robots.txt` — Automated search engine indexation endpoints.

---

## 3. Centralized Configuration

All clinic information is centralized in [`data/clinic.ts`](file:///Users/macbook/Desktop/projects/monorog-clinic/data/clinic.ts). To update clinic information:

1. **Clinic Contacts:** Update `contact.phone`, `contact.whatsapp`, and `contact.email`.
2. **Consultation Hours:** Update `hours.morningShift` and `hours.eveningShift`.
3. **Doctor Profile:** Update `doctor.name`, `doctor.qualifications`, and set `doctor.isPlaceholder: false` once credentials are verified.
4. **Coordinates & Map:** Update `geo.latitude`, `geo.longitude`, and `maps.embedUrl` if required.

---

## 4. Appointment Booking Architecture

The booking system operates under an abstracted service (`lib/appointment-service.ts`):

- **Mode 1: WhatsApp Direct Booking (Default active mode)**
  - Validates patient inputs through Zod (name, phone, preferred date, shift slot, and consultation area).
  - Formats an encoded, polite message.
  - Redirects patient to WhatsApp with a pre-filled request.
  - Includes patient advisory stating that appointment requests are subject to confirmation.
- **Mode 2: Future Backend API**
  - Toggleable via `clinicConfig.features.enableBackendApiBooking = true`.
  - Sends a `POST` request to `/api/appointments` with automated fallback to WhatsApp if the API is unreachable.

---

## 5. Development & Deployment

### Local Development
```bash
# Install dependencies
npm install

# Start local development server
npm run dev
# Open http://localhost:3000
```

### Production Build
```bash
# Verify TypeScript, routes, and generate optimized production bundle
npm run build

# Start production server
npm start
```

### Linting
```bash
npm run lint
```

---

## 6. Checklist of Items Requiring Stakeholder Confirmation

Before launching to public production, the clinic administration should update the following fields in `data/clinic.ts`:

- [ ] **Verified Clinical Specialties:** Confirm the exact outpatient focus (Psychiatry/Neuropsychiatry, General Medicine, De-Addiction, or Integrative Medicine).
- [ ] **Consulting Physician Credentials:** Replace placeholder doctor name, official degrees (e.g. MBBS, MD, DNB), and State Medical Council registration number.
- [ ] **Active WhatsApp Number:** Replace `+919876543210` with the clinic's dedicated reception phone and WhatsApp Business number.
- [ ] **Exact Consultation Shifts:** Verify morning and evening outpatient consultation hours.
- [ ] **Exterior / Interior Photography:** Replace vector and placeholder emblems with verified photographs of the clinic premises in Amritsar.
