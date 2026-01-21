import React, { useEffect } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { Helmet } from 'react-helmet';

const InstagramFeedPage = () => {

    // Auto-scroll to top when page opens
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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

    // Placeholder data - ideally this would be fetched or be a larger static list
    // Duplicating the list to simulate more content for the "feed" view
    const allReels = [
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
        },
    ];

    return (
        <>
            <Helmet>
                <title>Instagram Gallery | Yajurveda Construction</title>
                <meta name="description" content="Explore our latest Instagram Reels showcasing our projects, construction updates, and happy clients." />
            </Helmet>

            <Header />

            <main className="min-h-screen bg-gray-50 pt-32 pb-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl text-[#253672] font-[PoppinsBold] sm:text-5xl ">
                            Our Instagram Gallery
                        </h1>
                        <p className="mt-4 text-xl text-[#253672] max-w-3xl mx-auto font-[PoppinsRegular]">
                            Follow along with our journey. See our latest projects, walkthroughs, and more on Instagram.
                        </p>
                        <a
                            href="https://www.instagram.com/"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-block mt-6 text-[#253672] font-[PoppinsMedium] hover:underline"
                        >
                            @yajurvedaconstruction
                        </a>
                    </div>

                    {/* Grid of All Reels */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {allReels.map((reel) => (
                            <div
                                key={reel.id}
                                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 h-[550px]"
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

                </div>
            </main>

            <Footer />
        </>
    );
};

export default InstagramFeedPage;
