import { getHiringKanban, type KanbanColumn } from '@/lib/hubspot';

// Stage config using brand palette rather than dark-mode neon
const STAGE_CONFIG: Record<string, {
    accentBg: string;      // pill background
    accentText: string;    // pill text
    dot: string;           // status dot color (Tailwind)
    borderTop: string;     // top accent on each kanban column
}> = {
    '1. Sourced & Enriched': { accentBg: 'bg-[#E8F0EF]', accentText: 'text-[#0D5C52]', dot: 'bg-[#0D5C52]', borderTop: 'border-t-[#0D5C52]' },
    '2. Initial Outreach': { accentBg: 'bg-[#FFF3E8]', accentText: 'text-[#C45C00]', dot: 'bg-[#FF801E]', borderTop: 'border-t-[#FF801E]' },
    '3. Screening Call': { accentBg: 'bg-[#FDF8E8]', accentText: 'text-[#7A6200]', dot: 'bg-[#D4A900]', borderTop: 'border-t-[#D4A900]' },
    '4. Client Interview': { accentBg: 'bg-[#FFF3E8]', accentText: 'text-[#C45C00]', dot: 'bg-[#FF801E]', borderTop: 'border-t-[#FF801E]' },
    '5. Offer Extended': { accentBg: 'bg-[#E8F5EE]', accentText: 'text-[#1A6B3C]', dot: 'bg-[#22A05B]', borderTop: 'border-t-[#22A05B]' },
    '6. Placed / Hired': { accentBg: 'bg-[#E4F7EE]', accentText: 'text-[#155C32]', dot: 'bg-[#0D8045]', borderTop: 'border-t-[#0D8045]' },
    '7. Rejected / Dropped': { accentBg: 'bg-[#F7E8E8]', accentText: 'text-[#7A1A1A]', dot: 'bg-[#C43030]', borderTop: 'border-t-[#C43030]' },
};

function getStage(label: string) {
    return STAGE_CONFIG[label] ?? {
        accentBg: 'bg-gray-100', accentText: 'text-gray-600', dot: 'bg-gray-400', borderTop: 'border-t-gray-300',
    };
}

function anonymiseName(name: string): string {
    const parts = name.split(' - ');
    const nameParts = parts[0].trim().split(' ');
    const initials = nameParts.map((n, i) =>
        i === nameParts.length - 1 ? n[0] + '.' : n
    ).join(' ');
    return parts.length > 1 ? `${initials} — ${parts.slice(1).join(' - ')}` : initials;
}

