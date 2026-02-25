import Link from 'next/link'

export default function FractionalExecutivePage() {
    return (
        <div className="flex flex-col min-h-screen bg-[var(--color-brand-light)] overflow-hidden">
            <section className="relative px-6 py-48 text-center bg-[var(--color-brand-dark)] text-white mt-[-8rem]">
                <div className="max-w-4xl mx-auto relative z-10 mt-20">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full border border-gray-700 bg-white/5 text-white mb-10">
                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                    </div>
                    <h1 className="text-5xl md:text-7xl tracking-tight text-white mb-8 font-light leading-tight">
                        Fractional Executive <br />Services
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 font-light max-w-2xl mx-auto leading-relaxed">
                        Embedded strategic leadership in Marketing, Operations, and GTM.
                    </p>
                </div>
            </section>

            <section className="py-32 px-6">
                <div className="max-w-4xl mx-auto bg-white rounded-3xl p-12 md:p-24 shadow-sm border border-gray-100">
                    <h2 className="text-3xl font-light text-[var(--color-brand-dark)] mb-8">
                        Agile Strategic Leadership
                    </h2>
                    <p className="text-gray-600 font-light text-lg leading-relaxed mb-8">
                        Transformation doesn't always require a permanent hire. Our Fractional Executive network deploys elite-tier leadership instantly. Whether you require a Fractional CMO to overhaul your GTM strategy or a Fractional COO to stabilize operations during an acquisition, we provide immediate execution capability.
                    </p>
                    <p className="text-gray-600 font-light text-lg leading-relaxed mb-12">
                        These leaders embed deeply within your organization on a fractional or interim basis, operating with the same authority and strategic mandate as full-time equivalents, without the long-term cap table dilution or extensive search timeline.
                    </p>

                    <div className="bg-[#F9F9F9] p-8 rounded-2xl border border-gray-100">
                        <h3 className="text-xl font-medium text-[var(--color-brand-dark)] mb-4">Fractional Deployments</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <span className="text-[var(--color-brand-orange)] mr-3 mt-1">✓</span>
                                <span className="text-gray-600 font-light">GTM alignment and Fractional CMOs.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-[var(--color-brand-orange)] mr-3 mt-1">✓</span>
                                <span className="text-gray-600 font-light">Operational turnaround and Fractional COOs.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-[var(--color-brand-orange)] mr-3 mt-1">✓</span>
                                <span className="text-gray-600 font-light">Interim bridges during massive scaling phases.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="py-24 px-6 text-center bg-[#F1F1F1] border-t border-gray-200">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-light text-[var(--color-brand-dark)] mb-8">Ready to deploy agile leadership?</h2>
                    <Link href="/contact" className="inline-flex px-10 py-5 rounded-full bg-[var(--color-brand-orange)] text-white font-medium hover:bg-[#e66c10] transition-colors shadow-md uppercase tracking-widest text-sm">
                        Schedule a Discovery Call
                    </Link>
                </div>
            </section>
        </div>
    )
}
