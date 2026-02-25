import Link from 'next/link'
import { getJobs } from '@/lib/webflow'

export default async function JobsPage() {
    const jobs = await getJobs()

    return (
        <div className="min-h-screen bg-[var(--color-brand-light)] text-[var(--color-brand-dark)] overflow-hidden flex flex-col">
            {/* Header */}
            <section className="relative px-6 py-48 text-center bg-[var(--color-brand-dark)] text-white mt-[-8rem]">
                <div className="max-w-4xl mx-auto relative z-10 mt-20">
                    <h1 className="text-5xl md:text-8xl tracking-tight text-white mb-8 font-light leading-tight">
                        Career & Culture
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 font-light max-w-2xl mx-auto leading-relaxed">
                        Discover premier global opportunities. Curated by our elite pipeline.
                    </p>
                </div>
            </section>

            <section className="py-32 px-6 flex-grow">
                <div className="max-w-6xl w-full mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {jobs.map((job: any) => {
                            const data = job.fieldData;
                            return (
                                <Link
                                    href={`/jobs/${data.slug}`}
                                    key={job.id}
                                    className="group block p-10 rounded-2xl bg-white border border-gray-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl shadow-sm"
                                >
                                    <div className="flex justify-between items-start mb-6">
                                        <div>
                                            <h2 className="text-3xl font-medium mb-3 text-[var(--color-brand-dark)]">{data.name.split(' (')[0]}</h2>
                                            <p className="text-[var(--color-brand-orange)] uppercase tracking-wider text-xs font-semibold mb-6">{data.client}</p>
                                        </div>
                                        <span className="px-4 py-2 border border-gray-200 text-xs text-gray-500 font-medium tracking-wide uppercase rounded-sm">
                                            {data.location}
                                        </span>
                                    </div>

                                    <p className="text-gray-500 leading-relaxed line-clamp-3 text-base font-light mb-8">
                                        {/* Strip HTML tags for preview */}
                                        {data.description?.replace(/<[^>]*>?/gm, '')}
                                    </p>

                                    <div className="flex items-center text-[var(--color-brand-dark)] font-medium text-sm group-hover:text-[var(--color-brand-orange)] transition-colors">
                                        View Position
                                        <div className="ml-4 w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-[var(--color-brand-orange)]">
                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}

                        {jobs.length === 0 && (
                            <div className="col-span-1 lg:col-span-2 text-center p-16 bg-white rounded-2xl border border-gray-100 shadow-sm">
                                <p className="text-gray-500 text-xl font-light">No open positions currently available.</p>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
}
