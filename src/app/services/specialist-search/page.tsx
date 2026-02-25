import Link from 'next/link'

export default function SpecialistSearchPage() {
    return (
        <div className="flex flex-col min-h-screen bg-[var(--color-brand-light)] overflow-hidden">
            <section className="relative px-6 py-48 text-center bg-[var(--color-brand-dark)] text-white mt-[-8rem]">
                <div className="max-w-4xl mx-auto relative z-10 mt-20">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full border border-gray-700 bg-white/5 text-white mb-10">
                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                    </div>
                    <h1 className="text-5xl md:text-7xl tracking-tight text-white mb-8 font-light leading-tight">
                        Specialist Retained <br />Search
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 font-light max-w-2xl mx-auto leading-relaxed">
                        Critical director-level and senior individual contributor roles.
                    </p>
                </div>
            </section>

            <section className="py-32 px-6">
                <div className="max-w-4xl mx-auto bg-white rounded-3xl p-12 md:p-24 shadow-sm border border-gray-100">
                    <h2 className="text-3xl font-light text-[var(--color-brand-dark)] mb-8">
                        Powering Your Execution Engine
                    </h2>
                    <p className="text-gray-600 font-light text-lg leading-relaxed mb-8">
                        Expert recruitment of critical director-level and senior individual contributor roles that power your execution engine and define competitive advantage. While our executive search focuses on the c-suite, our specialist retained search operates horizontally, targeting highly coveted technical, operational, and strategic domain experts.
                    </p>
                    <p className="text-gray-600 font-light text-lg leading-relaxed mb-12">
                        We apply the same rigorous, concierge-level assessment methodologies utilized in our board placements to these mission-critical roles, ensuring your organization secures the tactical leadership required to execute its vision.
                    </p>

                    <div className="bg-[#F9F9F9] p-8 rounded-2xl border border-gray-100">
                        <h3 className="text-xl font-medium text-[var(--color-brand-dark)] mb-4">Key Focus Areas</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <span className="text-[var(--color-brand-orange)] mr-3 mt-1">✓</span>
                                <span className="text-gray-600 font-light">Director and Head-Of strategic functions.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-[var(--color-brand-orange)] mr-3 mt-1">✓</span>
                                <span className="text-gray-600 font-light">Niche technical leaders and Principal Engineers.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-[var(--color-brand-orange)] mr-3 mt-1">✓</span>
                                <span className="text-gray-600 font-light">Specialized commercial and GTM talent.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="py-24 px-6 text-center bg-[#F1F1F1] border-t border-gray-200">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-light text-[var(--color-brand-dark)] mb-8">Ready to secure a domain expert?</h2>
                    <Link href="/contact" className="inline-flex px-10 py-5 rounded-full bg-[var(--color-brand-orange)] text-white font-medium hover:bg-[#e66c10] transition-colors shadow-md uppercase tracking-widest text-sm">
                        Schedule a Discovery Call
                    </Link>
                </div>
            </section>
        </div>
    )
}
