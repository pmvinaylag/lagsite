import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
    return (
        <footer className="bg-[#0D1D19] border-t border-gray-800 py-20 px-6 text-white mt-auto">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
                {/* Brand */}
                <div className="col-span-1 md:col-span-1">
                    <Link href="/" className="flex items-center group mb-6">
                        <div className="relative h-10 w-10 mr-4 group-hover:scale-105 transition-transform">
                            <Image
                                src="/logo-icon.png"
                                alt="L'AGENCE Executive Icon"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <span className="text-2xl font-bold tracking-tight text-white mb-1">
                            L'AGENCE
                        </span>
                    </Link>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6 font-light">
                        Connecting technology-forward, innovative, and purpose-driven organizations with globally-versed, top-tier executive talent.
                    </p>
                    <div className="flex space-x-4">
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#FF801E] transition-colors">
                            <span className="sr-only">LinkedIn</span>
                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Capabilities */}
                <div>
                    <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-6 opacity-80">Capabilities</h3>
                    <ul className="space-y-4">
                        <li><Link href="/services/executive-search" className="text-[#a0a5a3] hover:text-[#FF801E] text-sm transition-colors font-light">Executive Search</Link></li>
                        <li><Link href="/services/sourcing-as-a-service" className="text-[#a0a5a3] hover:text-[#FF801E] text-sm transition-colors font-light">Sourcing-as-a-Service (SaaS)</Link></li>
                        <li><Link href="/services/talent-infrastructure" className="text-[#a0a5a3] hover:text-[#FF801E] text-sm transition-colors font-light">Talent Infrastructure (TIaaS)</Link></li>
                        <li><Link href="/services/advisory-coaching" className="text-[#a0a5a3] hover:text-[#FF801E] text-sm transition-colors font-light">Advisory & Coaching</Link></li>
                    </ul>
                </div>

                {/* Company */}
                <div>
                    <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-6 opacity-80">Company</h3>
                    <ul className="space-y-4">
                        <li><Link href="/about" className="text-[#a0a5a3] hover:text-[#FF801E] text-sm transition-colors font-light">About Us</Link></li>
                        <li><Link href="/jobs" className="text-[#a0a5a3] hover:text-[#FF801E] text-sm transition-colors font-light">Career & Culture</Link></li>
                        <li><Link href="/client-portal" className="text-[#a0a5a3] hover:text-[#FF801E] text-sm transition-colors font-light">Client Portal</Link></li>
                        <li><Link href="/contact" className="text-[#a0a5a3] hover:text-[#FF801E] text-sm transition-colors font-light">Contact Us</Link></li>
                    </ul>
                </div>

                {/* Stay Updated */}
                <div>
                    <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-6 opacity-80">Stay Updated</h3>
                    <p className="text-[#a0a5a3] text-sm mb-4 font-light">Join our executive network for the latest global opportunities.</p>
                    <div className="flex">
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="bg-white/10 border-none rounded-l-full px-4 py-3 w-full text-sm text-white focus:outline-none focus:ring-1 focus:ring-[#FF801E]"
                        />
                        <button className="bg-[#FF801E] hover:bg-[#e66c10] text-white px-5 py-3 rounded-r-full transition-colors flex items-center justify-center">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center opacity-60">
                <p className="text-[#a0a5a3] text-sm font-light">
                    &copy; {new Date().getFullYear()} L'AGENCE Executive. All rights reserved.
                </p>
                <div className="flex space-x-6 mt-4 md:mt-0">
                    <Link href="#" className="text-[#a0a5a3] hover:text-white text-sm transition-colors font-light">Privacy Policy</Link>
                    <Link href="#" className="text-[#a0a5a3] hover:text-white text-sm transition-colors font-light">Terms of Service</Link>
                </div>
            </div>
        </footer>
    )
}
