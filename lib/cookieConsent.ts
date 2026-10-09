export type CookieConsent = {
  necessary: true;
  decidedAt: string;
};

const STORAGE_KEY = "topclean-cookie-consent";

export function getStoredConsent(): CookieConsent | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as CookieConsent) : null;
  } catch {
    return null;
  }
}

export function storeConsent() {
  const consent: CookieConsent = { necessary: true, decidedAt: new Date().toISOString() };
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
  window.dispatchEvent(new CustomEvent("topclean:cookie-consent-changed"));
}

export function clearConsent() {
  window.localStorage.removeItem(STORAGE_KEY);
  window.dispatchEvent(new CustomEvent("topclean:cookie-consent-changed"));
}

export const COOKIE_CONSENT_CHANGED_EVENT = "topclean:cookie-consent-changed";
export const OPEN_COOKIE_BANNER_EVENT = "topclean:open-cookie-banner";
