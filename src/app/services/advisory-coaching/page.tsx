import Link from 'next/link'

export default function AdvisoryCoachingPage() {
    return (
        <div className="flex flex-col min-h-screen bg-[var(--color-brand-light)] overflow-hidden">
            <section className="relative px-6 py-48 text-center bg-[var(--color-brand-dark)] text-white mt-[-8rem]">
                <div className="max-w-4xl mx-auto relative z-10 mt-20">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full border border-gray-700 bg-white/5 text-white mb-10">
                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                        </svg>
                    </div>
                    <h1 className="text-5xl md:text-7xl tracking-tight text-white mb-8 font-light leading-tight">
                        Advisory & Coaching
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 font-light max-w-2xl mx-auto leading-relaxed">
                        Succession planning, assessments, and team effectiveness.
                    </p>
                </div>
            </section>

            <section className="py-32 px-6">
                <div className="max-w-4xl mx-auto bg-white rounded-3xl p-12 md:p-24 shadow-sm border border-gray-100">
                    <h2 className="text-3xl font-light text-[var(--color-brand-dark)] mb-8">
                        Fortifying Executive Resilience
                    </h2>
                    <p className="text-gray-600 font-light text-lg leading-relaxed mb-8">
                        Placement is only the beginning. Our Advisory & Coaching practice provides bespoke, 1-on-1 coaching engagements for newly placed and transitioning executives, unlocking their peak performance and accelerating their integration.
                    </p>
                    <p className="text-gray-600 font-light text-lg leading-relaxed mb-12">
                        Furthermore, we offer strategic consulting for board optimization, succession planning, psychological assessments, and organizational design—ensuring your leadership structure is rigorously scaled and fortified for future market demands.
                    </p>

                    <div className="bg-[#F9F9F9] p-8 rounded-2xl border border-gray-100">
                        <h3 className="text-xl font-medium text-[var(--color-brand-dark)] mb-4">Advisory Pillars</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <span className="text-[var(--color-brand-orange)] mr-3 mt-1">✓</span>
                                <span className="text-gray-600 font-light">C-Suite and Board 1-on-1 Coaching.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-[var(--color-brand-orange)] mr-3 mt-1">✓</span>
                                <span className="text-gray-600 font-light">Data-driven behavioral and psychometric profiling.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-[var(--color-brand-orange)] mr-3 mt-1">✓</span>
                                <span className="text-gray-600 font-light">Long-term strategic succession planning.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="py-24 px-6 text-center bg-[#F1F1F1] border-t border-gray-200">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-light text-[var(--color-brand-dark)] mb-8">Ready to optimize your leadership?</h2>
                    <Link href="/contact" className="inline-flex px-10 py-5 rounded-full bg-[var(--color-brand-orange)] text-white font-medium hover:bg-[#e66c10] transition-colors shadow-md uppercase tracking-widest text-sm">
                        Schedule a Discovery Call
                    </Link>
                </div>
            </section>
        </div>
    )
}
