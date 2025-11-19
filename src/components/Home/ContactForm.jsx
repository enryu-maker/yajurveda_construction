import React from "react";
import { useTranslation } from "react-i18next";

const ContactForm = () => {
  const { t } = useTranslation('contact');

  const gradientStyle = {
    background: "linear-gradient(to bottom, #4666D8 0%, #253672 100%)",
  };

  const inputClasses = `
    w-full px-5 py-4 text-white text-base sm:text-lg font-[PoppinsElight]
    bg-white/5 border-2 border-white/30 rounded-xl
    focus:outline-none focus:border-white transition duration-300
    placeholder-white/70 backdrop-blur-sm
  `;

  return (
    <div id="contact"
      className="w-full min-h-screen flex items-center justify-center rounded-b-4xl py-16 sm:py-20 px-4 sm:px-8 lg:px-16 text-white"
      style={gradientStyle}
    >
      <div className="
          w-full max-w-6xl 
          p-6 sm:p-10 lg:p-14 
          rounded-[2rem] 
          border-2 border-white/20 
          bg-white/5 
          backdrop-blur-md
          relative
      ">
        <div className="relative z-10">

          <div className="flex flex-col-reverse md:flex-row justify-between items-start md:items-center gap-6 mb-12">

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-[PoppinsRegular] leading-tight">
              {t('header.titleLine1')}
              <br />
              {t('header.titleLine2')}
            </h2>

            <button className="
              px-6 sm:px-8 py-2 
              border-2 border-white/40 
              rounded-full 
              text-base sm:text-lg lg:text-xl 
              bg-white/10 hover:bg-white/20 
              transition duration-300
            ">
              {t('header.button')}
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

            <div className="flex flex-col space-y-6">

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 ">
                <input type="text" placeholder={t('form.placeholderName')} className={inputClasses} />
                <input type="tel" placeholder={t('form.placeholderPhone')} className={inputClasses} />
              </div>

              <input type="email" placeholder={t('form.placeholderEmail')} className={inputClasses} />

              <div className="relative group">
                <select
                  className="
                    w-full px-5 py-4 text-white text-base sm:text-lg font-[PoppinsElight]
                    bg-white/5 border-2 border-white/30 rounded-xl
                    appearance-none cursor-pointer
                    focus:border-white focus:bg-white/10
                    transition duration-300 backdrop-blur-sm
                  "
                >
                  <option value="" hidden>{t('form.dropdownEnquiries')}</option>
                  <option className="text-black font-[PoppinsElight]" value="sales">{t('form.optionSales')}</option>
                  <option className="text-black font-[PoppinsElight]" value="support">{t('form.optionSupport')}</option>
                  <option className="text-black font-[PoppinsElight]" value="other">{t('form.optionOther')}</option>
                </select>

                <div className="
                  absolute inset-y-0 right-4 flex items-center 
                  pointer-events-none 
                  transition-transform duration-300 
                  group-focus-within:rotate-180
                ">
                  <svg
                    className="w-5 h-5 text-white/80"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-4">

                <p className="text-base sm:text-lg">
                  {t('form.tagline')}
                </p>

                <button
                  type="submit"
                  className="
                    px-10 py-3 
                    text-lg sm:text-xl 
                    font-[PoppinsRegular] 
                    bg-white text-[#253672] 
                    rounded-full
                    hover:bg-white/90 hover:scale-105
                    transition duration-300 shadow-md
                  "
                >
                  {t('form.submitButton')}
                </button>
              </div>
            </div>

            <div className="flex justify-center md:justify-end items-start">
              <div className="w-full h-64 sm:h-72 md:h-full max-h-[380px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119981.3910747068!2d73.72107897383854!3d19.99094401312182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddd290b09914b3%3A0xcb07845d9d28215c!2sNashik%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1763295720649!5m2!1sen!2sin"
                  className="w-full h-full rounded-xl"
                  style={{ border: "0" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Map"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute inset-0 rounded-[2rem] -z-10 pointer-events-none" />
      </div>
    </div>
  );
};

export default ContactForm;