import Link from 'next/link';

export default function CandidateLogin() {
    return (
        <div className="min-h-[calc(100vh-140px)] flex items-center justify-center bg-[#F8F9FA] px-4 py-12">
            <div className="max-w-md w-full">

                {/* Branding / Header */}
                <div className="text-center mb-10">
                    <div className="inline-flex items-center gap-3 mb-6">
                        <div className="grid grid-cols-2 gap-0.5">
                            <div className="w-4 h-4 rounded-sm bg-[var(--color-brand-orange)]"></div>
                            <div className="w-4 h-4 rounded-sm border-2 border-[var(--color-brand-orange)]"></div>
                            <div className="w-4 h-4 rounded-sm border-2 border-[var(--color-brand-orange)]"></div>
                            <div className="w-4 h-4 rounded-sm bg-[var(--color-brand-orange)]"></div>
                        </div>
                    </div>
                    <h1 className="text-3xl font-light text-[var(--color-brand-dark)] tracking-tight mb-3">
                        Career Concierge
                    </h1>
                    <p className="text-gray-500 font-light text-sm px-4 leading-relaxed">
                        Your private space for exclusive executive opportunities. We never share your profile without your explicit consent.
                    </p>
                </div>

                {/* Login Card */}
                <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 p-8">

                    <div className="space-y-4 mb-8">
                        {/* LinkedIn SSO */}
                        <button className="w-full flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl border border-gray-200 text-[#0A66C2] font-semibold text-sm hover:bg-[#F3F2EF] hover:border-[#0A66C2]/30 transition-all">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg>
                            Continue with LinkedIn
                        </button>

                        {/* GitHub SSO */}
                        <button className="w-full flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl border border-gray-200 text-gray-800 font-semibold text-sm hover:bg-gray-50 hover:border-gray-300 transition-all">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.699-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.379.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                            </svg>
                            Continue with GitHub
                        </button>

                        {/* Google SSO */}
                        <button className="w-full flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl border border-gray-200 text-gray-700 font-semibold text-sm hover:bg-gray-50 hover:border-gray-300 transition-all">
                            <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24">
                                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                                <path fill="none" d="M1 1h22v22H1z" />
                            </svg>
                            Continue with Google
                        </button>
                    </div>

                    <div className="relative mb-8 text-center">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-100"></div>
                        </div>
                        <span className="relative bg-white px-4 text-xs tracking-widest uppercase font-medium text-gray-400">
                            Zero Friction Entry
                        </span>
                    </div>

                    <div className="text-center">
                        <p className="text-xs text-gray-500 font-light leading-relaxed">
                            No passwords to remember. 1-click apply.<br />
                            We only use your data to match you with relevant roles.
                        </p>
                    </div>
                </div>

                {/* Developer Shortcut */}
                <div className="mt-8 text-center flex items-center justify-center gap-4">
                    <span className="text-xs font-mono text-gray-400">DEMO ACCESS</span>
                    <Link
                        href="/candidate-portal/dashboard"
                        className="px-4 py-2 rounded-full border border-gray-200 text-xs font-semibold text-gray-500 hover:border-[var(--color-brand-orange)] hover:text-[var(--color-brand-orange)] transition-colors inline-block tracking-wider uppercase bg-white shadow-sm"
                    >
                        Skip to Dashboard
                    </Link>
                </div>

            </div>
        </div>
    );
}
