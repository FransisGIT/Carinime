import SparklesText from '@/components/magicui/sparkles-text';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


export default function AnimeUpcoming({ api }) {
    return (
        <div>
            <>
                <SparklesText text="Top Upcoming Anime" className="ml-4 mt-1 mb-6 lg:text-lg text-sm hover:text-indigo-500 transition-all text-white"></SparklesText>
                {api.data?.map((data) => (
                    <Link href={`/DetailAnime/${data.mal_id}`} key={data.mal_id}>
                        <div className="flex ml-4 mb-5">
                            <Image
                                src={data.images.webp.image_url || '../../public/not-found-img.jpg'
                                }
                                className="w-[70px] hover:shadow-2xl hover:shadow-indigo-500 transition-all duration-300 rounded-[12px] h-24"
                                alt={data.title}
                                width={350}
                                height={350}
                            />
                            <div className="text-white px-3">
                                <p className="md:text-base lg:text-base xl:text-base font-bold mb-1 hover:text-shadow-lg hover:shadow-indigo-500 transition-all duration-300 rounded-lg">
                                    {data.title}
                                </p>
                                <p className="hover:text-shadow-lg hover:shadow-indigo-500 transition-all duration-300">
                                    {data.type}, {data.members} Members
                                </p>
                                <p className="hover:text-shadow-lg hover:shadow-indigo-500 transition-all duration-300">
                                    {data.popularity}, Popularity
                                </p>
                                <p className="hover:text-shadow-lg hover:shadow-indigo-500 transition-all duration-300">
                                    {data.status}
                                </p>
                            </div>
                        </div>
                    </Link>
                ))}
            </>
        </div>
    );
}
