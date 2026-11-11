import Link from "next/link";
import {
  MapPin,
  Clock,
  ShieldAlert,
  ArrowUpRight,
  Phone,
  Star,
} from "lucide-react";
import { clinicConfig } from "@/data/clinic";
import { servicesData } from "@/data/services";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Medical Emergency Alert Banner */}
        <div className="mb-12 p-4 sm:p-5 rounded-2xl bg-slate-900/90 border border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 shrink-0 mt-0.5">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Emergency Healthcare Notice</h4>
              <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                Manorog Clinic provides scheduled outpatient psychiatric and medical consultations. In case of acute psychiatric crisis, self-harm risk, or emergency instability, immediately dial{" "}
                <span className="font-semibold text-amber-300">112</span> or proceed to the casualty emergency department of the nearest hospital.
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 shrink-0">
            <a
              href={`tel:${clinicConfig.contact.landline}`}
              className="px-4 py-2 rounded-lg text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 transition-colors border border-slate-700 inline-flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-teal-400" />
              <span>Clinic: {clinicConfig.contact.landlineFormatted}</span>
            </a>
          </div>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800/80">
          {/* Col 1: Brand & Ethos */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-teal-800 flex items-center justify-center text-white font-bold shadow-inner">
                <span className="text-lg text-teal-100">M</span>
              </div>
              <div>
                <span className="text-lg font-bold tracking-tight text-white block">
                  {clinicConfig.name}
                </span>
                <span className="text-[11px] text-teal-400 font-medium">
                  Dr. Ravinder Mohan Sharma
                </span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              {clinicConfig.tagline}
            </p>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs text-amber-300">
              <Star className="w-3.5 h-3.5 fill-amber-300" />
              <span>4.0 / 5 (123 Google Reviews)</span>
            </div>
            <div className="pt-1 text-xs text-slate-500 space-y-1">
              <p>Member, Indian Psychiatric Society (IPS)</p>
              <p>Member, Indian Medical Association (IMA) Amritsar</p>
            </div>
          </div>

          {/* Col 2: Services Directory */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
              Consultation & Pharmacy
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {servicesData.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-slate-400 hover:text-teal-300 transition-colors flex items-center justify-between group"
                  >
                    <span>{service.title}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-teal-400" />
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="text-teal-400 hover:text-teal-300 font-medium inline-flex items-center gap-1 pt-1"
                >
                  View All Services & Dispensary &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Navigation */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/" className="text-slate-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-400 hover:text-white transition-colors">
                  About Dr. Ravinder Mohan Sharma
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-400 hover:text-white transition-colors">
                  Consultation & Pharmacy Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-white transition-colors">
                  Location, Timings & Directions
                </Link>
              </li>
              <li>
                <Link href="/#appointment-section" className="text-slate-400 hover:text-white transition-colors">
                  Book an Appointment
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-slate-400 hover:text-white transition-colors">
                  Patient Privacy & Ethics
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Location & Operating Hours */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
              Clinic Location & Shifts
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span>
                  {clinicConfig.address.building}, {clinicConfig.address.street}
                  <br />
                  {clinicConfig.address.landmark}
                  <br />
                  {clinicConfig.address.city}, Punjab {clinicConfig.address.postalCode}
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-slate-200">{clinicConfig.hours.days}</p>
                  <p>Morning: {clinicConfig.hours.morningShift}</p>
                  <p>Evening: {clinicConfig.hours.eveningShift}</p>
                  <p className="text-slate-400 mt-1">Sun: {clinicConfig.hours.sunday}</p>
                </div>
              </div>
              <div className="pt-2">
                <a
                  href={clinicConfig.maps.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-teal-300 bg-teal-950/80 border border-teal-800/80 hover:bg-teal-900 transition-colors"
                >
                  <span>Open in Google Maps</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Medical Disclaimer & Copyright */}
        <div className="pt-8 text-xs text-slate-400 space-y-4">
          <p className="leading-relaxed">
            <strong className="text-slate-300">Medical Disclaimer:</strong> {clinicConfig.disclaimer}
          </p>
          <div className="p-3.5 rounded-xl bg-slate-900 border border-amber-500/40 text-amber-300 text-xs leading-relaxed">
            <strong>Demonstration Notice:</strong> Independent website concept demonstration created for presentation purposes only. This website is not affiliated with, operated by, or endorsed by Manorog Clinic or its medical practitioners. No appointments are being accepted through this demonstration.
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-slate-400 pt-2 border-t border-slate-900">
            <p>
              &copy; {currentYear} {clinicConfig.name}, Amritsar. Dr. Ravinder Mohan Sharma (IPS / IMA Member). All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="hover:text-slate-300 transition-colors">
                Privacy Policy & Disclaimer
              </Link>
              <Link href="/contact" className="hover:text-slate-300 transition-colors">
                Contact & Inquiries
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
