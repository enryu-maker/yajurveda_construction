import React from "react";
import backgroundImage from "../../assets/Home/About/About_bg.jpg";
import realEstateImage from "../../assets/Home/About/real_estate.jpg";
import litigationImage from "../../assets/Home/About/litigation.jpg";
import constructionImage from "../../assets/Home/About/construction.jpg";

const AboutUsAndServices = () => {
  const cardBgColor = "#253672";

  const services = [
    {
      image: realEstateImage,
      title: "Real Estate Development",
      description:
        "We deliver high-quality residential, commercial, industrial, and land development projects focused on long-term value. From planning and designing to execution and handover, our team ensures structural excellence, premium build quality, and timely delivery — helping clients invest confidently and live securely.",
    },
    {
      image: litigationImage,
      title: "Litigation Property",
      description:
        "We provide expert assistance for properties involved in legal disputes or documentation issues. Whether you're looking to resolve a conflict, sell a disputed property, or verify legal status, our team ensures safe, transparent, and reliable guidance throughout the process.",
    },
    {
      image: constructionImage,
      title: "Construction Management",
      description:
        "From budgeting and material procurement to vendor coordination, on-site supervision and quality checks, we manage every stage of construction efficiently. Our structured approach ensures your project runs smoothly, finishes on time, and stays within the planned budget — with complete transparency at every step.",
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#f0f2f5] text-gray-800 overflow-hidden pb-20">
      {/* Background Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10 z-0"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>

      {/* MAIN CONTAINER */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-16">

        {/* --------------------- ABOUT SECTION ---------------------- */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10 ">

          {/* LEFT CONTENT */}
          <div className="lg:w-3/5">
            {/* About Us Button */}
            <button className="px-6 py-2 text-md font-[PoppinsRegular] border border-[#253672] text-[#253672] rounded-full hover:bg-gray-200 transition">
              About Us
            </button>

            {/* HEADING */}
            <h1 className="mt-6 text-3xl sm:text-5xl lg:text-6xl leading-tight font-[PoppinsRegular] text-[#253672]">
              Crafted with <strong>care</strong>,
              <br />
              Delivered with <strong>precision</strong>.
            </h1>

            {/* PARAGRAPHS */}
            <p className="mt-6 text-base sm:text-lg max-w-3xl font-[PoppinsRegular] text-[#253672]">
              Founded in 2026, Yajurveda Construction began as a small real estate development group in Nashik. Over the years, we have grown into a multi-disciplinary construction and property development company, serving clients across India.
            </p>

            <p className="mt-4 text-base sm:text-lg max-w-3xl font-[PoppinsRegular] text-[#253672]">
              What started as a local development initiative has now evolved into a trusted brand in:
              <ol>
                <li> &bull; Construction & Infrastructure</li>
                <li> &bull; Land Development</li>
                <li> &bull; Re-development Projects</li>
                <li> &bull; Commercial & Industrial Parks</li>
                <li> &bull; Agricultural and Natural Villa Projects</li>
                <li> &bull; Real Estate Investment Support & Consultancy</li>
              </ol>
            </p>
            <p className="mt-4 text-base sm:text-lg max-w-3xl font-[PoppinsRegular] text-[#253672]">
              Our growth is fueled by our commitment to transparency, innovation, long-term vision, and customer-first values.
            </p>
          </div>

        </div>

        {/* RIGHT BUTTON */}
        <div className="flex justify-end ">
          <div className="flex">
            <button
              className="
              group
              px-8 py-2
              flex items-center gap-3 
              bg-[#253672] text-white 
              rounded-full text-lg transition 
              hover:bg-white hover:text-[#253672] 
              border border-[#253672]
            "
            >
              <div
                className="
                p-2
                border-2 border-white rounded-full 
                transition duration-300
                group-hover:bg-white
                group-hover:border-[#253672]
              "
              >
                <svg
                  className="
                  w-5 h-5 text-white transform rotate-225 
                  transition duration-300
                  group-hover:text-[#253672]
                "
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

              Learn More
            </button>
          </div>

        </div>

        {/* --------------------- SERVICES SECTION ---------------------- */}
        <div className="mt-20">
          {/* HEADING ROW */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12">
            <h2 className="text-3xl sm:text-5xl font-[PoppinsRegular] text-[#253672]">
              Our Services
            </h2>

            <button className="px-6 py-2 text-sm border border-[#253672] rounded-full text-[#253672] font-[PoppinsRegular] hover:bg-gray-200 transition">
              What We Offer
            </button>
          </div>

          {/* SERVICES GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-[#253672] rounded-xl shadow-lg overflow-hidden flex flex-col"
              >
                <div className="h-48 w-full overflow-hidden p-4">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>

                <div className="p-6 text-white flex flex-col">
                  <h3 className="text-2xl font-[PoppinsSbold]">
                    {service.title}
                  </h3>
                  <hr className="my-4 border-white/40" />
                  <p className="text-gray-300">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Scroll Arrow */}
      <div className="absolute bottom-8 right-8 p-3 bg-[#253672] rounded-full cursor-pointer hover:bg-white transition group">
        <svg
          className="w-6 h-6 text-white group-hover:text-[#253672]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </div>



    </div>
  );
};

export default AboutUsAndServices;
