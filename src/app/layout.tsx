import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "L'AGENCE Executive | Global Opportunities",
  description: "Global Opportunities. Live from the Pipeline.",
};

/**
 * Root layout — intentionally minimal.
 * Navigation and Footer are provided by sub-layouts:
 *   - src/app/about/layout.tsx, jobs/layout.tsx, etc. → PublicLayout
 *   - src/app/client-portal/layout.tsx               → PortalLayout (no public nav)
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased bg-[var(--color-brand-light)] text-[var(--color-brand-dark)]">
        {children}
      </body>
    </html>
  );
}
