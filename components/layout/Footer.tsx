import Link from "next/link";
import {
  MapPin,
  Clock,
  ShieldAlert,
  ArrowUpRight,
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
                Manorog Clinic provides scheduled outpatient clinical services. In case of acute psychiatric emergencies, self-harm crisis, or severe medical emergencies, please immediately dial{" "}
                <span className="font-semibold text-amber-300">112</span> or visit the emergency department of the nearest hospital.
              </p>
            </div>
          </div>
          <a
            href={`tel:${clinicConfig.contact.phone}`}
            className="shrink-0 px-4 py-2 rounded-lg text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 transition-colors border border-slate-700"
          >
            Clinic Reception: {clinicConfig.contact.phoneFormatted}
          </a>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800/80">
          {/* Col 1: Brand & Ethos */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-teal-800 flex items-center justify-center text-white font-bold shadow-inner">
                <span className="text-lg text-teal-100">M</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                {clinicConfig.name}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              {clinicConfig.tagline}
            </p>
            <div className="pt-2 text-xs text-slate-400 space-y-1">
              <p>Certified Outpatient Clinic • Amritsar, Punjab</p>
              <p>Adhering to strict medical confidentiality.</p>
            </div>
          </div>

          {/* Col 2: Services Directory */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">
              Clinical Consultations
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
                  View All Services &rarr;
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
                  About the Clinic & Doctor
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-400 hover:text-white transition-colors">
                  Consultation Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-white transition-colors">
                  Contact & Location
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
              Clinic Location & Hours
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span>
                  {clinicConfig.address.street}, {clinicConfig.address.locality},{" "}
                  {clinicConfig.address.city}, {clinicConfig.address.state} - {clinicConfig.address.postalCode}
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-slate-200">{clinicConfig.hours.days}</p>
                  <p>{clinicConfig.hours.morningShift}</p>
                  <p>{clinicConfig.hours.eveningShift}</p>
                  <p className="text-slate-300 mt-1">Sun: {clinicConfig.hours.sunday}</p>
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
        <div className="pt-8 text-xs text-slate-300 space-y-4">
          <p className="leading-relaxed">
            <strong className="text-slate-400">Medical Disclaimer:</strong> {clinicConfig.disclaimer}
          </p>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-slate-400 pt-2 border-t border-slate-900">
            <p>
              &copy; {currentYear} {clinicConfig.name}, Amritsar. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="hover:text-slate-300 transition-colors">
                Privacy Policy & Disclaimer
              </Link>
              <Link href="/contact" className="hover:text-slate-300 transition-colors">
                Support & Inquiries
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
