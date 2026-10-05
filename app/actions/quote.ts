"use server";

export type QuoteFormState = {
  status: "idle" | "success" | "error";
  message: string;
  fieldErrors: Partial<Record<string, string>>;
};

export async function submitQuote(
  _prevState: QuoteFormState,
  formData: FormData,
): Promise<QuoteFormState> {
  const companyHoneypot = formData.get("company")?.toString().trim();
  if (companyHoneypot) {
    return {
      status: "success",
      message: "Thank you! Your quote request has been received.",
      fieldErrors: {},
    };
  }

  const fullName = formData.get("fullName")?.toString().trim() ?? "";
  const email = formData.get("email")?.toString().trim() ?? "";
  const phone = formData.get("phone")?.toString().trim() ?? "";
  const pickupLocation = formData.get("pickupLocation")?.toString().trim() ?? "";
  const dropoffLocation = formData.get("dropoffLocation")?.toString().trim() ?? "";
  const pickupDate = formData.get("pickupDate")?.toString().trim() ?? "";
  const dropoffDate = formData.get("dropoffDate")?.toString().trim() ?? "";
  const vehiclePreference = formData.get("vehiclePreference")?.toString().trim() ?? "";
  const message = formData.get("message")?.toString().trim() ?? "";
  const source = formData.get("source")?.toString().trim() ?? "website";

  const fieldErrors: Partial<Record<string, string>> = {};

  if (!fullName) fieldErrors.fullName = "Please enter your name.";
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    fieldErrors.email = "Please enter a valid email address.";
  }
  if (!pickupLocation) {
    fieldErrors.pickupLocation = "Please enter a pick-up city or airport.";
  }

  if (Object.keys(fieldErrors).length > 0) {
    return {
      status: "error",
      message: "Please correct the highlighted fields.",
      fieldErrors,
    };
  }

  const payload = {
    fullName,
    email,
    phone,
    pickupLocation,
    dropoffLocation: dropoffLocation || pickupLocation,
    pickupDate,
    dropoffDate,
    vehiclePreference,
    message,
    source,
    submittedAt: new Date().toISOString(),
  };

  const webhook = process.env.LEAD_WEBHOOK_URL;
  if (webhook) {
    try {
      await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } catch (e) {
      console.error("Failed to forward lead to webhook:", e);
    }
  } else {
    console.log("[ReservationDesk Lead Received]:", payload);
  }

  return {
    status: "success",
    message:
      "Thank you for contacting ReservationDesk! Your enquiry has been routed to our reservation team. We will review vehicle availability and send options to your email shortly.",
    fieldErrors: {},
  };
}
