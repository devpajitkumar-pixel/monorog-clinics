"use client";

import { useState } from "react";
import {
  MapPin,
  Phone,
  MessageCircle,
  Mail,
  Clock,
  Navigation,
  Send,
  CheckCircle2,
  ExternalLink,
  ShieldAlert,
} from "lucide-react";
import { clinicConfig } from "@/data/clinic";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const cleanNumber = clinicConfig.contact.whatsapp.replace(/[^\d]/g, "");
  const generalWaUrl = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(
    "Hello Manorog Clinic, I have a general inquiry regarding your services."
  )}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.message) {
      alert("Please complete all required fields.");
      return;
    }

    setIsSubmitting(true);
    // Format into WhatsApp dispatch for immediate response
    const msg = encodeURIComponent(
      `*General Inquiry - Manorog Clinic*\nName: ${formData.name}\nPhone: ${formData.phone}\nMessage: ${formData.message}`
    );
    const targetUrl = `https://wa.me/${cleanNumber}?text=${msg}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      window.open(targetUrl, "_blank", "noopener,noreferrer");
    }, 800);
  };

  return (
    <div className="bg-slate-50 min-h-screen py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="max-w-3xl">
          <span className="text-xs font-semibold text-teal-800 uppercase tracking-wider">
            Get in Touch
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mt-2">
            Contact & Clinic Location
          </h1>
          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed">
            We welcome your questions regarding our medical consultations, appointment timings, or directions in Amritsar.
          </p>
        </div>

        {/* Emergency Banner */}
        <div className="p-4 sm:p-5 rounded-2xl bg-amber-50 border border-amber-200/80 flex items-start gap-3.5">
          <ShieldAlert className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-amber-900">
            <span className="font-bold">Medical Emergency Notice:</span> If you are facing an acute psychiatric crisis or emergency medical condition, please immediately call 112 / 108 or proceed to the nearest hospital casualty department. Manorog Clinic provides scheduled outpatient services.
          </div>
        </div>

        {/* 3 Contact Quick Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Direct Phone */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-800 flex items-center justify-center mb-4">
                <Phone className="w-6 h-6" />
              </div>
              <h2 className="text-lg font-bold text-slate-900">Direct Telephone</h2>
              <p className="text-xs text-slate-600 mt-1">
                Speak directly with reception during morning and evening outpatient shifts.
              </p>
            </div>
            <div>
              <a
                href={`tel:${clinicConfig.contact.phone}`}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-teal-800 hover:bg-teal-900 text-white font-semibold text-sm transition-colors shadow-xs"
              >
                <Phone className="w-4 h-4" />
                <span>Call {clinicConfig.contact.phoneFormatted}</span>
              </a>
            </div>
          </div>

          {/* Card 2: WhatsApp Chat */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4">
                <MessageCircle className="w-6 h-6" />
              </div>
              <h2 className="text-lg font-bold text-slate-900">WhatsApp Desk</h2>
              <p className="text-xs text-slate-600 mt-1">
                Convenient text messaging for appointments, schedule verification, and queries.
              </p>
            </div>
            <div>
              <a
                href={generalWaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm transition-colors shadow-xs"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Card 3: Clinic Location */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-slate-100 text-slate-800 flex items-center justify-center mb-4">
                <Navigation className="w-6 h-6" />
              </div>
              <h2 className="text-lg font-bold text-slate-900">Google Maps Route</h2>
              <p className="text-xs text-slate-600 mt-1">
                Centrally located in Amritsar with convenient roadside parking and transit access.
              </p>
            </div>
            <div>
              <a
                href={clinicConfig.maps.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-900 text-white font-semibold text-sm transition-colors shadow-xs"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </a>
            </div>
          </div>
        </div>

        {/* Form + Operating Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900 mb-2">
              Send a General Inquiry Message
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mb-6">
              Have a non-urgent question? Fill out this inquiry form, and our reception team will review and respond.
            </p>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-teal-50 border border-teal-200 text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-teal-700 mx-auto" />
                <h3 className="text-base font-bold text-slate-900">
                  Inquiry Dispatched via WhatsApp
                </h3>
                <p className="text-xs text-slate-600">
                  Your message has been formatted and forwarded to our reception. We will get back to you shortly.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", phone: "", message: "" });
                  }}
                  className="text-xs font-semibold text-teal-800 hover:underline pt-2"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="e.g. Jasleen Kaur"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-teal-700 focus:ring-2 focus:ring-teal-100"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Your Contact Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    placeholder="e.g. 9876543210"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-teal-700 focus:ring-2 focus:ring-teal-100"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Message / Inquiry Details *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="How may our clinic assist you today?"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-teal-700 focus:ring-2 focus:ring-teal-100"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-xl bg-teal-800 hover:bg-teal-900 text-white font-semibold text-sm transition-colors shadow-sm flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4 text-teal-200" />
                  <span>{isSubmitting ? "Sending..." : "Submit Inquiry"}</span>
                </button>
              </form>
            )}
          </div>

          {/* Operating Info & Address */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
              <h2 className="text-base font-bold text-slate-900 uppercase tracking-wider text-xs text-teal-800">
                Clinic Details
              </h2>

              <div className="space-y-4 text-xs sm:text-sm text-slate-600">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">Manorog Clinic</strong>
                    <p className="mt-0.5">
                      {clinicConfig.address.street}, {clinicConfig.address.locality}
                    </p>
                    <p>
                      {clinicConfig.address.city}, {clinicConfig.address.state} – {clinicConfig.address.postalCode}
                    </p>
                    <p className="text-[11px] text-slate-600 mt-1">
                      Landmark: {clinicConfig.address.landmark}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-3 border-t border-slate-100">
                  <Clock className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">Consultation Shifts</strong>
                    <p className="mt-0.5">{clinicConfig.hours.days}</p>
                    <p className="font-medium text-slate-800">
                      Morning: {clinicConfig.hours.morningShift}
                    </p>
                    <p className="font-medium text-slate-800">
                      Evening: {clinicConfig.hours.eveningShift}
                    </p>
                    <p className="text-slate-600 mt-1">
                      Sunday: {clinicConfig.hours.sunday}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-3 border-t border-slate-100">
                  <Mail className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">Official Inquiries</strong>
                    <p className="mt-0.5">{clinicConfig.contact.email}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Frame */}
            <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-sm h-72">
              <iframe
                title="Clinic Map Location"
                src="https://maps.google.com/maps?q=31.651561,74.8675816&hl=en&z=15&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
