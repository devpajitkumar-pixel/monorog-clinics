import {
  CalendarCheck,
  PhoneCall,
  ShieldCheck,
  Clock,
  MapPin,
  Star,
  Pill,
  Award,
} from "lucide-react";
import { clinicConfig } from "@/data/clinic";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-teal-50/50 via-white to-slate-50 pt-10 pb-20 sm:pt-14 sm:pb-24">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0e4d5408_1px,transparent_1px),linear-gradient(to_bottom,#0e4d5408_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text / Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Location & Trust Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-100/80 border border-teal-200 text-teal-900 text-xs font-semibold shadow-xs">
                <MapPin className="w-3.5 h-3.5 text-teal-700" />
                <span>Majitha Road, Amritsar</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-semibold shadow-xs">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
                <span>4.0 / 5 (123 Google Reviews)</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
              Compassionate, Accessible{" "}
              <span className="text-teal-800 underline decoration-teal-300 decoration-wavy decoration-2 underline-offset-8">
                Psychiatric & Mental Healthcare
              </span>{" "}
              in Amritsar.
            </h1>

            {/* Doctor & Clinic Credentials Description */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              Led by <strong>Dr. Ravinder Mohan Sharma</strong> (Member, Indian Psychiatric Society & IMA Amritsar), Manorog Clinic provides clinical psychiatric consultations for depression, anxiety, sleep disorders, and emotional distress, supported by an attached on-premises pharmacy.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <a
                href="#appointment-section"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full text-sm font-semibold text-white bg-teal-800 hover:bg-teal-900 shadow-md hover:shadow-lg transition-all active:scale-98"
              >
                <CalendarCheck className="w-4 h-4 text-teal-200" />
                <span>Request Appointment</span>
              </a>

              <a
                href={`tel:${clinicConfig.contact.landline}`}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full text-sm font-semibold text-slate-800 bg-white hover:bg-slate-100 border border-slate-200 shadow-xs transition-all active:scale-98"
              >
                <PhoneCall className="w-4 h-4 text-teal-700" />
                <span>Call: {clinicConfig.contact.landlineFormatted}</span>
              </a>
            </div>

            {/* Trust Highlights Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-slate-200/60 text-xs text-slate-600 font-medium">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-teal-700 shrink-0" />
                <span>Indian Psychiatric Society Member</span>
              </div>
              <div className="flex items-center gap-2">
                <Pill className="w-4 h-4 text-teal-700 shrink-0" />
                <span>On-Premises Pharmacy Dispensary</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-teal-700 shrink-0" />
                <span>Confidential Outpatient Care</span>
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
                      <p className="text-xs text-slate-500">Dr. Ravinder Mohan Sharma</p>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-100">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    Open Today
                  </span>
                </div>

                {/* Key Quick Facts */}
                <div className="space-y-3.5 text-xs text-slate-600">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-800">Majitha Road, Amritsar:</strong>
                      <p className="text-slate-500 mt-0.5">
                        Bhandari Niwas, Opp. Canara Bank & Sharma Sanitary Store, Bhawani Nagar.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                    <Clock className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-800">Consultation Shifts:</strong>
                      <p className="text-slate-500 mt-0.5">
                        Morning: {clinicConfig.hours.morningShift} | Evening: {clinicConfig.hours.eveningShift}
                      </p>
                      <p className="text-[11px] text-slate-400 mt-0.5">
                        Sunday: 11:00 AM – 02:00 PM (reconfirm by phone)
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-3">
                    <Pill className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-800">Direct Medicine Access:</strong>
                      <p className="text-slate-500 mt-0.5">
                        In-house dispensary providing prescribed psychiatric and general medications on-site.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Rating Card Preview */}
                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-500">Google Reputation:</span>
                  <a
                    href={clinicConfig.maps.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-teal-800 hover:underline inline-flex items-center gap-1"
                  >
                    <span>4.0 ★ (123 Reviews)</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
