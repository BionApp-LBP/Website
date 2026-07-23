import "@/styles/globals.css";
import "@/styles/people.css";
import "@/styles/globe.css";
import "@/styles/hero-world.css";
import Script from "next/script";

export const metadata = {
  metadataBase: new URL("https://bionapp.com"),
  title: "Bion | Credit that moves at your speed",
  description: "Unsecured stablecoin credit and seamless stablecoin payments for consumers, built for everyday spending with Bion.",
  openGraph: {
    title: "Bion | Credit that moves at your speed",
    description: "Unsecured stablecoin credit and stablecoin payments for consumers, made simple for everyday life.",
    url: "https://bionapp.com",
    siteName: "BION",
    images: [
      {
        url: "/logo_bion.png",
        width: 1200,
        height: 630,
        alt: "BION Hero Illustration",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BION | The Future of Credit is Borderless",
    description: "Instant, unsecured stablecoin credit. AI-powered on-chain underwriting.",
    images: ["/logo_bion.png"],
  },
  icons: {
    icon: "/bion-favicon.png",
    shortcut: "/bion-favicon.png",
    apple: "/bion-favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-E85HBG72VH"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-E85HBG72VH');
          `}
        </Script>
      </head>
      <body className="relative" suppressHydrationWarning>{children}</body>
    </html>
  );
}
