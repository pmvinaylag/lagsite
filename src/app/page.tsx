import PublicLayout from '@/components/PublicLayout'
import Link from 'next/link'
import { getHubSpotJobs } from '@/lib/hubspot'

export default async function Home() {
  const jobs = await getHubSpotJobs()
  // Take the 2 most recent active jobs for the homepage preview
  const recentJobs = jobs.slice(0, 2)

  return (
    <PublicLayout>
      {/* Hero Section */}
      <section className="relative px-6 py-48 md:py-64 flex flex-col items-center justify-center text-center bg-[var(--color-brand-dark)] text-white mt-[-8rem]">
        <div className="max-w-5xl mx-auto relative z-10 w-full mt-20">
          <h1 className="text-6xl md:text-9xl tracking-tight text-white mb-6 leading-tight font-light font-sans">
            We Connect <br />
            The Future
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-light mb-16 max-w-2xl mx-auto leading-relaxed">
            Connecting technology-forward, innovative, and purpose-driven organizations with globally-versed, top-tier executive talent.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link
              href="/contact"
              className="px-10 py-5 rounded-full bg-[var(--color-brand-orange)] text-white font-medium hover:bg-[#e66c10] transition-colors shadow-lg uppercase tracking-widest text-sm"
            >
              Partner with Us
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Capabilities */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex relative items-center mb-20">
            {/* Diagonal orange slash graphic behind text */}
            <div className="absolute left-[-2rem] top-[-1rem] w-32 h-32 bg-[var(--color-brand-orange)] -z-10 transform -skew-x-12 opacity-90" />
            <h2 className="text-5xl font-light text-[var(--color-brand-dark)] tracking-tight">
              <strong className="font-bold">Our</strong> Business
            </h2>
          </div>

          <p className="text-[var(--color-brand-dark)] text-2xl font-light max-w-3xl mb-16 leading-relaxed opacity-80">
            A boutique, AI-native executive leadership firm specializing in cross-cultural leadership for tech-forward and purpose-driven organizations.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Executive Search (Retained)", desc: "High-stakes C-suite, VP, and Board-level placements.", icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" },
              { title: "Specialist Retained Search", desc: "Critical director-level and senior individual contributor roles.", icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" },
              { title: "Sourcing-as-a-Service (SaaS)", desc: "Weekly delivery of calibrated candidate pipelines for internal teams.", icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" },
              { title: "Talent Infrastructure (TIaaS)", desc: "An AI-powered sourcing engine designed for rapid scaling.", icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" },
              { title: "Advisory & Coaching", desc: "Succession planning, assessments, and team effectiveness.", icon: "M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" },
              { title: "Fractional Executive", desc: "Embedded strategic leadership in Marketing, Operations, and GTM.", icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" }
            ].map((service, i) => (
              <div key={i} className="p-10 rounded-2xl bg-white shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-16 h-16 rounded-full border border-gray-200 flex items-center justify-center text-[var(--color-brand-dark)] mb-8 group-hover:bg-[var(--color-brand-orange)] group-hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d={service.icon} />
                  </svg>
                </div>
                <h3 className="text-2xl font-medium text-[var(--color-brand-dark)] mb-4">{service.title}</h3>
                <p className="text-gray-500 font-light leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Roles */}
      <section className="py-32 px-6 bg-[#E8E8E8]">
        <div className="max-w-7xl mx-auto">
          <div className="flex relative items-center mb-20 justify-between">
            <div className="flex items-center relative">
              <div className="absolute left-[-2rem] top-[-1rem] w-32 h-32 bg-[var(--color-brand-orange)] -z-10 transform -skew-x-12 opacity-90" />
              <h2 className="text-5xl font-light text-[var(--color-brand-dark)] tracking-tight">
                <strong className="font-bold">Active</strong> Engagements
              </h2>
            </div>
            <Link href="/jobs" className="hidden md:inline-flex w-14 h-14 rounded-full border border-gray-300 items-center justify-center text-[var(--color-brand-dark)] hover:bg-[var(--color-brand-orange)] hover:border-transparent hover:text-white transition-all">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {recentJobs.map((job: any) => (
              <Link
                href={`/jobs/${job.slug}`}
                key={job.id}
                className="group block p-10 rounded-2xl bg-white border border-gray-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl shadow-sm"
              >
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-3xl font-medium mb-3 text-[var(--color-brand-dark)]">{job.subject?.split(' (')[0] || job.subject}</h3>
                    <p className="text-[var(--color-brand-orange)] uppercase tracking-wider text-xs font-semibold flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-orange)]"></span>
                      Exclusive Search
                    </p>
                  </div>
                  {job.priority === 'HIGH' && (
                    <span className="px-3 py-1 bg-red-50 text-red-600 text-[10px] font-bold tracking-wider uppercase rounded-full whitespace-nowrap">
                      Priority
                    </span>
                  )}
                </div>
                <p className="text-gray-500 leading-relaxed line-clamp-2 text-base font-light mb-8 pt-4 border-t border-gray-100">
                  {job.content?.replace(/<[^>]*>?/gm, '').trim()}
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
            ))}
          </div>

          {recentJobs.length === 0 && (
            <div className="col-span-2 text-center py-16">
              <p className="text-gray-400 font-light">No active public roles at this time. Check back soon.</p>
            </div>
          )}

          <div className="mt-12 flex justify-center md:hidden">
            <Link href="/jobs" className="px-8 py-4 rounded-full border border-[var(--color-brand-dark)] text-[var(--color-brand-dark)] font-medium uppercase tracking-widest text-sm text-center w-full">
              View All Roles
            </Link>
          </div>
        </div>
    </section>

    {/* Client Portal CTA */}
    <section className="py-24 px-6 bg-[var(--color-brand-dark)] text-white">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <p className="text-xs uppercase tracking-widest text-[var(--color-brand-orange)] mb-3 font-medium">For Our Clients</p>
          <h2 className="text-4xl font-light tracking-tight mb-3">Live Pipeline Access</h2>
          <p className="text-gray-400 font-light max-w-xl">
            Your dedicated client portal gives you a real-time, anonymised view of your candidate pipeline — updated every 60 seconds.
          </p>
        </div>
        <Link
          href="/client-portal"
          className="flex-shrink-0 px-8 py-4 rounded-full border border-white/30 text-white font-medium hover:bg-white hover:text-[var(--color-brand-dark)] transition-all uppercase tracking-widest text-sm whitespace-nowrap"
        >
          View Portal →
        </Link>
      </div>
    </section>
  </PublicLayout>
  )
}
