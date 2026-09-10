import type { Metadata, Viewport } from "next";
import { Archivo, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

// Self-hosted through next/font: no runtime request to Google, no layout shift.
const inter = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const archivo = Archivo({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const siteUrl = "https://www.nancydavisexecutivetraining.com";
const title = `${site.name} | Executive Communication & Presentation Training`;
const description =
  "In-house workshops, one-on-one coaching and student programs in public speaking and presentation skills. Small groups, real practice, and private session recordings you keep.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: title, template: `%s | ${site.name}` },
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: site.name,
    title,
    description,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0f1a2e",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${archivo.variable}`}>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        {/* Structured data. Only facts we can stand behind: no street address,
            no phone, no price. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: site.name,
              url: siteUrl,
              description,
              email: site.email,
              areaServed: "US",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Birmingham",
                addressRegion: "AL",
                addressCountry: "US",
              },
              founder: { "@type": "Person", name: "Nancy Davis" },
              foundingDate: "1988",
              knowsAbout: [
                "Public speaking",
                "Executive communication",
                "Presentation skills",
                "Sales presentation training",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
