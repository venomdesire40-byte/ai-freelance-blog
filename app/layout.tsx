import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Freelance Blog — Tools, Tips & Productivity for Freelancers",
  description: "Honest AI tool reviews, productivity hacks and income strategies for freelancers.",
  keywords: "AI tools for freelancers, productivity hacks, AI reviews, freelance tips",
  metadataBase: new URL('https://ai-freelance-blog.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "AI Freelance Blog",
    description: "Honest AI tool reviews & productivity hacks for freelancers",
    type: "website",
    url: 'https://ai-freelance-blog.vercel.app',
  },
  verification: {
    google: "inSjeWGNUSFhpohg0JAvTZeGLNLJLxL7ZcX1Il-E6_w",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};