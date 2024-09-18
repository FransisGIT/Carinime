import { ApiAnime } from '@/lib/api';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export default async function DetailAnime({ params: { id } }) {
    const detailAnime = await ApiAnime(`anime/${id}`);
    const detailChar = await ApiAnime(`anime/${id}/characters`);

    return (
        <>
            <div className="pb-10">
                <div className="h-[350px] bg-white bg-cover bg-center relative md:mb-0 mb-56" style={{ backgroundImage: `url(${detailAnime.data.images.jpg.large_image_url})` }}></div>

                <div className="flex flex-col col-span-2 lg:flex-row m-5 gap-5">
                    <div className="flex-none lg:w-[20%] md:w-[30%] w-full relative lg:mt-[-100px] md:mt-[-100px] mt-[-350px] m-auto">
                        <Image src={detailAnime.data.images.webp.image_url} alt={detailAnime.data.title} height={350} width={350} className="w-52 m-auto rounded-[18px] hover:shadow-2xl hover:scale-105 hover:shadow-indigo-500 transition-all duration-300"></Image>
                    </div>
                    <div className="flex-none lg:max-w-[80%]">
                        <h1 className="text-2xl font-bold text-white mb-5 hover:text-shadow-lg hover:shadow-indigo-500 transition-all duration-300">{detailAnime.data.title}</h1>
                        <div className="flex flex-wrap gap-4 my-4">
                            <div className="bg-color-gradient1 rounded-[18px] p-3 hover:shadow-2xl hover:scale-105 hover:shadow-indigo-500 transition-all duration-300">
                                <div className="flex items-center text-white">
                                    Score: {detailAnime.data.score}
                                </div>
                            </div>
                            <div className="bg-color-gradient1 rounded-[18px] p-3 hover:shadow-2xl hover:scale-105 hover:shadow-indigo-500 transition-all duration-300">
                                <div className="flex items-center text-white">
                                    Rank: {detailAnime.data.rank}
                                </div>
                            </div>
                            <div className="bg-color-gradient1 rounded-[18px] p-3 hover:shadow-2xl hover:scale-105 hover:shadow-indigo-500 transition-all duration-300">
                                <div className="flex items-center text-white">
                                    Popularity: {detailAnime.data.popularity}
                                </div>
                            </div>
                            <div className="bg-color-gradient1 rounded-[18px] p-3 hover:shadow-2xl hover:scale-105 hover:shadow-indigo-500 transition-all duration-300">
                                <div className="flex items-center text-white">
                                    Scored By: {detailAnime.data.scored_by}
                                </div>
                            </div>
                            <div className="bg-color-gradient1 rounded-[18px] p-3 hover:shadow-2xl hover:scale-105 hover:shadow-indigo-500 transition-all duration-300">
                                <div className="flex items-center text-white">
                                    Favorite: {detailAnime.data.favorites}
                                </div>
                            </div>
                        </div>
                        <p className="lg:text-md text-white text-sm hover:text-shadow-lg hover:shadow-indigo-500 transition-all duration-300">{detailAnime.data.synopsis}</p>
                    </div>
                </div>

                <div className="flex flex-col col-span-2 lg:flex-row m-5 gap-5 mt-10">
                    <div className="flex-none lg:w-[20%] md:w-full w-full">
                        <div className="bg-color-gradient1 rounded-[18px] py-3">
                            <div className="flex flex-row lg:flex-wrap lg:flex-col flex-initial overflow-x-auto m-5 gap-3">
                                <div className="font-bold text-sm lg:text-lg text-white whitespace-nowrap lg:whitespace-normal">
                                    Rating <br />
                                    <span className="font-light text-white text-sm lg:text-lg">{detailAnime.data.rating}</span>
                                </div>
                                <div className="font-bold text-sm lg:text-lg text-white whitespace-nowrap lg:whitespace-normal">
                                    Format <br />
                                    <span className="font-light text-white text-sm lg:text-lg">{detailAnime.data.type}</span>
                                </div>
                                <div className="font-bold text-sm lg:text-lg text-white whitespace-nowrap lg:whitespace-normal">
                                    Episodes <br />
                                    <span className="font-light text-white text-sm lg:text-lg">{detailAnime.data.episodes}</span>
                                </div>
                                <div className="font-bold text-sm lg:text-lg text-white whitespace-nowrap lg:whitespace-normal">
                                    Episode Duration <br />
                                    <span className="font-light text-white text-sm lg:text-lg">{detailAnime.data.duration}</span>
                                </div>
                                <div className="font-bold text-sm lg:text-lg text-white whitespace-nowrap lg:whitespace-normal">
                                    Status <br />
                                    <span className="font-light text-white text-sm lg:text-lg">{detailAnime.data.status}</span>
                                </div>
                                <div className="font-bold text-sm lg:text-lg text-white whitespace-nowrap lg:whitespace-normal">
                                    Aired <br />
                                    <span className="font-light text-white text-sm lg:text-lg">{detailAnime.data.aired?.string}</span>
                                </div>
                                <div className="font-bold text-sm lg:text-lg text-white whitespace-nowrap lg:whitespace-normal">
                                    Season <br />
                                    <span className="font-light text-white text-sm lg:text-lg">{detailAnime.data.season}</span>
                                </div>
                                <div className="font-bold text-sm lg:text-lg text-white whitespace-nowrap lg:whitespace-normal">
                                    Studios <br />
                                    <span className="font-light text-white text-sm lg:text-lg">{detailAnime.data.studios?.[0].name}</span>
                                </div>


                                <div className="font-bold text-sm lg:text-lg text-white whitespace-nowrap lg:whitespace-normal">
                                    Producers <br />
                                    <span className="font-light text-white flex lg:flex-wrap lg:flex gap-2">
                                        {detailAnime.data.producers.map((data, index) => (
                                            <React.Fragment key={data.mal_id}>
                                                <Link
                                                    href={data.url}
                                                    className="hover:text-shadow-l text-sm lg:text-lg"
                                                >
                                                    {data.name}
                                                    {index < detailAnime.data.producers.length - 1 && (
                                                        <span className="">,</span>
                                                    )}
                                                </Link>
                                            </React.Fragment>
                                        ))}
                                    </span>
                                </div>


                                <div className="font-bold text-sm lg:text-lg text-white whitespace-nowrap lg:whitespace-normal">
                                Title Japanese <br />
                                    <span className="font-light text-white text-sm lg:text-lg">{detailAnime.data.title_japanese}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-initial lg:max-w-[80%]">
                        <div className="flex flex-col col-span-2 lg:flex-row gap-5">
                            <div>
                                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {detailChar.data?.map((char) => {
                                        const japaneseVoiceActor = char.voice_actors?.find(actor => actor.language === 'Japanese');

                                        if (!japaneseVoiceActor) return null;
                                        return (
                                            <div className="flex items-center justify-between p-0 bg-color-gradient1 rounded-md gap-5 mx-5 hover:shadow-lg hover:scale-105 hover:shadow-indigo-500 transition-all duration-300" key={char.character?.mal_id}>
                                                <Link href={char.character.url}>
                                                    <div className="flex items-center gap-4">
                                                        {char.character?.images.webp.image_url && (
                                                            <Image
                                                                src={char.character.images.webp.image_url}
                                                                alt={char.character.name}
                                                                height={64}
                                                                width={64}
                                                                className="w-10 lg:w-20 lg:h-28 h-16 object-cover"
                                                            />
                                                        )}
                                                        <div className="text-start">
                                                            <p className="font-semibold hover:text-sky-600 text-white lg:text-lg text-xs">{char.character?.name || 'Unknown Character'}</p>
                                                            <p className="text-sm text-gray-500">{char.role}</p>
                                                        </div>
                                                    </div>
                                                </Link>

                                                <Link href={japaneseVoiceActor.person.url}>
                                                    <div className="flex items-center gap-4">
                                                        <div className="text-end">
                                                            <p className="font-semibold hover:text-sky-600 text-white lg:text-lg text-xs">{japaneseVoiceActor.person?.name || 'Unknown Seiyuu'}</p>
                                                            <p className="text-sm text-gray-500">{japaneseVoiceActor.language || 'Unknown'}</p>
                                                        </div>
                                                        {japaneseVoiceActor.person?.images?.jpg?.image_url && (
                                                            <Image
                                                                src={japaneseVoiceActor.person.images.jpg.image_url}
                                                                alt={japaneseVoiceActor.person.name || "Image Not Found"}
                                                                height={64}
                                                                width={64}
                                                                className="w-10 lg:w-20 lg:h-28 h-16 object-cover"
                                                            />
                                                        )}
                                                    </div>
                                                </Link>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}
