import { ApiAnime } from '@/lib/api';
import Link from 'next/link';
import React from 'react'

export default async function DetailAnime({ params: { id } }) {
    const detailAnime = await ApiAnime(`anime/${id}`);
    const detailChar = await ApiAnime(`anime/${id}/characters`);

    return (
        <>
            <div className="pb-10">
                <div className="h-[350px] bg-white bg-cover bg-center relative md:mb-0 mb-56" style={{ backgroundImage: `url(${detailAnime.data.images.jpg.large_image_url})` }}>
                    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                </div>


                <div className="flex flex-col col-span-2 lg:flex-row m-5 gap-5">
                    <div className="flex-none lg:w-[20%] md:w-[30%] w-full relative lg:mt-[-100px] md:mt-[-100px] mt-[-350px] m-auto">
                        <img src={detailAnime.data.images.webp.large_image_url} alt={detailAnime.data.title} height={350} width={350} className="w-52 m-auto rounded-[18px] hover:shadow-2xl hover:scale-105 hover:shadow-indigo-500 transition-all duration-300"></img>
                    </div>
                    <div className="flex-none lg:max-w-[80%]">
                        <h1 className="lg:text-3xl md:text-3xl sm:text-3xl text-3xl font-bold text-white mb-5 hover:text-shadow-lg hover:shadow-indigo-500 transition-all duration-300 lg:flex lg:justify-start text-center">{detailAnime.data.title}</h1>
                        <div className="flex flex-wrap gap-4 my-4 justify-center items-center lg:flex lg:justify-start">
                            {detailAnime.data.score ?
                                <div className="bg-blue-navy rounded-[18px] p-3 hover:shadow-2xl hover:scale-105 hover:shadow-indigo-500 transition-all duration-300">
                                    <div className="flex items-center text-white">
                                        Score: {detailAnime.data.score}
                                    </div>
                                </div>
                                : null
                            }
                            {detailAnime.data.rank ?
                                <div className="bg-blue-navy rounded-[18px] p-3 hover:shadow-2xl hover:scale-105 hover:shadow-indigo-500 transition-all duration-300">
                                    <div className="flex items-center text-white">
                                        Rank: {detailAnime.data.rank}
                                    </div>
                                </div>
                                : null
                            }
                            {detailAnime.data.popularity ?
                                <div className="bg-blue-navy rounded-[18px] p-3 hover:shadow-2xl hover:scale-105 hover:shadow-indigo-500 transition-all duration-300">
                                    <div className="flex items-center text-white">
                                        Popularity: {detailAnime.data.popularity}
                                    </div>
                                </div>
                                : null
                            }
                            {detailAnime.data.scored_by ?
                                <div className="bg-blue-navy rounded-[18px] p-3 hover:shadow-2xl hover:scale-105 hover:shadow-indigo-500 transition-all duration-300">
                                    <div className="flex items-center text-white">
                                        Scored By: {detailAnime.data.scored_by}
                                    </div>
                                </div>
                                : null
                            }
                            {detailAnime.data.favorites ?
                                <div className="bg-blue-navy rounded-[18px] p-3 hover:shadow-2xl hover:scale-105 hover:shadow-indigo-500 transition-all duration-300">
                                    <div className="flex items-center text-white">
                                        Favorite: {detailAnime.data.favorites}
                                    </div>
                                </div>
                                : null
                            }
                        </div>
                        <p className="text-white hover:text-shadow-lg hover:shadow-indigo-500 transition-all duration-300 text-2xl mb-2">Synopsis</p>
                        <p className=" text-white hover:text-shadow-lg hover:shadow-indigo-500 transition-all duration-300 text-base">{detailAnime.data.synopsis}</p>
                    </div>
                </div>

                <div className="flex flex-col col-span-2 lg:flex-row m-5 gap-5 mt-10">
                    <div className="flex-none lg:w-[20%] md:w-full w-full">
                        <div className="bg-blue-navy rounded-[18px] py-3">
                            <p className="text-white hover:text-shadow-lg hover:shadow-indigo-500 transition-all duration-300 text-lg m-5">Detail Anime</p>
                            <div className="flex flex-row lg:flex-wrap lg:flex-col flex-initial overflow-x-auto m-5 gap-3">
                                <div className="font-bold text-base lg:text-lg text-white whitespace-nowrap lg:whitespace-normal">
                                    Rating <br />
                                    <span className="font-light text-white text-sm lg:text-lg">{detailAnime.data.rating}</span>
                                </div>
                                <div className="font-bold text-base lg:text-lg text-white whitespace-nowrap lg:whitespace-normal">
                                    Format <br />
                                    <span className="font-light text-white text-base lg:text-lg">{detailAnime.data.type}</span>
                                </div>
                                <div className="font-bold text-base lg:text-lg text-white whitespace-nowrap lg:whitespace-normal">
                                    Episodes <br />
                                    <span className="font-light text-white text-base lg:text-lg">{detailAnime.data.episodes}</span>
                                </div>
                                <div className="font-bold text-base lg:text-lg text-white whitespace-nowrap lg:whitespace-normal">
                                    Episode Duration <br />
                                    <span className="font-light text-white text-base lg:text-lg">{detailAnime.data.duration}</span>
                                </div>
                                <div className="font-bold text-base lg:text-lg text-white whitespace-nowrap lg:whitespace-normal">
                                    Status <br />
                                    <span className="font-light text-white text-base lg:text-lg">{detailAnime.data.status}</span>
                                </div>
                                <div className="font-bold text-base lg:text-lg text-white whitespace-nowrap lg:whitespace-normal">
                                    Aired <br />
                                    <span className="font-light text-white text-base lg:text-lg">{detailAnime.data.aired?.string}</span>
                                </div>
                                <div className="font-bold text-base lg:text-lg text-white whitespace-nowrap lg:whitespace-normal">
                                    Season <br />
                                    <span className="font-light text-white text-base lg:text-lg">{detailAnime.data.season}</span>
                                </div>
                                <div className="font-bold text-base lg:text-lg text-white whitespace-nowrap lg:whitespace-normal">
                                    Studios <br />
                                    <span className="font-light text-white text-base lg:text-lg">{detailAnime.data.studios?.[0].name}</span>
                                </div>


                                <div className="font-bold text-base lg:text-lg text-white whitespace-nowrap lg:whitespace-normal">
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
                                                        <span>,</span>
                                                    )}
                                                </Link>
                                            </React.Fragment>
                                        ))}
                                    </span>
                                </div>


                                <div className="font-bold text-base lg:text-lg text-white whitespace-nowrap lg:whitespace-normal">
                                    Title Japanese <br />
                                    <span className="font-light text-white text-sm lg:text-lg">{detailAnime.data.title_japanese}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-initial lg:max-w-[80%]">
                        <div className="flex flex-col col-span-2 lg:flex-row gap-5">
                            <div>
                                <p className="text-white hover:text-shadow-lg hover:shadow-indigo-500 transition-all duration-300 text-lg m-5">Characters/Voice Actors</p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {detailChar.data?.map((char) => {
                                        const japaneseVoiceActor = char.voice_actors?.find(actor => actor.language === 'Japanese');

                                        if (!japaneseVoiceActor) return null;
                                        return (
                                            <div className="flex items-center justify-between p-0 bg-blue-navy rounded-md gap-5 mx-5 hover:shadow-lg hover:scale-105 hover:shadow-indigo-500 transition-all duration-300" key={char.character?.mal_id}>
                                                <Link href={char.character.url}>
                                                    <div className="flex items-center gap-4">
                                                        {char.character?.images.webp.image_url && (
                                                            <img
                                                                src={char.character.images.webp.image_url || '../../../../public/not-found-img.jpg'}
                                                                alt={char.character.name}
                                                                height={64}
                                                                width={64}
                                                                className="w-24 lg:w-24 lg:h-24 h-24 object-cover"
                                                            />
                                                        )}
                                                        <div className="text-start">
                                                            <p className="font-semibold hover:text-sky-600 text-white lg:text-lg text-sm">{char.character?.name || 'Unknown Character'}</p>
                                                            <p className="text-base text-gray-300">{char.role || 'Unknown Role'}</p>
                                                        </div>
                                                    </div>
                                                </Link>

                                                <Link href={japaneseVoiceActor.person.url}>
                                                    <div className="flex items-center gap-4">
                                                        <div className="text-end">
                                                            <p className="font-semibold hover:text-sky-600 text-white lg:text-lg text-sm">{japaneseVoiceActor.person?.name || 'Unknown Seiyuu'}</p>
                                                            <p className="text-base text-gray-300">{japaneseVoiceActor.language || 'Unknown'}</p>
                                                        </div>
                                                        {japaneseVoiceActor.person?.images?.jpg?.image_url && (
                                                            <img
                                                                src={japaneseVoiceActor.person.images.jpg.image_url}
                                                                alt={japaneseVoiceActor.person.name || '../../../../public/not-found-img.jpg'}
                                                                height={64}
                                                                width={64}
                                                                className="w-24 lg:w-24 lg:h-24 h-24 object-cover"
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
