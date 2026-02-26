import Image from 'next/image'

export default async function AboutPage() {
    const team = [
        {
            id: 1,
            name: "Dr. Elena Rostova",
            role: "Strategic Advisor, EMEA",
            bio: "Specializing in cross-border technical acquisitions and EMEA market entry.",
            image: "/team/elena.jpg"
        },
        {
            id: 2,
            name: "James Chen",
            role: "Board Advisor, APAC",
            bio: "Former Managing Director advising on APAC scaling and executive leadership.",
            image: "/team/james.jpg"
        },
        {
            id: 3,
            name: "Sarah Jenkins",
            role: "Leadership Advisor, Americas",
            bio: "Expert in organizational design, resilience, and C-suite succession planning.",
            image: "/team/sarah.jpg"
        },
        {
            id: 4,
            name: "David Okoro",
            role: "Technology Advisor",
            bio: "Veteran CTO advising on AI-native infrastructure and technical assessments.",
            image: "/team/david.jpg"
        }
    ]

    return (
        <div className="flex flex-col min-h-screen bg-[var(--color-brand-light)] overflow-hidden">
            {/* Hero Section */}
            <section className="relative px-6 py-48 text-center bg-[var(--color-brand-dark)] text-white mt-[-8rem]">
                <div className="max-w-4xl mx-auto relative z-10 mt-20">
                    <h1 className="text-5xl md:text-8xl tracking-tight text-white mb-8 font-light leading-tight">
                        The Vision Behind <br />
                        L'AGENCE
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 font-light max-w-2xl mx-auto leading-relaxed">
                        We believe that the right leader can transform an organization. We exist to find those leaders.
                    </p>
                </div>
            </section>

            {/* Leadership Section */}
            <section className="py-32 px-6">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20">
                    <div className="md:w-1/2">
                        <div className="flex relative items-center mb-10">
                            <div className="absolute left-[-2rem] top-[-0.5rem] w-24 h-24 bg-[var(--color-brand-orange)] -z-10 transform -skew-x-12 opacity-90" />
                            <h2 className="text-5xl font-light text-[var(--color-brand-dark)] tracking-tight">
                                <strong className="font-bold">Our</strong> Leadership
                            </h2>
                        </div>
                        <h3 className="text-4xl font-light text-[var(--color-brand-dark)] mb-4">Michaëlle Gocko Achukwu</h3>
                        <p className="text-[var(--color-brand-orange)] uppercase tracking-widest text-sm font-medium mb-8">Founder & CEO</p>
                        <p className="text-gray-500 leading-relaxed font-light text-lg mb-8">
                            Michaëlle brings extensive global expertise identifying transformational leaders for technology-forward and purpose-driven organizations. With prior executive search experience at Egon Zehnder and successful entrepreneurial ventures co-founding Rise Up Conseils and RE'ELLE Ventures, she established L'AGENCE Executive in 2023. Her data-driven yet human-centric approach redefines elite executive search for the Industrial and Technology sectors, connecting world-class talent with the companies building our future.
                        </p>
                    </div>
                    <div className="md:w-1/2 shrink-0">
                        <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-gray-200 shadow-xl border border-gray-100">
                            <Image src="/team/michaelle.png" alt="Michaëlle Gocko Achukwu" fill className="object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0D1D19]/40 to-transparent z-10" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Dynamic Team Section */}
            <section className="py-32 px-6 bg-[#E8E8E8]">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl font-light text-[var(--color-brand-dark)] tracking-tight mb-6">
                            <strong className="font-bold">Global</strong> Advisory Board
                        </h2>
                        <p className="text-gray-500 text-xl max-w-2xl mx-auto font-light leading-relaxed">Operating across 4 continents, our experts provide unparalleled market intelligence.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {team.map((member) => (
                            <div key={member.id} className="p-10 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                                <div className="w-24 h-24 rounded-full bg-gray-100 mb-8 flex items-center justify-center text-gray-300 border border-gray-200 overflow-hidden mx-auto relative">
                                    <Image src={member.image} alt={member.name} fill className="object-cover" />
                                </div>
                                <h3 className="text-xl font-medium text-[var(--color-brand-dark)] mb-2 text-center">{member.name}</h3>
                                <p className="text-[var(--color-brand-orange)] uppercase tracking-wider text-xs font-semibold mb-6 text-center">{member.role}</p>
                                <p className="text-gray-500 text-sm leading-relaxed font-light text-center">{member.bio}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
