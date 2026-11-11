import Link from "next/link";
import {
  CalendarCheck,
  PhoneCall,
  ShieldCheck,
  Clock,
  MapPin,
  HeartHandshake,
  CheckCircle,
} from "lucide-react";
import { clinicConfig } from "@/data/clinic";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-teal-50/50 via-white to-slate-50 pt-12 pb-20 sm:pt-16 sm:pb-28">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0e4d5408_1px,transparent_1px),linear-gradient(to_bottom,#0e4d5408_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text / Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Location & Trust Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-100/70 border border-teal-200/80 text-teal-900 text-xs font-semibold shadow-xs">
              <MapPin className="w-3.5 h-3.5 text-teal-700" />
              <span>Medical & Wellbeing Clinic • Amritsar, Punjab</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
              Care Centered on Your{" "}
              <span className="text-teal-800 underline decoration-teal-300 decoration-wavy decoration-2 underline-offset-8">
                Health, Dignity
              </span>{" "}
              & Peace of Mind.
            </h1>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              Manorog Clinic provides personalized medical and psychiatric consultations in a private, unhurried, and reassuring atmosphere. Our clinical approach integrates medical evidence with deep human empathy to support your journey toward health.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <a
                href="#appointment-section"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full text-sm font-semibold text-white bg-teal-800 hover:bg-teal-900 shadow-md hover:shadow-lg transition-all active:scale-98"
              >
                <CalendarCheck className="w-4 h-4 text-teal-200" />
                <span>Book an Appointment</span>
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full text-sm font-semibold text-slate-800 bg-white hover:bg-slate-100 border border-slate-200 shadow-xs transition-all active:scale-98"
              >
                <PhoneCall className="w-4 h-4 text-teal-700" />
                <span>Contact & Timings</span>
              </Link>
            </div>

            {/* Trust Highlights Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-slate-200/60 text-xs text-slate-600 font-medium">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-teal-700 shrink-0" />
                <span>100% Confidential Consultations</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-teal-700 shrink-0" />
                <span>Unhurried In-Depth Assessment</span>
              </div>
              <div className="flex items-center gap-2">
                <HeartHandshake className="w-4 h-4 text-teal-700 shrink-0" />
                <span>Empathetic, Dignified Care</span>
              </div>
            </div>
          </div>

          {/* Right Visual / Clinic Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative Glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-teal-200 to-mint-200 rounded-3xl blur-xl opacity-50 -z-10" />

              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-100 space-y-6">
                {/* Clinic Header Preview */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-teal-900 text-teal-100 flex items-center justify-center font-bold text-xl shadow-inner">
                      M
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900">
                        {clinicConfig.name}
                      </h3>
                      <p className="text-xs text-slate-500">Amritsar Healthcare Centre</p>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-100">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    Appointments Open
                  </span>
                </div>

                {/* Key Quick Facts */}
                <div className="space-y-3.5 text-xs text-slate-600">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-800">Prime Amritsar Location:</strong>
                      <p className="text-slate-500 mt-0.5">
                        Centrally situated near Court Road & Civil Lines with accessible transit.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                    <Clock className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-800">Daily Consultation Shifts:</strong>
                      <p className="text-slate-500 mt-0.5">
                        Morning: {clinicConfig.hours.morningShift} | Evening: {clinicConfig.hours.eveningShift}
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-800">Direct Patient Care:</strong>
                      <p className="text-slate-500 mt-0.5">
                        Dedicated clinical time focused on root causes, cognitive wellness, and sustained recovery.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Doctor Note Preview */}
                <div className="pt-2 border-t border-slate-100">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-500">Medical Direction:</span>
                    <span className="font-semibold text-slate-800">Consultant Physician</span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1 italic">
                    Specializing in psychosomatic medicine, stress management, and emotional wellbeing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
