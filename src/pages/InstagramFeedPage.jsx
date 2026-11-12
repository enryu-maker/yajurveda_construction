import React, { useEffect } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import PageHero from "../components/PageHero";
import { useTranslation } from 'react-i18next';

const InstagramFeedPage = () => {
    const { t } = useTranslation('social');

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
            <Header />
            <PageHero title={t("feed_title")} intro={t("feed_subtitle")}>
                <a href="https://www.instagram.com/yajurvedgroup/" target="_blank" rel="noreferrer" className="inline-block mt-6 text-lg font-[PoppinsMedium] underline underline-offset-4">@yajurvedgroup</a>
            </PageHero>

            <div className="bg-[#f0f2f5] py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

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

                                    allow="encrypted-media"
                                    title={`Instagram Reel ${reel.id}`}
                                ></iframe>
                            </div>
                        ))}
                    </div>

                </div>
            </div>

            <Footer />
        </>
    );
};

export default InstagramFeedPage;
