import type { Metadata } from "next";
import { Poppins as FontSans } from "next/font/google";
import "@/app/styles/globals.css";

const fontSans = FontSans({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	variable: "--font-sans",
});
export const metadata: Metadata = {
  title: "Rooban | Freelance Website Developer & Digital Marketing Expert in Pondicherry",
  description:
    "Best budget-friendly website development, digital marketing, social media marketing, and Meta Ads services in Pondicherry. Helping startups and businesses grow online with high-converting websites and performance marketing strategies.",
  keywords: [
    "Best website developer Pondicherry",
    "Digital marketing freelancer Pondicherry",
    "Social media marketing Pondicherry",
    "Meta Ads expert Pondicherry",
    "Budget friendly website development",
    "Business growth marketing India",
    "Freelance web developer Pondicherry",
    "Performance marketing freelancer",
    "Frontend Developer Pondicherry",
    "Affordable digital marketing services",
  ],
  authors: [
    { name: "Roopavanan R", url: "https://rooban.info/" },
  ],
  creator: "Roopavanan R",
  robots: "index, follow",
  openGraph: {
    title:
      "Rooban | Website Development, Digital Marketing & Meta Ads Freelancer",
    description:
      "Grow your business with modern website development, social media marketing, and Meta Ads strategy. Affordable freelance services for brands and startups in Pondicherry.",
    url: "https://rooban.info/",
    siteName: "Rooban Portfolio",
    images: [
      {
        url: "https://rooban.info/email.png",
        width: 1200,
        height: 630,
        alt: "Freelance Website Developer & Digital Marketing Expert - Rooban",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Freelance Digital Marketing & Website Developer | Pondicherry",
    description:
      "Affordable websites, social media marketing, and Meta Ads campaigns designed to help businesses scale and grow online.",
    images: ["https://rooban.info/email.png"],
    creator: "@yourTwitterHandle",
  },
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={fontSans.variable}>{children}</body>
		</html>
	);
}
