import type { Metadata } from 'next';
import '../globals.css';
import Link from 'next/link';
import { headers } from 'next/headers';

export const metadata: Metadata = {
    title: "Client Portal | L'Agence Executive",
    description: "Secure candidate pipeline view for L'Agence clients.",
    robots: 'noindex, nofollow',
};

const NAV_ITEMS = [
    { label: 'Dashboard', segment: '' },
    { label: 'Shortlist', segment: 'shortlist' },
    { label: 'New Search', segment: 'new-search' },
];

export default async function ClientPortalLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    // Extract slug from the URL server-side
    const headersList = await headers();
    const pathname = headersList.get('x-pathname') || '';
    const slugMatch = pathname.match(/\/client-portal\/([^\/]+)/);
    const clientSlug = slugMatch ? slugMatch[1] : null;

    return (
        <html lang="en">
            <body className="font-sans antialiased bg-[var(--color-brand-light)] text-[var(--color-brand-dark)]">
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
                                    Client Portal
                                </span>

                                {/* Tab navigation — only shows when inside a client space */}
                                {clientSlug && (
                                    <>
                                        <span className="text-gray-200 text-base font-thin ml-2">|</span>
                                        <nav className="flex items-center gap-0.5 ml-2">
                                            {NAV_ITEMS.map(item => {
                                                const href = `/client-portal/${clientSlug}${item.segment ? '/' + item.segment : ''}`;
                                                const isActive = item.segment === ''
                                                    ? pathname === `/client-portal/${clientSlug}` || pathname === `/client-portal/${clientSlug}/`
                                                    : pathname.includes(`/${item.segment}`);
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

                            {/* Right side — Live indicator */}
                            <div className="flex items-center gap-3">
                                <div className="flex items-center gap-2 border border-gray-100 rounded-full px-3 py-1.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                                    <span className="text-xs text-gray-500 tracking-wider uppercase font-medium">Live</span>
                                </div>
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
                            <p className="text-xs text-gray-300 tracking-widest uppercase font-light">
                                Confidential · L&apos;Agence Executive © {new Date().getFullYear()}
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
