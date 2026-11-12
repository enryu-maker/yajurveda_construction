import { useState } from "react";
import { useTranslation } from "react-i18next";
import { PHONE_DISPLAY, TEL, WHATSAPP } from "../../contact";

const MAP_SRC = "https://www.google.com/maps?q=Shaligram+Apartment,+D%27Souza+Colony,+Nashik+422002&output=embed";

const field = "w-full px-4 py-3.5 text-white text-base sm:text-lg font-[PoppinsRegular] bg-white/10 border-2 border-white/40 rounded-xl focus:outline-none focus:border-white transition placeholder-white/80";
const label = "block mb-2 text-base font-[PoppinsMedium] text-white";

const ContactForm = () => {
  const { t } = useTranslation("contact");
  const [status, setStatus] = useState(null); // null | sending | success | error
  const options = t("form.options", { returnObjects: true });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    setStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/mgvdlgvo", {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error(`Formspree ${res.status}`);
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error"); // form values are kept so the visitor can retry
    }
  };

  return (
    <section
      id="contact"
      className="w-full flex items-center justify-center scroll-mt-28 py-16 sm:py-24 px-4 sm:px-8 lg:px-16 text-white bg-gradient-to-b from-[#2f4596] to-[#1d2b5c]"
    >
      <div className="w-full max-w-6xl p-6 sm:p-10 lg:p-14 rounded-[2rem] border-2 border-white/20 bg-white/5">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-5xl font-[PoppinsSbold] leading-tight">
            {t("header.titleLine1")} {t("header.titleLine2")}
          </h2>
          <p className="mt-4 text-lg text-white/90">
            <a href={TEL} className="font-[PoppinsSbold] underline underline-offset-4">{PHONE_DISPLAY}</a>
            {" · "}
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">WhatsApp</a>
          </p>
        </div>

        <div role="status" aria-live="polite">
          {status === "success" && (
            <div className="mb-6 p-5 rounded-2xl bg-white text-[#1d2b5c]">
              <p className="text-lg font-[PoppinsSbold]">{t("form.successTitle")}</p>
              <p className="mt-1">{t("form.callback")}</p>
            </div>
          )}
          {status === "error" && (
            <div className="mb-6 p-5 rounded-2xl bg-white text-[#8a1c1c]">
              <p className="text-lg font-[PoppinsSbold]">{t("form.errorTitle")}</p>
              <p className="mt-1">
                {t("form.errorMessage")}{" "}
                <a href={TEL} className="underline font-[PoppinsSbold]">{PHONE_DISPLAY}</a>
              </p>
            </div>
          )}
        </div>

        <form autoComplete="on" onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
          <div className="flex flex-col gap-5">
            <div>
              <label htmlFor="cf-name" className={label}>{t("form.labelName")}</label>
              <input id="cf-name" type="text" name="name" autoComplete="name" className={field} required />
            </div>
            <div>
              <label htmlFor="cf-phone" className={label}>{t("form.labelPhone")}</label>
              <input id="cf-phone" type="tel" name="phone" autoComplete="tel" inputMode="tel" pattern="[0-9+\s\-]{10,15}" className={field} required />
            </div>
            <div>
              <label htmlFor="cf-email" className={label}>{t("form.labelEmail")}</label>
              <input id="cf-email" type="email" name="email" autoComplete="email" className={field} />
            </div>
            <div>
              <label htmlFor="cf-enquiry" className={label}>{t("form.labelEnquiry")}</label>
              <select id="cf-enquiry" name="enquiry_type" className={`${field} cursor-pointer`} defaultValue={options[0]}>
                {options.map((o) => <option key={o} value={o} className="text-black">{o}</option>)}
              </select>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full sm:w-auto px-10 py-3.5 text-lg font-[PoppinsSbold] bg-white text-[#253672] rounded-full hover:bg-[#dfe5fb] transition disabled:opacity-70 disabled:cursor-wait"
              >
                {t("form.submitButton")}
              </button>
              <p className="mt-3 text-base text-white/90">{t("form.callback")}</p>
            </div>
          </div>

          <div className="w-full h-72 md:h-full min-h-72">
            <iframe
              src={MAP_SRC}
              className="w-full h-full rounded-xl"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Yajurved Construction office, D'Souza Colony, Nashik"
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
