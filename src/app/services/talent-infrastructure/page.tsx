import Link from 'next/link'

export default function TalentInfrastructurePage() {
    return (
        <div className="flex flex-col min-h-screen bg-[var(--color-brand-light)] overflow-hidden">
            <section className="relative px-6 py-48 text-center bg-[var(--color-brand-dark)] text-white mt-[-8rem]">
                <div className="max-w-4xl mx-auto relative z-10 mt-20">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full border border-gray-700 bg-white/5 text-white mb-10">
                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                    </div>
                    <h1 className="text-5xl md:text-7xl tracking-tight text-white mb-8 font-light leading-tight">
                        Talent Infrastructure <br />(TIaaS)
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 font-light max-w-2xl mx-auto leading-relaxed">
                        An AI-powered sourcing engine designed for rapid scaling.
                    </p>
                </div>
            </section>

            <section className="py-32 px-6">
                <div className="max-w-4xl mx-auto bg-white rounded-3xl p-12 md:p-24 shadow-sm border border-gray-100">
                    <h2 className="text-3xl font-light text-[var(--color-brand-dark)] mb-8">
                        The DNA of High-Volume Growth
                    </h2>
                    <p className="text-gray-600 font-light text-lg leading-relaxed mb-8">
                        Our Talent Infrastructure-as-a-Service (TIaaS) unlocks our proprietary network of 700M+ global profiles directly into your ecosystem. We build, manage, and optimize the overarching data and automation layer connecting your ATS, external boards, and passive talent pools.
                    </p>
                    <p className="text-gray-600 font-light text-lg leading-relaxed mb-12">
                        This service is designed specifically for scaling startups and enterprises entering phases of rapid geographical expansion or heavy technical hiring. We provide the AI architecture; you hire the talent.
                    </p>

                    <div className="bg-[#F9F9F9] p-8 rounded-2xl border border-gray-100">
                        <h3 className="text-xl font-medium text-[var(--color-brand-dark)] mb-4">Core Capabilities</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <span className="text-[var(--color-brand-orange)] mr-3 mt-1">✓</span>
                                <span className="text-gray-600 font-light">Custom ATS integration and automated pipeline scoring.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-[var(--color-brand-orange)] mr-3 mt-1">✓</span>
                                <span className="text-gray-600 font-light">Programmatic job distribution across global networks.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-[var(--color-brand-orange)] mr-3 mt-1">✓</span>
                                <span className="text-gray-600 font-light">Automated, AI-driven candidate engagement sequences.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="py-24 px-6 text-center bg-[#F1F1F1] border-t border-gray-200">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-light text-[var(--color-brand-dark)] mb-8">Ready to upgrade your infrastructure?</h2>
                    <Link href="/contact" className="inline-flex px-10 py-5 rounded-full bg-[var(--color-brand-orange)] text-white font-medium hover:bg-[#e66c10] transition-colors shadow-md uppercase tracking-widest text-sm">
                        Schedule a Discovery Call
                    </Link>
                </div>
            </section>
        </div>
    )
}
