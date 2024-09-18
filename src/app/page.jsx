import { ApiAnime } from "@/lib/api";
import Carousel from "./Components/Carousel";
import AnimeTop from "./Components/AnimeTop";
import AnimeRecommend from "./Components/AnimeRecommend";
import AnimeUpcoming from "./Components/AnimeUpcoming";
import Header from "./Components/Header";

export default async function Page() {
    const animeTop = await ApiAnime("top/anime", "limit=8");
    const animeRecommend = await ApiAnime('recommendations/anime');
    const animeUpcoming = await ApiAnime('seasons/upcoming');
    return (
        <>
            <div className="lg:m-0 m-0 pb-5">
                <div className="flex flex-col col-span-3 lg:flex-row gap-5">
                    <div className="flex-initial lg:w-[65%] w-full mt-7">
                        <Carousel api={animeTop} />
                        <Header title="Top Anime" link="More..." linkHref="/AnimePopular" />
                        <AnimeTop api={animeTop} />
                        <Header title="Recommended Anime" />
                        <AnimeRecommend
                         api={animeRecommend} />
                    </div>
                    <div className="flex-initial m-1 lg:max-w-[30%] max-w-full">
                        <div className="bg-color-gradient1 sticky top-32 py-5 px-0 rounded-xl border-sm-1 overflow-y-auto max-h-[30rem] justify-end">
                            <AnimeUpcoming api={animeUpcoming} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
