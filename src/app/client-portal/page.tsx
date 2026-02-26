import Link from 'next/link';
import Image from 'next/image';

/**
 * Client Portal Entry Page
 * Simulates a Magic Link / SSO login experience.
 * In production: integrate with NextAuth (Google/Microsoft provider) + Resend magic links.
 */
export default function ClientPortalEntryPage() {
    return (
        <div className="min-h-screen bg-[var(--color-brand-light)] flex flex-col items-center justify-center px-6 py-20">

            {/* Decorative top-right gradient */}
            <div
                className="pointer-events-none fixed top-0 right-0 w-[600px] h-[400px] opacity-[0.06]"
                style={{ background: 'radial-gradient(ellipse at top right, #FF801E 0%, transparent 70%)' }}
            />

            {/* Card container */}
            <div className="w-full max-w-md">

                {/* Logo mark */}
                <div className="flex items-center gap-3 mb-12">
                    <div className="relative h-10 w-48">
                        <Image
                            src="/logo-horizontal-black.png"
                            alt="L'AGENCE Executive"
                            fill
                            className="object-contain object-left"
                            priority
                        />
                    </div>
                </div>

                {/* Heading */}
                <h1 className="text-4xl font-light tracking-tight text-[var(--color-brand-dark)] mb-3">
                    Client Portal
                </h1>
                <p className="text-gray-400 font-light mb-10 leading-relaxed">
                    Secure access to your live talent pipeline, candidate shortlists, and search progress — all in one place.
                </p>

                {/* SSO buttons */}
                <div className="space-y-3 mb-8">
                    <button className="w-full flex items-center justify-center gap-3 px-6 py-3.5 border border-gray-200 rounded-xl bg-white hover:border-gray-300 hover:shadow-sm transition-all text-sm font-medium text-[var(--color-brand-dark)] group">
                        {/* Google icon */}
                        <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                        </svg>
                        Continue with Google
                    </button>

                    <button className="w-full flex items-center justify-center gap-3 px-6 py-3.5 border border-gray-200 rounded-xl bg-white hover:border-gray-300 hover:shadow-sm transition-all text-sm font-medium text-[var(--color-brand-dark)]">
                        {/* Microsoft icon */}
                        <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24">
                            <path fill="#F25022" d="M1 1h10v10H1z" />
                            <path fill="#00A4EF" d="M13 1h10v10H13z" />
                            <path fill="#7FBA00" d="M1 13h10v10H1z" />
                            <path fill="#FFB900" d="M13 13h10v10H13z" />
                        </svg>
                        Continue with Microsoft 365
                    </button>
                </div>

                {/* Divider */}
                <div className="relative flex items-center gap-4 mb-8">
                    <div className="flex-grow h-px bg-gray-200"></div>
                    <span className="text-xs text-gray-400 uppercase tracking-widest font-medium">or</span>
                    <div className="flex-grow h-px bg-gray-200"></div>
                </div>

                {/* Magic link form */}
                <div className="space-y-3">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">
                        Magic Link — no password required
                    </label>
                    <div className="flex gap-2">
                        <input
                            type="email"
                            placeholder="your@company.com"
                            className="flex-grow px-4 py-3.5 rounded-xl border border-gray-200 bg-white text-sm text-[var(--color-brand-dark)] placeholder-gray-300 outline-none focus:border-[var(--color-brand-orange)] focus:ring-2 focus:ring-[var(--color-brand-orange)]/10 transition-all"
                        />
                        <button className="px-5 py-3.5 rounded-xl bg-[var(--color-brand-dark)] text-white text-sm font-medium hover:bg-[var(--color-brand-orange)] transition-colors whitespace-nowrap">
                            Send Link
                        </button>
                    </div>
                    <p className="text-xs text-gray-400 font-light">
                        We&apos;ll email you a secure one-time link valid for 15 minutes.
                    </p>
                </div>

                {/* Demo shortcut — for development */}
                <div className="mt-10 pt-8 border-t border-gray-100">
                    <p className="text-xs text-gray-400 uppercase tracking-widest font-medium mb-3">Demo access</p>
                    <div className="flex flex-wrap gap-2">
                        <Link
                            href="/client-portal/foxtech"
                            className="px-4 py-2 rounded-full border border-[var(--color-brand-orange)]/30 text-[var(--color-brand-orange)] text-xs font-semibold tracking-wider uppercase hover:bg-[var(--color-brand-orange)]/5 transition-colors"
                        >
                            Foxtech Portal →
                        </Link>
                        <Link
                            href="/client-portal/demo"
                            className="px-4 py-2 rounded-full border border-gray-200 text-gray-400 text-xs font-medium tracking-wider uppercase hover:border-gray-300 transition-colors"
                        >
                            View Demo →
                        </Link>
                    </div>
                </div>
            </div>

            {/* Bottom trust bar */}
            <div className="mt-20 flex items-center gap-6 text-xs text-gray-300 font-light">
                <span>🔒 SOC 2-ready infrastructure</span>
                <span>·</span>
                <span>GDPR compliant</span>
                <span>·</span>
                <span>Data encrypted at rest</span>
            </div>
        </div>
    );
}
