import { NextResponse } from "next/server";

export const runtime = "nodejs";

interface ContactPayload {
  service: string;
  customerType: string;
  location?: string;
  objectCount?: string;
  company?: string;
  name: string;
  email: string;
  phone?: string;
  message?: string;
  consent: boolean;
}

const services = new Set([
  "unterhaltsreinigung",
  "hausmeisterservice",
  "winterdienst",
  "treppenhausreinigung",
  "ferienwohnungsreinigung",
  "glasreinigung",
  "bauendreinigung",
  "sonstiges",
]);

const customerTypes = new Set([
  "kita-soziale-einrichtung",
  "praxis",
  "buero-gewerbe",
  "hausverwaltung-weg",
  "wohnungsunternehmen",
  "ferienvermietung-agentur",
  "sonstiges",
]);

const objectCounts = new Set(["", "1", "2-5", "6-10", "11+"]);

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function isOptionalText(value: unknown, maxLength: number): boolean {
  return value === undefined || (
    typeof value === "string" &&
    value.length <= maxLength
  );
}

function isValid(payload: unknown): payload is ContactPayload {
  if (!isRecord(payload)) return false;

  return (
    typeof payload.service === "string" &&
    services.has(payload.service) &&
    typeof payload.customerType === "string" &&
    customerTypes.has(payload.customerType) &&
    typeof payload.name === "string" &&
    payload.name.trim().length > 1 &&
    payload.name.length <= 120 &&
    typeof payload.email === "string" &&
    payload.email.length <= 320 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email) &&
    isOptionalText(payload.location, 120) &&
    isOptionalText(payload.company, 160) &&
    isOptionalText(payload.phone, 40) &&
    isOptionalText(payload.message, 2000) &&
    (payload.objectCount === undefined ||
      (typeof payload.objectCount === "string" && objectCounts.has(payload.objectCount))) &&
    payload.consent === true
  );
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body || !isValid(body)) {
    return NextResponse.json({ error: "Bitte alle Pflichtfelder gültig ausfüllen." }, { status: 400 });
  }

  const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
  if (!webhookUrl) {
    return NextResponse.json(
      { error: "Das Anfrageformular ist derzeit nicht erreichbar." },
      { status: 503 },
    );
  }

  let response: Response;
  try {
    response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      signal: AbortSignal.timeout(10_000),
    });
  } catch (error) {
    console.error(
      "Failed to forward contact submission",
      error instanceof Error ? error.name : "Unknown error",
    );
    return NextResponse.json(
      { error: "Die Anfrage konnte nicht übermittelt werden. Bitte versuchen Sie es erneut." },
      { status: 502 },
    );
  }

  if (!response.ok) {
    console.error("Contact webhook returned an unsuccessful response", response.status);
    return NextResponse.json(
      { error: "Die Anfrage konnte nicht übermittelt werden. Bitte versuchen Sie es erneut." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
