"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { mailHref } from "@/lib/site";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage(null);

    const form = event.currentTarget;
    const data = new FormData(form);
    // honeypot field – real users never fill a visually-hidden field
    if (data.get("website")) {
      setStatus("error");
      setErrorMessage("Die Anfrage konnte nicht verarbeitet werden.");
      return;
    }

    const payload = {
      service: String(data.get("service") ?? ""),
      customerType: String(data.get("customerType") ?? ""),
      location: String(data.get("location") ?? ""),
      objectCount: String(data.get("objectCount") ?? ""),
      company: String(data.get("company") ?? ""),
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      phone: String(data.get("phone") ?? ""),
      message: String(data.get("message") ?? ""),
      consent: data.get("consent") === "on",
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.error ?? "Senden fehlgeschlagen.");
      }
      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Senden fehlgeschlagen.");
    }
  }

  if (status === "success") {
    return (
      <div role="status" aria-live="polite" className="border border-border bg-background p-8 text-[15px] text-ink">
        Vielen Dank für Ihre Nachricht. Wir melden uns zeitnah bei Ihnen zurück.
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="request-form flex flex-col gap-4"
      aria-busy={status === "submitting"}
    >
      <p className="text-xs text-muted">Pflichtfelder sind mit * markiert.</p>

      <div className="hidden" aria-hidden>
        <label htmlFor="website">Website</label>
        <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-ink">
            Gewünschte Leistung *
          </label>
          <select id="service" name="service" required defaultValue="">
            <option value="" disabled>Bitte auswählen</option>
            <option value="unterhaltsreinigung">Unterhaltsreinigung</option>
            <option value="hausmeisterservice">Hausmeisterservice</option>
            <option value="winterdienst">Winterdienst</option>
            <option value="treppenhausreinigung">Treppenhausreinigung</option>
            <option value="ferienwohnungsreinigung">Ferienwohnungsreinigung</option>
            <option value="glasreinigung">Glas- und Fensterreinigung</option>
            <option value="bauendreinigung">Bauendreinigung</option>
            <option value="sonstiges">Sonstiges</option>
          </select>
        </div>
        <div>
          <label htmlFor="customerType" className="mb-1.5 block text-sm font-medium text-ink">
            Objektart / Kundentyp *
          </label>
          <select id="customerType" name="customerType" required defaultValue="">
            <option value="" disabled>Bitte auswählen</option>
            <option value="kita-soziale-einrichtung">Kita / soziale Einrichtung</option>
            <option value="praxis">Praxis</option>
            <option value="buero-gewerbe">Büro / Gewerbe</option>
            <option value="hausverwaltung-weg">Hausverwaltung / WEG</option>
            <option value="wohnungsunternehmen">Wohnungsunternehmen / gewerblicher Vermieter</option>
            <option value="ferienvermietung-agentur">Ferienvermietung / Agentur</option>
            <option value="sonstiges">Sonstiges</option>
          </select>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="location" className="mb-1.5 block text-sm font-medium text-ink">
            Ort / Postleitzahl
          </label>
          <input id="location" name="location" type="text" maxLength={120} autoComplete="postal-code" />
        </div>
        <div>
          <label htmlFor="objectCount" className="mb-1.5 block text-sm font-medium text-ink">
            Anzahl Objekte
          </label>
          <select id="objectCount" name="objectCount" defaultValue="">
            <option value="">Keine Angabe</option>
            <option value="1">1</option>
            <option value="2-5">2–5</option>
            <option value="6-10">6–10</option>
            <option value="11+">11 oder mehr</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="company" className="mb-1.5 block text-sm font-medium text-ink">
          Unternehmen / Organisation
        </label>
        <input id="company" name="company" type="text" maxLength={160} autoComplete="organization" />
      </div>

      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink">
          Ansprechperson *
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          minLength={2}
          maxLength={120}
          autoComplete="name"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink">
            E-Mail *
          </label>
          <input id="email" name="email" type="email" required maxLength={320} autoComplete="email" />
        </div>
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-ink">
            Telefon
          </label>
          <input id="phone" name="phone" type="tel" maxLength={40} autoComplete="tel" />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink">
          Was sollten wir zum Bedarf wissen? (optional)
        </label>
        <textarea id="message" name="message" maxLength={2000} rows={4} />
      </div>

      <label className="flex items-start gap-2.5 text-sm text-muted">
        <input
          type="checkbox"
          name="consent"
          required
          className="mt-1 h-4 w-4 shrink-0 rounded border-border text-brand focus-visible:outline-2 focus-visible:outline-brand"
        />
        <span>
          Ich habe die <Link href="/datenschutz" className="underline underline-offset-2">Datenschutzerklärung</Link> gelesen
          und stimme der Verarbeitung meiner Daten zu. *
        </span>
      </label>

      {status === "error" && (
        <p role="alert" aria-live="assertive" className="text-sm text-red-700">
          {errorMessage} <a href={mailHref}>Kontaktieren Sie uns per E-Mail.</a>
        </p>
      )}

      <Button type="submit" disabled={status === "submitting"} className="mt-2 w-full sm:w-auto">
        {status === "submitting" ? "Wird gesendet…" : "Nachricht senden"}
      </Button>
    </form>
  );
}
