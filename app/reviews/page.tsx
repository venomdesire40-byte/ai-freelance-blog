"use client";
import { useEffect, useState } from "react";

const posts = [
  {
    id: 1,
    slug: "5-best-ai-tools-for-freelance-writers-2026",
    title: "5 Best AI Tools for Freelance Writers in 2026 (Tested & Ranked)",
    excerpt: "Honest reviews of the top AI writing tools that actually save time and make money for beginner freelancers.",
    date: "Apr 28, 2026",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: 2,
    slug: "best-ai-tools-upwork-freelancers-2026",
    title: "Best AI Tools for Upwork Freelancers in 2026 — Win More Proposals",
    excerpt: "The exact AI tools top Upwork freelancers use to write better proposals, deliver faster, and earn more per hour.",
    date: "Apr 30, 2026",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: 3,
    slug: "google-gemini-2026-update-freelancers-complete-guide",
    title: "Google Gemini 2026 Update — What Freelancers Need to Know",
    excerpt: "Google's biggest AI update just dropped. Here is exactly what changed and how to use the new features to earn more.",
    date: "May 13, 2026",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: 4,
    slug: "best-ai-freelance-niches-2026-high-demand",
    title: "Best AI Freelance Niches Exploding in 2026 — High Demand, Low Competition",
    excerpt: "8 freelance niches with high demand and low competition in 2026 — all created by AI.",
    date: "May 15, 2026",
    readTime: "11 min read",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: 5,
    slug: "best-ai-tools-content-writers-2026",
    title: "Best AI Tools for Content Writers Who Hate Wasting Time in 2026",
    excerpt: "The AI tools content writers actually use to save hours every week. Honest reviews — no sponsored content.",
    date: "June 2, 2026",
    readTime: "11 min read",
    image: "https://images.unsplash.com/photo-1542435503-956c469947f6?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: 6,
    slug: "best-ai-writing-tools-seo-content-2026",
    title: "Best AI Writing Tools for SEO Content in 2026 — Ranked by Real Results",
    excerpt: "The best AI writing tools for SEO content ranked by actual ranking results. Tested over 6 months.",
    date: "May 14, 2026",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: 7,
    slug: "best-ai-tools-social-media-content-2026",
    title: "Best AI Tools for Social Media Content Creation in 2026",
    excerpt: "The best AI tools for social media content creation tested on real accounts. Save hours every week.",
    date: "May 15, 2026",
    readTime: "11 min read",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: 8,
    slug: "ai-tools-replaced-my-paid-freelance-tools-honest-review",
    title: "AI Tools That Replaced My $500/Month Freelance Tools — Honest Review 2026",
    excerpt: "I replaced $500 per month in freelance subscriptions with AI tools. Here is exactly what works better.",
    date: "June 2, 2026",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=600&q=80&auto=format&fit=crop",
  },
];

