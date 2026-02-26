import Link from 'next/link';

export default function CandidateProfile() {
    return (
        <div className="bg-[#F8F9FA] min-h-screen">
            <div className="max-w-screen-xl mx-auto px-8 py-12">

                {/* ── Page header ── */}
                <div className="flex items-start justify-between gap-6 mb-12">
                    <div>
                        <p className="text-xs uppercase tracking-widest text-[var(--color-brand-orange)] mb-3 font-semibold">
                            Enrichment · Phase 2
                        </p>
                        <h1 className="text-4xl font-light tracking-tight text-[var(--color-brand-dark)] mb-3">
                            Your Profile
                        </h1>
                        <p className="text-gray-400 font-light text-sm max-w-xl">
                            We use AI to parse your resume into our sleek, branded format, saving you from manual data entry. You control what the client sees.
                        </p>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="text-xs font-medium text-emerald-500 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-100">
                            ✓ AI Formatting Complete
                        </span>
                        <button className="flex-shrink-0 px-6 py-2.5 rounded-xl bg-[var(--color-brand-dark)] text-white text-sm font-semibold hover:bg-[var(--color-brand-orange)] transition-colors shadow-sm">
                            Save & Return to Dashboard
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-8">

                    {/* LEFT COLUMN: Resume & Pitch */}
                    <div className="col-span-2 space-y-6">

                        {/* Resume Parsing UI */}
                        <div className="rounded-2xl border border-gray-100 bg-white shadow-sm p-8">
                            <h2 className="text-lg font-medium text-[var(--color-brand-dark)] mb-1">Resume & Parsing</h2>
                            <p className="text-xs text-gray-400 font-light mb-6">Drop your latest PDF. We strip contact info for privacy.</p>

                            <div className="border-2 border-dashed border-gray-200 rounded-xl bg-gray-50 flex flex-col items-center justify-center py-12 mb-6 group hover:border-[var(--color-brand-orange)]/50 hover:bg-[var(--color-brand-orange)]/5 transition-all cursor-pointer">
                                <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    <svg className="w-5 h-5 text-[var(--color-brand-orange)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                                    </svg>
                                </div>
                                <p className="text-sm font-medium text-[var(--color-brand-dark)] mb-1">
                                    Drop your resume PDF here
                                </p>
                                <p className="text-xs text-gray-400 font-light">Max 10MB.</p>
                            </div>

                            <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-4 flex items-start gap-4">
                                <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 text-emerald-600">
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-emerald-800">Successfully standardized profile</p>
                                    <p className="text-xs text-emerald-600/80 mt-1">
                                        Extracted 14 years experience, 3 degrees, and 12 core skills. Formatted into the L'Agence blind-review template.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Video Pitch */}
                        <div className="rounded-2xl border border-gray-100 bg-white shadow-sm p-8">
                            <h2 className="text-lg font-medium text-[var(--color-brand-dark)] mb-1">The Agency Polish: Video Pitch</h2>
                            <p className="text-xs text-gray-400 font-light mb-6">Clients advance candidates with video pitches 4x faster.</p>

                            <div className="flex items-center gap-6 p-6 rounded-xl border border-gray-100 bg-gray-50">
                                <div className="w-32 h-24 rounded-lg bg-gray-200 overflow-hidden relative border border-gray-300 flex items-center justify-center">
                                    <div className="w-8 h-8 rounded-full bg-white/90 shadow-sm flex items-center justify-center backdrop-blur-sm cursor-pointer hover:scale-110 transition-transform">
                                        <svg className="w-4 h-4 text-gray-800 translate-x-0.5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </div>
                                    <span className="absolute bottom-2 left-2 text-[10px] font-medium text-white px-2 py-0.5 bg-black/50 rounded backdrop-blur">
                                        0:00 / 0:45
                                    </span>
                                </div>
                                <div className="flex-grow">
                                    <p className="text-sm font-medium text-[var(--color-brand-dark)] mb-2">Record a 45-second intro</p>
                                    <ul className="text-xs text-gray-500 font-light space-y-1 mb-4">
                                        <li>• Mention your core superpower or niche.</li>
                                        <li>• Highlight one major scale/impact metric.</li>
                                        <li>• Keep it conversational and energetic.</li>
                                    </ul>
                                    <button className="px-4 py-2 rounded-lg bg-white border border-gray-200 text-xs font-semibold text-[var(--color-brand-dark)] hover:border-[var(--color-brand-orange)] transition-colors inline-flex items-center gap-2">
                                        <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                        </svg>
                                        Record Now
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* RIGHT COLUMN: The Must-Knows */}
                    <div className="col-span-1 border-l border-gray-200 pl-8 space-y-8">

                        <div>
                            <h3 className="text-sm font-medium text-[var(--color-brand-dark)] mb-1">The "Must-Know" Details</h3>
                            <p className="text-xs text-gray-400 font-light mb-6">We only ask the absolute essentials to save your time.</p>

                            <div className="space-y-5">
                                <div>
                                    <label className="block text-xs font-medium text-gray-500 mb-2 uppercase tracking-wide">Target Salary Base (€)</label>
                                    <input type="text" defaultValue="140,000" className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm font-medium focus:ring-2 focus:ring-[var(--color-brand-orange)]/20 focus:border-[var(--color-brand-orange)] outline-none" />
                                </div>
                                <div>
                                    <label className="block text-xs font-medium text-gray-500 mb-2 uppercase tracking-wide">Work Status</label>
                                    <select className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm font-medium focus:ring-2 focus:ring-[var(--color-brand-orange)]/20 focus:border-[var(--color-brand-orange)] outline-none">
                                        <option>EU Citizen / Unrestricted</option>
                                        <option>Requires Sponsorship</option>
                                        <option>Valid Work Visa</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-xs font-medium text-gray-500 mb-2 uppercase tracking-wide">Work Model</label>
                                    <select className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-sm font-medium focus:ring-2 focus:ring-[var(--color-brand-orange)]/20 focus:border-[var(--color-brand-orange)] outline-none">
                                        <option>Hybrid (1-3 days onsite)</option>
                                        <option>Remote Only</option>
                                        <option>Fully Onsite</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="pt-6 border-t border-gray-100">
                            <h3 className="text-sm font-medium text-[var(--color-brand-dark)] mb-1">Skill Verification</h3>
                            <p className="text-xs text-gray-400 font-light mb-4">Fast-track to final rounds by verifying your claims.</p>
                            <div className="p-4 rounded-xl border border-[var(--color-brand-orange)]/30 bg-[var(--color-brand-orange)]/5">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-xs font-semibold text-[var(--color-brand-dark)]">AWS Infrastructure</span>
                                    <span className="text-[10px] uppercase font-bold text-amber-600 bg-amber-100 px-2 py-0.5 rounded">Pending</span>
                                </div>
                                <p className="text-xs text-gray-500 mb-3 leading-relaxed">Boost your match rate by completing a short, 10-minute automated technical check.</p>
                                <button className="w-full px-3 py-2 bg-white rounded-lg border border-gray-200 text-xs font-medium hover:border-[var(--color-brand-orange)] transition-colors">
                                    Take 10-Min Assessment
                                </button>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}
