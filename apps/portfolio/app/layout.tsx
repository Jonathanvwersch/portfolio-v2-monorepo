import type { Metadata } from "next";
import { Roboto_Slab, Roboto } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Analytics } from "@vercel/analytics/react";

const robotoSlab = Roboto_Slab({ subsets: ["latin"] });
const roboto = Roboto({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Jonathan van Wersch",
    template: `%s | Jonathan van Wersch`,
  },
  manifest: "favicons/site.webmanifest",
  icons: {
    icon: [
      "favicon/favicon-16x16.png",
      "favicon/favicon-32x32.png",
      "favicon/favicon.ico",
    ],
    apple: "favicon/apple-touch-icon.png",
    shortcut: "favicon/favicon.ico",
    other: [
      {
        rel: "android-chrome",
        sizes: "192x192",
        url: "favicon/android-chrome-192x192.png",
      },
      {
        rel: "android-chrome",
        sizes: "256x256",
        url: "favicon/android-chrome-256x256.png",
      },
      { rel: "mstile", sizes: "150x150", url: "favicon/mstile-150x150.png" },
      { rel: "safari-pinned-tab", url: "favicon/safari-pinned-tab.svg" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={[robotoSlab.className, roboto.className].join(" ")}>
        <Analytics />
        <div className="min-h-screen flex flex-col">
          <div className="container mx-auto px-4 max-w-4xl pt-6 sm:pt-20 flex-grow">
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-20">
              <Nav />
              <main className="w-full">
                {children}
              </main>
            </div>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
