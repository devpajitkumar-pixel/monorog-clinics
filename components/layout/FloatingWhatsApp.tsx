"use client";

import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { clinicConfig } from "@/data/clinic";

export function FloatingWhatsApp() {
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);

  // Safety check: verify configured number
  const isConfigured = Boolean(
    clinicConfig.contact.whatsapp &&
      clinicConfig.contact.whatsapp.replace(/[^\d]/g, "").length >= 10
  );

  const cleanNumber = clinicConfig.contact.whatsapp.replace(/[^\d]/g, "");
  const defaultMessage = encodeURIComponent(
    `Hello Manorog Clinic, I would like to inquire about consultation timings and appointments.`
  );
  const waUrl = `https://wa.me/${cleanNumber}?text=${defaultMessage}`;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!isConfigured) {
      e.preventDefault();
      alert(
        "WhatsApp number is currently undergoing clinical verification. Please call our clinic directly at " +
          clinicConfig.contact.phoneFormatted
      );
    }
  };

  return (
    <aside aria-label="WhatsApp quick contact" className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Optional mini popover prompt */}
      {isTooltipOpen && (
        <div className="mb-3 max-w-xs bg-white text-slate-800 p-4 rounded-2xl shadow-xl border border-slate-100 animate-in fade-in slide-in-from-bottom-2 text-xs">
          <div className="flex items-start justify-between gap-2">
            <div>
              <p className="font-semibold text-slate-900">Need help or want to book?</p>
              <p className="text-slate-600 mt-1">
                Chat directly with Manorog Clinic reception on WhatsApp for appointments and inquiries.
              </p>
            </div>
            <button
              onClick={() => setIsTooltipOpen(false)}
              className="text-slate-400 hover:text-slate-600 p-0.5"
              aria-label="Close tooltip"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
          <div className="mt-3">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleClick}
              className="inline-flex items-center justify-center w-full py-1.5 px-3 rounded-lg text-xs font-semibold bg-emerald-600 text-white hover:bg-emerald-700 transition-colors"
            >
              Start WhatsApp Chat
            </a>
          </div>
        </div>
      )}

      {/* Floating Action Trigger */}
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        onMouseEnter={() => setIsTooltipOpen(true)}
        className="group relative flex items-center gap-2.5 px-4 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full shadow-lg hover:shadow-emerald-600/25 transition-all duration-200 active:scale-95 focus:outline-none focus:ring-4 focus:ring-emerald-300"
        aria-label="Chat with Manorog Clinic on WhatsApp"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
        <MessageCircle className="w-5 h-5 fill-current" />
        <span className="text-xs font-semibold pr-1 hidden sm:inline-block">
          WhatsApp Reception
        </span>
      </a>
    </aside>
  );
}
