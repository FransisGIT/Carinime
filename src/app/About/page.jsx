import Image from 'next/image'
import Link from 'next/link'

export default function About() {
    return (
        <div className="h-screen flex justify-center items-center bg-[#292232]">
            <div className="bg-color-gradient1 rounded-[24px] m-10 p-10 max-w-xl text-center">
                <div className="text-lg text-white font-semibold">
                    A simple user-friendly website for searching Anime Lists like <Link className="text-blue-500" href="https://myanimelist.net/">MyAnimeList</Link> website, using the <Link className="text-blue-500" href="https://jikan.moe/">Jikan API</Link>. Built with:
                </div>
                <div className="flex justify-center items-center gap-6 mt-6">
                    <Link href="https://nextjs.org/">
                        <Image src={'/nextjs.png'} className="w-24 hover:scale-125 transition-all" alt="Next.js" width={350} height={350} />
                    </Link>
                    <Link href="https://tailwindcss.com/">
                        <Image src={'/tailwind.png'} className="w-20 hover:scale-125 transition-all" alt="Tailwind CSS" width={350} height={350} />
                    </Link>
                </div>
            </div>
        </div>
    );
}
