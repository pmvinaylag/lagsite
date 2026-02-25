import Link from 'next/link'

export default function SaaSPage() {
    return (
        <div className="flex flex-col min-h-screen bg-[var(--color-brand-light)] overflow-hidden">
            <section className="relative px-6 py-48 text-center bg-[var(--color-brand-dark)] text-white mt-[-8rem]">
                <div className="max-w-4xl mx-auto relative z-10 mt-20">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full border border-gray-700 bg-white/5 text-white mb-10">
                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                        </svg>
                    </div>
                    <h1 className="text-5xl md:text-7xl tracking-tight text-white mb-8 font-light leading-tight">
                        Sourcing-as-<br />a-Service (SaaS)
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 font-light max-w-2xl mx-auto leading-relaxed">
                        Weekly delivery of calibrated candidate pipelines for internal teams.
                    </p>
                </div>
            </section>

            <section className="py-32 px-6">
                <div className="max-w-4xl mx-auto bg-white rounded-3xl p-12 md:p-24 shadow-sm border border-gray-100">
                    <h2 className="text-3xl font-light text-[var(--color-brand-dark)] mb-8">
                        Augment Your Internal Recruiting Voice
                    </h2>
                    <p className="text-gray-600 font-light text-lg leading-relaxed mb-8">
                        Sourcing-as-a-Service provides your internal talent acquisition teams with weekly delivery of calibrated candidate pipelines, enhancing velocity without compromising quality. We handle the heavy lifting of market mapping, candidate identification, and initial outreach.
                    </p>
                    <p className="text-gray-600 font-light text-lg leading-relaxed mb-12">
                        Designed for hyper-growth companies moving too quickly for traditional retained search timelines, this agile, subscription-based model injects immediate top-of-funnel velocity into your hiring process. We act as a seamless extension of your talent brand.
                    </p>

                    <div className="bg-[#F9F9F9] p-8 rounded-2xl border border-gray-100">
                        <h3 className="text-xl font-medium text-[var(--color-brand-dark)] mb-4">The Process</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <span className="text-[var(--color-brand-orange)] mr-3 mt-1">✓</span>
                                <span className="text-gray-600 font-light">Deep calibration on role requirements and cultural profile.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-[var(--color-brand-orange)] mr-3 mt-1">✓</span>
                                <span className="text-gray-600 font-light">Deployment of our automated sourcing engine.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-[var(--color-brand-orange)] mr-3 mt-1">✓</span>
                                <span className="text-gray-600 font-light">Weekly delivery of highly-qualified, interested candidate batches.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="py-24 px-6 text-center bg-[#F1F1F1] border-t border-gray-200">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-light text-[var(--color-brand-dark)] mb-8">Ready to accelerate your hiring velocity?</h2>
                    <Link href="/contact" className="inline-flex px-10 py-5 rounded-full bg-[var(--color-brand-orange)] text-white font-medium hover:bg-[#e66c10] transition-colors shadow-md uppercase tracking-widest text-sm">
                        Schedule a Discovery Call
                    </Link>
                </div>
            </section>
        </div>
    )
}
