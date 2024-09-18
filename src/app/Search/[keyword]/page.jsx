import { ApiAnime } from "@/lib/api";
import Image from "next/image";
import Link from "next/link";


export default async function Search({ params }) {
    const keyword = params.keyword;
    const decodeKeyword = decodeURI(keyword);
    const searchAnime = await ApiAnime('anime', `q=${decodeKeyword}`)
    // const responseSearch = await fetch(`${process.env.NEXT_PUBLIC_API_JIKAN_BASE_URL}/anime?q=${decodeKeyword}`);

    return (
        <>
            <div className="pb-5">
                <div className="grid md:grid-cols-7 sm:grid-cols-3 grid-cols-2 gap-2 px-4">
                    {searchAnime.data?.map((data) => (
                        <Link
                            href={`/DetailAnime/${data.mal_id}`}
                            className="cursor-pointer p-2 px-1"
                            key={data.mal_id}
                        >
                            <div className="relative group hover:shadow-2xl hover:scale-105 hover:shadow-indigo-500 transition-all duration-300 rounded-[18px]">
                                {/* Image */}
                                <Image
                                    src={data.images.webp.image_url || '../../public/not-found-img.jpg'}
                                    alt={data.title || 'Anime Image'}
                                    width={350}
                                    height={350}
                                    className="w-full lg:max-h-[235px] max-h-[220px] object-cover rounded-[24px] h-52"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90 z-10 rounded-[18px]">
                                </div>

                                <div className="absolute bottom-0 left-0 w-full p-2 z-20 text-center">
                                    <p className="text-center font-bold md:text-sm text-xs text-white text-shadow-costum">
                                        {data.title}
                                    </p>
                                    <hr />
                                    <p className="text-center font-bold md:text-sm text-xs text-white text-shadow-costum">
                                        Score: {data.score}
                                    </p>
                                    <p className="text-center font-bold md:text-sm text-xs text-white text-shadow-costum">
                                        Episode: {data.episodes}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
}
