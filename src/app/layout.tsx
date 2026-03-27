import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";

/* ── Fonts ──────────────────────────────────────────────────── */

const fraunces = localFont({
  src: [
    {
      path: "../../public/fonts/fraunces-latin-wght-normal.woff2",
      style: "normal",
    },
    {
      path: "../../public/fonts/fraunces-latin-wght-italic.woff2",
      style: "italic",
    },
  ],
  variable: "--font-fraunces",
  display: "swap",
  weight: "100 900",
  preload: true,
});

const oswald = localFont({
  src: "../../public/fonts/oswald-latin-wght-normal.woff2",
  variable: "--font-oswald",
  display: "swap",
  weight: "200 700",
  preload: false, // accent font — not critical for FCP
});

const inter = localFont({
  src: "../../public/fonts/inter-latin-wght-normal.woff2",
  variable: "--font-inter",
  display: "swap",
  weight: "100 900",
  preload: true,
});

/* ── Metadata ───────────────────────────────────────────────── */

const SITE_URL = "https://javiermilei.com";
const SITE_NAME = "Presidencia de la Nación Argentina";

export const metadata: Metadata = {
  title: {
    default: "Javier Milei — Presidente de la Nación Argentina",
    template: "%s | Presidencia de la Nación",
  },
  description:
    "Sitio oficial de la Presidencia de la Nación Argentina. Visión de gobierno, resultados de gestión, reformas estructurales, proyectos estratégicos, relaciones exteriores y archivo intelectual del presidente Javier Milei.",
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Javier Milei — Presidente de la Nación Argentina",
    description:
      "Sitio oficial de la Presidencia de la Nación Argentina. Visión, resultados, reformas y archivo intelectual.",
  },
  twitter: {
    card: "summary_large_image",
    site: "@JMilei",
    creator: "@JMilei",
    title: "Javier Milei — Presidente de la Nación Argentina",
    description:
      "Sitio oficial de la Presidencia de la Nación Argentina.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "government",
};

export const viewport: Viewport = {
  themeColor: "#f7f5f0",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

/* ── Structured Data ────────────────────────────────────────── */

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/#person`,
  name: "Javier Milei",
  url: SITE_URL,
  jobTitle: "Presidente de la Nación Argentina",
  nationality: { "@type": "Country", name: "Argentina" },
  affiliation: {
    "@type": "Organization",
    name: "La Libertad Avanza",
    url: "https://lalibertadavanza.com.ar",
  },
  worksFor: {
    "@type": "GovernmentOrganization",
    "@id": `${SITE_URL}/#org`,
    name: "Presidencia de la Nación Argentina",
    url: "https://www.argentina.gob.ar",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Balcarce 50",
      addressLocality: "Buenos Aires",
      addressRegion: "CABA",
      postalCode: "C1064AAB",
      addressCountry: "AR",
    },
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: SITE_NAME,
  url: SITE_URL,
  publisher: { "@id": `${SITE_URL}/#org` },
  inLanguage: "es",
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "GovernmentOrganization",
  "@id": `${SITE_URL}/#org`,
  name: "Presidencia de la Nación Argentina",
  url: "https://www.argentina.gob.ar",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Balcarce 50",
    addressLocality: "Buenos Aires",
    addressRegion: "CABA",
    postalCode: "C1064AAB",
    addressCountry: "AR",
  },
};

/* ── Layout ─────────────────────────────────────────────────── */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${fraunces.variable} ${oswald.variable} ${inter.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([personSchema, websiteSchema, orgSchema]),
          }}
        />
      </head>
      <body>
        <a href="#main-content" className="skip-link">
          Ir al contenido principal
        </a>
        <NavBar />
        <main id="main-content">{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
