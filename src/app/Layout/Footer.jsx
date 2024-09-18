'use client'
import { FacebookLogo, GithubLogo, InstagramLogo } from '@phosphor-icons/react'
import Link from 'next/link'

export default function Footer() {
    return (
        <>
            <div className="bg-color-gradient1 absolute py-5 text-center w-full bottom-100 left-0">
                <div className="flex flex-col flex-wrap justify-center items-center">
                    <b>Made With ❤️ By Fransisco</b>
                    <div className="flex flex-row justify-center items-center gap-3 mt-3">
                        <Link href="https://www.facebook.com/AverangeFransis" className="bg-test rounded-full p-1" target="_blank">
                            <FacebookLogo size={32} weight="bold" />
                        </Link>
                        <Link href="https://github.com/fransisgit/carinime" className="bg-test rounded-full p-1" target="_blank">
                            <GithubLogo size={32} weight="bold" />
                        </Link>
                        <Link href="https://www.instagram.com/fransisco.in" className="bg-test rounded-full p-1" target="_blank">
                        <InstagramLogo size={32} weight="bold" />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
