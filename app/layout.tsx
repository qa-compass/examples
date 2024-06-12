import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script id="qa-compass">{`
        {
          const searchParams = new URLSearchParams(location.search)
          if (searchParams.get('qaCompass') || searchParams.get('state')?.includes('qaCompass')) {
            const script = document.createElement('script');
            script.setAttribute('data-qa-compass-script-id', '79573e49-efd4-4cda-9da3-e20e9653a2e2')
            script.src = 'https://www.unpkg.com/@qa-compass/toolbar/dist/index.js';
            document.head.appendChild(script);
          }
        }
      `}
      </Script>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
