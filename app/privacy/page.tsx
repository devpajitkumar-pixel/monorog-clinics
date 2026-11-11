import type { Metadata } from "next";
import Link from "next/link";
import { ShieldAlert, ArrowLeft } from "lucide-react";
import { clinicConfig } from "@/data/clinic";

export const metadata: Metadata = {
  title: "Privacy Policy & Medical Disclaimer",
  description:
    "Patient confidentiality, medical disclosures, and privacy principles at Manorog Clinic, Amritsar.",
};

export default function PrivacyPage() {
  return (
    <div className="bg-white min-h-screen py-16 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-800 hover:underline mb-4"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </Link>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Patient Privacy Policy & Medical Disclaimer
          </h1>
          <p className="text-sm text-slate-500 mt-2">
            Last updated: November 2026 • Manorog Clinic, Amritsar, Punjab
          </p>
        </div>

        {/* Highlighted Warning Box */}
        <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200/80 space-y-2">
          <div className="flex items-center gap-2 text-amber-900 font-bold text-sm">
            <ShieldAlert className="w-4 h-4 text-amber-700 shrink-0" />
            <span>Important Medical Disclaimer</span>
          </div>
          <p className="text-xs sm:text-sm text-amber-950 leading-relaxed">
            {clinicConfig.disclaimer}
          </p>
        </div>

        {/* Section 1: Confidentiality */}
        <div className="space-y-4 text-slate-700 text-sm leading-relaxed border-t border-slate-100 pt-6">
          <h2 className="text-xl font-bold text-slate-900">
            1. Strict Clinical Confidentiality
          </h2>
          <p>
            At Manorog Clinic, safeguarding your personal dignity and medical confidentiality is our utmost ethical priority. All information shared during outpatient consultations—whether diagnostic assessments, personal histories, or therapeutic discussions—is handled strictly in accordance with medical ethics codes and privacy statutes in India.
          </p>
          <p>
            We do not disclose patient records or attendance details to third parties, employers, or non-designated family members without explicit written authorization, except where mandated by statutory law or in acute situations posing an imminent risk of harm to life.
          </p>
        </div>

        {/* Section 2: Online Appointments & Data Usage */}
        <div className="space-y-4 text-slate-700 text-sm leading-relaxed border-t border-slate-100 pt-6">
          <h2 className="text-xl font-bold text-slate-900">
            2. Appointment Inquiries & Communications
          </h2>
          <p>
            When you complete an appointment request or send an inquiry via our website or WhatsApp interface:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
            <li>Your name and contact phone number are used exclusively by our clinic reception to check schedule availability and coordinate your appointment.</li>
            <li>We do not sell, license, or market patient contact details to commercial third parties or external advertising networks.</li>
            <li>WhatsApp communications are end-to-end encrypted under WhatsApp&apos;s messaging protocols. Please avoid transmitting sensitive payment card details or unnecessary confidential documents over standard messaging channels.</li>
          </ul>
        </div>

        {/* Section 3: Ethical Boundaries & Treatment Outcomes */}
        <div className="space-y-4 text-slate-700 text-sm leading-relaxed border-t border-slate-100 pt-6">
          <h2 className="text-xl font-bold text-slate-900">
            3. Treatment Realistic Expectations & Ethics
          </h2>
          <p>
            Medical and psychological healthcare outcomes depend on numerous biological, lifestyle, and psychosocial variables. Manorog Clinic does not offer guaranteed cure claims, miraculous timelines, or deceptive promises. Every treatment plan is evidence-informed, transparently explained, and reviewed collaboratively with the patient and caregivers.
          </p>
        </div>

        {/* Section 4: Contact for Privacy Queries */}
        <div className="space-y-3 text-slate-700 text-sm leading-relaxed border-t border-slate-100 pt-6">
          <h2 className="text-xl font-bold text-slate-900">
            4. Inquiries & Data Questions
          </h2>
          <p>
            If you have questions regarding our privacy practices or wish to update your contact details on file, please contact the clinic administrator at:
          </p>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1">
            <p><strong>Manorog Clinic Reception</strong></p>
            <p>{clinicConfig.address.street}, {clinicConfig.address.city}, Punjab</p>
            <p>Email: {clinicConfig.contact.email}</p>
            <p>Telephone: {clinicConfig.contact.phoneFormatted}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