export default async function ClientPortalPage() {
    const columns = await getHiringKanban();

    const totalActive = columns
        .filter(c => !c.label.includes('Rejected') && !c.label.includes('Placed'))
        .reduce((sum, c) => sum + c.count, 0);
    const totalPlaced = columns.find(c => c.label.includes('Placed'))?.count ?? 0;
    const totalInterviewing = columns.find(c => c.label.includes('Interview'))?.count ?? 0;

    const hiringColumns = columns.filter(c => c.label.match(/^\d\./));

    return (
        <div className="bg-[var(--color-brand-light)] min-h-screen">
            <div className="px-8 py-12 max-w-screen-2xl mx-auto">

                {/* Page Header */}
                <div className="mb-12">
                    <p className="text-xs uppercase tracking-widest text-[var(--color-brand-orange)] mb-3 font-semibold">
                        Live Search Engagement
                    </p>
                    <h1 className="text-5xl font-light tracking-tight text-[var(--color-brand-dark)] mb-3">
                        Pipeline Overview
                    </h1>
                    <p className="text-gray-400 font-light text-base">
                        Candidate tracking · refreshed every 60 seconds
                    </p>
                </div>

                {/* Summary Stats — same card style as the public site */}
                <div className="grid grid-cols-3 gap-6 mb-14">
                    {[
                        {
                            label: 'Active Candidates',
                            value: totalActive,
                            sub: 'across all stages',
                            accent: 'text-[var(--color-brand-dark)]',
                            icon: (
                                <svg className="w-5 h-5 text-[var(--color-brand-orange)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            ),
                        },
                        {
                            label: 'In Client Interview',
                            value: totalInterviewing,
                            sub: 'shortlisted for you',
                            accent: 'text-[var(--color-brand-orange)]',
                            icon: (
                                <svg className="w-5 h-5 text-[var(--color-brand-orange)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                            ),
                        },
                        {
                            label: 'Placed / Hired',
                            value: totalPlaced,
                            sub: 'successfully placed',
                            accent: 'text-[#0D8045]',
                            icon: (
                                <svg className="w-5 h-5 text-[var(--color-brand-orange)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                </svg>
                            ),
                        },
                    ].map(stat => (
                        <div
                            key={stat.label}
                            className="rounded-2xl bg-white border border-gray-100 shadow-sm px-8 py-7 flex items-start justify-between group hover:shadow-md transition-shadow"
                        >
                            <div>
                                <div className={`text-5xl font-light mb-2 ${stat.accent} tracking-tight`}>
                                    {stat.value}
                                </div>
                                <div className="text-sm font-medium text-[var(--color-brand-dark)] mb-0.5">
                                    {stat.label}
                                </div>
                                <div className="text-xs text-gray-400 font-light">{stat.sub}</div>
                            </div>
                            <div className="w-10 h-10 rounded-full bg-[var(--color-brand-orange)]/10 flex items-center justify-center flex-shrink-0">
                                {stat.icon}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Section label */}
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <h2 className="text-xl font-medium text-[var(--color-brand-dark)] tracking-tight">Candidate Pipeline</h2>
                        <p className="text-xs text-gray-400 font-light mt-1">Scroll horizontally to see all stages</p>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-400 font-light">
                        <span className="w-2 h-2 rounded-full bg-[var(--color-brand-orange)] animate-pulse"></span>
                        Live data
                    </div>
                </div>

                {/* Kanban Board — same card aesthetic as the rest of the site */}
                <div className="overflow-x-auto pb-6 -mx-2 px-2">
                    <div className="flex gap-5 min-w-max">
                        {hiringColumns.map(col => {
                            const style = getStage(col.label);
                            const stageName = col.label.replace(/^\d+\.\s/, '');
                            return (
                                <div
                                    key={col.stageId}
                                    className={`w-64 flex-shrink-0 rounded-2xl bg-white border border-gray-100 shadow-sm flex flex-col border-t-4 ${style.borderTop}`}
                                >
                                    {/* Column Header */}
                                    <div className="px-4 py-4 border-b border-gray-100 flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <span className={`w-2 h-2 rounded-full flex-shrink-0 ${style.dot}`}></span>
                                            <span className="text-xs font-semibold tracking-wider uppercase text-[var(--color-brand-dark)]">
                                                {stageName}
                                            </span>
                                        </div>
                                        <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${style.accentBg} ${style.accentText}`}>
                                            {col.count}
                                        </span>
                                    </div>

                                    {/* Cards */}
                                    <div className="flex flex-col gap-2 p-3 flex-grow min-h-[200px]">
                                        {col.deals.length === 0 && (
                                            <div className="text-center py-10 text-gray-300 text-xs uppercase tracking-widest">
                                                No candidates yet
                                            </div>
                                        )}
                                        {col.deals.slice(0, 8).map(deal => (
                                            <div
                                                key={deal.id}
                                                className="rounded-xl border border-gray-100 bg-[var(--color-brand-light)] px-3 py-3 hover:border-gray-200 hover:bg-white transition-all"
                                            >
                                                <p className="text-sm text-[var(--color-brand-dark)] font-light leading-snug">
                                                    {anonymiseName(deal.dealname)}
                                                </p>
                                            </div>
                                        ))}
                                        {col.deals.length > 8 && (
                                            <div className="text-center mt-1">
                                                <span className="text-xs text-gray-400 font-light">
                                                    +{col.deals.length - 8} more
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Disclaimer — same muted style as footer text on public pages */}
                <div className="mt-12 border-t border-gray-200 pt-8 flex items-start gap-3">
                    <svg className="w-4 h-4 text-gray-300 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-xs text-gray-400 font-light leading-relaxed max-w-2xl">
                        Candidate names are partially anonymised for confidentiality. Full profiles are available upon request and subject to mutual NDA. This dashboard reflects the live state of your L&apos;Agence search engagement.
                    </p>
                </div>
            </div>
        </div>
    );
}
