import type { Metadata } from "next";
import Link from "next/link";
import {
  HeartPulse,
  Sun,
  Moon,
  HeartHandshake,
  BrainCircuit,
  Activity,
  ArrowRight,
  Clock,
  CheckCircle2,
  CalendarCheck,
} from "lucide-react";
import { servicesData } from "@/data/services";

export const metadata: Metadata = {
  title: "Clinical Services & Specializations",
  description:
    "Explore the comprehensive medical and neuropsychiatric consultations offered at Manorog Clinic in Amritsar, Punjab: anxiety, mood care, sleep, and psychosomatic health.",
};

export default function ServicesPage() {
  const getIcon = (name: string) => {
    switch (name) {
      case "HeartPulse":
        return <HeartPulse className="w-6 h-6" />;
      case "Sun":
        return <Sun className="w-6 h-6" />;
      case "Moon":
        return <Moon className="w-6 h-6" />;
      case "HeartHandshake":
        return <HeartHandshake className="w-6 h-6" />;
      case "BrainCircuit":
        return <BrainCircuit className="w-6 h-6" />;
      case "Activity":
      default:
        return <Activity className="w-6 h-6" />;
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-teal-50/70 via-white to-slate-50 py-16 sm:py-20 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold text-teal-800 uppercase tracking-wider">
              Comprehensive Care Offerings
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mt-2">
              Clinical Specializations & Consultations
            </h1>
            <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
              We provide structured diagnostic assessment, therapeutic guidance, and medical treatment for a wide spectrum of psychological, psychosomatic, and cognitive conditions.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-teal-300 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-800 flex items-center justify-center mb-5">
                    {getIcon(service.iconName)}
                  </div>

                  <h2 className="text-xl font-bold text-slate-900">
                    {service.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
                    {service.shortDescription}
                  </p>

                  {/* Symptoms Addressed */}
                  <div className="mt-5 pt-4 border-t border-slate-100">
                    <h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-2">
                      Common Signs Addressed:
                    </h4>
                    <ul className="space-y-1.5 text-xs text-slate-600">
                      {service.symptomsAddressed.slice(0, 3).map((symptom, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-teal-700 shrink-0 mt-0.5" />
                          <span>{symptom}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer of card */}
                <div className="mt-6 pt-4 border-t border-slate-100 space-y-3">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                    <Clock className="w-3.5 h-3.5 text-teal-700" />
                    <span>{service.consultationFormat}</span>
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-bold text-teal-800 hover:text-teal-900"
                    >
                      <span>Full Details & Guidance</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <Link
                      href="/#appointment-section"
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-teal-800 text-white text-xs font-semibold hover:bg-teal-900 transition-colors"
                    >
                      <CalendarCheck className="w-3.5 h-3.5" />
                      <span>Book</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Guidance Box */}
          <div className="mt-16 p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 text-center max-w-3xl mx-auto space-y-3">
            <h3 className="text-lg font-bold text-slate-900">
              Not sure which consultation area fits your symptoms?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Medical and emotional symptoms are frequently interconnected. You may select &ldquo;General Medical Consultation&rdquo; during booking; our physician will conduct a holistic baseline assessment during your visit.
            </p>
            <div className="pt-2">
              <Link
                href="/#appointment-section"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-teal-800 text-white text-xs font-semibold hover:bg-teal-900 transition-colors shadow-xs"
              >
                <CalendarCheck className="w-4 h-4 text-teal-200" />
                <span>Book a General Assessment</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
