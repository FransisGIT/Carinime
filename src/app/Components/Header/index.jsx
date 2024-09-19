import ShinyButton from '@/components/magicui/shiny-button'
import SparklesText from '@/components/magicui/sparkles-text'
import Link from 'next/link'

export default function Header({ title, link, linkHref }) {
    return (
        <div className="m-5 py-2 rounded-xl flex items-center justify-between">
            <SparklesText text={title} className="lg:text-3xl md:text-3xl sm:text-3xl text-3xl hover:text-indigo-500 transition-all text-white"></SparklesText>
            {linkHref && link ?
                    <Link href={linkHref} className="rounded-full hover:text-indigo-500 transition-all text-white">
                        <ShinyButton text={link} className="rounded-full bg-color-gradient1 text-white lg:text-3xl md:text-3xl sm:text-3xl text-3xl"></ShinyButton>
                    </Link>
                : null
            }
        </div>
    )
}
