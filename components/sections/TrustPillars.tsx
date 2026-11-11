import {
  Lock,
  Sparkles,
  MessageSquareCheck,
  Stethoscope,
} from "lucide-react";

export function TrustPillars() {
  const pillars = [
    {
      icon: Lock,
      title: "Strict Medical Confidentiality",
      description:
        "Every discussion, history, and medical record is protected under stringent medical ethics and privacy protocols. Your peace of mind is sacred.",
    },
    {
      icon: Stethoscope,
      title: "Evidence-Based Clinical Care",
      description:
        "Diagnostic decisions and treatment pathways follow modern clinical guidelines, avoiding guesswork and unnecessary polypharmacy.",
    },
    {
      icon: Sparkles,
      title: "Unhurried, Attentive Consultations",
      description:
        "We allow sufficient time for you and your family to speak freely without being rushed through a rapid assembly line.",
    },
    {
      icon: MessageSquareCheck,
      title: "Seamless Appointment Process",
      description:
        "Avoid long, crowded waiting rooms. Schedule via WhatsApp or phone with clearly allocated morning and evening slots.",
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-semibold text-teal-800 uppercase tracking-wider">
            Why Patients Choose Manorog Clinic
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mt-2">
            A Safe, Professional & Welcoming Environment
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Seeking healthcare support is a step of courage. We have designed our clinical space and patient workflow to honor that choice.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50/70 border border-slate-100 hover:border-teal-200 hover:bg-teal-50/20 transition-all duration-200 group"
              >
                <div className="w-12 h-12 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center mb-4 group-hover:scale-105 group-hover:bg-teal-800 group-hover:text-white transition-all">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
