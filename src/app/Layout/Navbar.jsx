'use client';
import { MagnifyingGlass } from '@phosphor-icons/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const searchInputRef = useRef(null);
    const router = useRouter();

    const handleSearch = (e) => {
        if (e.key === 'Enter' || e.type === "click") {
            const searchQuery = searchInputRef.current.value.trim();
            if (searchQuery) {
                const decodedQuery = decodeURIComponent(searchQuery);
                router.push(`/Search/${decodedQuery}`);
            }
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className="sticky top-0 z-50">
            <div
                className={`navbar bg-test transition-all duration-300 ${isScrolled ? 'py-[3px] shadow-2xl bg-test' : 'py-[1px]'
                    }`}
            >
                <div className="navbar-start">
                    <div className="dropdown">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost lg:hidden"
                            onClick={toggleDropdown}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>
                        {isDropdownOpen && (
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow bg-color-gradient1"
                        >
                            <li className="text-xl">
                                <Link href="/">Home</Link>
                            </li>
                            <li className="text-xl">
                                <Link href="/About">About</Link>
                            </li>
                            <li className="text-xl">
                                <Link href="/Contact">Contact</Link>
                            </li>
                        </ul>
                        )}
                    </div>
                    <Link href="/" className="btn btn-ghost text-xl">CARINIME</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li className="text-xl gap-3">
                            <Link href="/">Home</Link>
                        </li>
                        <li className="text-xl gap-3">
                            <Link href="/About">About</Link>
                        </li>
                        <li className="text-xl gap-3">
                            <Link href="/Contact">Contact</Link>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end mt-8">
                    <div className="form-control mr-4">
                        <input
                            type="text"
                            ref={searchInputRef}
                            onKeyDown={handleSearch}
                            placeholder="Search Anime"
                            className="input input-bordered lg:w-[300px] md:w-[290px] w-40 bg-test"
                        />
                        <MagnifyingGlass size={32} weight="bold" className="relative bottom-10 lg:ml-64 md:ml-60 ml-[120px]  cursor-pointer" onClick={handleSearch} />
                    </div>
                </div>
            </div>
        </div>
    );
}