export default function Reviews() {
  const [visible, setVisible] = useState(false);
  useEffect(() => { setVisible(true); }, []);

  return (
    <main style={{ minHeight: "100vh", position: "relative", zIndex: 1 }}>
      <nav style={{
        display: "flex", justifyContent: "space-between", alignItems: "center",
        padding: "1.2rem 1.5rem", borderBottom: "1px solid rgba(95,200,136,0.15)",
        backdropFilter: "blur(20px)", position: "sticky", top: 0, zIndex: 100,
        background: "rgba(11,30,20,0.9)",
      }}>
        <a href="/" style={{
          fontFamily: "'Syne', sans-serif", fontSize: "1.2rem",
          fontWeight: 800, color: "#5FC888", textDecoration: "none",
        }}>
          AI<span style={{ color: "#ffffff" }}>FREELANCE</span>
        </a>
        <div style={{ display: "flex", gap: "2rem" }}>
          {[
            { label: "Home", href: "/" },
            { label: "Reviews", href: "/reviews" },
            { label: "Comparisons", href: "/comparisons" },
            { label: "Productivity", href: "/productivity" },
            { label: "About", href: "/about" },
          ].map((item) => (
            <a key={item.label} href={item.href} style={{
              color: item.label === "Reviews" ? "#5FC888" : "#7AB899",
              textDecoration: "none", fontSize: "0.85rem",
              fontFamily: "'Syne', sans-serif", fontWeight: 500,
              letterSpacing: "1px", textTransform: "uppercase",
            }}>{item.label}</a>
          ))}
        </div>
      </nav>

      <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "3rem 1.5rem 5rem" }}>
        <div style={{
          opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.8s ease", marginBottom: "2.5rem",
        }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "4px 16px", border: "1px solid rgba(95,200,136,0.3)",
            borderRadius: "20px", marginBottom: "1rem",
            fontSize: "0.75rem", letterSpacing: "2px",
            color: "#5FC888", textTransform: "uppercase",
            fontFamily: "'Syne', sans-serif",
          }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#5FC888", display: "inline-block", boxShadow: "0 0 8px #5FC888" }} />
            AI Reviews
          </div>
          <h1 style={{
            fontFamily: "'Syne', sans-serif", fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
            fontWeight: 800, color: "#E8F5EE", marginBottom: "0.5rem",
          }}>Honest AI Tool Reviews</h1>
          <p style={{ color: "#7AB899", fontSize: "1rem" }}>
            Every tool personally tested on real client work. No sponsored content. No affiliate bias.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
          {posts.map((post, i) => (
            <a key={post.id} href={`/blog/${post.slug}`} style={{ textDecoration: "none" }}>
              <article style={{
                background: "rgba(14,32,24,0.85)",
                border: "1px solid rgba(95,200,136,0.15)",
                borderRadius: "12px", overflow: "hidden",
                display: "flex", flexDirection: "column", height: "100%",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.6s ease ${0.1 + i * 0.1}s, transform 0.6s ease ${0.1 + i * 0.1}s, border-color 0.08s, box-shadow 0.08s`,
              }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "#5FC888";
                  el.style.boxShadow = "0 8px 30px rgba(95,200,136,0.15)";
                  el.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "rgba(95,200,136,0.15)";
                  el.style.boxShadow = "none";
                  el.style.transform = "translateY(0)";
                }}
              >
                <div style={{ width: "100%", height: "180px", overflow: "hidden", position: "relative" }}>
                  <img src={post.image} alt={post.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 40%, rgba(14,32,24,0.95) 100%)" }} />
                </div>
                <div style={{ padding: "1.25rem", display: "flex", flexDirection: "column", flex: 1 }}>
                  <div style={{
                    display: "inline-flex", padding: "3px 10px", borderRadius: "20px",
                    marginBottom: "0.75rem", fontSize: "0.65rem", letterSpacing: "1px",
                    color: "#ffffff", textTransform: "uppercase",
                    fontFamily: "'Syne', sans-serif", fontWeight: 600,
                    background: "rgba(95,200,136,0.85)", width: "fit-content",
                  }}>AI Reviews</div>
                  <h3 style={{
                    fontFamily: "'Syne', sans-serif", fontSize: "0.95rem",
                    fontWeight: 700, marginBottom: "0.6rem", lineHeight: 1.4, color: "#E8F5EE",
                  }}>{post.title}</h3>
                  <p style={{ color: "#7AB899", fontSize: "0.875rem", marginBottom: "1rem", lineHeight: 1.6 }}>{post.excerpt}</p>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "auto" }}>
                    <span style={{ fontSize: "0.75rem", color: "#4A7B60" }}>{post.date}</span>
                    <span style={{ fontSize: "0.75rem", color: "#5FC888" }}>{post.readTime} →</span>
                  </div>
                </div>
              </article>
            </a>
          ))}
        </div>
      </section>

      <footer style={{
        borderTop: "1px solid rgba(95,200,136,0.1)",
        padding: "2rem 3rem", textAlign: "center",
        color: "#4A7B60", fontSize: "0.8rem",
        fontFamily: "'Syne', sans-serif", letterSpacing: "1px",
      }}>
        AI<span style={{ color: "#ffffff" }}>FREELANCE</span> © 2026 — Built for Freelancers
      </footer>
    </main>
  );
}