import React from "react";
import { useTranslation } from "react-i18next";
import client1 from "../../assets/Home/Feedback/client1.jpg";
import client2 from "../../assets/Home/Feedback/client2.jpg";
import client3 from "../../assets/Home/Feedback/client3.jpg";
import client4 from "../../assets/Home/Feedback/client4.jpg";

const ClientFeedback = () => {
  const { t } = useTranslation('feedback');

  const staticImages = [client1, client2, client3, client4];
  
  // Retrieve translated testimonials array as an object
  const translatedTestimonials = t('testimonials', { returnObjects: true });

  // Combine static image paths with translated text
  const testimonials = translatedTestimonials.map((testimonial, index) => ({
    ...testimonial,
    image: staticImages[index], 
  }));

  return (
    <section id='testimonials'
      className="w-full min-h-[80vh] py-16 sm:py-20 px-4 sm:px-8 lg:px-16 text-white bg-[#4666D8]"
    >
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 sm:mb-16 gap-6">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-[PoppinsRegular] leading-tight">
            {t('header.titleLine1')}
            <br /> 
            {t('header.titleLine2')}
          </h2>

          <button
            className="
              px-6 py-3 
              border border-white/70 
              rounded-full 
              text-base sm:text-lg 
              font-[PoppinsRegular] 
              bg-white/10 
              hover:bg-white/20 
              transition 
            "
          >
            {t('header.button')}
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((client, index) => (
            <div
              key={index}
              className="
                p-4 
                hover:scale-[1.02] transition-transform duration-300
                flex flex-col
              "
            >
              <div className="w-full aspect-square rounded-xl overflow-hidden mb-6">
                <img
                  src={client.image}
                  alt={`Client ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-xl sm:text-2xl font-[PoppinsRegular] mb-2">
                {client.name}
              </h3>

              <p className="text-sm sm:text-base text-white/80 font-[PoppinsElight] leading-relaxed">
                {client.feedback}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientFeedback;