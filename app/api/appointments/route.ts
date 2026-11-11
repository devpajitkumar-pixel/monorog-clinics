import { NextRequest, NextResponse } from "next/server";
import { appointmentSchema } from "@/lib/validations/appointment";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate the incoming payload against the appointment schema
    const validationResult = appointmentSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        {
          error: "Invalid appointment request data",
          details: validationResult.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const data = validationResult.data;

    // Standardized Booking Reference ID
    const bookingRef = `M-APP-${Date.now().toString().slice(-6)}`;

    // In a production backend, this is where CRM/EMR dispatch or database storage occurs.
    // For now, this serves as the validated architectural hook.

    return NextResponse.json(
      {
        success: true,
        id: bookingRef,
        message: "Appointment request received successfully.",
        patientName: data.patientName,
        preferredDate: data.preferredDate,
        preferredSlot: data.preferredTimeSlot,
        status: "pending_verification",
      },
      { status: 201 }
    );
  } catch {
    return NextResponse.json(
      {
        error: "Internal server error while processing appointment request",
      },
      { status: 500 }
    );
  }
}
