import Link from "next/link";
import {
  HeartPulse,
  Sun,
  Moon,
  HeartHandshake,
  BrainCircuit,
  Activity,
  ArrowRight,
} from "lucide-react";
import { servicesData } from "@/data/services";

export function ServicesGrid() {
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
    <section id="services-section" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-semibold text-teal-800 uppercase tracking-wider">
              Clinical Specializations
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mt-2">
              Our Consultation Services
            </h2>
            <p className="text-sm text-slate-600 mt-2 max-w-2xl">
              Evidence-based, compassionate care for emotional, cognitive, and psychosomatic health conditions in Amritsar.
            </p>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal-800 hover:text-teal-900 group shrink-0"
          >
            <span>Browse All Specializations</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-white border border-slate-200/90 hover:border-teal-300 hover:shadow-md transition-all duration-200 group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-800 flex items-center justify-center mb-5 group-hover:bg-teal-800 group-hover:text-white transition-all">
                  {getIcon(service.iconName)}
                </div>

                <h3 className="text-lg font-bold text-slate-900 group-hover:text-teal-900 transition-colors">
                  {service.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed line-clamp-3">
                  {service.shortDescription}
                </p>

                {/* Key Symptoms Pill preview */}
                <div className="mt-4 pt-4 border-t border-slate-100 flex flex-wrap gap-1.5">
                  {service.symptomsAddressed.slice(0, 2).map((symptom, idx) => (
                    <span
                      key={idx}
                      className="inline-block text-[11px] font-medium bg-slate-50 text-slate-600 px-2.5 py-1 rounded-md"
                    >
                      {symptom}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-4 flex items-center justify-between">
                <span className="text-[11px] text-slate-600">
                  {service.consultationFormat.split("|")[0]}
                </span>
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-teal-800 group-hover:text-teal-900"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
