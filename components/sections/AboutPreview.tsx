import Link from "next/link";
import { ArrowRight, CheckCircle2, Shield } from "lucide-react";

export function AboutPreview() {
  return (
    <section className="py-16 sm:py-24 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Visual card */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-teal-900 to-slate-900 p-8 text-white shadow-xl">
              <div className="absolute top-0 right-0 -mt-8 -mr-8 w-48 h-48 rounded-full bg-teal-600/20 blur-3xl pointer-events-none" />

              <div className="space-y-6 relative">
                <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center text-teal-300">
                  <Shield className="w-6 h-6" />
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-teal-300">
                    Our Healthcare Philosophy
                  </span>
                  <h3 className="text-2xl font-bold text-white leading-tight">
                    Healing with Compassion, Science & Discretion
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  At Manorog Clinic, we view health as an integrated harmony between neurological balance, emotional stability, and physical resilience. We reject one-size-fits-all treatments and prioritize what truly matters to you.
                </p>

                <div className="pt-4 border-t border-white/10 space-y-2.5 text-xs text-slate-200">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-300 shrink-0" />
                    <span>Non-stigmatizing, respectful environment</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-300 shrink-0" />
                    <span>Integrated psychosomatic assessment</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-300 shrink-0" />
                    <span>Focus on long-term independence and wellbeing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text Description */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-100 text-teal-800 text-xs font-semibold">
              <span>About Manorog Clinic Amritsar</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
              A Dedicated Medical Center Founded on Trust & Clinical Rigor
            </h2>

            <p className="text-base text-slate-600 leading-relaxed">
              Located in the heart of Amritsar, Manorog Clinic was established with a clear mandate: to provide patients and families with a warm, modern, and clinically sound space for medical and psychiatric consultation.
            </p>

            <p className="text-sm text-slate-600 leading-relaxed">
              Whether seeking guidance for stress, sleep disruptions, mood changes, or complex psychosomatic concerns, our patients find a welcoming team that listens deeply, explains diagnoses transparently, and walks with them every step of the way.
            </p>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-semibold text-teal-800 hover:text-teal-900 group"
              >
                <span>Read our full clinic philosophy and doctor background</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
