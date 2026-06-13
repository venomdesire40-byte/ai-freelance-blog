"use client";
import { useEffect, useState } from "react";

const posts = [
  {
    id: 1,
    slug: "free-ai-tools-that-actually-work-2026",
    title: "7 Free AI Tools That Actually Work for Freelancers in 2026",
    excerpt: "No budget? No problem. These free AI tools will 3x your freelance productivity without spending a rupee.",
    date: "Apr 20, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: 2,
    slug: "how-to-use-chatgpt-write-winning-proposals",
    title: "How to Use ChatGPT to Write Winning Freelance Proposals in 2026",
    excerpt: "Step-by-step guide with exact prompts that get 25-35% response rates on Upwork and direct client outreach.",
    date: "Apr 29, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: 3,
    slug: "how-to-get-first-upwork-client-using-ai-tools-2026",
    title: "How to Get Your First Upwork Client Using AI Tools in 2026",
    excerpt: "Step-by-step guide to landing your first Upwork client using AI tools. Real strategies for complete beginners.",
    date: "May 3, 2026",
    readTime: "11 min read",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: 4,
    slug: "best-freelance-platforms-besides-upwork-fiverr-2026",
    title: "Best Freelance Platforms Besides Upwork and Fiverr in 2026",
    excerpt: "Tired of 20% fees? These 8 platforms offer higher pay, lower fees, and better clients.",
    date: "May 12, 2026",
    readTime: "11 min read",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: 5,
    slug: "how-to-earn-1000-per-month-freelancing-with-ai-tools",
    title: "How to Earn $1000 Per Month Freelancing with AI Tools — Step by Step 2026",
    excerpt: "Exact step-by-step plan to earn your first $1000 per month freelancing using AI tools. Real strategies, real numbers.",
    date: "May 14, 2026",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: 6,
    slug: "how-to-make-money-fiverr-ai-tools-2026",
    title: "How to Make Money on Fiverr with AI Tools in 2026",
    excerpt: "Complete guide to making money on Fiverr using AI tools. Best gig ideas, pricing strategies, and AI workflows.",
    date: "May 14, 2026",
    readTime: "11 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: 7,
    slug: "how-to-use-perplexity-ai-freelance-research-2026",
    title: "How to Use Perplexity AI for Freelance Research in 2026",
    excerpt: "Complete guide to using Perplexity AI for freelance research. Exact prompts, workflows, and use cases.",
    date: "May 14, 2026",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: 8,
    slug: "how-to-stay-competitive-freelancer-ai-2026",
    title: "How to Stay Competitive as a Freelancer When AI is Taking Over in 2026",
    excerpt: "AI has already disrupted freelancing. Here are the exact strategies that are working for freelancers who are thriving.",
    date: "May 15, 2026",
    readTime: "13 min read",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: 9,
    slug: "ai-prompt-engineering-freelance-service-2026",
    title: "AI Prompt Engineering as a Freelance Service — How to Get Paid in 2026",
    excerpt: "How to turn prompt engineering into a paid freelance service. Real clients, real rates, exact skills needed.",
    date: "May 15, 2026",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: 10,
    slug: "how-to-use-notion-ai-freelancers-2026",
    title: "How to Use Notion AI for Freelancers in 2026",
    excerpt: "Set up your entire freelance business in Notion. Client management, project tracking, invoicing, AI workflows.",
    date: "May 15, 2026",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: 11,
    slug: "how-to-make-500-week-freelancing-ai-beginners",
    title: "How to Make $500 a Week Freelancing with AI — Realistic Guide 2026",
    excerpt: "A realistic, step-by-step guide to making $500 per week freelancing with AI tools. Real numbers, no hype.",
    date: "June 2, 2026",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=600&q=80&auto=format&fit=crop",
  },
];

export default function Productivity() {
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
              color: item.label === "Productivity" ? "#5FC888" : "#7AB899",
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
            Productivity
          </div>
          <h1 style={{
            fontFamily: "'Syne', sans-serif", fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
            fontWeight: 800, color: "#E8F5EE", marginBottom: "0.5rem",
          }}>Productivity Hacks & Income Strategies</h1>
          <p style={{ color: "#7AB899", fontSize: "1rem" }}>
            Practical guides to earn more, work faster, and build a sustainable freelance business with AI.
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
                transition: `opacity 0.6s ease ${0.05 + (i % 6) * 0.08}s, transform 0.6s ease ${0.05 + (i % 6) * 0.08}s, border-color 0.08s, box-shadow 0.08s`,
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
                  }}>Productivity</div>
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