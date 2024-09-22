import Image from 'next/image'
import Link from 'next/link'

export default function Contact() {
    return (
        <>
            <div className="h-full py-[110px]">
                <div className="py-5 px-5 lg:mx-[300px] mx-[20px] bg-color-gradient1 rounded-[24px]">
                    <div className="m-auto text-lg text-white font-semibold text-center">
                        My social media
                    </div>
                    <div className="flex flex-row justify-center items-center">
                        <Link href="https://facebook.com/AverangeFransis">
                            <Image src={'/facebook.webp'} className="w-[80px] hover:scale-125 transition-all" alt="nextjs" width={350} height={350}></Image>
                        </Link>
                        <Link href="https://wa.link/ldjbp9">
                            <Image src={'/whatsapp.png'} className="w-[67px] hover:scale-125 transition-all" alt="whatsapp" width={350} height={350}></Image>
                        </Link>
                        <Link href="https://instagram.com/fransisco.in">
                            <Image src={'/instagram.webp'} className="w-[105px] hover:scale-125 transition-all ml-[-5px]" alt="tailwind" width={350} height={350}></Image>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
