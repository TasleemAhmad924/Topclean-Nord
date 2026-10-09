"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  getStoredConsent,
  storeConsent,
  OPEN_COOKIE_BANNER_EVENT,
  COOKIE_CONSENT_CHANGED_EVENT,
} from "@/lib/cookieConsent";
import { Button } from "@/components/ui/Button";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(!getStoredConsent());
    const openBanner = () => setVisible(true);
    const onChange = () => setVisible(!getStoredConsent());
    window.addEventListener(OPEN_COOKIE_BANNER_EVENT, openBanner);
    window.addEventListener(COOKIE_CONSENT_CHANGED_EVENT, onChange);
    return () => {
      window.removeEventListener(OPEN_COOKIE_BANNER_EVENT, openBanner);
      window.removeEventListener(COOKIE_CONSENT_CHANGED_EVENT, onChange);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] border-t border-border bg-surface/98 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[1360px] flex-col gap-4 px-[18px] py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p className="max-w-2xl text-sm leading-relaxed text-ink/90">
          Wir verwenden ausschließlich technisch notwendige Cookies für den Betrieb dieser Website. Details finden Sie in
          unserer{" "}
          <Link href="/datenschutz" className="underline hover:text-brand">
            Datenschutzerklärung
          </Link>
          .
        </p>
        <div className="flex shrink-0 items-center gap-3">
          <Link href="/cookie-einstellungen" className="text-sm text-muted hover:text-brand">
            Einstellungen
          </Link>
          <Button
            onClick={() => {
              storeConsent();
              setVisible(false);
            }}
          >
            Verstanden
          </Button>
        </div>
      </div>
    </div>
  );
}
