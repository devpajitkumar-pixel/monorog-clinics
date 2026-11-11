import {
  MapPin,
  Clock,
  Phone,
  Navigation,
  ExternalLink,
  Pill,
} from "lucide-react";
import { clinicConfig } from "@/data/clinic";

export function LocationMapSection() {
  return (
    <section className="py-16 sm:py-24 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-semibold text-teal-800 uppercase tracking-wider">
            Visit Manorog Clinic
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mt-2">
            Majitha Road Location & Consultation Shifts
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Conveniently situated opposite Canara Bank on Majitha Road in Amritsar, with an attached medicine dispensary.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Info Panel */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200/90 space-y-6">
            <div className="space-y-6">
              {/* Address Box */}
              <div>
                <div className="flex items-center gap-2 text-teal-800 text-xs font-semibold uppercase tracking-wider mb-2">
                  <MapPin className="w-4 h-4 text-teal-700" />
                  <span>Physical Address & Landmark</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  {clinicConfig.name}
                </h3>
                <p className="text-sm text-slate-700 mt-1 font-medium">
                  {clinicConfig.address.building}, {clinicConfig.address.street}
                </p>
                <p className="text-xs text-slate-600 mt-0.5">
                  {clinicConfig.address.landmark}
                </p>
                <p className="text-xs text-slate-500 mt-0.5">
                  {clinicConfig.address.city}, {clinicConfig.address.state} – {clinicConfig.address.postalCode}
                </p>
              </div>

              {/* Timings Box */}
              <div className="pt-4 border-t border-slate-100">
                <div className="flex items-center gap-2 text-teal-800 text-xs font-semibold uppercase tracking-wider mb-2">
                  <Clock className="w-4 h-4 text-teal-700" />
                  <span>Consultation Shifts & Hours</span>
                </div>
                <div className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                  <div className="flex justify-between py-1 border-b border-slate-50">
                    <span className="font-medium text-slate-900">{clinicConfig.hours.days}:</span>
                    <span className="text-right font-semibold text-slate-800">
                      Morning: {clinicConfig.hours.morningShift}
                      <br />
                      Evening: {clinicConfig.hours.eveningShift}
                    </span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-slate-50">
                    <span className="font-medium text-slate-900">Sunday:</span>
                    <span className="text-amber-800 font-medium">
                      {clinicConfig.hours.sunday}
                    </span>
                  </div>
                </div>
                <p className="text-[11px] text-slate-500 mt-2 italic">
                  * {clinicConfig.hours.note}
                </p>
              </div>

              {/* Pharmacy Notice */}
              <div className="p-3 rounded-xl bg-teal-50 border border-teal-100 flex items-start gap-2.5 text-xs text-teal-900">
                <Pill className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold">Attached Pharmacy on Site:</span> Prescribed psychiatric medications are dispensed directly at the clinic for patient convenience.
                </div>
              </div>

              {/* Direct Telephone Box */}
              <div className="pt-2 border-t border-slate-100">
                <div className="flex items-center gap-2 text-teal-800 text-xs font-semibold uppercase tracking-wider mb-2">
                  <Phone className="w-4 h-4 text-teal-700" />
                  <span>Clinic Telephone & Mobile</span>
                </div>
                <div className="space-y-1">
                  <a
                    href={`tel:${clinicConfig.contact.landline}`}
                    className="inline-flex items-center gap-2 text-sm font-bold text-teal-900 hover:text-teal-700 mr-4"
                  >
                    <Phone className="w-4 h-4 text-teal-700" />
                    <span>Clinic: {clinicConfig.contact.landlineFormatted}</span>
                  </a>
                  <a
                    href={`tel:${clinicConfig.contact.phone}`}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-slate-700 hover:text-slate-900"
                  >
                    <span>Mobile: {clinicConfig.contact.phoneFormatted}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Direct Directions Button */}
            <div className="pt-2">
              <a
                href={clinicConfig.maps.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-teal-800 hover:bg-teal-900 text-white font-semibold text-sm transition-colors shadow-xs"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions (Google Maps)</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </a>
            </div>
          </div>

          {/* Right Map Embed */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm bg-white min-h-[380px] flex flex-col">
            <div className="bg-slate-100 px-4 py-2.5 border-b border-slate-200 flex items-center justify-between text-xs text-slate-600">
              <span className="flex items-center gap-1.5 font-medium">
                <MapPin className="w-3.5 h-3.5 text-teal-700" />
                <span>Manorog Clinic • Majitha Road, Amritsar (31.651561, 74.886636)</span>
              </span>
              <a
                href={clinicConfig.maps.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-800 hover:underline inline-flex items-center gap-1 font-semibold"
              >
                <span>Google Maps (4.0 ★)</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <div className="relative flex-1 w-full h-full min-h-[340px]">
              <iframe
                title="Manorog Clinic Majitha Road Amritsar Map"
                src="https://maps.google.com/maps?q=31.651561,74.886636&hl=en&z=15&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "360px" }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
