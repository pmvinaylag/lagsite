import type { Metadata } from 'next';
import '../globals.css';

export const metadata: Metadata = {
    title: "Client Portal | L'Agence Executive",
    description: "Secure candidate pipeline view for L'Agence clients.",
    robots: 'noindex, nofollow',
};

export default function ClientPortalLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="font-sans antialiased bg-[var(--color-brand-light)] text-[var(--color-brand-dark)]">
                <div className="min-h-screen flex flex-col">

                    {/* Portal header — same floating-pill aesthetic as the public nav */}
                    <div className="w-full px-6 py-4 sticky top-0 z-50 bg-[var(--color-brand-light)]/90 backdrop-blur-sm border-b border-gray-100">
                        <div className="max-w-screen-2xl mx-auto flex items-center justify-between">
                            {/* Brand */}
                            <div className="flex items-center gap-4">
                                {/* L'Agence logo mark (same 2×2 squares as public nav) */}
                                <a href="/" className="flex items-center gap-3 group" aria-label="L'Agence home">
                                    <div className="grid grid-cols-2 gap-0.5 opacity-90 group-hover:opacity-100 transition-opacity">
                                        <div className="w-3 h-3 rounded-sm bg-[var(--color-brand-orange)]"></div>
                                        <div className="w-3 h-3 rounded-sm border-2 border-[var(--color-brand-orange)]"></div>
                                        <div className="w-3 h-3 rounded-sm border-2 border-[var(--color-brand-orange)]"></div>
                                        <div className="w-3 h-3 rounded-sm bg-[var(--color-brand-orange)]"></div>
                                    </div>
                                    <span className="font-light tracking-[0.15em] uppercase text-[var(--color-brand-dark)] text-sm">
                                        L&apos;Agence
                                    </span>
                                </a>

                                {/* Breadcrumb divider */}
                                <span className="text-gray-300 text-lg font-thin">|</span>
                                <span className="text-xs text-gray-400 tracking-widest uppercase font-medium">
                                    Client Portal
                                </span>
                            </div>

                            {/* Live indicator */}
                            <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm border border-gray-100">
                                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                                <span className="text-xs text-gray-500 tracking-wider uppercase font-medium">Live</span>
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <main className="flex-grow">
                        {children}
                    </main>

                    {/* Footer — minimal, same style as public footer */}
                    <footer className="border-t border-gray-100 px-8 py-5 bg-white">
                        <div className="max-w-screen-2xl mx-auto flex items-center justify-between">
                            <p className="text-xs text-gray-300 tracking-widest uppercase font-light">
                                This view is confidential · L&apos;Agence Executive © {new Date().getFullYear()}
                            </p>
                            <a
                                href="/"
                                className="text-xs text-[var(--color-brand-orange)] hover:underline uppercase tracking-widest font-medium"
                            >
                                ← Back to site
                            </a>
                        </div>
                    </footer>
                </div>
            </body>
        </html>
    );
}
