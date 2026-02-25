import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "L'AGENCE Executive | Global Opportunities",
  description: "Global Opportunities. Live from the Pipeline.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased bg-[var(--color-brand-light)] text-[var(--color-brand-dark)]">
        <div className="flex flex-col min-h-screen">
          <Navigation />
          <main className="flex-grow pt-32">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
