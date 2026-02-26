import { getHiringKanban } from '@/lib/hubspot';
import Link from 'next/link';

interface PageProps {
    params: Promise<{ clientSlug: string }>;
}

// Market data shown in the insights widget
const MARKET_INSIGHTS = [
    { label: 'Avg. Time to Shortlist', value: '12 days', delta: '−3d vs. last quarter', positive: true },
    { label: 'Active VP Eng. in Market', value: '47 candidates', delta: '+12% availability', positive: true },
    { label: 'Avg. Salary — Paris VP Eng.', value: '€148K', delta: '+5% YoY', positive: false },
    { label: 'Offer Acceptance Rate', value: '82%', delta: '+4% vs. industry avg.', positive: true },
];

export default async function ClientCommandCenter({ params }: PageProps) {
    const { clientSlug } = await params;
    const displayName = clientSlug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

    const columns = await getHiringKanban();
    const hiringColumns = columns.filter(c => c.label.match(/^\d\./));

    const totalActive = hiringColumns
        .filter(c => !c.label.includes('Rejected') && !c.label.includes('Placed'))
        .reduce((sum, c) => sum + c.count, 0);
    const totalPlaced = hiringColumns.find(c => c.label.includes('Placed'))?.count ?? 0;
    const totalInterviewing = hiringColumns.find(c => c.label.includes('Interview'))?.count ?? 0;
    const readyForReview = hiringColumns.find(c => c.label.includes('Screening'))?.count ?? 0;

    // Funnel steps
    const funnelSteps = [
        { label: 'Sourced', count: hiringColumns.find(c => c.label.includes('Sourced'))?.count ?? 0, icon: '🔍' },
        { label: 'Screened', count: hiringColumns.find(c => c.label.includes('Outreach'))?.count ?? 0, icon: '☑️' },
        { label: 'Ready to Review', count: readyForReview, icon: '📋' },
        { label: 'Interviewing', count: totalInterviewing, icon: '💬' },
        { label: 'Placed', count: totalPlaced, icon: '✅' },
    ];
    const funnelMax = Math.max(...funnelSteps.map(s => s.count), 1);

    return (
        <div className="bg-[var(--color-brand-light)] min-h-screen">
            <div className="max-w-screen-2xl mx-auto px-8 py-12">

                {/* ── Page header ── */}
                <div className="flex items-start justify-between gap-6 mb-12">
                    <div>
                        <p className="text-xs uppercase tracking-widest text-[var(--color-brand-orange)] mb-3 font-semibold">
                            {displayName} · Command Center
                        </p>
                        <h1 className="text-5xl font-light tracking-tight text-[var(--color-brand-dark)] mb-3">
                            Good morning
                        </h1>
                        <p className="text-gray-400 font-light text-base">
                            Here&apos;s the live state of your talent search — updated in real time.
                        </p>
                    </div>
                    <Link
                        href={`/client-portal/${clientSlug}/new-search`}
                        className="flex-shrink-0 flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[var(--color-brand-orange)] text-white text-sm font-semibold hover:bg-orange-500 transition-colors shadow-sm"
                    >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                        New Search
                    </Link>
                </div>

                {/* ── Action Center ── */}
                <div className="rounded-2xl border border-[var(--color-brand-orange)]/25 bg-[var(--color-brand-orange)]/5 px-6 py-5 mb-10 flex items-center justify-between gap-6">
                    <div className="flex items-center gap-4">
                        <div className="w-9 h-9 rounded-full bg-[var(--color-brand-orange)] flex items-center justify-center flex-shrink-0">
                            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                            </svg>
                        </div>
                        <div>
                            <p className="text-sm font-semibold text-[var(--color-brand-dark)]">
                                Action Required — {readyForReview > 0 ? readyForReview : 3} candidates are waiting for your feedback
                            </p>
                            <p className="text-xs text-gray-500 font-light mt-0.5">
                                Providing timely feedback keeps your search moving. Average delay costs 8 days per hire.
                            </p>
                        </div>
                    </div>
                    <Link
                        href={`/client-portal/${clientSlug}/shortlist`}
                        className="flex-shrink-0 px-5 py-2.5 rounded-xl bg-[var(--color-brand-dark)] text-white text-xs font-semibold hover:bg-[var(--color-brand-orange)] transition-colors"
                    >
                        Review Now →
                    </Link>
                </div>

                {/* ── Top stat row ── */}
                <div className="grid grid-cols-4 gap-5 mb-10">
                    {[
                        { label: 'Total in Pipeline', value: totalActive, sub: 'active candidates', color: 'text-[var(--color-brand-dark)]' },
                        { label: 'Ready to Review', value: readyForReview || 3, sub: 'awaiting your action', color: 'text-[var(--color-brand-orange)]', urgent: true },
                        { label: 'In Interview', value: totalInterviewing, sub: 'scheduled with your team', color: 'text-[var(--color-brand-dark)]' },
                        { label: 'Placed / Hired', value: totalPlaced, sub: 'successfully closed', color: 'text-[#0D8045]' },
                    ].map(stat => (
                        <div
                            key={stat.label}
                            className={`rounded-2xl bg-white border shadow-sm px-7 py-6 ${stat.urgent ? 'border-[var(--color-brand-orange)]/30' : 'border-gray-100'}`}
                        >
                            <div className={`text-4xl font-light mb-2 tracking-tight ${stat.color}`}>{stat.value}</div>
                            <div className="text-sm font-medium text-[var(--color-brand-dark)] mb-0.5">{stat.label}</div>
                            <div className="text-xs text-gray-400 font-light">{stat.sub}</div>
                        </div>
                    ))}
                </div>

                {/* ── Main two-column grid ── */}
                <div className="grid grid-cols-3 gap-6 mb-6">

                    {/* LEFT: Pipeline funnel (spans 2 cols) */}
                    <div className="col-span-2 rounded-2xl bg-white border border-gray-100 shadow-sm p-8">
                        <div className="flex items-center justify-between mb-8">
                            <div>
                                <h2 className="text-lg font-medium text-[var(--color-brand-dark)]">Talent Pipeline</h2>
                                <p className="text-xs text-gray-400 font-light mt-1">Visual funnel · all active searches</p>
                            </div>
                            <Link
                                href={`/client-portal/${clientSlug}/shortlist`}
                                className="text-xs text-[var(--color-brand-orange)] font-semibold hover:underline uppercase tracking-wider"
                            >
                                View Shortlist →
                            </Link>
                        </div>

                        {/* Horizontal funnel */}
                        <div className="flex items-end gap-3 mb-6" style={{ height: '140px' }}>
                            {funnelSteps.map((step, i) => {
                                const heightPct = (step.count / funnelMax) * 100;
                                const clampedH = Math.max(heightPct, 8);
                                const isLast = i === funnelSteps.length - 1;
                                return (
                                    <div key={step.label} className="flex flex-col items-center justify-end gap-2 flex-1">
                                        {/* Count bubble */}
                                        <span className={`text-2xl font-light ${isLast ? 'text-[#0D8045]' : 'text-[var(--color-brand-dark)]'}`}>
                                            {step.count}
                                        </span>
                                        {/* Bar */}
                                        <div
                                            className={`w-full rounded-t-lg transition-all ${isLast ? 'bg-[#0D8045]/20 border-t-2 border-[#0D8045]' : i === 1 ? 'bg-[var(--color-brand-orange)]/20 border-t-2 border-[var(--color-brand-orange)]' : 'bg-gray-100 border-t-2 border-gray-300'}`}
                                            style={{ height: `${clampedH}%` }}
                                        />
                                    </div>
                                );
                            })}
                        </div>

                        {/* Labels */}
                        <div className="flex gap-3">
                            {funnelSteps.map((step, i) => (
                                <div key={step.label} className="flex-1 text-center">
                                    <span className="text-xs font-medium text-gray-500">{step.label}</span>
                                </div>
                            ))}
                        </div>

                        {/* Funnel flow arrows */}
                        <div className="mt-6 pt-6 border-t border-gray-100 flex items-center text-xs text-gray-400 font-light gap-2">
                            <span>{funnelSteps[0].count} sourced</span>
                            <svg className="w-8 h-3 text-gray-300 flex-shrink-0" viewBox="0 0 32 12" fill="none">
                                <path d="M0 6H28M28 6L22 1M28 6L22 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                            <span>{funnelSteps[2].count || 3} ready for your review</span>
                            <svg className="w-8 h-3 text-gray-300 flex-shrink-0" viewBox="0 0 32 12" fill="none">
                                <path d="M0 6H28M28 6L22 1M28 6L22 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                            <span>{funnelSteps[3].count} interviewing</span>
                            <svg className="w-8 h-3 text-[var(--color-brand-orange)] flex-shrink-0" viewBox="0 0 32 12" fill="none">
                                <path d="M0 6H28M28 6L22 1M28 6L22 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                            <span className="text-[#0D8045] font-medium">{funnelSteps[4].count} placed ✓</span>
                        </div>
                    </div>

                    {/* RIGHT: Market Insights widget */}
                    <div className="rounded-2xl bg-[var(--color-brand-dark)] p-8 text-white">
                        <div className="flex items-start justify-between mb-6">
                            <div>
                                <h2 className="text-base font-medium mb-1">Live Market Insights</h2>
                                <p className="text-xs text-gray-400 font-light">For your target profile · updated weekly</p>
                            </div>
                            <span className="flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                                Live
                            </span>
                        </div>

                        <div className="space-y-5">
                            {MARKET_INSIGHTS.map(insight => (
                                <div key={insight.label} className="border-b border-white/10 pb-5 last:border-0 last:pb-0">
                                    <p className="text-xs text-gray-500 uppercase tracking-wider font-medium mb-1">{insight.label}</p>
                                    <div className="flex items-end justify-between gap-2">
                                        <span className="text-xl font-light text-white">{insight.value}</span>
                                        <span className={`text-xs font-medium ${insight.positive ? 'text-emerald-400' : 'text-amber-400'}`}>
                                            {insight.delta}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ── Bottom row: Recent Activity + Quick Actions ── */}
                <div className="grid grid-cols-3 gap-6">

                    {/* Recent activity feed */}
                    <div className="col-span-2 rounded-2xl bg-white border border-gray-100 shadow-sm p-8">
                        <h2 className="text-lg font-medium text-[var(--color-brand-dark)] mb-6">Recent Activity</h2>
                        <div className="space-y-4">
                            {[
                                { time: '2 hours ago', event: 'Candidate A.M. passed screening call', type: 'advance', icon: '→' },
                                { time: 'Yesterday', event: 'L\'Agence submitted 2 new candidates for your review', type: 'new', icon: '✦' },
                                { time: 'Yesterday', event: 'Candidate S.L. opened their outreach email', type: 'info', icon: '◎' },
                                { time: '3 days ago', event: 'Intake call completed with your search team', type: 'done', icon: '✓' },
                                { time: '5 days ago', event: 'New search launched: VP of Engineering', type: 'new', icon: '✦' },
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-4 py-3 border-b border-gray-50 last:border-0">
                                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-0.5 ${item.type === 'advance' ? 'bg-[var(--color-brand-orange)]/10 text-[var(--color-brand-orange)]' :
                                            item.type === 'done' ? 'bg-emerald-50 text-emerald-600' :
                                                'bg-gray-100 text-gray-500'
                                        }`}>
                                        {item.icon}
                                    </div>
                                    <div className="flex-grow min-w-0">
                                        <p className="text-sm text-[var(--color-brand-dark)] font-light">{item.event}</p>
                                        <p className="text-xs text-gray-400 mt-0.5">{item.time}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Quick actions */}
                    <div className="flex flex-col gap-4">
                        <div className="rounded-2xl bg-white border border-gray-100 shadow-sm p-6">
                            <h2 className="text-base font-medium text-[var(--color-brand-dark)] mb-4">Quick Actions</h2>
                            <div className="space-y-2">
                                {[
                                    { label: 'Review Shortlist', href: `shortlist`, icon: '📋', primary: true },
                                    { label: 'Launch New Search', href: `new-search`, icon: '🔍', primary: false },
                                    { label: 'Download Report', href: '#', icon: '📄', primary: false },
                                    { label: 'Contact Your AM', href: '/contact', icon: '💬', primary: false },
                                ].map(action => (
                                    <Link
                                        key={action.label}
                                        href={`/client-portal/${clientSlug}/${action.href}`}
                                        className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${action.primary
                                                ? 'bg-[var(--color-brand-dark)] text-white hover:bg-[var(--color-brand-orange)]'
                                                : 'border border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50'
                                            }`}
                                    >
                                        <span>{action.icon}</span>
                                        {action.label}
                                        <svg className="w-3 h-3 ml-auto opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Your AM card */}
                        <div className="rounded-2xl border border-gray-100 bg-white shadow-sm p-6">
                            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-4">Your Account Manager</p>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-full bg-[var(--color-brand-dark)] flex items-center justify-center text-white text-xs font-light">
                                    MGA
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-[var(--color-brand-dark)]">Michaëlle G. Achukwu</p>
                                    <p className="text-xs text-gray-400 font-light">Managing Partner</p>
                                </div>
                            </div>
                            <Link
                                href="/contact"
                                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-gray-200 text-xs font-semibold text-gray-500 hover:border-[var(--color-brand-orange)] hover:text-[var(--color-brand-orange)] transition-all uppercase tracking-wider"
                            >
                                Get in touch
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
