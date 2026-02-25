export default function ContactPage() {
    return (
        <div className="flex flex-col min-h-screen bg-[var(--color-brand-light)] overflow-hidden">
            {/* Header */}
            <section className="relative px-6 py-48 text-center bg-[var(--color-brand-dark)] text-white mt-[-8rem]">
                <div className="max-w-4xl mx-auto relative z-10 mt-20">
                    <h1 className="text-5xl md:text-8xl tracking-tight text-white mb-8 font-light leading-tight">
                        Get in Touch
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 font-light max-w-2xl mx-auto leading-relaxed">
                        Begin the conversation. Our advisory partners are ready to discuss your strategic human capital requirements.
                    </p>
                </div>
            </section>

            <section className="py-32 px-6 max-w-7xl mx-auto w-full flex flex-col lg:flex-row gap-16">
                {/* Contact Form */}
                <div className="lg:w-2/3 p-12 md:p-16 rounded-2xl bg-white border border-gray-100 shadow-sm">
                    <div className="flex relative items-center mb-10">
                        <div className="absolute left-[-3rem] top-[-0.5rem] w-24 h-24 bg-[var(--color-brand-orange)] -z-10 transform -skew-x-12 opacity-90" />
                        <h2 className="text-4xl font-light text-[var(--color-brand-dark)] tracking-tight">
                            <strong className="font-bold">Confidential</strong> Inquiry
                        </h2>
                    </div>
                    <form className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-3">
                                <label className="text-sm font-medium text-[var(--color-brand-dark)]">First Name</label>
                                <input type="text" className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-[#F9F9F9] focus:outline-none focus:ring-1 focus:ring-[var(--color-brand-orange)] focus:bg-white transition-all font-light" />
                            </div>
                            <div className="space-y-3">
                                <label className="text-sm font-medium text-[var(--color-brand-dark)]">Last Name</label>
                                <input type="text" className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-[#F9F9F9] focus:outline-none focus:ring-1 focus:ring-[var(--color-brand-orange)] focus:bg-white transition-all font-light" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-3">
                                <label className="text-sm font-medium text-[var(--color-brand-dark)]">Corporate Email</label>
                                <input type="email" className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-[#F9F9F9] focus:outline-none focus:ring-1 focus:ring-[var(--color-brand-orange)] focus:bg-white transition-all font-light" />
                            </div>
                            <div className="space-y-3">
                                <label className="text-sm font-medium text-[var(--color-brand-dark)]">Company</label>
                                <input type="text" className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-[#F9F9F9] focus:outline-none focus:ring-1 focus:ring-[var(--color-brand-orange)] focus:bg-white transition-all font-light" />
                            </div>
                        </div>

                        <div className="space-y-3">
                            <label className="text-sm font-medium text-[var(--color-brand-dark)]">Inquiry Type</label>
                            <select className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-[#F9F9F9] focus:outline-none focus:ring-1 focus:ring-[var(--color-brand-orange)] focus:bg-white appearance-none transition-all font-light text-gray-700">
                                <option>Executive Search Placement</option>
                                <option>Leadership Advisory</option>
                                <option>Executive Coaching</option>
                                <option>Other Priority</option>
                            </select>
                        </div>

                        <div className="space-y-3">
                            <label className="text-sm font-medium text-[var(--color-brand-dark)]">Message</label>
                            <textarea rows={5} className="w-full px-5 py-4 rounded-xl border border-gray-200 bg-[#F9F9F9] focus:outline-none focus:ring-1 focus:ring-[var(--color-brand-orange)] focus:bg-white transition-all font-light" />
                        </div>

                        <button type="button" className="w-full py-5 rounded-full bg-[var(--color-brand-orange)] text-white font-medium hover:bg-[#e66c10] transition-colors mt-6 shadow-lg uppercase tracking-widest text-sm">
                            Submit Inquiry
                        </button>
                    </form>
                </div>

                {/* Global Hubs */}
                <div className="lg:w-1/3 flex flex-col gap-8">
                    <div className="p-10 rounded-2xl bg-[var(--color-brand-dark)] text-white relative overflow-hidden shadow-2xl">
                        <div className="absolute top-0 right-0 w-48 h-48 bg-[var(--color-brand-orange)] opacity-10 rotate-45 transform translate-x-12 -translate-y-12" />
                        <h3 className="text-2xl font-light mb-8">Global Headquarters</h3>
                        <div className="space-y-6">
                            <div>
                                <p className="text-[var(--color-brand-orange)] font-medium text-xs tracking-widest uppercase mb-2">Atlanta</p>
                                <p className="text-gray-300 font-light leading-relaxed">730 Peachtree Street NE, Suite 570<br />Atlanta, GA 30308, USA</p>
                            </div>
                            <div>
                                <p className="text-[var(--color-brand-orange)] font-medium text-xs tracking-widest uppercase mb-2">Contact</p>
                                <p className="text-gray-300 font-light leading-relaxed">contact@lagenceexecutive.com</p>
                            </div>
                        </div>
                    </div>

                    <div className="p-10 rounded-2xl bg-white border border-gray-100 shadow-sm flex-1">
                        <h3 className="text-2xl font-light text-[var(--color-brand-dark)] mb-8">Regional Hubs</h3>
                        <ul className="space-y-6">
                            <li className="flex items-center justify-between border-b border-gray-100 pb-4">
                                <span className="text-[var(--color-brand-dark)] font-medium">New York</span>
                                <span className="text-gray-400 font-light text-sm tracking-wide uppercase">North America</span>
                            </li>
                            <li className="flex items-center justify-between border-b border-gray-100 pb-4">
                                <span className="text-[var(--color-brand-dark)] font-medium">London</span>
                                <span className="text-gray-400 font-light text-sm tracking-wide uppercase">EMEA</span>
                            </li>
                            <li className="flex items-center justify-between">
                                <span className="text-[var(--color-brand-dark)] font-medium">Dubai</span>
                                <span className="text-gray-400 font-light text-sm tracking-wide uppercase">MENA</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    )
}
