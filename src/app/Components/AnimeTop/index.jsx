import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function AnimeTop({ api }) {
    return (
        <>
            <div className="rounded-xl">
                <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-3 px-4">
                    {api.data?.map((topAnime) => (
                        <Link
                            href={`/DetailAnime/${topAnime.mal_id}`}
                            className="cursor-pointer p-2 px-1"
                            key={topAnime.mal_id}
                        >
                            <div className="relative group hover:shadow-2xl hover:scale-105 hover:shadow-indigo-500 transition-all duration-300 rounded-[18px]">
                                <div className="">
                                    <Image
                                        src={topAnime.images.webp.large_image_url || '../../../../public/not-found-img.jpg'}
                                        alt={topAnime.title || 'Anime Image'}
                                        width={350}
                                        height={350}
                                        className="w-full lg:min-h-52 md:min-h-52 sm:min-h-52 min-h-52 object-cover rounded-[24px]"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90 z-10 rounded-[18px]"></div>

                                    <div className="absolute bottom-0 left-0 w-full p-2 z-20 text-center">
                                        <p className="text-center font-bold md:text-sm text-sm text-white text-shadow-costum">
                                            {topAnime.title}
                                        </p>
                                        <hr className="border-gray-300 my-1" />
                                        <p className="text-center font-bold md:text-sm text-sm text-white text-shadow-costum">
                                            Score: {topAnime.score}
                                        </p>
                                        <p className="text-center font-bold md:text-sm text-sm text-white text-shadow-costum">
                                            Episode: {topAnime.episodes}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
}
