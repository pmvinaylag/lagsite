import Link from 'next/link';
import Image from 'next/image';

export default function CandidateInterviews() {
    return (
        <div className="bg-[#F8F9FA] min-h-screen">
            <div className="max-w-screen-xl mx-auto px-8 py-12">

                {/* ── Page header ── */}
                <div className="flex items-start justify-between gap-6 mb-12">
                    <div>
                        <p className="text-xs uppercase tracking-widest text-emerald-600 mb-3 font-semibold">
                            Next Steps: Interview 1
                        </p>
                        <h1 className="text-4xl font-light tracking-tight text-[var(--color-brand-dark)] mb-3">
                            Interview Prep Vault
                        </h1>
                        <p className="text-gray-400 font-light text-sm max-w-xl">
                            All the inside intelligence you need to ace your upcoming round with Acme Corp.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-8">

                    {/* LEFT COLUMN: Preparation & Feedback */}
                    <div className="col-span-2 space-y-6">

                        {/* Prep Vault: The Cheat Sheet */}
                        <div className="rounded-2xl border border-[var(--color-brand-orange)]/20 bg-white shadow-sm overflow-hidden">
                            <div className="bg-gradient-to-r from-[var(--color-brand-orange)]/10 to-transparent p-6 border-b border-gray-100 flex items-center justify-between">
                                <h2 className="text-lg font-medium text-[var(--color-brand-dark)] flex items-center gap-3">
                                    <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[var(--color-brand-orange)] shadow-sm">
                                        💡
                                    </span>
                                    Agency Cheat Sheet
                                </h2>
                                <span className="text-xs uppercase font-semibold tracking-widest text-[var(--color-brand-orange)]">Confidential</span>
                            </div>

                            <div className="p-8 space-y-6">
                                <div>
                                    <h3 className="text-sm font-semibold uppercase tracking-widest text-[var(--color-brand-dark)] mb-2">What they actually care about</h3>
                                    <p className="text-sm font-light text-gray-600 leading-relaxed bg-gray-50 p-4 rounded-xl border border-gray-100">
                                        The hiring manager (Sarah) is extremely focused on <strong>developer velocity</strong>. Don't just talk about infrastructure architecture; frame your answers around how your infrastructure choices reduced deployment times or increased engineering output.
                                    </p>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-emerald-50 border border-emerald-100 p-4 rounded-xl">
                                        <h4 className="text-xs uppercase font-bold text-emerald-800 mb-2">Do Emphasize</h4>
                                        <ul className="text-xs text-emerald-700 space-y-2 font-medium">
                                            <li>✓ Cross-functional leadership</li>
                                            <li>✓ CI/CD pipeline automation</li>
                                            <li>✓ Cost optimization on AWS</li>
                                        </ul>
                                    </div>
                                    <div className="bg-rose-50 border border-rose-100 p-4 rounded-xl">
                                        <h4 className="text-xs uppercase font-bold text-rose-800 mb-2">Avoid</h4>
                                        <ul className="text-xs text-rose-700 space-y-2 font-medium">
                                            <li>✗ Overly theoretical discussions</li>
                                            <li>✗ "Not my job" attitudes</li>
                                            <li>✗ Suggesting total rewrites</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Post-Interview Pulse (Unlocked) */}
                        <div className="rounded-2xl border border-emerald-500/20 bg-emerald-50/30 shadow-sm p-8 mt-8">
                            <div className="flex gap-6 mb-6">
                                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 text-emerald-600">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-medium text-[var(--color-brand-dark)] mb-2">Post-Interview Pulse Unlocked!</h3>
                                    <p className="text-sm text-gray-500 font-light leading-relaxed">
                                        You just completed your first round with Acme Corp. Help us negotiate on your behalf by instantly letting us know how you felt about the conversation.
                                    </p>
                                </div>
                            </div>

                            {/* The Thumbs Up / Down Survey */}
                            <div className="grid grid-cols-2 gap-4">
                                <button className="flex flex-col items-center justify-center p-6 rounded-xl border border-gray-200 bg-white hover:border-emerald-500 hover:bg-emerald-50 hover:shadow-md transition-all group">
                                    <span className="text-4xl mb-3 group-hover:scale-110 transition-transform text-emerald-500">👍</span>
                                    <span className="text-sm font-medium text-[var(--color-brand-dark)]">Crushed It</span>
                                    <span className="text-xs text-gray-400 font-light mt-1 text-center">I want to move forward.</span>
                                </button>
                                <button className="flex flex-col items-center justify-center p-6 rounded-xl border border-gray-200 bg-white hover:border-rose-500 hover:bg-rose-50 hover:shadow-md transition-all group">
                                    <span className="text-4xl mb-3 group-hover:scale-110 transition-transform text-rose-500">👎</span>
                                    <span className="text-sm font-medium text-[var(--color-brand-dark)]">Not a Fit</span>
                                    <span className="text-xs text-gray-400 font-light mt-1 text-center">Pull my application.</span>
                                </button>
                            </div>
                        </div>

                    </div>

                    {/* RIGHT COLUMN: Logistics & Scheduling */}
                    <div className="col-span-1 space-y-6">

                        {/* Call Details Card */}
                        <div className="rounded-2xl border border-gray-100 bg-[var(--color-brand-dark)] shadow-sm p-6 text-white relative overflow-hidden">
                            <div className="absolute -top-12 -right-12 w-32 h-32 bg-[var(--color-brand-orange)] rounded-full blur-3xl opacity-20 pointer-events-none"></div>

                            <p className="text-xs uppercase tracking-widest text-[#FF801E] mb-2 font-semibold">Scheduled Interview</p>
                            <h3 className="text-xl font-light mb-6 tracking-tight">Acme Corp · Systems Arch</h3>

                            <div className="space-y-4 mb-6">
                                <div className="flex gap-4">
                                    <div className="mt-0.5 text-[#FF801E] opacity-80">
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium">Tomorrow, 10:00 AM</p>
                                        <p className="text-xs text-gray-400 font-light mt-0.5">45 minutes · GMT+1</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="mt-0.5 text-[#FF801E] opacity-80">
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium">Google Meet</p>
                                        <Link href="#" className="text-xs text-[#FF801E] font-medium mt-0.5 underline">Join Conference →</Link>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-2 bg-white/10 p-3 rounded-lg border border-white/5">
                                <div className="w-4 h-4 rounded-full bg-emerald-400 flex items-center justify-center">
                                    <svg className="w-2.5 h-2.5 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
                                </div>
                                <p className="text-[10px] uppercase tracking-wider text-gray-300 font-medium">SMS Reminders Active</p>
                            </div>
                        </div>

                        {/* Interviewers */}
                        <div className="rounded-2xl border border-gray-100 bg-white shadow-sm p-6">
                            <h3 className="text-sm font-medium text-[var(--color-brand-dark)] mb-4">Your Interviewers</h3>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-gray-100 border border-gray-200"></div>
                                    <div className="flex-grow">
                                        <p className="text-sm text-[var(--color-brand-dark)] font-medium">Sarah Jenkins</p>
                                        <p className="text-xs text-gray-400 font-light">VP of Engineering</p>
                                    </div>
                                    <Link href="#" aria-label="LinkedIn Profile" className="text-gray-400 hover:text-[#0A66C2]">
                                        <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                                    </Link>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-gray-100 border border-gray-200"></div>
                                    <div className="flex-grow">
                                        <p className="text-sm text-[var(--color-brand-dark)] font-medium">Mark Voller</p>
                                        <p className="text-xs text-gray-400 font-light">Lead Cloud Architect</p>
                                    </div>
                                    <Link href="#" aria-label="LinkedIn Profile" className="text-gray-400 hover:text-[#0A66C2]">
                                        <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}
