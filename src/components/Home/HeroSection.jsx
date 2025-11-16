import React from "react";
import skylineImageUrl from "../../assets/Home/Hero/vector3.png";
import HeroBg from "../../assets/Home/Hero/Hero_bg.jpg";

const HeroSection = () => {
  return (
    <div
      className="
        relative min-h-screen text-white 
        flex flex-col items-center justify-start
        px-4 sm:px-8 lg:px-16 
        pt-36 sm:pt-40 md:pt-44 lg:pt-28 
        pb-6
        overflow-hidden
      "
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${HeroBg})` }}
      ></div>

      {/* Blue Gradient */}
      <div className="absolute inset-0 bg-[#0a1128]/90 z-0"></div>

      {/* Content Grid */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-7xl w-full mx-auto">

        {/* LEFT SIDE */}
        <div className="flex flex-col justify-center">

          {/* Tagline */}
          <p className="text-sm md:text-lg font-[PoppinsItalic] text-center lg:text-left opacity-80 mb-3">
            Building Dreams. Developing Lands. Redefining Spaces.
          </p>

          {/* Heading Container */}
          <div className="relative">
            <div className=" my-4  ">
              <h1
                className="
                text-4xl sm:text-6xl  lg:text-7xl 
                py-4 px-8 sm:px-12 lg:px-10
                leading-snug mb-6
                font-[PoppinsElight]
                text-center lg:text-left
              "
              >
                Spirituality.
                <br />
                Architecture.
                <br />
                Legacy.
              </h1>
            </div>


            {/* Explore Button */}
            <div className="flex justify-center lg:justify-end">
              <button
                className="
                  px-10 py-3 text-xl font-[PoppinsElight]
                  bg-white/10 
                  border-2 border-white 
                  rounded-2xl
                  hover:bg-white hover:text-[#0a1128]
                  transition duration-300
                "
              >
                explore
              </button>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm md:text-lg mt-4 max-w-lg font-[PoppinsElight] text-center lg:text-left mx-auto lg:mx-0">
            Yajurveda Construction delivers modern, durable, and thoughtfully designed spaces.
          </p>
        </div>

        {/* RIGHT SIDE — HIDDEN on sm & md */}
        <div className="hidden lg:flex items-center justify-center">
          <div className="relative w-full max-w-xl pointer-events-none">
            <img
              src={skylineImageUrl}
              className="w-full h-auto block object-contain"
              alt="Skyline"
            />

            {/* Overlay Text */}
            <p className="absolute top-8 left-18 text-white text-right px-4 py-2 font-[PoppinsMedium]">
              crafting modern skyline rooted in ancient wisdom
            </p>

            {/* Arrow Button */}
            <div
              className="
                absolute bottom-6 right-6 
                p-3 bg-white/10 
                border-2 border-white rounded-full 
                cursor-pointer pointer-events-auto
                group hover:bg-white transition duration-300
              "
            >
              <svg
                className="w-5 h-5 text-white transform rotate-225 group-hover:text-[#0a1128]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Name */}
      <p className="z-10 text-sm mt-6 font-[PoppinsMedium] text-center">
        YAJURVEDA CONSTRUCTION PVT. LTD.
      </p>
    </div>
  );
};

export default HeroSection;
