import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Freelance Blog — Tools, Tips & Productivity for Freelancers",
  description: "Honest AI tool reviews, productivity hacks and income strategies for freelancers. Built for beginners who want to earn more with AI.",
  keywords: "AI tools for freelancers, productivity hacks, AI reviews, freelance tips, earn with AI",
  openGraph: {
    title: "AI Freelance Blog",
    description: "Honest AI tool reviews & productivity hacks for freelancers",
    type: "website",
  },
  verification: {
  google: "inSjeWGNUSFhpohg0JAvTZeGLNLJLxL7ZcX1Il-E6_w"
},
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <div className="grid-bg" />
        {children}
      </body>
    </html>
  );
}