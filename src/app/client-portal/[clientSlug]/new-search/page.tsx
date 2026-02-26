interface PageProps {
    params: Promise<{ clientSlug: string }>;
}

export default async function NewSearchPage({ params }: PageProps) {
    const { clientSlug } = await params;
    const displayName = clientSlug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

    return (
        <div className="bg-[var(--color-brand-light)] min-h-screen">
            <div className="px-8 py-12 max-w-4xl mx-auto">

                {/* Header */}
                <div className="mb-12">
                    <p className="text-xs uppercase tracking-widest text-[var(--color-brand-orange)] mb-3 font-semibold">
                        {displayName} · Launch New Search
                    </p>
                    <h1 className="text-5xl font-light tracking-tight text-[var(--color-brand-dark)] mb-3">
                        New Search Intake
                    </h1>
                    <p className="text-gray-400 font-light text-base max-w-xl">
                        Upload your job description and our AI will auto-parse the key details. Then calibrate your priorities and book an alignment call with your search team.
                    </p>
                </div>

                {/* Step 1 — JD Upload */}
                <div className="rounded-2xl bg-white border border-gray-100 shadow-sm p-8 mb-6">
                    <div className="flex items-center gap-3 mb-6">
                        <span className="w-7 h-7 rounded-full bg-[var(--color-brand-orange)] text-white text-xs font-bold flex items-center justify-center flex-shrink-0">1</span>
                        <h2 className="text-lg font-medium text-[var(--color-brand-dark)]">Upload Job Description</h2>
                    </div>

                    {/* Drop zone */}
                    <div className="border-2 border-dashed border-gray-200 rounded-xl p-10 text-center hover:border-[var(--color-brand-orange)]/40 transition-colors cursor-pointer group mb-6">
                        <div className="w-12 h-12 rounded-full bg-[var(--color-brand-orange)]/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-[var(--color-brand-orange)]/20 transition-colors">
                            <svg className="w-6 h-6 text-[var(--color-brand-orange)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                            </svg>
                        </div>
                        <p className="text-sm font-medium text-[var(--color-brand-dark)] mb-1">Drop your JD here, or click to upload</p>
                        <p className="text-xs text-gray-400 font-light">PDF, DOCX, or paste text below · Max 10MB</p>
                    </div>

                    <div className="relative mb-6">
                        <div className="flex items-center gap-4">
                            <div className="flex-grow h-px bg-gray-100"></div>
                            <span className="text-xs text-gray-400 uppercase tracking-wider">or paste text</span>
                            <div className="flex-grow h-px bg-gray-100"></div>
                        </div>
                    </div>

                    <textarea
                        rows={5}
                        placeholder="Paste your job description here…"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-[var(--color-brand-dark)] placeholder-gray-300 outline-none focus:border-[var(--color-brand-orange)] focus:ring-2 focus:ring-[var(--color-brand-orange)]/10 transition-all resize-none font-light"
                    />

                    <button className="mt-4 px-6 py-3 rounded-xl bg-[var(--color-brand-dark)] text-white text-sm font-medium hover:bg-[var(--color-brand-orange)] transition-colors flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                        Parse with AI
                    </button>
                </div>

                {/* Step 2 — Auto-parsed fields (shown after parsing) */}
                <div className="rounded-2xl bg-white border border-gray-100 shadow-sm p-8 mb-6">
                    <div className="flex items-center gap-3 mb-6">
                        <span className="w-7 h-7 rounded-full bg-[var(--color-brand-orange)] text-white text-xs font-bold flex items-center justify-center flex-shrink-0">2</span>
                        <div>
                            <h2 className="text-lg font-medium text-[var(--color-brand-dark)]">Auto-Parsed Details</h2>
                            <p className="text-xs text-gray-400 font-light">Review and edit the fields our AI extracted</p>
                        </div>
                        <span className="ml-auto text-xs font-semibold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">AI Parsed</span>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                        {[
                            { label: 'Position Title', placeholder: 'e.g. VP of Engineering', value: '' },
                            { label: 'Location', placeholder: 'e.g. Paris / Remote', value: '' },
                            { label: 'Salary Budget', placeholder: 'e.g. €120K – €160K', value: '' },
                            { label: 'Target Start Date', placeholder: 'e.g. Q2 2026', value: '' },
                        ].map(f => (
                            <div key={f.label}>
                                <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">{f.label}</label>
                                <input
                                    type="text"
                                    placeholder={f.placeholder}
                                    defaultValue={f.value}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-[var(--color-brand-dark)] placeholder-gray-300 outline-none focus:border-[var(--color-brand-orange)] focus:ring-2 focus:ring-[var(--color-brand-orange)]/10 transition-all"
                                />
                            </div>
                        ))}
                    </div>

                    <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">Must-Have Skills (comma separated)</label>
                        <input
                            type="text"
                            placeholder="e.g. Python, AWS, 10+ years leadership, Series B experience"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-[var(--color-brand-dark)] placeholder-gray-300 outline-none focus:border-[var(--color-brand-orange)] focus:ring-2 focus:ring-[var(--color-brand-orange)]/10 transition-all"
                        />
                    </div>
                </div>

                {/* Step 3 — Calibration */}
                <div className="rounded-2xl bg-white border border-gray-100 shadow-sm p-8 mb-6">
                    <div className="flex items-center gap-3 mb-6">
                        <span className="w-7 h-7 rounded-full bg-[var(--color-brand-orange)] text-white text-xs font-bold flex items-center justify-center flex-shrink-0">3</span>
                        <div>
                            <h2 className="text-lg font-medium text-[var(--color-brand-dark)]">Calibrate Priorities</h2>
                            <p className="text-xs text-gray-400 font-light">Drag sliders to weight what matters most for this search</p>
                        </div>
                    </div>

                    <div className="space-y-8">
                        {[
                            { left: 'Technical Depth', right: 'Leadership Vision', value: 60 },
                            { left: 'Culture Fit', right: 'Track Record', value: 40 },
                            { left: 'Local Candidate', right: 'Open to Relocation', value: 35 },
                            { left: 'Speed of Hire', right: 'Quality of Fit', value: 75 },
                        ].map(s => (
                            <div key={s.left}>
                                <div className="flex justify-between text-xs font-medium text-gray-500 mb-2">
                                    <span>{s.left}</span>
                                    <span>{s.right}</span>
                                </div>
                                <div className="relative">
                                    <input
                                        type="range"
                                        min={0}
                                        max={100}
                                        defaultValue={s.value}
                                        className="w-full h-1.5 bg-gray-200 rounded-full appearance-none cursor-pointer accent-[#FF801E]"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Toggle switches */}
                    <div className="mt-8 pt-6 border-t border-gray-100 grid grid-cols-2 gap-4">
                        {[
                            { label: 'Blind Candidate Review', desc: 'Hide names until shortlisted', on: true },
                            { label: 'Video Intros Required', desc: 'Request 60-sec candidate video', on: false },
                            { label: 'Multi-stakeholder Scoring', desc: 'Multiple reviewers send scorecards', on: true },
                            { label: 'Salary Benchmarks Visible', desc: 'Show market data on dashboard', on: true },
                        ].map(t => (
                            <div key={t.label} className="flex items-start justify-between gap-4 p-4 rounded-xl border border-gray-100 bg-[var(--color-brand-light)]">
                                <div>
                                    <p className="text-sm font-medium text-[var(--color-brand-dark)]">{t.label}</p>
                                    <p className="text-xs text-gray-400 font-light mt-0.5">{t.desc}</p>
                                </div>
                                <div className={`relative w-10 h-5.5 rounded-full flex-shrink-0 mt-0.5 cursor-pointer transition-colors ${t.on ? 'bg-[var(--color-brand-orange)]' : 'bg-gray-200'}`}>
                                    <div className={`absolute top-0.5 w-4 h-4 rounded-full bg-white shadow-sm transition-all ${t.on ? 'left-5' : 'left-0.5'}`}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Step 4 — Book intake call */}
                <div className="rounded-2xl bg-[var(--color-brand-dark)] p-8 text-white mb-6">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="w-7 h-7 rounded-full bg-[var(--color-brand-orange)] text-white text-xs font-bold flex items-center justify-center flex-shrink-0">4</span>
                        <h2 className="text-lg font-medium">Book Your Alignment Call</h2>
                    </div>
                    <p className="text-gray-400 font-light text-sm mb-6 max-w-xl">
                        A 15-minute call with your dedicated search team ensures we understand the nuances before sourcing begins. Select a time that works for you.
                    </p>
                    <div className="grid grid-cols-3 gap-3 mb-6">
                        {['Thu 27 Feb · 10:00', 'Thu 27 Feb · 14:30', 'Fri 28 Feb · 09:00', 'Fri 28 Feb · 11:00', 'Mon 3 Mar · 10:00', 'Mon 3 Mar · 15:00'].map(slot => (
                            <button
                                key={slot}
                                className="px-4 py-3 rounded-xl border border-white/20 text-sm text-white/80 hover:border-[var(--color-brand-orange)] hover:text-white hover:bg-[var(--color-brand-orange)]/10 transition-all font-light text-left"
                            >
                                {slot}
                            </button>
                        ))}
                    </div>
                    <button className="px-8 py-4 rounded-xl bg-[var(--color-brand-orange)] text-white font-medium text-sm hover:bg-orange-500 transition-colors">
                        Confirm Booking & Submit Search
                    </button>
                </div>

            </div>
        </div>
    );
}
