import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ServicesSection({ services, t }) {
  return (
    <div id="services" className="mt-20">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12">
        <h2 className="text-3xl sm:text-5xl font-[PoppinsRegular] text-[#253672]">
          {t("servicesSection.heading")}
        </h2>

        <button className="px-6 py-2 text-sm border border-[#253672] rounded-full text-[#253672] font-[PoppinsRegular] hover:bg-gray-200 transition">
          {t("servicesSection.offerButton")}
        </button>
      </div>

      {/* Services Carousel */}
      <div className="relative">
  <Swiper
    modules={[Navigation, Pagination, Autoplay]}
    spaceBetween={30}
    loop
    autoplay={{ delay: 3000 }}
    pagination={{ clickable: true }}
    navigation={{
      nextEl: ".swiper-next-btn",
      prevEl: ".swiper-prev-btn",
    }}
    breakpoints={{
      300: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    }}
    className="pb-10"
  >
    {services.map((service, index) => (
      <SwiperSlide key={index}>
        <div className="bg-[#253672] rounded-xl shadow-lg overflow-hidden">
          <div className="h-48 overflow-hidden p-4">
            <img src={service.image} alt={service.title} className="w-full h-full object-cover rounded-xl" />
          </div>
          <div className="p-6 text-white">
            <h3 className="text-2xl font-[PoppinsSbold]">{service.title}</h3>
            <hr className="my-4 border-white/40" />
            <p className="text-gray-300">{service.description}</p>
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>

  {/* Custom Prev Button */}
  <button className="swiper-prev-btn z-50 absolute -left-20 top-1/2 p-2 rotate-180 rounded-full bg-[#253672] text-white text-xl flex justify-center items-center shadow-lg -translate-y-1/2">
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
  </button>

  {/* Custom Next Button */}
  <button className="swiper-next-btn z-50 absolute -right-20 top-1/2 p-2 rounded-full bg-[#253672] text-white shadow-lg -translate-y-1/2">
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
  </button>
</div>

    </div>
  );
}
