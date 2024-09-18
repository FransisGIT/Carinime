"use client";
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import $ from 'jquery';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';

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
                <div
                    className="item h-[300px] rounded-[24px] relative overflow-hidden bg-cover bg-center"
                    key={data.mal_id}
                    style={{ backgroundImage: `url(${data.images.jpg.large_image_url})` }}
                >
                    {/* <Image src={data.images.webp.image_url} width={500} height={300} alt={data.title} className="w-full h-full object-cover rounded-[24px]" /> */}
                </div>
            ))}
        </OwlCarousel>
    );
}
