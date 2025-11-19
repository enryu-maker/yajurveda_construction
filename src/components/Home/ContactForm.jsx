import React from "react";

const ContactForm = () => {
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
    <div
      className="w-full min-h-screen flex items-center justify-center rounded-b-4xl py-16 sm:py-20 px-4 sm:px-8 lg:px-16 text-white"
      style={gradientStyle}
    >
      {/* Outer Panel */}
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

          {/* ---- Header ---- */}
          <div className="flex flex-col-reverse md:flex-row justify-between items-start md:items-center gap-6 mb-12">

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-[PoppinsRegular] leading-tight">
              Start The
              <br />
              Conversation!
            </h2>

            <button className="
              px-6 sm:px-8 py-2 
              border-2 border-white/40 
              rounded-full 
              text-base sm:text-lg lg:text-xl 
              bg-white/10 hover:bg-white/20 
              transition duration-300
            ">
              Contact Us
            </button>
          </div>

          {/* ---- Main Grid ---- */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

            {/* LEFT COLUMN — FORM */}
            <div className="flex flex-col space-y-6">

              {/* Name + Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 ">
                <input type="text" placeholder="Your Name" className={inputClasses} />
                <input type="tel" placeholder="Phone Number" className={inputClasses} />
              </div>

              {/* Email */}
              <input type="email" placeholder="Email Address" className={inputClasses} />

              {/* Dropdown */}
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
                  <option value="" hidden>Enquiries</option>
                  <option className="text-black font-[PoppinsElight]" value="sales">Sales</option>
                  <option className="text-black font-[PoppinsElight]" value="support">Support</option>
                  <option className="text-black font-[PoppinsElight]" value="other">Other</option>
                </select>

                {/* Arrow */}
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

              {/* Footer: Tagline + Submit */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-4">

                <p className="text-base sm:text-lg">
                  Let's turn plans into possibilities
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
                  Submit
                </button>
              </div>
            </div>

            {/* RIGHT COLUMN — MAP */}
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

        {/* visual background layer */}
        <div className="absolute inset-0 rounded-[2rem] -z-10 pointer-events-none" />
      </div>
    </div>
  );
};

export default ContactForm;
