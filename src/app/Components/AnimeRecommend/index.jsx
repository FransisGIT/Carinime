import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export default function AnimeRecommend({ api }) {

    const getRandomAnime = (data) => {
        if (!data || data.length === 0) return [];
        else {
            return data.sort(() => 0.5 - Math.random()).slice(0, 4);
        }
    };

    const animeList = api?.data?.[0]?.entry ? getRandomAnime(api?.data) : api?.data || [];
    return (
        <>
            <div className="rounded-xl">
                <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-2 px-4">
                    {animeList?.map((anime) => (
                        (anime.entry).map((data) => (
                            <Link
                                href={`/DetailAnime/${data.mal_id}`}
                                className="cursor-pointer p-2 px-1"
                                key={data.mal_id}
                            >
                                <div className="relative group hover:shadow-2xl hover:scale-105 hover:shadow-indigo-500 transition-all duration-300 rounded-[18px]">
                                    {/* Image */}
                                    <Image
                                        src={data.images.webp.large_image_url || '../../public/not-found-img.jpg'}
                                        alt={data.title || 'Anime Image'}
                                        width={350}
                                        height={350}
                                        className="w-full lg:max-h-60 md:max-h-[500px] sm:max-h-[500px] max-h-[500px] object-cover rounded-[24px]"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90 z-10 rounded-[18px]">
                                    </div>

                                    <div className="absolute bottom-0 left-0 w-full p-2 z-20 text-center">
                                        <p className="text-center font-bold md:text-sm text-xs text-white text-shadow-costum">
                                            {data.title}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        ))
                    ))}
                </div>
            </div>
        </>
    );
}
