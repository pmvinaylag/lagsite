import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

/**
 * PublicLayout — wraps all public-facing pages with the shared
 * Navigation bar and Footer. Import and use in each page's local layout.tsx,
 * OR wrap page content directly.
 */
export default function PublicLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex flex-col min-h-screen">
            <Navigation />
            <main className="flex-grow pt-32">
                {children}
            </main>
            <Footer />
        </div>
    )
}
