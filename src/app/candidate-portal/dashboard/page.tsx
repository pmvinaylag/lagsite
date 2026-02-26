import Link from 'next/link';
import { getHubSpotDeals, HIRING_STAGES } from '@/lib/hubspot';

export default async function CandidateDashboard() {
    let deals = await getHubSpotDeals(5);

    // Fallback if no real live deals are fetched (e.g. absent API keys for demo mode)
    if (deals.length === 0) {
        deals = [
            {
                id: 'mock-1',
                dealname: 'John Doe',
                dealstage: '3242746600', // Screening Call
                stageName: '3. Screening Call',
                pipeline: 'default',
                client: 'Acme Corp (Stealth)',
                role: 'Director of Cloud Infrastructure',
                clientSlug: 'acme-corp',
            },
            {
                id: 'mock-2',
                dealname: 'John Doe',
                dealstage: '3242746601', // Rejected
                stageName: '7. Rejected / Dropped',
                pipeline: 'default',
                client: 'Global Retailer',
                role: 'Head of Data Platform',
                clientSlug: 'global-retailer',
            }
        ];
    }

    const stagesOrder = Object.keys(HIRING_STAGES)
        .filter(id => id !== '3242746601') // omit rejected from progress line
        .sort((a, b) => {
            const numA = parseInt(HIRING_STAGES[a].split('.')[0]);
            const numB = parseInt(HIRING_STAGES[b].split('.')[0]);
            return numA - numB;
        });

    return (
        <div className="bg-[#F8F9FA] min-h-[calc(100vh-140px)]">
            <div className="max-w-screen-xl mx-auto px-8 py-12">

                {/* ── Page header ── */}
                <div className="flex items-end justify-between gap-6 mb-12">
                    <div>
                        <h1 className="text-4xl font-light tracking-tight text-[var(--color-brand-dark)] mb-3">
                            Hello, John
                        </h1>
                        <p className="text-gray-400 font-light text-sm max-w-xl">
                            We've eliminated the black hole. Below is real-time visibility into every agency submission on your behalf.
                        </p>
                    </div>

                    {/* Privacy Toggles */}
                    <div className="bg-white rounded-full border border-gray-200 p-1 flex items-center shadow-sm">
                        <button className="px-5 py-2 rounded-full text-xs font-semibold bg-[var(--color-brand-dark)] text-white shadow-sm transition-all focus:outline-none">
                            Actively Looking
                        </button>
                        <button className="px-5 py-2 rounded-full text-xs font-semibold text-gray-400 hover:text-gray-800 transition-all focus:outline-none">
                            Passive / Stealth
                        </button>
                    </div>
                </div>

                {/* ── Market Match Alert ── */}
                <div className="relative overflow-hidden rounded-2xl bg-white border border-[var(--color-brand-orange)]/40 shadow-sm p-8 mb-10 flex gap-6 items-center">
                    {/* Background decoration */}
                    <div className="absolute right-0 top-0 w-64 h-full bg-gradient-to-l from-[var(--color-brand-orange)]/10 to-transparent pointer-events-none"></div>

                    <div className="w-14 h-14 rounded-full bg-[var(--color-brand-orange)]/10 flex items-center justify-center flex-shrink-0 text-[var(--color-brand-orange)]">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                    </div>
                    <div className="flex-grow z-10">
                        <div className="flex items-center gap-3 mb-1">
                            <span className="text-[10px] font-bold tracking-widest uppercase text-white bg-[var(--color-brand-orange)] px-2 py-0.5 rounded">
                                High Match
                            </span>
                            <h2 className="text-lg font-medium text-[var(--color-brand-dark)]">VP Engineering · FoxTech (Series C)</h2>
                        </div>
                        <p className="text-sm text-gray-500 font-light">
                            Matches your €140K+ target and hybrid preference. Fast-tracking available because of your verified AWS skills.
                        </p>
                    </div>
                    <div className="z-10 flex-shrink-0">
                        <button className="px-6 py-3 rounded-xl bg-[var(--color-brand-orange)] text-white text-sm font-semibold hover:bg-orange-500 transition-colors shadow-md">
                            1-Click Apply
                        </button>
                    </div>
                </div>

                {/* ── Active Submissions (Pipeline Vis) ── */}
                <div>
                    <h2 className="text-xl font-medium text-[var(--color-brand-dark)] mb-6">Active Submissions</h2>

                    <div className="grid gap-6">
                        {deals.map(deal => {
                            const isRejected = deal.dealstage === '3242746601';
                            if (isRejected) {
                                return (
                                    <div key={deal.id} className="rounded-2xl border border-gray-100 bg-white/60 shadow-sm p-8 opacity-70">
                                        <div className="flex items-start justify-between mb-8">
                                            <div>
                                                <h3 className="text-xl font-medium text-gray-600 mb-1 line-through decoration-gray-300">{deal.role || 'Unknown Role'}</h3>
                                                <p className="text-sm text-gray-400 font-light flex items-center gap-2">
                                                    {deal.client || 'Unknown Client'}
                                                </p>
                                            </div>
                                            <div className="text-right">
                                                <span className="text-[10px] uppercase tracking-widest font-semibold text-rose-500 bg-rose-50 border border-rose-100 px-3 py-1 rounded">
                                                    Closed
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                );
                            }

                            const currentStageIndex = stagesOrder.indexOf(deal.dealstage);
                            const completionPercentage = currentStageIndex > 0 ? (currentStageIndex / (stagesOrder.length - 1)) * 100 : 0;

                            return (
                                <div key={deal.id} className="rounded-2xl border border-gray-100 bg-white shadow-sm p-8 group transition-shadow hover:shadow-md">
                                    <div className="flex items-start justify-between mb-8">
                                        <div>
                                            <h3 className="text-xl font-medium text-[var(--color-brand-dark)] mb-1">{deal.role || 'Unknown Role'}</h3>
                                            <p className="text-sm text-gray-400 font-light flex items-center gap-2">
                                                <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span> {deal.client || 'Confidential Client'}
                                            </p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold mb-1">Company</p>
                                            <p className="text-lg font-light text-[var(--color-brand-dark)]">{deal.client}</p>
                                        </div>
                                    </div>

                                    {/* Status Pipeline Tracker */}
                                    <div className="relative">
                                        {/* Track Line */}
                                        <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-100 -translate-y-1/2 -z-10 rounded-full"></div>
                                        {/* Active Line */}
                                        <div
                                            className="absolute top-1/2 left-0 h-1 bg-[var(--color-brand-orange)] -translate-y-1/2 -z-10 rounded-full transition-all duration-1000"
                                            style={{ width: `${completionPercentage}%` }}></div>

                                        <div className="flex justify-between relative">
                                            {stagesOrder.map((stageId, index) => {
                                                const isCompleted = index < currentStageIndex;
                                                const isCurrent = index === currentStageIndex;
                                                const isFuture = index > currentStageIndex;
                                                const label = HIRING_STAGES[stageId].split('. ')[1];

                                                return (
                                                    <div key={stageId} className="flex flex-col items-center relative z-10 w-12">
                                                        {isCompleted && (
                                                            <div className="w-6 h-6 rounded-full bg-[var(--color-brand-orange)] border-4 border-white shadow-sm flex items-center justify-center text-white">
                                                                <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
                                                            </div>
                                                        )}
                                                        {isCurrent && (
                                                            <div className="w-6 h-6 rounded-full bg-[var(--color-brand-dark)] border-4 border-white shadow-sm flex items-center justify-center animate-pulse"></div>
                                                        )}
                                                        {isFuture && (
                                                            <div className="w-6 h-6 rounded-full bg-gray-200 border-4 border-white shadow-sm"></div>
                                                        )}
                                                        <div className="absolute top-8 w-24 left-1/2 -translate-x-1/2 flex flex-col items-center">
                                                            <span className={`text-[10px] uppercase tracking-wider mt-2 text-center block ${isCurrent ? 'text-[var(--color-brand-orange)] font-bold' : isCompleted ? 'text-[var(--color-brand-dark)] font-semibold' : 'text-gray-400 font-medium'}`}>
                                                                {label}
                                                            </span>
                                                            {isCurrent && (
                                                                <span className="text-[10px] text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded mt-1 border border-emerald-100 shadow-sm">
                                                                    ACTION
                                                                </span>
                                                            )}
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                        {/* Padding to account for absolute positioned labels below */}
                                        <div className="h-16"></div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

            </div>
        </div>
    );
}
