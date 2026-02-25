'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import Image from 'next/image'

export default function Navigation() {
    const pathname = usePathname()
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const links = [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about' },
        { name: 'Our Business', href: '/services' },
        { name: 'Career & Culture', href: '/jobs' },
    ]

    return (
        <div className="fixed top-8 left-0 right-0 z-50 flex justify-center px-4 w-full">
            <nav className="bg-white rounded-full shadow-lg border border-gray-200 px-6 py-3 flex items-center justify-between w-full max-w-6xl">
                {/* Logo */}
                <Link href="/" className="flex items-center group">
                    <div className="relative h-8 w-40 hover:opacity-80 transition-opacity">
                        <Image
                            src="/logo-horizontal-black.png"
                            alt="L'AGENCE Executive Logo"
                            fill
                            className="object-contain object-left"
                            priority
                        />
                    </div>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex space-x-8 items-center bg-white">
                    {links.map((link) => {
                        const isActive = pathname === link.href || (pathname.startsWith('/jobs') && link.href === '/jobs')
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`text-sm tracking-wide uppercase transition-colors hover:text-[#FF801E] ${isActive ? 'text-[#FF801E] font-medium' : 'text-gray-500 font-light'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        )
                    })}
                </div>

                <div className="hidden md:flex items-center space-x-4">
                    <Link
                        href="/contact"
                        className="px-6 py-2.5 rounded-full bg-[#FF801E] text-white text-sm font-medium hover:bg-[#e66c10] transition-colors tracking-wide uppercase shadow-md"
                    >
                        Contact
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-gray-600 focus:outline-none"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isMobileMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </nav>

            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && (
                <div className="absolute top-24 left-4 right-4 bg-white rounded-2xl shadow-xl border border-gray-100 p-6 space-y-4 md:hidden">
                    {links.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block text-sm tracking-wide uppercase font-medium text-gray-800 hover:text-[#FF801E]"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="/contact"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block text-sm tracking-wide uppercase font-medium text-[#FF801E]"
                    >
                        Contact
                    </Link>
                </div>
            )}
        </div>
    )
}
