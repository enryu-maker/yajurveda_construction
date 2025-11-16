import React from "react";

const ContactForm = () => {
    const gradientStyle = {
        background: "linear-gradient(to bottom, #4666D8 0%, #253672 100%)",
    };

    const inputClasses = `
    w-full px-5 py-4 text-white text-base sm:text-lg font-[PoppinsLight]
    bg-transparent border-2 border-white/30 rounded-xl
    focus:outline-none focus:border-white transition duration-200
    placeholder-white/70
  `;

    return (
        <div
            className="w-full min-h-screen flex items-center justify-center py-16 sm:py-20 px-4 sm:px-8 lg:px-16 text-white"
            style={gradientStyle}
        >
            {/* Panel */}
            <div className="w-full max-w-6xl p-6 sm:p-10 lg:p-14 rounded-[2rem] border-2 border-white/20 bg-white/5 relative overflow-visible">
                {/* Make sure interactive children are above any background or blur */}
                <div className="relative z-10">

                    {/* Header */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
                        <button className="px-6 sm:px-8 py-2 border-2 border-white/40 rounded-full text-base sm:text-lg lg:text-xl bg-white/5 hover:bg-white/20 transition">
                            Contact Us
                        </button>

                        <h2 className="text-3xl sm:text-5xl font-[PoppinsRegular] leading-snug text-right">
                            Start The
                            <br />
                            Conversation!
                        </h2>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {/* LEFT: FORM */}
                        <div className="flex flex-col space-y-6 pointer-events-auto">

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <input type="text" placeholder="Your Name" className={inputClasses} />
                                <input type="tel" placeholder="Phone Number" className={inputClasses} />
                            </div>

                            <input type="email" placeholder="Email Address" className={inputClasses} />

                            {/* Enquiries Dropdown */}
                            <div className="relative group">

                                <select
                                    className="
                                    w-full px-5 py-4 text-white text-base sm:text-lg font-[PoppinsLight]
                                    bg-white/5 border-2 border-white/30 rounded-xl
                                    appearance-none cursor-pointer
                                    focus:border-white focus:bg-white/10
                                    transition duration-300  
                                    "
                                >
                                    <option value="" hidden>Enquiries</option>
                                    <option className="text-black" value="sales">Sales</option>
                                    <option className="text-black" value="support">Support</option>
                                    <option className="text-black" value="other">Other</option>
                                </select>

                                {/* Custom Arrow */}
                                <div
                                    className="
      absolute inset-y-0 right-4 flex items-center
      pointer-events-none transition-transform duration-300
      group-focus-within:rotate-180
    "
                                >
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


                            {/* tagline + submit */}
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-2">
                                <p className="text-base sm:text-lg">Let's turn plans into possibilities</p>

                                {/* Submit button: high z-index to guarantee hover/click */}
                                <button
                                    type="submit"
                                    className="
                    relative z-50
                    px-10 py-3 text-lg sm:text-xl font-[PoppinsRegular]
                    bg-white text-[#253672] rounded-full
                    hover:bg-white/90 hover:scale-[1.05]
                    transition duration-300 shadow-md
                    pointer-events-auto
                  "
                                >
                                    Submit
                                </button>
                            </div>
                        </div>

                        {/* RIGHT: Address */}
                        <div className="flex justify-start md:justify-end items-end">
                            <p className="text-lg sm:text-xl lg:text-2xl font-[PoppinsRegular] leading-snug text-left md:text-right mt-4 md:mt-0">
                                Gangapur Road,
                                <br />
                                Nashik, 444001
                            </p>
                        </div>
                    </div>
                </div>

                {/* Optional soft decorative blur behind content but below interactive z-10 */}
                <div className="pointer-events-none absolute inset-0 rounded-[2rem] -z-10" aria-hidden>
                    {/* subtle inner glow / backdrop effect (non-interactive) */}
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
