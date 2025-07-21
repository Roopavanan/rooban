import type { Metadata } from "next";
import { Poppins as FontSans } from "next/font/google";
import "@/app/styles/globals.css";

const fontSans = FontSans({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	variable: "--font-sans",
});
export const metadata: Metadata = {
  title: "Rooban | Software Developer Portfolio",
  description:
    "Explore Rooban's professional portfolio featuring React, Next.js, Typescript, Redux and Tailwind CSS projects. Available for Freelance & full-time frontend developer opportunities.",
  keywords: [
    "Rooban",
	"Freelancer Pondicherry",
	"Website development Pondicherry",
    "Frontend Developer",
    "React Developer",
    "Next.js Portfolio",
    "Tailwind CSS",
    "Web Developer Pondicherry",
    "JavaScript Developer",
    "UI Developer",
    "Web Development Portfolio",
  ],
  authors: [
    { name: "Roopavanan R", url: "https://rooban-portfolio.vercel.app/" },
  ],
  creator: "Roopavanan R",
  robots: "index, follow",
  openGraph: {
    title: "Rooban | Frontend Developer Portfolio",
    description:
      "Showcasing Rooban's best work in React, Next.js, and modern web development. Let's build something amazing together.",
    url: "https://rooban-portfolio.vercel.app/",
    siteName: "Rooban Portfolio",
    images: [
      {
        url: "https://rooban-portfolio.vercel.app/logo.png",
        width: 1200,
        height: 630,
        alt: "Rooban Portfolio Website",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rooban | Frontend Developer Portfolio",
    description:
      "Explore my latest web projects built with Typescript, Next.js & Tailwind CSS.",
    images: ["https://rooban-portfolio.vercel.app/logo.png"],
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
