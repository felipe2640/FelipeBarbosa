import "../global.css";
import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Portfolio Felipe Barbosa",
    template: "%s | Portfolio",
  },
  description:
    "Software engineer freelancer and founder of My Laundry Lavanderia",
  openGraph: {
    title: "Portfolio Felipe Barbosa",
    description:
      "Front-End Development | React | TypeScript | Node | Technical Supervisor",
    url: "https://felipebarbosa.vercel.app",
    siteName: "felipebarbosa.vercel.app",
    images: [
      {
        url: "http://felipebarbosa.vercel.app/logo.png",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "pt-BR",
    type: "website",
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

  icons: {
    shortcut: "/logo.png",
  },
};
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <head></head>
      <body
        className={`bg-black ${
          process.env.NODE_ENV === "development" ? "debug-screens" : undefined
        }`}
      >
        {children}
      </body>
    </html>
  );
}
