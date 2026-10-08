import Header from "@/components/Header";
import Footer from "@/components/Footer";

/**
 * Chrome for the marketing pages: skip link, sticky header, main landmark,
 * footer.
 *
 * This lives in a route group rather than in the root layout so that bare
 * pages — /card, the digital business card — can opt out of the site chrome
 * entirely while still sharing the root layout's <html>, fonts, metadata and
 * structured data. A business card that arrives wrapped in a nav bar and a
 * four-column footer is not a business card.
 */
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Header />
      <main id="main">{children}</main>
      <Footer />
    </>
  );
}
