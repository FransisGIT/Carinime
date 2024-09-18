import Image from 'next/image'
import Link from 'next/link'

export default function About() {
    return (
        <>
            <div className="h-full py-[110px]">
                <div className="py-5 px-5 lg:mx-[300px] mx-[20px] bg-color-gradient1 rounded-[24px]">
                    <div className="m-auto text-lg text-white font-semibold text-center">
                        A simple user friendly website for searching Anime List like <Link className="text-blue-500" href="https://myanimelist.net/">MyAnimeList</Link> website, Using <Link className="text-blue-500" href="https://jikan.moe/">Jikan API </Link>
                        Built with
                    </div>
                    <div className="gap-3 flex flex-row justify-center items-center">
                        <Link href="https://nextjs.org/">
                            <Image src={'/nextjs.png'} className="w-24 hover:scale-125 transition-all" alt="nextjs" width={350} height={350}></Image>
                        </Link>
                        <Link href="https://tailwindcss.com/">
                            <Image src={'/tailwind.png'} className="w-20 hover:scale-125 transition-all" alt="tailwind" width={350} height={350}></Image>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
