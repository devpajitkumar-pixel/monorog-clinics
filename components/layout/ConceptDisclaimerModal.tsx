"use client";

import { useState, useEffect } from "react";
import { AlertTriangle } from "lucide-react";

const DISCLAIMER_TEXT =
  "Independent website concept demonstration created for presentation purposes only. This website is not affiliated with, operated by, or endorsed by Manorog Clinic or its medical practitioners. No appointments are being accepted through this demonstration.";

export function ConceptDisclaimerModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if the user has already acknowledged the demonstration notice in this session
    const hasAcknowledged = sessionStorage.getItem("manorog_demo_acknowledged");
    if (!hasAcknowledged) {
      // Show modal on first load with a brief delay for smooth appearance
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcknowledge = () => {
    sessionStorage.setItem("manorog_demo_acknowledged", "true");
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="disclaimer-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-amber-200 p-6 sm:p-8 space-y-5 animate-in zoom-in-95 duration-200">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-2xl bg-amber-100 text-amber-800 shrink-0">
            <AlertTriangle className="w-7 h-7" />
          </div>
          <div className="space-y-1">
            <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
              Presentation Notice
            </span>
            <h2
              id="disclaimer-modal-title"
              className="text-xl font-bold text-slate-900"
            >
              Website Concept Demonstration
            </h2>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200 text-xs sm:text-sm text-amber-950 leading-relaxed font-medium">
          {DISCLAIMER_TEXT}
        </div>

        <div className="text-xs text-slate-500 leading-relaxed space-y-1">
          <p>
            • All clinic details, addresses, and directory listings are cited from public records for layout testing and portfolio evaluation.
          </p>
          <p>
            • If you are a patient in need of medical or psychiatric care, please contact certified healthcare providers directly.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row gap-3">
          <button
            type="button"
            onClick={handleAcknowledge}
            className="w-full py-3 px-5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs sm:text-sm transition-all shadow-md active:scale-98"
          >
            I Understand &amp; Acknowledge
          </button>
        </div>
      </div>
    </div>
  );
}

export function DisclaimerBanner() {
  return (
    <div className="bg-amber-400 text-slate-950 text-xs font-semibold py-2 px-4 border-b border-amber-500 sticky top-0 z-50 shadow-xs">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <AlertTriangle className="w-4 h-4 text-slate-950 shrink-0" />
          <span className="leading-tight">
            <strong>Concept Demonstration:</strong>{" "}
            <span className="hidden sm:inline">
              Created for presentation purposes only. Not affiliated with or endorsed by Manorog Clinic. No appointments accepted.
            </span>
            <span className="sm:hidden">
              Concept demo only. Not affiliated with Manorog Clinic.
            </span>
          </span>
        </div>

        <button
          type="button"
          onClick={() => alert(DISCLAIMER_TEXT)}
          className="shrink-0 underline text-[11px] font-bold text-slate-900 hover:text-black uppercase tracking-wider ml-2"
        >
          Read Full Notice
        </button>
      </div>
    </div>
  );
}
