import { Inter, Geist } from "next/font/google";
import "@/styles/globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://bionapp.com"),
  title: "BION | The Future of Credit is Borderless",
  description: "Get instant, unsecured stablecoin credit with embedded payment rails. Experience the future of finance with AI-powered on-chain underwriting, up to $1000 limit, and 30-day tenure.",
  openGraph: {
    title: "BION | The Future of Credit is Borderless",
    description: "Get instant, unsecured stablecoin credit with embedded payment rails. AI-powered on-chain underwriting with up to $1000 limit.",
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
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body className={`${inter.className} relative`} suppressHydrationWarning>{children}</body>
    </html>
  );
}
