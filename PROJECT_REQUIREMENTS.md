# Project Requirements Document (PRD)
## Manorog Clinic Website

**Project Name:** Manorog Clinic Digital Platform  
**Target Location:** Amritsar, Punjab, India  
**Coordinates / Map Location:** `31.651561, 74.8675816`  
**Version:** 1.0.0  
**Status:** Requirements Phase Approved / Ready for Architecture & Scaffolding  

---

## 1. Executive Summary & Vision

### 1.1 Purpose
Develop a high-performance, accessible, and compassionate healthcare web platform for **Manorog Clinic**, situated in Amritsar, Punjab. The primary objective is to build patient trust, communicate clinical offerings clearly, demystify healthcare visits, ensure patient dignity and confidentiality, and facilitate seamless appointment bookings via WhatsApp and direct web inquiry.

### 1.2 Core Ethos & Brand Position
- **Tone:** Empathetic, dignified, clinical yet approachable, calm, and trustworthy.
- **Visual Identity:** Modern premium healthcare aesthetic (deep medical teal, calming soft mint, warm slate text, pristine light backgrounds) avoiding generic business landing page tropes and sterile/alarming medical imagery.
- **Ethical Safeguard:** No fabricated claims, no exaggerated recovery guarantees, no unverified doctor qualifications, and clearly marked editable configuration modules for all clinical specifics.
- **Mental Health & Specialty Considerations:** The name *Manorog* (मनोरोग / ਮਨੋਰੋਗ) traditionally relates to psychological well-being, neuropsychiatry, and behavioral healthcare. While accommodating this context with destigmatizing, sensitive language and discreet booking flows, the architecture remains fully configurable to support general healthcare, psychiatric consultation, or allied therapeutic services without structural rework.

---

## 2. Technical Stack & Tooling

| Layer | Selected Technology | Rationale / Specification |
|---|---|---|
| **Framework** | Next.js (App Router, Server & Client Components) | Hybrid rendering, optimized routing, Core Web Vitals performance, SEO Metadata API. |
| **Language** | TypeScript (Strict mode enabled) | End-to-end type safety across clinic data, form states, and booking payloads. |
| **Styling** | Tailwind CSS v3/v4 | Design-token based responsive layout, rapid styling, zero runtime CSS overhead. |
| **Component Primitives** | Radix UI / shadcn/ui patterns | Fully accessible (WCAG AA), keyboard-operable primitives (Dialog, Accordion, Popover, Select). |
| **Icons** | Lucide React | Clean, lightweight, consistent line-art medical & interface icons. |
| **Animations** | Framer Motion | Smooth, subtle transitions with `prefers-reduced-motion` compliance. |
| **Form Handling** | React Hook Form + Zod | High-performance uncontrolled form inputs with schema-level runtime validation. |
| **SEO & Schema** | Next.js Metadata API + JSON-LD (`MedicalClinic` / `LocalBusiness`) | Rich snippet indexability for Amritsar local medical searches. |
| **Image Optimization** | `next/image` | Responsive AVIF/WebP image generation, automatic layout shifts prevention. |

---

## 3. Design System & Visual Language

### 3.1 Color Palette
```
┌─────────────────────────────────────────────────────────────┐
│ Medical Teal (Primary):        #0E4D54 / hsl(186, 71%, 19%) │
│ Deep Slate Teal (Dark):        #092F34 / hsl(186, 70%, 12%) │
│ Soft Mint (Secondary/Accent):  #D1E7DD / hsl(152, 33%, 86%) │
│ Sage Accent:                   #4A8B71 / hsl(155, 30%, 42%) │
│ Background Light:              #F8FAFB / hsl(200, 20%, 98%) │
│ Surface White:                 #FFFFFF                      │
│ Text Primary (Slate):          #1E293B / hsl(222, 47%, 11%) │
│ Text Muted:                    #64748B / hsl(215, 16%, 47%) │
│ Alert/Emergency Info:          #D97706 (Amber) / #DC2626    │
└─────────────────────────────────────────────────────────────┘
```

### 3.2 Typography Hierarchy
- **Primary Font:** Inter or Geist Sans (Modern humanist sans-serif with high legibility at all optical sizes).
- **Heading Display:** Manrope or Plus Jakarta Sans (Clean, gentle curves, authoritative yet reassuring).
- **Scale:**
  - H1 (Hero): `text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight`
  - H2 (Section): `text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight`
  - H3 (Card / Subsection): `text-xl sm:text-2xl font-medium`
  - Body: `text-base sm:text-lg text-slate-600 leading-relaxed`
  - Small / Footnotes: `text-xs sm:text-sm text-slate-500`

### 3.3 Visual Tenets
- **No Fear-Based Imagery:** Avoid syringes, alarming red iconography, distressed portraits, or generic stock hospital corridors.
- **Human Connection:** Warm clinic environments, patient-practitioner conversations, natural light, and serene botanical or spatial accents.
- **Tactile Softness:** Micro-radii (`rounded-xl` to `rounded-2xl`), gentle ring focus states (`focus-visible:ring-2 focus-visible:ring-teal-600`), and subtle drop shadows (`shadow-sm`, `shadow-md` on hover).

---

## 4. Information Architecture & Page Specifications

### 4.1 Home Page (`/`)
1. **Header & Navigation:**
   - Clinic identity with emblem/logo and subtitle ("Amritsar, Punjab").
   - Navigation links: Home, About, Services, Contact, Timings.
   - Action item: "Book Appointment" (primary CTA) and emergency/helpline badge.
   - Mobile responsive sheet drawer with full touch accessibility.
