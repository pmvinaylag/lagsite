import Link from 'next/link'
import { getHubSpotJobs } from '@/lib/hubspot'

export default async function JobsPage() {
    const jobs = await getHubSpotJobs()

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

            <section className="py-32 px-6 flex-grow bg-gray-50/30">
                <div className="max-w-6xl w-full mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {jobs.map((job: any) => {
                            return (
                                <Link
                                    href={`/jobs/${job.slug}`}
                                    key={job.id}
                                    className="group flex flex-col p-10 rounded-3xl bg-white border border-gray-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl shadow-sm"
                                >
                                    <div className="flex justify-between items-start mb-6">
                                        <div>
                                            <h2 className="text-3xl font-medium mb-3 text-[var(--color-brand-dark)] text-balance pr-4">{job.subject.split(' (')[0]}</h2>
                                            {/* We can use custom properties for this later, for now we hardcode or pull from title */}
                                            <p className="text-[var(--color-brand-orange)] uppercase tracking-wider text-xs font-semibold mb-6 flex items-center gap-2">
                                                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-orange)]"></span>
                                                Exclusive Search
                                            </p>
                                        </div>
                                        <div className="flex flex-col items-end gap-2">
                                            <span className="px-4 py-1.5 border border-gray-200 text-xs text-gray-500 font-medium tracking-wide uppercase rounded-full whitespace-nowrap bg-gray-50/50">
                                                Remote / Hybrid
                                            </span>
                                            {job.priority === 'HIGH' && (
                                                <span className="px-3 py-1 bg-red-50 text-red-600 text-[10px] font-bold tracking-wider uppercase rounded-full whitespace-nowrap">
                                                    Priority Fill
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    <p className="text-gray-500 leading-relaxed line-clamp-3 text-base font-light mb-8 pt-4 border-t border-gray-100">
                                        {/* Strip HTML tags for preview and clean whitespace */}
                                        {job.content?.replace(/<[^>]*>?/gm, '').trim()}
                                    </p>

                                    <div className="flex items-center justify-between mt-auto pt-6">
                                        <div className="flex items-center text-[var(--color-brand-dark)] font-medium text-sm group-hover:text-[var(--color-brand-orange)] transition-colors">
                                            View Position Details
                                            <div className="ml-4 w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-[var(--color-brand-orange)] bg-white shadow-sm group-hover:shadow-md transition-all">
                                                <svg className="w-4 h-4" transform="translate(1,0)" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}

                        {jobs.length === 0 && (
                            <div className="col-span-1 lg:col-span-2 text-center p-20 bg-white rounded-3xl border border-gray-100 shadow-sm flex flex-col items-center justify-center">
                                <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-6">
                                    <svg className="w-8 h-8 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-medium text-[var(--color-brand-dark)] mb-2">No Open Roles</h3>
                                <p className="text-gray-500 text-lg font-light max-w-md mx-auto">We are currently not actively sourcing for any public positions. Please check back later.</p>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
}
