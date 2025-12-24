/**
 * Copyright © 2025 metasyndikate. All rights reserved.
 */

import { useEffect, useState } from "react";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [ndaAccepted, setNdaAccepted] = useState(false);

  useEffect(() => {
    const cookiesOk = localStorage.getItem("cookieConsent") === "true";
    const ndaOk = localStorage.getItem("ndaConsent") === "true";
    setNdaAccepted(ndaOk);
    setVisible(!(cookiesOk && ndaOk));
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "true");
    // Only hide if NDA already accepted
    const ndaOk = localStorage.getItem("ndaConsent") === "true";
    if (ndaOk) setVisible(false);
  };

  const acceptCookiesAndNda = () => {
    localStorage.setItem("cookieConsent", "true");
    localStorage.setItem("ndaConsent", "true");
    setNdaAccepted(true);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50">
      <div className="mx-auto max-w-5xl m-4 rounded-lg border border-slate-200 bg-white p-4 shadow-xl">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="text-slate-700 text-sm leading-relaxed">
            <p className="font-medium text-slate-900 mb-1">We use cookies.</p>
            <p>
              We use cookies for privacy and policy reasons to improve your experience. By continuing, you agree to our
              <a href="#privacy" className="text-blue-600 hover:underline mx-1">Privacy Policy</a>
              and acknowledge our
              <a href="#nda" className="text-blue-600 hover:underline mx-1">Non‑Disclosure Agreement (NDA)</a> for business inquiries.
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={acceptCookies}
              className="px-3 py-2 rounded-md border border-slate-300 text-slate-700 hover:bg-slate-50 text-sm"
            >
              Accept Cookies
            </button>
            <button
              onClick={acceptCookiesAndNda}
              className="px-3 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 text-sm"
            >
              Accept Cookies + NDA
            </button>
          </div>
        </div>
        {!ndaAccepted && (
          <p className="text-[12px] mt-2 text-slate-500">
            For business page access, accepting the NDA is recommended.
          </p>
        )}
      </div>
    </div>
  );
}
