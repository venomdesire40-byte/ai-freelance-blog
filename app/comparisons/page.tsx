"use client";
import { useEffect, useState } from "react";

const posts = [
  {
    id: 1,
    slug: "claude-vs-chatgpt-real-test-freelancers",
    title: "Claude vs ChatGPT for Freelancers in 2026 — Honest 30-Day Test",
    excerpt: "I used both for 30 days on real client work. Here's the honest truth about which one is worth your money.",
    date: "Apr 25, 2026",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: 2,
    slug: "claude-vs-gemini-vs-chatgpt-freelancers-2026",
    title: "Claude vs Gemini vs ChatGPT — Ultimate Comparison for Freelancers 2026",
    excerpt: "Tested all three on real projects for 60 days. Which AI tool wins for writing, proposals, research?",
    date: "May 14, 2026",
    readTime: "13 min read",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: 3,
    slug: "upwork-vs-fiverr-vs-contra-2026-which-pays-more",
    title: "Upwork vs Fiverr vs Contra in 2026 — Which Platform Pays Freelancers More?",
    excerpt: "Compared on fees, client quality, and earning potential. Which platform actually pays more?",
    date: "June 2, 2026",
    readTime: "11 min read",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=600&q=80&auto=format&fit=crop",
  },
];

export default function Comparisons() {
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
              color: item.label === "Comparisons" ? "#5FC888" : "#7AB899",
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
            Comparisons
          </div>
          <h1 style={{
            fontFamily: "'Syne', sans-serif", fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
            fontWeight: 800, color: "#E8F5EE", marginBottom: "0.5rem",
          }}>Head-to-Head AI Tool Comparisons</h1>
          <p style={{ color: "#7AB899", fontSize: "1rem" }}>
            Real tests, real data, real verdicts. No theoretical comparisons — every test run on actual client work.
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
                  }}>Comparisons</div>
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