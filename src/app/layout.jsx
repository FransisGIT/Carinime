import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react"
import "./globals.css";
import Navbar from "./Layout/Navbar";
import Footer from "./Layout/Footer";
import NextTopLoader from "nextjs-toploader";

const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata = {
    title: "Carinime",
    description: "Explore the latest and most popular anime shows and movies. Watch your favorite anime series online in HD, stay updated with new releases, and join a passionate community of anime fans.",
    keywords: "anime, watch anime, best anime, new anime, popular anime, anime shows, anime movies, Carinime, Fransisco, anim, ani, nime, anilist,anime list, anim list",
    author: "Fransisco",
    canonical: "https://www.carinime.com",
    robots: "index, follow",
    openGraph: {
        title: "Carinime",
        description: "Explore the latest and most popular anime shows and movies. join a passionate community of anime fans.",
        url: "https://www.carinime.com",
        type: "website",
        images: [
            {
                width: 1200,
                height: 630,
                alt: "Carinime",
            }
        ],
    },
    twitter: {
        card: "summary_large_image",
        site: "@carinime",
        title: "Carinime",
        description: "Explore the latest and most popular anime shows and movies. join a passionate community of anime fans.",
        image: "https://www.carinime.com/twitter-image.jpg"
    }
};


export default function RootLayout({ children }) {
    return (
        <>
            <html lang="en">
                <head>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <link rel="shortcut icon" href={"/icon.png"} type="image/x-icon" />
                </head>
                <body className={`${geistMono.variable}`}>
                    <NextTopLoader color="#2299DD"
                        initialPosition={0.08}
                        crawlSpeed={200}
                        height={3}
                        crawl={true}
                        showSpinner={false}
                        easing="ease"
                        speed={200}
                        shadow="0 0 10px #2299DD,0 0 5px #2299DD" />
                    <Navbar />
                    <main>
                        {children}
                    </main>
                    <Analytics />
                    <Footer />
                </body>
            </html>
        </>
    );
}
