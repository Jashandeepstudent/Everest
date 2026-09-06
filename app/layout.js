import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Everest Trading Co. | Water Pumps & Motors, Jammu",
  description:
    "Kirloskar and Stihl water pumps, motors, and on-site service in Gandhi Nagar, Jammu. Family-run since day one, trusted by 34+ Google reviewers at 4.4 stars.",
  keywords: [
    "water pump Jammu",
    "Kirloskar dealer Jammu",
    "Stihl dealer Jammu",
    "submersible pump Jammu",
    "diesel pump set Jammu",
    "Everest Trading Company",
  ],
  openGraph: {
    title: "Everest Trading Co. | Water Pumps & Motors, Jammu",
    description:
      "Kirloskar and Stihl water pumps, motors, and on-site service in Gandhi Nagar, Jammu.",
    type: "website",
    locale: "en_IN",
  },
};

export const viewport = {
  themeColor: "#1A1F1C",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
