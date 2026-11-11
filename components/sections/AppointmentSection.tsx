"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Calendar,
  Clock,
  User,
  Phone,
  Mail,
  FileText,
  CheckCircle2,
  AlertCircle,
  MessageSquare,
  ShieldCheck,
  Send,
  Loader2,
  Building2,
  Video,
} from "lucide-react";
import {
  appointmentSchema,
  AppointmentFormValues,
} from "@/lib/validations/appointment";
import { processAppointmentRequest } from "@/lib/appointment-service";
import { servicesData } from "@/data/services";
import { clinicConfig } from "@/data/clinic";

export function AppointmentSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState<boolean | null>(
    null
  );
  const [feedbackMessage, setFeedbackMessage] = useState<string>("");
  const [targetWhatsAppUrl, setTargetWhatsAppUrl] = useState<string | null>(
    null
  );

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<AppointmentFormValues>({
    resolver: zodResolver(appointmentSchema),
    defaultValues: {
      patientName: "",
      phone: "",
      email: "",
      preferredDate: "",
      preferredTimeSlot: "morning",
      serviceId: servicesData[0]?.id || "general",
      consultationType: "in-person",
      notes: "",
    },
  });

  const selectedConsultationType = watch("consultationType");

  const onSubmit = async (data: AppointmentFormValues) => {
    setIsSubmitting(true);
    setSubmissionSuccess(null);
    setFeedbackMessage("");

    try {
      const result = await processAppointmentRequest(data);

      if (result.success) {
        setSubmissionSuccess(true);
        setFeedbackMessage(result.message);

        if (result.mode === "whatsapp" && result.whatsappUrl) {
          setTargetWhatsAppUrl(result.whatsappUrl);
          // Automatically trigger redirect in 1.5 seconds for pleasant user experience
          setTimeout(() => {
            window.open(result.whatsappUrl, "_blank", "noopener,noreferrer");
          }, 1200);
        }
      } else {
        setSubmissionSuccess(false);
        setFeedbackMessage(
          "We could not process your request at this moment. Please call our clinic directly."
        );
      }
    } catch {
      setSubmissionSuccess(false);
      setFeedbackMessage(
        "A network error occurred. Please call the clinic reception directly at " +
          clinicConfig.contact.phoneFormatted
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const [minDate, setMinDate] = useState<string>("");

  useEffect(() => {
    setMinDate(new Date().toISOString().split("T")[0]);
  }, []);

  return (
    <section
      id="appointment-section"
      className="py-16 sm:py-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Context, Trust & Instructions */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-50 border border-teal-100 text-teal-800 text-xs font-semibold">
              <ShieldCheck className="w-4 h-4 text-teal-700" />
              <span>Confidential Appointment Request</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
              Request a Consultation at Manorog Clinic
            </h2>

            <p className="text-base text-slate-600 leading-relaxed">
              We respect your privacy, time, and emotional peace. Complete the form to request a consultation slot. Our clinic reception in Amritsar will review our physician schedule and confirm your appointment with complete confidentiality.
            </p>

            {/* Step Guides */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5">
                <div className="w-7 h-7 rounded-full bg-teal-100 text-teal-900 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  1
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900">
                    Submit Details & Preferred Slot
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Select your preferred date, shift (morning or evening), and consultation focus.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-7 h-7 rounded-full bg-teal-100 text-teal-900 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  2
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900">
                    Instant WhatsApp Dispatch
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Your request is packaged into an easy message and directed straight to our verified clinic coordination desk.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-7 h-7 rounded-full bg-teal-100 text-teal-900 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  3
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900">
                    Prompt Slot Confirmation
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Our team checks the calendar and sends your confirmation with clinic arrival details.
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Telephone Fallback */}
            <div className="p-4 rounded-xl bg-slate-100/80 border border-slate-200">
              <p className="text-xs text-slate-600">
                Prefer to book over a quick phone call? Call our reception desk directly:
              </p>
              <a
                href={`tel:${clinicConfig.contact.phone}`}
                className="inline-flex items-center gap-2 mt-2 text-sm font-bold text-teal-900 hover:text-teal-700"
              >
                <Phone className="w-4 h-4 text-teal-700" />
                <span>{clinicConfig.contact.phoneFormatted}</span>
              </a>
              <p className="text-[11px] text-slate-500 mt-1">
                Operating Hours: {clinicConfig.hours.morningShift} & {clinicConfig.hours.eveningShift}
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Form Card */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl shadow-lg border border-slate-200/80 p-6 sm:p-8 relative">
              {submissionSuccess ? (
                <div className="py-8 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-teal-100 text-teal-800 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    Appointment Request Formatted
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    Your appointment request has been prepared. We are redirecting you to WhatsApp to connect with our Amritsar clinic desk.
                  </p>

                  {targetWhatsAppUrl && (
                    <div className="pt-2">
                      <a
                        href={targetWhatsAppUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 text-white font-semibold text-sm hover:bg-emerald-700 shadow-md transition-all"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>Continue to WhatsApp Now</span>
                      </a>
                    </div>
                  )}

                  <div className="p-4 mt-6 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-500 text-left">
                    <p className="font-semibold text-slate-700 mb-1">Important Patient Notice:</p>
                    <p>
                      A requested slot is not a final confirmed booking until our clinical staff verifies availability and replies with confirmation.
                    </p>
                  </div>

                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={() => {
                        setSubmissionSuccess(null);
                        reset();
                      }}
                      className="text-xs font-semibold text-teal-800 hover:underline"
                    >
                      &larr; Submit another request
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                  <div className="border-b border-slate-100 pb-3">
                    <h3 className="text-lg font-bold text-slate-900">
                      Patient & Consultation Details
                    </h3>
                    <p className="text-xs text-slate-500">
                      All fields marked with an asterisk (*) are required.
                    </p>
                  </div>

                  {/* Consultation Mode Selector */}
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-2">
                      Consultation Format *
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <label
                        className={`cursor-pointer flex items-center justify-center gap-2 p-3 rounded-xl border text-xs font-semibold transition-all ${
                          selectedConsultationType === "in-person"
                            ? "border-teal-700 bg-teal-50/80 text-teal-900 ring-1 ring-teal-700"
                            : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
                        }`}
                      >
                        <input
                          type="radio"
                          value="in-person"
                          {...register("consultationType")}
                          className="sr-only"
                        />
                        <Building2 className="w-4 h-4 text-teal-700" />
                        <span>In-Person (Clinic Visit)</span>
                      </label>

                      <label
                        className={`cursor-pointer flex items-center justify-center gap-2 p-3 rounded-xl border text-xs font-semibold transition-all ${
                          selectedConsultationType === "video"
                            ? "border-teal-700 bg-teal-50/80 text-teal-900 ring-1 ring-teal-700"
                            : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
                        }`}
                      >
                        <input
                          type="radio"
                          value="video"
                          {...register("consultationType")}
                          className="sr-only"
                        />
                        <Video className="w-4 h-4 text-teal-700" />
                        <span>Online Consultation</span>
                      </label>
                    </div>
                  </div>

                  {/* Name & Phone in 2 cols */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="patientName"
                        className="block text-xs font-medium text-slate-700 mb-1"
                      >
                        Patient Full Name *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                          <User className="w-4 h-4" />
                        </div>
                        <input
                          id="patientName"
                          type="text"
                          placeholder="e.g. Gurpreet Singh"
                          {...register("patientName")}
                          className={`w-full pl-9 pr-3 py-2.5 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 bg-white focus:outline-none focus:ring-2 ${
                            errors.patientName
                              ? "border-rose-400 focus:ring-rose-200"
                              : "border-slate-200 focus:border-teal-700 focus:ring-teal-100"
                          }`}
                        />
                      </div>
                      {errors.patientName && (
                        <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.patientName.message}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-xs font-medium text-slate-700 mb-1"
                      >
                        Mobile Phone Number *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                          <Phone className="w-4 h-4" />
                        </div>
                        <input
                          id="phone"
                          type="tel"
                          placeholder="e.g. 9876543210"
                          {...register("phone")}
                          className={`w-full pl-9 pr-3 py-2.5 rounded-xl border text-sm text-slate-900 placeholder:text-slate-400 bg-white focus:outline-none focus:ring-2 ${
                            errors.phone
                              ? "border-rose-400 focus:ring-rose-200"
                              : "border-slate-200 focus:border-teal-700 focus:ring-teal-100"
                          }`}
                        />
                      </div>
                      {errors.phone && (
                        <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.phone.message}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Service & Email in 2 cols */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="serviceId"
                        className="block text-xs font-medium text-slate-700 mb-1"
                      >
                        Consultation Specialty *
                      </label>
                      <select
                        id="serviceId"
                        {...register("serviceId")}
                        className={`w-full px-3 py-2.5 rounded-xl border text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 ${
                          errors.serviceId
                            ? "border-rose-400 focus:ring-rose-200"
                            : "border-slate-200 focus:border-teal-700 focus:ring-teal-100"
                        }`}
                      >
                        <option value="general">General Medical Consultation</option>
                        {servicesData.map((s) => (
                          <option key={s.id} value={s.id}>
                            {s.title}
                          </option>
                        ))}
                      </select>
                      {errors.serviceId && (
                        <p className="text-xs text-rose-500 mt-1">
                          {errors.serviceId.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-medium text-slate-700 mb-1"
                      >
                        Email Address (Optional)
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                          <Mail className="w-4 h-4" />
                        </div>
                        <input
                          id="email"
                          type="email"
                          placeholder="name@example.com"
                          {...register("email")}
                          className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 bg-white focus:outline-none focus:border-teal-700 focus:ring-2 focus:ring-teal-100"
                        />
                      </div>
                      {errors.email && (
                        <p className="text-xs text-rose-500 mt-1">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Date & Time Slot */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="preferredDate"
                        className="block text-xs font-medium text-slate-700 mb-1"
                      >
                        Preferred Date *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                          <Calendar className="w-4 h-4" />
                        </div>
                        <input
                          id="preferredDate"
                          type="date"
                          min={minDate}
                          {...register("preferredDate")}
                          className={`w-full pl-9 pr-3 py-2.5 rounded-xl border text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 ${
                            errors.preferredDate
                              ? "border-rose-400 focus:ring-rose-200"
                              : "border-slate-200 focus:border-teal-700 focus:ring-teal-100"
                          }`}
                        />
                      </div>
                      {errors.preferredDate && (
                        <p className="text-xs text-rose-500 mt-1">
                          {errors.preferredDate.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="preferredTimeSlot"
                        className="block text-xs font-medium text-slate-700 mb-1"
                      >
                        Preferred Shift *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                          <Clock className="w-4 h-4" />
                        </div>
                        <select
                          id="preferredTimeSlot"
                          {...register("preferredTimeSlot")}
                          className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 bg-white focus:outline-none focus:border-teal-700 focus:ring-2 focus:ring-teal-100"
                        >
                          <option value="morning">Morning (10:00 AM – 01:00 PM)</option>
                          <option value="afternoon">Afternoon (01:00 PM – 04:00 PM)</option>
                          <option value="evening">Evening (04:30 PM – 08:00 PM)</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Notes / Health Reason */}
                  <div>
                    <label
                      htmlFor="notes"
                      className="block text-xs font-medium text-slate-700 mb-1"
                    >
                      Brief Notes / Health Inquiries (Optional)
                    </label>
                    <div className="relative">
                      <div className="absolute top-3 left-3 pointer-events-none text-slate-400">
                        <FileText className="w-4 h-4" />
                      </div>
                      <textarea
                        id="notes"
                        rows={3}
                        placeholder="Share any specific symptom, duration, or timing preference..."
                        {...register("notes")}
                        className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 bg-white focus:outline-none focus:border-teal-700 focus:ring-2 focus:ring-teal-100"
                      />
                    </div>
                    {errors.notes && (
                      <p className="text-xs text-rose-500 mt-1">{errors.notes.message}</p>
                    )}
                  </div>

                  {/* Disclaimer check note */}
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-[11px] text-slate-500 flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                    <span>
                      Booking requests do not guarantee immediate slot reservation until verified by clinic staff. Your information is processed strictly in accordance with medical confidentiality standards.
                    </span>
                  </div>

                  {/* Error banner if submission failed */}
                  {submissionSuccess === false && (
                    <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl text-xs text-rose-700 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{feedbackMessage}</span>
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl bg-teal-800 hover:bg-teal-900 disabled:bg-teal-700/60 text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 active:scale-98"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-teal-200" />
                        <span>Preparing Request...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-teal-200" />
                        <span>Send Appointment Request via WhatsApp</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
