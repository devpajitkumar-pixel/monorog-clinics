import {
  GraduationCap,
  Award,
  Stethoscope,
  Calendar,
  CheckCircle2,
  Building,
} from "lucide-react";
import { clinicConfig } from "@/data/clinic";

export function DoctorProfileSection() {
  const { doctor } = clinicConfig;

  return (
    <section className="py-16 sm:py-24 bg-slate-50/80 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-semibold text-teal-800 uppercase tracking-wider">
            Clinical Leadership
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mt-2">
            Meet Dr. Ravinder Mohan Sharma
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Dedicated psychiatric practitioner providing accessible mental healthcare to patients in Amritsar and across Punjab.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-slate-200/90 relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Visual Avatar / Portrait Representation */}
            <div className="md:col-span-4 flex flex-col items-center text-center">
              <div className="relative w-44 h-44 rounded-2xl bg-gradient-to-br from-teal-800 to-slate-900 text-teal-100 flex flex-col items-center justify-center p-4 shadow-md">
                <Stethoscope className="w-16 h-16 text-teal-200 mb-2 opacity-80" />
                <span className="text-xs font-bold text-white uppercase tracking-wider">
                  Psychiatric Practitioner
                </span>
                <span className="text-[11px] text-teal-300">Manorog Clinic Amritsar</span>
              </div>

              <div className="mt-4 space-y-1 text-center">
                <div className="inline-flex items-center gap-1.5 text-xs text-slate-600 font-semibold">
                  <Award className="w-4 h-4 text-teal-700" />
                  <span>Indian Psychiatric Society</span>
                </div>
                <p className="text-[11px] text-slate-500">Member Directory Listing</p>
              </div>
            </div>

            {/* Content Details */}
            <div className="md:col-span-8 space-y-4">
              <div>
                <span className="text-xs font-semibold text-teal-700 uppercase tracking-wider">
                  {doctor.role}
                </span>
                <h3 className="text-2xl font-bold text-slate-900 mt-0.5">
                  {doctor.name}
                </h3>
                <p className="text-sm font-medium text-slate-600 mt-0.5">
                  {doctor.title} • {doctor.specialty}
                </p>
              </div>

              {/* Degrees / Professional Associations */}
              <div className="flex flex-wrap gap-2 pt-1">
                {doctor.associations.map((assoc, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 border border-teal-100 text-teal-900 text-xs font-semibold"
                  >
                    <Building className="w-3.5 h-3.5 text-teal-700" />
                    <span>{assoc}</span>
                  </span>
                ))}
                {doctor.qualifications.map((qual, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-medium"
                  >
                    <GraduationCap className="w-3.5 h-3.5 text-slate-600" />
                    <span>{qual}</span>
                  </span>
                ))}
              </div>

              {/* Bio Paragraphs */}
              <div className="space-y-2 text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
                {doctor.bio.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              {/* Areas of Practice */}
              <div className="pt-3 border-t border-slate-100">
                <h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-2">
                  Key Clinical Consultation Areas:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                  {doctor.focusAreas.map((area, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-700 shrink-0" />
                      <span>{area}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <a
                  href="#appointment-section"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-teal-800 text-white hover:bg-teal-900 transition-colors shadow-xs"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Request Consultation with Dr. Sharma</span>
                </a>
                <a
                  href={`tel:${clinicConfig.contact.landline}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-slate-100 text-slate-800 hover:bg-slate-200 transition-colors"
                >
                  <span>Call Reception ({clinicConfig.contact.landlineFormatted})</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
