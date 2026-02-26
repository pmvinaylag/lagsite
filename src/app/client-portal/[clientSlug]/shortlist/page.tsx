interface PageProps {
    params: Promise<{ clientSlug: string }>;
}

// Static demo shortlist — in production, load from HubSpot deals in 'Client Interview' stage
const DEMO_CANDIDATES = [
    {
        id: '1',
        initials: 'A. M.',
        role: 'VP of Engineering',
        location: 'Paris, France',
        experience: '14 years',
        currentTitle: 'Director of Engineering @ Criteo',
        salary: '€145K – €160K',
        pitch: 'Built and scaled Criteo\'s 80-person distributed engineering org through two major replatforming cycles. Led migration from monolith to microservices in 18 months without downtime. Strong alignment with your "infrastructure-first" culture.',
        tags: ['AWS Certified', 'Series B–D', 'Remote-first', 'FAANG-adjacent'],
        priority: true,
        hasVideo: true,
    },
    {
        id: '2',
        initials: 'C. D.',
        role: 'VP of Engineering',
        location: 'Amsterdam, NL',
        experience: '11 years',
        currentTitle: 'Head of Platform Engineering @ Booking.com',
        salary: '€130K – €150K',
        pitch: 'Deep platform engineering background with hands-on Kubernetes and developer tooling experience. Has hired 40+ engineers and introduced structured RFC-driven engineering culture at a company of 10,000 employees.',
        tags: ['Platform Eng', 'Kubernetes', 'Hiring leader', 'Open to relocation'],
        priority: false,
        hasVideo: false,
    },
    {
        id: '3',
        initials: 'S. L.',
        role: 'VP of Engineering',
        location: 'London, UK',
        experience: '16 years',
        currentTitle: 'VP Engineering @ Monzo',
        salary: '€155K – €175K',
        pitch: 'Rare combination of deep fintech domain expertise and people leadership at scale. Managed 5 engineering teams through a 3x headcount growth over 2 years. Motivated by mission-driven environments and product-engineering collaboration.',
        tags: ['Fintech', 'Scale-up', 'People-first', 'Open to Paris'],
        priority: true,
        hasVideo: true,
    },
];

const PASS_REASONS = [
    'Salary expectation too high',
    'Lacks specific technical skill',
    'Culture / values mismatch',
    'Overqualified for current stage',
    'Location / relocation constraints',
    'Already moved forward with another candidate',
];

