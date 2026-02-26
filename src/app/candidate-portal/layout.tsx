import type { Metadata } from 'next';
import '../globals.css';
import Link from 'next/link';
import { headers } from 'next/headers';

export const metadata: Metadata = {
    title: "Career Concierge | L'Agence Executive",
    description: "Exclusive portal for top-tier executive talent.",
    robots: 'noindex, nofollow',
};

const NAV_ITEMS = [
    { label: 'Dashboard', segment: 'dashboard' },
    { label: 'My Profile', segment: 'profile' },
    { label: 'Interviews & Prep', segment: 'interviews' },
];

export default async function CandidatePortalLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    // Extract pathname for active states
    const headersList = await headers();
    const pathname = headersList.get('x-pathname') || '';
    const isLoggedIn = pathname.includes('/dashboard') || pathname.includes('/profile') || pathname.includes('/interviews');

    return (
        <html lang="en">
            <body className="font-sans antialiased bg-[#F8F9FA] text-[var(--color-brand-dark)]">
                <div className="min-h-screen flex flex-col">

                    {/* ── Portal header ── */}
                    <div className="w-full px-6 sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
                        <div className="max-w-screen-2xl mx-auto flex items-center justify-between h-14">

                            {/* Brand + breadcrumb */}
                            <div className="flex items-center gap-4">
                                <Link href="/" className="flex items-center gap-3 group" aria-label="L'Agence home">
                                    <div className="grid grid-cols-2 gap-0.5 opacity-90 group-hover:opacity-100 transition-opacity">
                                        <div className="w-2.5 h-2.5 rounded-sm bg-[var(--color-brand-orange)]"></div>
                                        <div className="w-2.5 h-2.5 rounded-sm border-2 border-[var(--color-brand-orange)]"></div>
                                        <div className="w-2.5 h-2.5 rounded-sm border-2 border-[var(--color-brand-orange)]"></div>
                                        <div className="w-2.5 h-2.5 rounded-sm bg-[var(--color-brand-orange)]"></div>
                                    </div>
                                    <span className="font-light tracking-[0.15em] uppercase text-[var(--color-brand-dark)] text-xs">
                                        L&apos;Agence
                                    </span>
                                </Link>

                                <span className="text-gray-200 text-base font-thin">|</span>
                                <span className="text-xs text-gray-400 tracking-widest uppercase font-medium">
                                    Career Concierge
                                </span>

                                {/* Tab navigation — only shows when inside logged-in area */}
                                {isLoggedIn && (
                                    <>
                                        <span className="text-gray-200 text-base font-thin ml-2">|</span>
                                        <nav className="flex items-center gap-0.5 ml-2">
                                            {NAV_ITEMS.map(item => {
                                                const href = `/candidate-portal/${item.segment}`;
                                                const isActive = pathname.includes(`/${item.segment}`);
                                                return (
                                                    <Link
                                                        key={item.label}
                                                        href={href}
                                                        className={`px-4 py-1 mx-0.5 rounded-full text-xs font-medium transition-all ${isActive
                                                                ? 'bg-[var(--color-brand-orange)] text-white'
                                                                : 'text-gray-500 hover:text-[var(--color-brand-dark)] hover:bg-gray-100'
                                                            }`}
                                                    >
                                                        {item.label}
                                                    </Link>
                                                );
                                            })}
                                        </nav>
                                    </>
                                )}
                            </div>

                            {/* Right side — Candidate Profile or Live indicator */}
                            <div className="flex items-center gap-3">
                                {isLoggedIn ? (
                                    <div className="flex items-center gap-3 border border-gray-100 rounded-full pl-2 pr-4 py-1">
                                        <div className="w-6 h-6 rounded-full bg-[var(--color-brand-orange)] flex items-center justify-center text-white text-[10px] font-semibold">
                                            JS
                                        </div>
                                        <span className="text-xs text-gray-600 font-medium tracking-wide">
                                            John Smith
                                        </span>
                                    </div>
                                ) : (
                                    <div className="flex items-center gap-2 border border-gray-100 rounded-full px-3 py-1.5">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-orange)] animate-pulse"></span>
                                        <span className="text-xs text-gray-500 tracking-wider uppercase font-medium">Portal</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <main className="flex-grow">
                        {children}
                    </main>

                    {/* Footer */}
                    <footer className="border-t border-gray-100 px-8 py-4 bg-white">
                        <div className="max-w-screen-2xl mx-auto flex items-center justify-between">
                            <p className="text-xs text-gray-400 font-light">
                                Your data is protected and never shared without permission.
                            </p>
                            <Link
                                href="/"
                                className="text-xs text-[var(--color-brand-orange)] hover:underline uppercase tracking-widest font-medium"
                            >
                                ← Back to site
                            </Link>
                        </div>
                    </footer>
                </div>
            </body>
        </html>
    );
}
