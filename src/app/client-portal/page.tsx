import { getHiringKanban, type KanbanColumn } from '@/lib/hubspot';
import Link from 'next/link';

// Stage colour theming
const STAGE_CONFIG: Record<string, { dot: string; bg: string; border: string; text: string }> = {
    '1. Sourced & Enriched': { dot: 'bg-blue-400', bg: 'bg-blue-950/40', border: 'border-blue-500/20', text: 'text-blue-300' },
    '2. Initial Outreach': { dot: 'bg-violet-400', bg: 'bg-violet-950/40', border: 'border-violet-500/20', text: 'text-violet-300' },
    '3. Screening Call': { dot: 'bg-amber-400', bg: 'bg-amber-950/40', border: 'border-amber-500/20', text: 'text-amber-300' },
    '4. Client Interview': { dot: 'bg-orange-400', bg: 'bg-orange-950/40', border: 'border-orange-500/20', text: 'text-orange-300' },
    '5. Offer Extended': { dot: 'bg-emerald-400', bg: 'bg-emerald-950/40', border: 'border-emerald-500/20', text: 'text-emerald-300' },
    '6. Placed / Hired': { dot: 'bg-green-400', bg: 'bg-green-950/40', border: 'border-green-500/20', text: 'text-green-300' },
    '7. Rejected / Dropped': { dot: 'bg-red-400', bg: 'bg-red-950/40', border: 'border-red-500/20', text: 'text-red-300' },
};

function getStage(label: string) {
    return STAGE_CONFIG[label] ?? {
        dot: 'bg-gray-400', bg: 'bg-gray-900/40', border: 'border-gray-700', text: 'text-gray-400',
    };
}

function anonymiseName(name: string): string {
    // "John Smith - VP Engineering" → "J. S. — VP Engineering"
    const parts = name.split(' - ');
    const nameParts = parts[0].trim().split(' ');
    const anonymised = nameParts.map((n, i) =>
        i === nameParts.length - 1 ? n[0] + '.' : n
    ).join(' ');
    return parts.length > 1 ? `${anonymised} — ${parts.slice(1).join(' - ')}` : anonymised;
}

export default async function ClientPortalPage() {
    const columns = await getHiringKanban();

    const totalActive = columns
        .filter(c => !c.label.includes('Rejected') && !c.label.includes('Placed'))
        .reduce((sum, c) => sum + c.count, 0);
    const totalPlaced = columns.find(c => c.label.includes('Placed'))?.count ?? 0;
    const totalInterviewing = columns.find(c => c.label.includes('Interview'))?.count ?? 0;

    // Only show the main 7 hiring stages (exclude old default sales stages)
    const hiringColumns = columns.filter(c => c.label.match(/^\d\./));

    return (
        <div className="px-6 py-10 max-w-screen-2xl mx-auto">

            {/* Page Header */}
            <div className="mb-10">
                <h1 className="text-3xl font-light tracking-tight text-white mb-2">
                    Pipeline Overview
                </h1>
                <p className="text-white/40 text-sm font-light">
                    Live candidate tracking — refreshed every 60 seconds
                </p>
            </div>

            {/* Summary Stats */}
            <div className="grid grid-cols-3 gap-4 mb-10">
                {[
                    { label: 'Active Candidates', value: totalActive, color: 'text-blue-400' },
                    { label: 'In Client Interview', value: totalInterviewing, color: 'text-orange-400' },
                    { label: 'Placed / Hired', value: totalPlaced, color: 'text-emerald-400' },
                ].map(stat => (
                    <div
                        key={stat.label}
                        className="rounded-2xl border border-white/10 bg-white/5 px-8 py-6 backdrop-blur-sm"
                    >
                        <div className={`text-4xl font-light mb-1 ${stat.color}`}>{stat.value}</div>
                        <div className="text-xs text-white/40 uppercase tracking-widest font-medium">{stat.label}</div>
                    </div>
                ))}
            </div>

            {/* Kanban Board */}
            <div className="overflow-x-auto pb-6">
                <div className="flex gap-4 min-w-max">
                    {hiringColumns.map(col => {
                        const style = getStage(col.label);
                        return (
                            <div
                                key={col.stageId}
                                className={`w-64 flex-shrink-0 rounded-2xl border ${style.border} ${style.bg} backdrop-blur-sm flex flex-col`}
                            >
                                {/* Column Header */}
                                <div className={`px-4 py-3 border-b ${style.border} flex items-center justify-between`}>
                                    <div className="flex items-center gap-2">
                                        <span className={`w-2 h-2 rounded-full ${style.dot}`}></span>
                                        <span className={`text-xs font-semibold tracking-wider uppercase ${style.text}`}>
                                            {col.label.replace(/^\d\.\s/, '')}
                                        </span>
                                    </div>
                                    <span className={`text-xs font-bold ${style.text} bg-white/10 px-2 py-0.5 rounded-full`}>
                                        {col.count}
                                    </span>
                                </div>

                                {/* Cards */}
                                <div className="flex flex-col gap-2 p-3 flex-grow">
                                    {col.deals.length === 0 && (
                                        <div className="text-center py-8 text-white/20 text-xs uppercase tracking-widest">
                                            Empty
                                        </div>
                                    )}
                                    {col.deals.slice(0, 8).map(deal => (
                                        <div
                                            key={deal.id}
                                            className="rounded-xl bg-white/5 border border-white/10 px-3 py-3 hover:bg-white/10 transition-colors"
                                        >
                                            <p className="text-sm text-white/80 font-light leading-snug">
                                                {anonymiseName(deal.dealname)}
                                            </p>
                                        </div>
                                    ))}
                                    {col.deals.length > 8 && (
                                        <div className="text-center mt-1">
                                            <span className="text-xs text-white/30">
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

            {/* Disclaimer */}
            <div className="mt-10 rounded-xl border border-white/10 bg-white/5 px-6 py-4 flex items-start gap-3">
                <svg className="w-4 h-4 text-white/30 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-xs text-white/30 font-light leading-relaxed">
                    Candidate names are partially anonymised for confidentiality. Full profiles are available upon request and subject to mutual NDA. This dashboard reflects the live state of your L'Agence search engagement.
                </p>
            </div>
        </div>
    );
}
