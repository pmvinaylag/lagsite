import { getJobBySlug } from '@/lib/webflow';
import Link from 'next/link';

export default async function JobDetailPage({
    params,
}: {
    params: { slug: string };
}) {
    // Await params as required by Next.js 15+ for dynamic route segments
    const resolvedParams = await params;
    const job = await getJobBySlug(resolvedParams.slug);

    if (!job) {
        return (
            <div className="min-h-screen bg-[var(--color-brand-light)] py-48 flex flex-col items-center justify-center px-6 text-center mt-[-8rem]">
                <h1 className="text-4xl font-light text-[var(--color-brand-dark)] mb-6">Position Not Found</h1>
                <p className="text-gray-500 font-light mb-10 max-w-lg">We couldn't locate this specific role. It may have been filled or the link has expired.</p>
                <Link href="/jobs" className="px-8 py-4 rounded-full bg-[var(--color-brand-dark)] text-white font-medium hover:bg-black transition-colors shadow-lg uppercase tracking-widest text-sm">
                    Return to Portal
                </Link>
            </div>
        );
    }

    const { name, client, location, description } = job.fieldData;

    return (
        <div className="bg-[var(--color-brand-light)] min-h-screen pb-32">
            {/* Header Section */}
            <header className="bg-[var(--color-brand-dark)] text-white pt-48 pb-32 px-6 mt-[-8rem]">
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-center space-x-3 mb-8">
                        <Link href="/jobs" className="text-[var(--color-brand-orange)] hover:text-white transition-colors flex items-center text-sm font-medium tracking-wide uppercase">
                            <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            Back to Roles
                        </Link>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-6 leading-tight">
                        {name}
                    </h1>

                    <div className="flex flex-wrap items-center gap-6 mt-10">
                        <div className="flex items-center text-gray-300">
                            <svg className="w-5 h-5 mr-3 text-[var(--color-brand-orange)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <span className="font-light tracking-wide">{client}</span>
                        </div>
                        <div className="flex items-center text-gray-300">
                            <svg className="w-5 h-5 mr-3 text-[var(--color-brand-orange)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span className="font-light tracking-wide">{location}</span>
                        </div>
                        <div className="flex items-center text-gray-300">
                            <svg className="w-5 h-5 mr-3 text-[var(--color-brand-orange)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                            <span className="font-light tracking-wide">Active Role</span>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-4xl mx-auto px-6 -mt-16 relative z-10">
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-10 md:p-16">
                    <div className="flex justify-between items-start mb-12">
                        <h2 className="text-3xl font-light text-[var(--color-brand-dark)] border-b-2 border-[var(--color-brand-orange)] pb-4 inline-block">Role Overview</h2>
                    </div>

                    <div
                        className="prose prose-lg prose-gray max-w-none text-gray-600 font-light leading-relaxed prose-headings:font-normal prose-headings:text-[var(--color-brand-dark)] prose-a:text-[var(--color-brand-orange)]"
                        dangerouslySetInnerHTML={{ __html: description || '<p>Detailed description not available.</p>' }}
                    />

                    <div className="mt-16 pt-10 border-t border-gray-100 flex flex-col items-center sm:items-start">
                        <p className="text-sm font-medium uppercase tracking-widest text-[var(--color-brand-dark)] mb-6">Interested in this position?</p>
                        <a
                            href="mailto:executive@lagenceexecutive.com"
                            className="inline-flex items-center justify-center px-10 py-5 rounded-full bg-[var(--color-brand-orange)] text-white font-medium hover:bg-[#e66c10] transition-colors shadow-lg uppercase tracking-widest text-sm w-full sm:w-auto"
                        >
                            Apply Confidentially
                        </a>
                        <p className="text-xs text-gray-400 mt-4 text-center sm:text-left">
                            All applications are processed securely by our exclusive executive team.
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
}
