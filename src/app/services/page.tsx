import Link from 'next/link'

export default function ServicesPage() {
    const services = [
        {
            title: "Executive Search (Retained)",
            desc: "We leverage our proprietary AI-driven pipeline and human-centric methodology to confidentially identify, engage, and secure transformational C-Suite and VP-level leaders perfectly aligned with your strategic vision.",
            icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
            href: "/services/executive-search"
        },
        {
            title: "Specialist Retained Search",
            desc: "Expert recruitment of critical director-level and senior individual contributor roles that power your execution engine and define competitive advantage.",
            icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
            href: "/services/specialist-search"
        },
        {
            title: "Sourcing-as-a-Service (SaaS)",
            desc: "Weekly delivery of calibrated candidate pipelines tailored for your internal recruiting teams, enhancing velocity without compromising quality.",
            icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4",
            href: "/services/sourcing-as-a-service"
        },
        {
            title: "Talent Infrastructure (TIaaS)",
            desc: "An AI-powered sourcing engine designed for rapid scaling, unlocking our network of 700M+ global profiles directly into your ecosystem.",
            icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
            href: "/services/talent-infrastructure"
        },
        {
            title: "Advisory & Coaching",
            desc: "Strategic consulting for board optimization, succession planning, psychological assessments, and executive 1-on-1 team effectiveness coaching.",
            icon: "M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z",
            href: "/services/advisory-coaching"
        },
        {
            title: "Fractional Executive Services",
            desc: "Embedded strategic leadership on a fractional basis for functions like Marketing, Operations, and Go-to-Market strategy during critical transitions.",
            icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
            href: "/services/fractional-executive"
        }
    ]

    return (
        <div className="flex flex-col min-h-screen bg-[var(--color-brand-light)] overflow-hidden">
            {/* Header */}
            <section className="relative px-6 py-48 text-center bg-[var(--color-brand-dark)] text-white mt-[-8rem]">
                <div className="max-w-4xl mx-auto relative z-10 mt-20">
                    <h1 className="text-5xl md:text-8xl tracking-tight text-white mb-8 font-light leading-tight">
                        Bespoke <br />Solutions.
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 font-light max-w-2xl mx-auto leading-relaxed">
                        Data-driven methodologies powered by AI and decades of elite human intuition.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-32 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {services.map((service, i) => (
                        <Link href={service.href} key={i} className="block h-full">
                            <div className="p-12 md:p-16 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group h-full cursor-pointer">
                                <div className="w-20 h-20 rounded-full border border-gray-200 flex items-center justify-center text-[var(--color-brand-dark)] mb-10 group-hover:bg-[var(--color-brand-orange)] group-hover:border-transparent group-hover:text-white transition-all duration-300 shrink-0">
                                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d={service.icon} />
                                    </svg>
                                </div>
                                <h2 className="text-3xl font-light text-[var(--color-brand-dark)] mb-6 group-hover:text-[var(--color-brand-orange)] transition-colors">{service.title}</h2>
                                <p className="text-gray-500 leading-relaxed font-light text-lg">{service.desc}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="py-32 px-6 text-center bg-[#E8E8E8]">
                <div className="max-w-4xl mx-auto p-16 md:p-24 rounded-3xl bg-[var(--color-brand-dark)] relative overflow-hidden shadow-2xl">
                    <div className="absolute right-0 top-0 w-64 h-64 bg-[var(--color-brand-orange)] rotate-45 transform translate-x-32 -translate-y-32 opacity-20" />
                    <h2 className="text-4xl md:text-5xl font-light text-white mb-10 relative z-10 leading-tight">Ready to transform your leadership?</h2>
                    <Link href="/contact" className="relative z-10 inline-flex px-10 py-5 rounded-full bg-[var(--color-brand-orange)] text-white font-medium hover:bg-[#e66c10] transition-colors shadow-lg uppercase tracking-widest text-sm">
                        Schedule Consultation
                    </Link>
                </div>
            </section>
        </div>
    )
}
