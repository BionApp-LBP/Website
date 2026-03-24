import { Inter, Geist } from "next/font/google";
import "@/styles/globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BION | The future of credit is borderless",
  description: "BION is a collateral free short-tenure stablecoin micro-credit lender with embedded payment rails",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body className={`${inter.className} relative`} suppressHydrationWarning>{children}</body>
    </html>
  );
}
