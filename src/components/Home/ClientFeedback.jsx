import React from "react";
import client1 from "../../assets/Home/Feedback/client1.jpg";
import client2 from "../../assets/Home/Feedback/client2.jpg";
import client3 from "../../assets/Home/Feedback/client3.jpg";
import client4 from "../../assets/Home/Feedback/client4.jpg";

const ClientFeedback = () => {
  const gradientStyle = {
    background: "linear-gradient(135deg, #4666D8 0%, #253672 100%)",
  };

  const testimonials = [
    {
      image: client1,
      name: "Lorem Ipsum",
      feedback:
        "The team's transparency and communication are exceptional. We always feel informed and supported.",
    },
    {
      image: client2,
      name: "Lorem Ipsum",
      feedback:
        "Their personal attention and market knowledge make investing easy and dependable.",
    },
    {
      image: client3,
      name: "Lorem Ipsum",
      feedback:
        "Yajurveda Properties has been the most transparent investment partner I've worked with.",
    },
    {
      image: client4,
      name: "Lorem Ipsum",
      feedback:
        "From the first meeting to project completion, the team handled everything professionally.",
    },
  ];

  return (
    <div
      className="w-full min-h-[80vh] py-16 sm:py-20 px-4 sm:px-8 lg:px-16 text-white bg-[#4666D8]"
      // style={gradientStyle}
    >
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 sm:mb-16 gap-6">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-[PoppinsRegular] leading-tight">
            Feedback From
            <br /> Our Clients
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
    Testimonials
</button>
        </div>

        {/* GRID */}
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
              {/* IMAGE */}
              <div className="w-full aspect-square rounded-xl overflow-hidden mb-6">
                <img
                  src={client.image}
                  alt={`Client ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* NAME */}
              <h3 className="text-xl sm:text-2xl font-[PoppinsRegular] mb-2">
                {client.name}
              </h3>

              {/* FEEDBACK */}
              <p className="text-sm sm:text-base text-white/80 font-[PoppinsLight] leading-relaxed">
                {client.feedback}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientFeedback;
