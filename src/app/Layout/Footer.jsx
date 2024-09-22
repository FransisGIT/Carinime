'use client'
import { FacebookLogo, GithubLogo, InstagramLogo } from '@phosphor-icons/react'
import Link from 'next/link'

export default function Footer() {
    return (
        <div className="footer bg-blue-navy py-5 w-full flex justify-center items-center">
            <div className="flex flex-col justify-center items-center text-center">
                <b className="text-white text-lg">Made With ❤️ By <Link href="https://www.instagram.com/fransisco.in" className="hover:text-blue-500"> Fransisco </Link></b>
                <div className="flex justify-center items-center gap-3 mt-3">
                    <Link href="https://www.facebook.com/AverangeFransis" className="text-white rounded-full p-1" target="_blank">
                        <div className="bg-test p-1 rounded-full">
                            <FacebookLogo size={32} weight="bold" />
                        </div>
                    </Link>
                    <Link href="https://github.com/fransisgit/carinime" className="text-white rounded-full p-1" target="_blank">
                        <div className="bg-test p-1 rounded-full">
                            <GithubLogo size={32} weight="bold" />
                        </div>
                    </Link>
                    <Link href="https://www.instagram.com/fransisco.in" className="text-white rounded-full p-1" target="_blank">
                        <div className="bg-test p-1 rounded-full">
                            <InstagramLogo size={32} weight="bold" />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}
