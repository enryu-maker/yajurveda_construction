import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { TEL } from "../../contact";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xgvdllej";
const field = "w-full mt-1 p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#253672] outline-none text-base font-[PoppinsRegular]";

// Short, translated call-back request. Closes on Esc or backdrop click.
export default function PopupForm({ onClose }) {
  const { t } = useTranslation("popup");
  const [status, setStatus] = useState(null); // null | sending | success | error
  const firstField = useRef(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    firstField.current?.focus();
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, { method: "POST", body: new FormData(e.target), headers: { Accept: "application/json" } });
      if (!res.ok) throw new Error(`Formspree ${res.status}`);
      setStatus("success");
      try { localStorage.setItem("formFilled", "1"); } catch { /* storage blocked: popup is session-limited anyway */ }
      setTimeout(onClose, 2500);
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/40 p-4" onClick={onClose}>
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="popup-title"
        className="relative bg-white rounded-2xl shadow-xl w-full max-w-md p-6 sm:p-8 text-[#253672]"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} aria-label={t("close")} className="absolute top-3 right-3 w-11 h-11 flex items-center justify-center rounded-full text-gray-600 hover:bg-gray-100">
          <svg aria-hidden="true" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
        </button>

        {status === "success" ? (
          <div role="status" className="py-6 text-center">
            <h2 className="text-2xl font-[PoppinsSbold]">{t("successTitle")}</h2>
            <p className="mt-2 text-lg">{t("successMessage")}</p>
          </div>
        ) : (
          <>
            <h2 id="popup-title" className="text-2xl font-[PoppinsSbold] pr-10">{t("title")}</h2>
            <p className="mt-2 text-base text-gray-700">{t("subtitle")}</p>

            {status === "error" && (
              <p role="alert" className="mt-4 p-3 rounded-xl bg-red-50 text-red-800">
                {t("errorMessage")} <a href={TEL} className="underline font-[PoppinsSbold]">+91 97370 73390</a>
              </p>
            )}

            <form className="mt-5 space-y-4" onSubmit={handleSubmit}>
              <label className="block text-base font-[PoppinsMedium]">
                {t("name")}
                <input ref={firstField} required name="name" autoComplete="name" className={field} />
              </label>
              <label className="block text-base font-[PoppinsMedium]">
                {t("phone")}
                <input required name="number" type="tel" inputMode="tel" autoComplete="tel" pattern="[0-9+\s\-]{10,15}" className={field} />
              </label>
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full p-3.5 rounded-xl bg-[#253672] hover:bg-[#1a2555] text-white text-lg font-[PoppinsSbold] transition disabled:opacity-70 disabled:cursor-wait"
              >
                {status === "sending" ? t("submitting") : t("submit")}
              </button>
            </form>
            <p className="mt-3 text-sm text-gray-600 text-center">{t("privacy")}</p>
          </>
        )}
      </div>
    </div>
  );
}