2. **Hero Section:**
   - Headline centered on compassionate patient care, peace of mind, and clinical excellence.
   - Dual CTAs: "Book an Appointment" (anchors to booking module) + "Contact Clinic / Directions".
   - Trust highlights (e.g., Confidential consultations, Experienced medical team, Central Amritsar location).
   - Visual element: High-fidelity clinic / healthcare visual composition.
3. **About Clinic Preview:**
   - Care philosophy, patient-first environment, emphasis on privacy and calm recovery.
   - Link to full `/about` journey.
4. **Services Showcase:**
   - Grid of comprehensive service cards (dynamic, driven by `data/services.ts`).
   - Icon, title, concise overview, "Learn more" deep-link to `/services/[slug]`.
5. **Why Choose Manorog Clinic:**
   - Verified value drivers: Patient dignity, unhurried consultations, comfortable modern facility, structured follow-ups.
6. **Doctor / Specialist Profile:**
   - Professional medical portrait, qualifications (MBBS, MD / DNB / Specialty placeholders), experience duration, and clinical ethos.
   - Clearly documented placeholder badge until verified credentials are provided.
7. **Appointment Request Section:**
   - Multi-mode appointment booking module (Mode 1: Direct WhatsApp prefilled message, Mode 2: Structured inquiry form).
   - Validation for name, contact number, preferred date, time slot, and consultation reason.
8. **Patient Testimonials / Community Feedback:**
   - Ethical, authentic styling (marked as verified patient feedback placeholder with strict guidelines against fabricated health claims).
9. **FAQ Accordion:**
   - Expandable questions addressing first-time visitors, consultation fees, confidentiality, appointment scheduling, and parking/accessibility.
10. **Location & Timings Section:**
    - Embedded interactive Google Map (centering `31.651561, 74.8675816`).
    - Turn-by-turn directions link, complete address in Amritsar, operating hours (Morning/Evening shifts).
11. **Footer:**
    - Comprehensive directory, emergency crisis hotline notice, medical disclaimer, copyright, privacy policy link.

### 4.2 About Page (`/about`)
- In-depth clinic story, founder's clinical vision, and patient care philosophy.
- The consultation experience: Step-by-step walkthrough of what happens during a patient's first visit.
- Commitment to patient privacy, ethics, and non-judgmental healthcare.
- Comprehensive doctor & clinical support staff biography.
- Facility overview and hygiene/sanitization standards.

### 4.3 Services Listing (`/services`) & Dynamic Detail (`/services/[slug]`)
- **Category Filterable Grid:** Detailed cards with symptoms addressed, consultation format, and preparation guidelines.
- **Dynamic Slug Route (`/services/[slug]`):**
  - Hero with breadcrumbs (`Home > Services > [Service Name]`).
  - Detailed medical explanation in plain, empathetic English.
  - Who should consider this consultation.
  - What to expect during the session.
  - FAQ specific to the specialty.
  - Dedicated contextual booking CTA.

### 4.4 Contact & Location Page (`/contact`)
- Immediate call card (with single-click dialing for mobile visitors).
- Direct WhatsApp instant messaging button.
- Comprehensive contact form (Zod-validated).
- Interactive Google Maps embed with full address details.
- Weekly timing matrix including Sunday/holiday policy.
- Emergency notice: Clear guidance on what to do in acute medical emergencies.

### 4.5 Privacy Policy & Medical Disclaimer (`/privacy`)
- Explicit healthcare disclaimer: "Website content is for informational purposes and does not replace in-person professional medical diagnosis or emergency care."
- Patient confidentiality & data protection statement.

---

## 5. Appointment Booking & WhatsApp Architecture

### 5.1 Architecture Overview
The appointment module is built on an **abstracted service pattern** to support dual dispatch modes without touching presentation logic:

- **Mode 1: Direct WhatsApp Booking (Default)**
  - Collects and validates patient request.
  - Formats an encoded, polite message.
  - Launches WhatsApp directly via universal URL (`https://wa.me/<number>?text=...`).
- **Mode 2: Future Backend API Integration**
  - Clean client abstraction ready to plug into an API endpoint (e.g. `/api/appointments`).
  - Graceful fallback with loading, success, and error states.

### 5.2 Pre-Filled WhatsApp Template
```text
Hello Manorog Clinic, I would like to request an appointment:

*Patient Name:* [Patient Name]
*Phone Number:* [Phone Number]
*Service / Consultation:* [Selected Service]
*Preferred Date:* [Selected Date]
*Preferred Time Slot:* [Morning / Afternoon / Evening]
*Additional Notes:* [Optional Message]

Please confirm availability. Thank you!
```

---

## 6. Centralized Configuration Architecture

All clinic metadata lives in a single source of truth (`data/clinic.ts` & `lib/config.ts`) including:
- Clinic Identity (Name, Tagline, Coordinates `31.651561, 74.8675816`, Address)
- Contact Info (Phone, WhatsApp, Email, Emergency Helpline)
- Operating Hours (Morning / Evening shifts, Weekend hours)
- Doctor Profile & Credentials (clearly flagged as placeholder until verified)
- Dynamic Services list
- SEO metadata and Social links

---

## 7. SEO, Local Discovery & Performance Specifications

- **Local Discovery:** Target "Clinic in Amritsar", "Medical Consultation in Amritsar", "Manorog Clinic Amritsar".
- **Structured Data:** JSON-LD for `MedicalClinic` and `LocalBusiness` with precise coordinates and schema.
- **Core Web Vitals:** RSC-first architecture, Next.js Image optimization, lightweight bundle size.

---

## 8. Items Pending Stakeholder Confirmation

1. Confirmed clinical specialty (Psychiatry/Neuropsychiatry vs. General Healthcare).
2. Consulting physician's full name, formal qualifications, and registration number.
3. Official consultation timings and shift breakdowns.
4. Active official phone and WhatsApp business numbers.
5. High-resolution clinic photography.

