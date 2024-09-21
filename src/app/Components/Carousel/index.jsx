"use client";
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import $ from 'jquery';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import Link from 'next/link';

const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
    ssr: false,
});

export default function Carousel({ api }) {
    const [carouselOptions, setCarouselOptions] = useState({});

    useEffect(() => {
        if (typeof window !== "undefined") {
            // Ensure jQuery and OwlCarousel are loaded
            window.$ = window.jQuery = $;
            require('owl.carousel');

            // Set carousel options
            setCarouselOptions({
                stagePadding: 30,
                loop: true,
                margin: 10,
                autoplay: true,
                autoplayTimeout: 3000,
                autoplayHoverPause: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 1
                    },
                    1000: {
                        items: 1
                    }
                }
            });
        }
    }, []);

    return (
        <OwlCarousel className="owl-theme" {...carouselOptions}>
            {api.data?.map((data) => (
                <Link href={`/DetailAnime/${data.mal_id}`} key={data.mal_id}>
                    <div
                        className="item h-[350px] rounded-[24px] relative overflow-hidden bg-cover bg-center"
                        style={{ backgroundImage: `url(${data.images.jpg.large_image_url})` }}
                    >
                        <div className="absolute inset-0 bg-black bg-opacity-50">
                            <div className="absolute bottom-0 left-0 p-4 w-full">
                                <div className="text-white">
                                    <h3 className="text-2xl md:text-2xl font-bold">{data.title}</h3>
                                    <p className="text-lg md:text-lg mt-2 font-semibold">The best top anime</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </OwlCarousel>

    );
}
