import React from 'react';
import { useNavigate } from 'react-router';

const SocialGallery = () => {
  const navigate = useNavigate();

  // Helper to ensure we use the correct embed URL format for iframes
  const getEmbedUrl = (url) => {
    try {
      let cleanUrl = url.split('?')[0];
      if (cleanUrl.endsWith('/')) {
        cleanUrl = cleanUrl.slice(0, -1);
      }
      if (!cleanUrl.endsWith('/embed')) {
        cleanUrl += '/embed';
      }
      return cleanUrl;
    } catch (e) {
      return url;
    }
  };

  const reels = [
    {
      id: 1,
      url: "https://www.instagram.com/reel/DTkQQ_2DO5i/",
    },
    {
      id: 2,
      url: "https://www.instagram.com/reel/DTsOB8IEXBm/",
    },
    {
      id: 3,
      url: "https://www.instagram.com/reel/DTsOc40keCK/",
    },
    {
      id: 4,
      url: "https://www.instagram.com/reel/DTsW1XPDPSO/",
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-[PoppinsBold] text-[#253672] sm:text-4xl">
            Follow Us on Instagram
          </h2>
          <p className="mt-4 text-lg text-[#253672] font-[PoppinsRegular]">
            Check out our latest updates, tours, and behind-the-scenes moments.
          </p>
        </div>

        {/* Grid of Reels - Using Simple Iframes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reels.map((reel) => (
            <div
              key={reel.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-[550px]"
            >
              <iframe
                src={getEmbedUrl(reel.url)}
                className="w-full h-full border-none overflow-hidden"
                allowTransparency="true"
                allow="encrypted-media"
                title={`Instagram Reel ${reel.id}`}
              ></iframe>
            </div>
          ))}
        </div>

        {/* See More Button */}
        <div className="mt-12 text-center">
          <button
            onClick={() => navigate('/instagram-feed')}
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-[PoppinsMedium] rounded-md text-white bg-brand-blue hover:bg-opacity-90 md:py-4 md:text-lg md:px-10 transition-all duration-300 shadow-md hover:shadow-lg"
            style={{ backgroundColor: '#4666D8' }}
          >
            See More on Our Gallery
          </button>
        </div>
      </div>
    </section>
  );
};

export default SocialGallery;
