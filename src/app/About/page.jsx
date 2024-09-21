import Link from 'next/link'

export default function About() {
    return (
        <div className="h-full py-[110px]">
            <div className="py-5 px-5 lg:mx-[300px] mx-[20px] bg-blue-navy rounded-[24px]">
                <div className="text-lg text-center text-white font-semibold">
                    A simple user-friendly website for searching Anime like <Link className="text-blue-500" href="https://myanimelist.net/">MyAnimeList</Link> website, using the <Link className="text-blue-500" href="https://jikan.moe/">Jikan API</Link>. Built with:
                </div>
                <div className="flex justify-center items-center gap-6 mt-6">
                    <Link href="https://nextjs.org/">
                        <img src={'/nextjs.png'} className="w-24 hover:scale-125 transition-all" alt="Next.js" width={350} height={350} />
                    </Link>
                    <Link href="https://tailwindcss.com/">
                        <img src={'/tailwind.png'} className="w-20 hover:scale-125 transition-all" alt="Tailwind CSS" width={350} height={350} />
                    </Link>
                </div>
            </div>
        </div>
    );
}
