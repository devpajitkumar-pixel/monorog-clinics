import type { Metadata } from "next";
import Link from "next/link";
import {
  CalendarCheck,
  Building,
} from "lucide-react";
import { DoctorProfileSection } from "@/components/sections/DoctorProfileSection";

export const metadata: Metadata = {
  title: "About Our Clinic & Philosophy",
  description:
    "Learn about Manorog Clinic in Amritsar, Punjab: our patient-first ethos, evidence-based medical consultation, and commitment to privacy and compassionate healing.",
};

export default function AboutPage() {
  const principles = [
    {
      title: "Compassionate, Non-Judgmental Listening",
      desc: "Every patient has an individual story. We cultivate a safe space where emotional struggles, lifestyle stress, and medical concerns are received with dignity.",
    },
    {
      title: "Scientific & Ethical Diagnostic Rigor",
      desc: "We avoid speculative labeling or hasty prescribing. Diagnostics are anchored in established medical guidelines and comprehensive physical-mental screenings.",
    },
    {
      title: "Uncompromising Patient Privacy",
      desc: "We recognize the sensitivity associated with psychological and personal medical care. Strict clinical confidentiality is maintained at every interaction.",
    },
    {
      title: "Empowering Long-Term Independence",
      desc: "Our therapeutic goal is not perpetual reliance on medication, but restoring autonomy, functional resilience, and peaceful daily life.",
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-teal-50/60 to-white py-16 sm:py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100/70 border border-teal-200 text-teal-800 text-xs font-semibold mb-4">
              <Building className="w-3.5 h-3.5 text-teal-700" />
              <span>About Manorog Clinic • Amritsar, Punjab</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              A Haven for Patient-Centered Healthcare & Emotional Wellbeing
            </h1>
            <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
              Founded on the belief that healthcare must unite scientific excellence with deep human kindness, Manorog Clinic provides comprehensive consultations for individuals and families in Amritsar.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Story */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-semibold text-teal-800 uppercase tracking-wider">
                Our Mission & Care Standard
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Demystifying Healthcare with Dignity & Clarity
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Navigating medical and mental health concerns can feel overwhelming for patients and families. The word *Manorog* has traditionally addressed the complexities of mind and health; our clinic approaches this duty with modern understanding, empathy, and evidence.
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                We believe that healing thrives in an environment of calm, clear communication, and mutual respect. From your first reception greeting to long-term follow-ups, your dignity remains at the center of every decision.
              </p>

              <div className="pt-2">
                <Link
                  href="/#appointment-section"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-teal-800 hover:bg-teal-900 text-white font-semibold text-sm transition-colors shadow-sm"
                >
                  <CalendarCheck className="w-4 h-4 text-teal-200" />
                  <span>Request a Consultation</span>
                </Link>
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

      {/* First Visit Walkthrough */}
      <section className="py-16 sm:py-20 bg-slate-50 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold text-teal-800 uppercase tracking-wider">
              Patient Guidance
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2">
              What to Expect During Your First Visit
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              We make the consultation experience unhurried, reassuring, and completely transparent.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-800 flex items-center justify-center font-bold">
                1
              </div>
              <h3 className="text-base font-bold text-slate-900">
                1. Arrival & Confidential Intake
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                You will be welcomed into a quiet, comfortable waiting area. Basic registration is handled discreetly without public disclosure of your consultation reasons.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-800 flex items-center justify-center font-bold">
                2
              </div>
              <h3 className="text-base font-bold text-slate-900">
                2. Unhurried Clinical Conversation
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                During your 45–60 minute session, the consulting physician reviews your medical history, current symptoms, life stressors, and concerns at a pace comfortable for you.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-800 flex items-center justify-center font-bold">
                3
              </div>
              <h3 className="text-base font-bold text-slate-900">
                3. Collaborative Healing Plan
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We clearly explain diagnostic considerations in plain language and collaborate on a personalized plan that may include lifestyle modifications, counseling, or medical therapy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Doctor Profile Section */}
      <DoctorProfileSection />

      {/* CTA Footer Card */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="p-8 sm:p-12 rounded-3xl bg-teal-900 text-white space-y-5 shadow-xl">
            <h2 className="text-2xl sm:text-3xl font-bold">
              Ready to Take the Next Step Toward Health?
            </h2>
            <p className="text-sm sm:text-base text-teal-100 max-w-xl mx-auto">
              Our clinical reception in Amritsar is here to assist with scheduling, directions, and answering any preliminary questions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3 pt-2">
              <Link
                href="/#appointment-section"
                className="px-6 py-3 rounded-xl bg-white text-teal-900 font-bold text-sm hover:bg-teal-50 transition-colors shadow-md"
              >
                Schedule an Appointment
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 rounded-xl bg-teal-800 text-white font-semibold text-sm hover:bg-teal-700 transition-colors border border-teal-700"
              >
                View Clinic Location & Timings
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
