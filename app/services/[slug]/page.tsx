import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  HeartPulse,
  Sun,
  Moon,
  HeartHandshake,
  BrainCircuit,
  Activity,
  ArrowLeft,
  CalendarCheck,
  CheckCircle2,
  Clock,
  ShieldCheck,
} from "lucide-react";
import { servicesData } from "@/data/services";
import { clinicConfig } from "@/data/clinic";

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const service = servicesData.find((s) => s.slug === resolvedParams.slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.title} | Consultations at ${clinicConfig.name} Amritsar`,
    description: service.shortDescription,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    openGraph: {
      title: `${service.title} | ${clinicConfig.name}`,
      description: service.shortDescription,
    },
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const resolvedParams = await params;
  const service = servicesData.find((s) => s.slug === resolvedParams.slug);

  if (!service) {
    notFound();
  }

  const relatedServices = servicesData
    .filter((s) => s.id !== service.id)
    .slice(0, 3);

  const getIcon = (name: string) => {
    switch (name) {
      case "HeartPulse":
        return <HeartPulse className="w-8 h-8" />;
      case "Sun":
        return <Sun className="w-8 h-8" />;
      case "Moon":
        return <Moon className="w-8 h-8" />;
      case "HeartHandshake":
        return <HeartHandshake className="w-8 h-8" />;
      case "BrainCircuit":
        return <BrainCircuit className="w-8 h-8" />;
      case "Activity":
      default:
        return <Activity className="w-8 h-8" />;
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-2 text-xs text-slate-500">
            <li>
              <Link href="/" className="hover:text-teal-800 transition-colors">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/services" className="hover:text-teal-800 transition-colors">
                Services
              </Link>
            </li>
            <li>/</li>
            <li className="text-slate-900 font-semibold truncate max-w-xs sm:max-w-none">
              {service.title}
            </li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Content Area */}
          <div className="lg:col-span-8 space-y-10">
            {/* Header Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-sm space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-teal-50 text-teal-800 flex items-center justify-center">
                {getIcon(service.iconName)}
              </div>

              <div className="space-y-2">
                <span className="text-xs font-semibold text-teal-800 uppercase tracking-wider">
                  Specialized Consultation
                </span>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                  {service.title}
                </h1>
              </div>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed pt-1">
                {service.fullDescription}
              </p>

              <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs sm:text-sm text-slate-500">
                <Clock className="w-4 h-4 text-teal-700" />
                <span className="font-medium text-slate-700">
                  {service.consultationFormat}
                </span>
              </div>
            </div>

            {/* Symptoms Addressed */}
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-sm space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Signs & Symptoms Addressed
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                If you or your family member are experiencing any of the following indications, an outpatient medical assessment can help clarify root causes:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {service.symptomsAddressed.map((symptom, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-2.5 text-xs sm:text-sm text-slate-700"
                  >
                    <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                    <span>{symptom}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* What to Expect */}
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-sm space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                What to Expect During Your Session
              </h2>
              <div className="space-y-3 pt-2">
                {service.whatToExpect.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3.5">
                    <div className="w-6 h-6 rounded-full bg-teal-100 text-teal-900 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      {idx + 1}
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Who Should Consult */}
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-sm space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                Who Should Consider This Consultation
              </h2>
              <ul className="space-y-2.5 pt-1 text-xs sm:text-sm text-slate-600">
                {service.whoShouldConsult.map((who, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                    <span>{who}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Sticky Sidebar: Quick Action & Booking Card */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm space-y-5">
              <div className="space-y-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-teal-800">
                  Appointment Request
                </span>
                <h3 className="text-lg font-bold text-slate-900">
                  Consult for {service.title}
                </h3>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                Schedule a confidential consultation at Manorog Clinic, Amritsar. We respect your dignity and timing.
              </p>

              <div className="p-3.5 rounded-xl bg-teal-50 border border-teal-100 text-xs text-teal-900 space-y-2">
                <div className="flex items-center gap-2 font-semibold">
                  <ShieldCheck className="w-4 h-4 text-teal-700" />
                  <span>Confidential & Private</span>
                </div>
                <p className="text-[11px] text-teal-800">
                  Slots available Monday to Saturday during morning and evening outpatient shifts.
                </p>
              </div>

              <div className="space-y-2.5 pt-1">
                <Link
                  href={`/#appointment-section`}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-teal-800 hover:bg-teal-900 text-white font-semibold text-xs sm:text-sm shadow-sm transition-all"
                >
                  <CalendarCheck className="w-4 h-4 text-teal-200" />
                  <span>Request Appointment for This Service</span>
                </Link>

                <a
                  href={`tel:${clinicConfig.contact.phone}`}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs transition-colors"
                >
                  <span>Or Call Clinic: {clinicConfig.contact.phoneFormatted}</span>
                </a>
              </div>
            </div>

            {/* Related Services Links */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm space-y-3">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                Related Consultation Areas
              </h4>
              <ul className="space-y-2 text-xs">
                {relatedServices.map((rel) => (
                  <li key={rel.id}>
                    <Link
                      href={`/services/${rel.slug}`}
                      className="text-slate-600 hover:text-teal-800 hover:underline block py-1 border-b border-slate-50"
                    >
                      {rel.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="pt-2">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1 text-xs font-bold text-teal-800 hover:underline"
                >
                  <ArrowLeft className="w-3 h-3" />
                  <span>View All Services</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
