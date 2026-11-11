import { Star, MessageSquareQuote, ExternalLink, ShieldCheck, ThumbsUp } from "lucide-react";
import { clinicConfig } from "@/data/clinic";

export function PatientFeedbackSection() {
  const { ratings } = clinicConfig;

  const feedbackThemes = [
    {
      title: "Affordable Care & Low Consultation Fees",
      detail:
        "Patients frequently commend the clinic for maintaining low consultation charges, ensuring psychiatric and medical consultations remain accessible to all economic backgrounds.",
      tag: "Affordability",
    },
    {
      title: "Experienced Clinical Approach",
      detail:
        "Long-term patients highlight Dr. Ravinder Mohan Sharma's clinical diagnostic experience and rational approach toward prescribing effective psychiatric medications.",
      tag: "Clinical Experience",
    },
    {
      title: "Convenient In-House Medicine Dispensary",
      detail:
        "Having prescribed formulations directly available on-site spares patients and caregivers the hassle of searching across pharmacies in Amritsar.",
      tag: "On-Site Dispensary",
    },
    {
      title: "Continuous Outpatient Follow-Ups",
      detail:
        "Patients visiting for ongoing mood and sleep disorders note the structured follow-up routines and steady symptomatic improvement over time.",
      tag: "Follow-Up Care",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Overall Rating Snapshot */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-semibold">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
              <span>Public Community Reputation</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
              Trusted by Patients Across Amritsar & Punjab
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Serving the Majitha Road neighborhood and broader Amritsar region for decades. Public reviews on Google Maps reflect a strong community track record of accessible, unpretentious medical and psychiatric care.
            </p>

            {/* Rating Highlight Box */}
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/90 space-y-3">
              <div className="flex items-baseline gap-3">
                <span className="text-4xl font-extrabold text-slate-900">
                  {ratings.score.toFixed(1)}
                </span>
                <span className="text-sm font-semibold text-slate-500">out of 5.0</span>
                <div className="flex items-center gap-0.5 ml-2">
                  {[...Array(4)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                  <Star className="w-5 h-5 fill-slate-200 text-slate-300" />
                </div>
              </div>

              <p className="text-xs text-slate-600 font-medium">
                Based on <span className="font-bold text-slate-800">{ratings.reviewCount}+ public Google Maps reviews</span>
              </p>

              <div className="pt-2">
                <a
                  href={clinicConfig.maps.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-800 hover:text-teal-900 hover:underline"
                >
                  <span>Read community reviews on Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Ethical Healthcare Notice */}
            <div className="p-4 rounded-2xl bg-teal-50/70 border border-teal-100/80 text-[11px] text-teal-900 flex items-start gap-2.5">
              <ShieldCheck className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
              <span>
                <strong>Ethical Healthcare Notice:</strong> In compliance with medical ethics codes, we do not publish promotional testimonials or guaranteed outcomes. These points summarize aggregated public sentiment from verified directory listings.
              </span>
            </div>
          </div>

          {/* Right Column: Key Themes Grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {feedbackThemes.map((theme, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-xs hover:border-teal-200 hover:shadow-sm transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-teal-800 px-2.5 py-1 rounded-md bg-teal-50 border border-teal-100">
                        {theme.tag}
                      </span>
                      <MessageSquareQuote className="w-5 h-5 text-slate-300" />
                    </div>

                    <h3 className="text-base font-bold text-slate-900 leading-snug">
                      {theme.title}
                    </h3>

                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                      {theme.detail}
                    </p>
                  </div>

                  <div className="pt-4 mt-3 border-t border-slate-100 flex items-center gap-1 text-[11px] text-slate-500 font-medium">
                    <ThumbsUp className="w-3.5 h-3.5 text-teal-700" />
                    <span>Frequently cited in public reviews</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