export default async function ShortlistPage({ params }: PageProps) {
    const { clientSlug } = await params;
    const displayName = clientSlug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

    return (
        <div className="bg-[var(--color-brand-light)] min-h-screen">
            <div className="px-8 py-12 max-w-5xl mx-auto">

                {/* Page header */}
                <div className="mb-10">
                    <p className="text-xs uppercase tracking-widest text-[var(--color-brand-orange)] mb-3 font-semibold">
                        {displayName} · VP of Engineering
                    </p>
                    <div className="flex items-end justify-between gap-6">
                        <div>
                            <h1 className="text-5xl font-light tracking-tight text-[var(--color-brand-dark)] mb-3">
                                Shortlist Review
                            </h1>
                            <p className="text-gray-400 font-light text-base">
                                {DEMO_CANDIDATES.length} candidates curated for your review · Please action each profile
                            </p>
                        </div>
                        <div className="flex-shrink-0 text-right">
                            <p className="text-xs text-gray-400 font-light mb-1">Progress</p>
                            <div className="flex items-center gap-2">
                                <div className="w-32 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                                    <div className="h-full w-1/3 bg-[var(--color-brand-orange)] rounded-full"></div>
                                </div>
                                <span className="text-xs font-medium text-[var(--color-brand-dark)]">1 / 3</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Candidate cards */}
                <div className="space-y-6">
                    {DEMO_CANDIDATES.map((c, idx) => (
                        <div key={c.id} className={`rounded-2xl bg-white border shadow-sm overflow-hidden ${c.priority ? 'border-[var(--color-brand-orange)]/30' : 'border-gray-100'}`}>

                            {/* Priority banner */}
                            {c.priority && (
                                <div className="px-6 py-2 bg-[var(--color-brand-orange)]/5 border-b border-[var(--color-brand-orange)]/20 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-orange)]"></span>
                                    <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-brand-orange)]">L&apos;Agence Priority Pick</span>
                                </div>
                            )}

                            <div className="p-8">
                                <div className="flex gap-8">

                                    {/* Avatar + meta */}
                                    <div className="flex-shrink-0 text-center w-24">
                                        <div className="w-16 h-16 rounded-2xl bg-[var(--color-brand-dark)] text-white flex items-center justify-center text-sm font-light tracking-wider mx-auto mb-3">
                                            {c.initials}
                                        </div>
                                        {c.hasVideo && (
                                            <button className="flex items-center gap-1 text-[var(--color-brand-orange)] text-xs font-medium hover:underline mx-auto">
                                                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M8 5v14l11-7z" />
                                                </svg>
                                                Video intro
                                            </button>
                                        )}
                                    </div>

                                    {/* Details */}
                                    <div className="flex-grow min-w-0">
                                        <div className="flex items-start justify-between gap-4 mb-4">
                                            <div>
                                                <h3 className="text-xl font-medium text-[var(--color-brand-dark)] mb-0.5">Candidate {idx + 1}</h3>
                                                <p className="text-sm text-gray-500 font-light">{c.currentTitle}</p>
                                            </div>
                                            <div className="text-right flex-shrink-0">
                                                <p className="text-sm font-medium text-[var(--color-brand-dark)]">{c.salary}</p>
                                                <p className="text-xs text-gray-400 font-light">{c.location} · {c.experience}</p>
                                            </div>
                                        </div>

                                        {/* Agency pitch */}
                                        <div className="bg-[var(--color-brand-light)] rounded-xl p-4 mb-4">
                                            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">Why we&apos;re submitting this candidate</p>
                                            <p className="text-sm text-[var(--color-brand-dark)] font-light leading-relaxed">{c.pitch}</p>
                                        </div>

                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {c.tags.map(tag => (
                                                <span key={tag} className="px-3 py-1 rounded-full border border-gray-200 text-xs text-gray-500 font-medium">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        {/* 1-click action bar */}
                                        <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                                            <button className="flex-1 px-5 py-3 rounded-xl bg-[var(--color-brand-dark)] text-white text-sm font-medium hover:bg-[var(--color-brand-orange)] transition-colors flex items-center justify-center gap-2">
                                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                                Advance to Interview
                                            </button>
                                            <button className="flex-1 px-5 py-3 rounded-xl border border-gray-200 text-sm font-medium text-gray-600 hover:border-gray-300 hover:bg-gray-50 transition-all flex items-center justify-center gap-2">
                                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                                </svg>
                                                Hold &amp; Ask a Question
                                            </button>
                                            <div className="flex-1 relative group">
                                                <button className="w-full px-5 py-3 rounded-xl border border-gray-200 text-sm font-medium text-gray-400 hover:border-red-200 hover:text-red-500 hover:bg-red-50 transition-all flex items-center justify-center gap-2">
                                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                                                    </svg>
                                                    Pass
                                                </button>
                                                {/* Pass reason dropdown — visible on hover/click in production */}
                                                <div className="absolute bottom-full left-0 right-0 mb-2 bg-white rounded-xl border border-gray-200 shadow-lg p-3 hidden group-hover:block z-10">
                                                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">Reason (required)</p>
                                                    <div className="space-y-1">
                                                        {PASS_REASONS.slice(0, 3).map(r => (
                                                            <button key={r} className="w-full text-left px-3 py-2 rounded-lg text-xs text-gray-600 hover:bg-gray-50 transition-colors">
                                                                {r}
                                                            </button>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-10 text-center text-sm text-gray-400 font-light">
                    Need to revisit all candidates?{' '}
                    <a href={`/client-portal/${clientSlug}`} className="text-[var(--color-brand-orange)] hover:underline font-medium">
                        Back to Dashboard →
                    </a>
                </div>
            </div>
        </div>
    );
}
