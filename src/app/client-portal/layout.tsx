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
            <body className="font-sans antialiased">
                <div className="min-h-screen bg-[#060F0C] text-white flex flex-col">
                    {/* Minimal branded header — no public nav */}
                    <header className="border-b border-white/10 px-8 py-5 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <a href="/" className="text-xl font-light tracking-[0.2em] uppercase text-white/90 hover:text-white transition-colors">
                                L&apos;Agence
                            </a>
                            <span className="text-white/20">|</span>
                            <span className="text-sm text-white/40 tracking-widest uppercase font-light">
                                Client Portal
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                            <span className="text-xs text-white/40 tracking-wider uppercase">Live</span>
                        </div>
                    </header>

                    {/* Content */}
                    <main className="flex-grow">
                        {children}
                    </main>

                    {/* Confidential footer */}
                    <footer className="border-t border-white/10 px-8 py-4 text-center">
                        <p className="text-xs text-white/20 tracking-widest uppercase">
                            This view is confidential · L&apos;Agence Executive © {new Date().getFullYear()}
                        </p>
                    </footer>
                </div>
            </body>
        </html>
    );
}
