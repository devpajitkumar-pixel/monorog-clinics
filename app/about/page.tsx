import type { Metadata } from "next";
import Link from "next/link";
import {
  CalendarCheck,
  Building,
  Award,
  Pill,
  ShieldCheck,
  Phone,
} from "lucide-react";
import { clinicConfig } from "@/data/clinic";
import { DoctorProfileSection } from "@/components/sections/DoctorProfileSection";

export const metadata: Metadata = {
  title: "About Dr. Ravinder Mohan Sharma & Manorog Clinic Amritsar",
  description:
    "Learn about Manorog Clinic on Majitha Road, Amritsar, led by Dr. Ravinder Mohan Sharma (Member, Indian Psychiatric Society). Compassionate, accessible psychiatric and mental healthcare.",
};

export default function AboutPage() {
  const principles = [
    {
      title: "Compassionate, Non-Judgmental Listening",
      desc: "Every patient has an individual story. We cultivate a safe space where emotional struggles, lifestyle stress, and medical concerns are received with dignity.",
    },
    {
      title: "Scientific & Ethical Diagnostic Rigor",
      desc: "Diagnostics follow established psychiatric guidelines and careful symptom review by Dr. Ravinder Mohan Sharma, avoiding guesswork and over-prescription.",
    },
    {
      title: "Uncompromising Patient Privacy",
      desc: "We recognize the sensitivity associated with psychological and mental health care. Strict medical confidentiality is maintained at every step.",
    },
    {
      title: "Affordable, Accessible Clinical Access",
      desc: "Dedicated to serving the Amritsar community and surrounding rural districts with low-cost consultations and direct on-premises medicine access.",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-teal-50/60 to-white py-14 sm:py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100/70 border border-teal-200 text-teal-800 text-xs font-semibold mb-4">
              <Building className="w-3.5 h-3.5 text-teal-700" />
              <span>Manorog Clinic • Majitha Road, Amritsar</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              A Dedicated Psychiatric & Mental Healthcare Practice in Amritsar
            </h1>
            <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
              Led by <strong>Dr. Ravinder Mohan Sharma</strong>, Manorog Clinic provides accessible, dignified, and evidence-informed care for patients navigating mood disorders, anxiety, stress, and psychiatric conditions across Punjab.
            </p>

            <div className="flex flex-wrap gap-3 pt-6 text-xs text-slate-700 font-medium">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 shadow-2xs">
                <Award className="w-4 h-4 text-teal-700" />
                <span>Indian Psychiatric Society Directory Member</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 shadow-2xs">
                <Pill className="w-4 h-4 text-teal-700" />
                <span>Attached On-Premises Pharmacy</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 shadow-2xs">
                <ShieldCheck className="w-4 h-4 text-teal-700" />
                <span>4.0 ★ (123+ Google Reviews)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Story */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-semibold text-teal-800 uppercase tracking-wider">
                Clinic Foundation & Purpose
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Demystifying Mental Healthcare for Amritsar & Beyond
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Seeking help for mental health challenges requires courage. The name <em>Manorog</em> speaks directly to emotional and cognitive well-being. For decades, our clinic on Majitha Road has served as an accessible point of care for individuals seeking guidance without stigma or pretension.
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Whether struggling with persistent sadness, panic attacks, debilitating insomnia, or unexplained stress symptoms, patients receive grounded clinical evaluations and clear medication guidance paired with the convenience of an in-house dispensary.
              </p>

              <div className="pt-2 flex flex-wrap gap-3">
                <Link
                  href="/#appointment-section"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-teal-800 hover:bg-teal-900 text-white font-semibold text-sm transition-colors shadow-sm"
                >
                  <CalendarCheck className="w-4 h-4 text-teal-200" />
                  <span>Request an Appointment</span>
                </Link>
                <a
                  href={`tel:${clinicConfig.contact.landline}`}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-sm transition-colors"
                >
                  <Phone className="w-4 h-4 text-teal-700" />
                  <span>Call {clinicConfig.contact.landlineFormatted}</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {principles.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2 hover:border-teal-300 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-lg bg-teal-100 text-teal-800 flex items-center justify-center font-bold text-sm">
                      {idx + 1}
                    </div>
                    <h3 className="text-sm font-bold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Doctor Profile Section */}
      <DoctorProfileSection />

      {/* First Visit Walkthrough */}
      <section className="py-16 sm:py-20 bg-slate-50 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold text-teal-800 uppercase tracking-wider">
              Visiting Guidelines
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2">
              Preparing for Your Visit to Manorog Clinic
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              A few practical steps to ensure a smooth, prompt consultation at our Majitha Road clinic.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-800 flex items-center justify-center font-bold">
                1
              </div>
              <h3 className="text-base font-bold text-slate-900">
                1. Reconfirm Shift & Arrive
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Consultations take place during morning (10 AM–2 PM) and evening (5 PM–7:30 PM) shifts. A quick prior call to 0183-2423856 confirms doctor availability and current patient queue.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-800 flex items-center justify-center font-bold">
                2
              </div>
              <h3 className="text-base font-bold text-slate-900">
                2. Clinical Consultation
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Dr. Ravinder Mohan Sharma reviews symptom history, past medical prescriptions, and family context in private consultation, formulating a clear treatment strategy.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-800 flex items-center justify-center font-bold">
                3
              </div>
              <h3 className="text-base font-bold text-slate-900">
                3. On-Site Medicine Dispensing
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Prescribed medications can be obtained directly from the on-premises dispensary counter with clear instructions on timing, dosages, and follow-up schedules.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer Card */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="p-8 sm:p-12 rounded-3xl bg-teal-900 text-white space-y-5 shadow-xl">
            <h2 className="text-2xl sm:text-3xl font-bold">
              Need to Consult Dr. Ravinder Mohan Sharma?
            </h2>
            <p className="text-sm sm:text-base text-teal-100 max-w-xl mx-auto">
              Our clinic on Majitha Road, Amritsar is ready to assist you and your family with compassionate, confidential care.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3 pt-2">
              <Link
                href="/#appointment-section"
                className="px-6 py-3 rounded-xl bg-white text-teal-900 font-bold text-sm hover:bg-teal-50 transition-colors shadow-md"
              >
                Request an Appointment
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 rounded-xl bg-teal-800 text-white font-semibold text-sm hover:bg-teal-700 transition-colors border border-teal-700"
              >
                View Directions & Timings
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
