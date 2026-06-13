"use client";
import { useEffect, useState } from "react";

const posts = [
  {
    id: 1,
    slug: "5-best-ai-tools-for-freelance-writers-2026",
    title: "5 Best AI Tools for Freelance Writers in 2026",
    excerpt: "Honest reviews of the top AI writing tools that actually save time and make money for beginner freelancers.",
    category: "AI Reviews",
    date: "Apr 28, 2026",
    readTime: "8 min read",
    color: "#5F8B6E",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: 2,
    slug: "claude-vs-chatgpt-real-test-freelancers",
    title: "Claude vs ChatGPT — Honest 30-Day Test for Freelancers",
    excerpt: "I used both for 30 days on real client work. Here's the honest truth about which one is worth your money.",
    category: "Comparisons",
    date: "Apr 25, 2026",
    readTime: "12 min read",
    color: "#5F8B6E",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: 3,
    slug: "free-ai-tools-that-actually-work-2026",
    title: "7 Free AI Tools That Actually Work for Freelancers in 2026",
    excerpt: "No budget? No problem. These free AI tools will 3x your freelance productivity without spending a rupee.",
    category: "Productivity",
    date: "Apr 20, 2026",
    readTime: "6 min read",
    color: "#5F8B6E",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: 4,
    slug: "best-ai-tools-upwork-freelancers-2026",
    title: "Best AI Tools for Upwork Freelancers in 2026 — Win More Proposals",
    excerpt: "The exact AI tools top Upwork freelancers use to write better proposals, deliver faster, and earn more per hour.",
    category: "AI Reviews",
    date: "Apr 30, 2026",
    readTime: "10 min read",
    color: "#5F8B6E",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: 5,
    slug: "how-to-use-chatgpt-write-winning-proposals",
    title: "How to Use ChatGPT to Write Winning Freelance Proposals in 2026",
    excerpt: "Step-by-step guide with exact prompts that get 25-35% response rates on Upwork and direct client outreach.",
    category: "Productivity",
    date: "Apr 29, 2026",
    readTime: "8 min read",
    color: "#5F8B6E",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: 6,
    slug: "how-to-get-first-upwork-client-using-ai-tools-2026",
    title: "How to Get Your First Upwork Client Using AI Tools in 2026",
    excerpt: "Step-by-step guide to landing your first Upwork client using AI tools. Real strategies, exact prompts, and proven methods for complete beginners.",
    category: "Productivity",
    date: "May 3, 2026",
    readTime: "11 min read",
    color: "#5F8B6E",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: 7,
    slug: "best-freelance-platforms-besides-upwork-fiverr-2026",
    title: "Best Freelance Platforms Besides Upwork and Fiverr in 2026",
    excerpt: "Tired of 20% fees? These 8 platforms offer higher pay, lower fees, and better clients. The platforms experienced freelancers actually use.",
    category: "Productivity",
    date: "May 12, 2026",
    readTime: "11 min read",
    color: "#5F8B6E",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: 8,
    slug: "google-gemini-2026-update-freelancers-complete-guide",
    title: "Google Gemini 2026 Update — What Freelancers Need to Know Right Now",
    excerpt: "Google's biggest AI update just dropped. Gemini 3 Flash, Gemini Spark, Deep Think mode — here's exactly what changed and how freelancers can use it.",
    category: "AI Reviews",
    date: "May 13, 2026",
    readTime: "10 min read",
    color: "#5F8B6E",
    image: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: 9,
    slug: "how-to-earn-1000-per-month-freelancing-with-ai-tools",
    title: "How to Earn $1000 Per Month Freelancing with AI Tools — Step by Step 2026",
    excerpt: "Exact step-by-step plan to earn your first $1000 per month freelancing using AI tools. Real strategies, real numbers, no fluff.",
    category: "Productivity",
    date: "May 14, 2026",
    readTime: "12 min read",
    color: "#5F8B6E",
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: 10,
    slug: "how-to-make-money-fiverr-ai-tools-2026",
    title: "How to Make Money on Fiverr with AI Tools in 2026 — Complete Beginner Guide",
    excerpt: "Complete guide to making money on Fiverr using AI tools. Best gig ideas, pricing strategies, and AI workflows that top sellers actually use.",
    category: "AI Reviews",
    date: "May 14, 2026",
    readTime: "11 min read",
    color: "#5F8B6E",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: 11,
    slug: "best-ai-writing-tools-seo-content-2026",
    title: "Best AI Writing Tools for SEO Content in 2026 — Ranked by Real Results",
    excerpt: "The best AI writing tools for SEO content ranked by actual ranking results. Which tools produce content Google actually ranks — tested over 6 months.",
    category: "AI Reviews",
    date: "May 14, 2026",
    readTime: "10 min read",
    color: "#5F8B6E",
    image: "https://images.unsplash.com/photo-1542435503-956c469947f6?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: 12,
    slug: "how-to-use-perplexity-ai-freelance-research-2026",
    title: "How to Use Perplexity AI for Freelance Research in 2026 — Complete Guide",
    excerpt: "Complete guide to using Perplexity AI for freelance research. Exact prompts, workflows, and use cases that save 2-3 hours per project.",
    category: "Productivity",
    date: "May 14, 2026",
    readTime: "9 min read",
    color: "#5F8B6E",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: 13,
    slug: "claude-vs-gemini-vs-chatgpt-freelancers-2026",
    title: "Claude vs Gemini vs ChatGPT — Ultimate Comparison for Freelancers 2026",
    excerpt: "Tested all three on real projects for 60 days. Which AI tool wins for writing, proposals, research, and daily workflow? Full honest results.",
    category: "Comparisons",
    date: "May 14, 2026",
    readTime: "13 min read",
    color: "#5F8B6E",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: 14,
    slug: "how-to-stay-competitive-freelancer-ai-2026",
    title: "How to Stay Competitive as a Freelancer When AI is Taking Over in 2026",
    excerpt: "AI has already disrupted freelancing. Here are the exact strategies that are working for freelancers who are thriving — not just surviving — in 2026.",
    category: "Productivity",
    date: "May 15, 2026",
    readTime: "13 min read",
    color: "#5F8B6E",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: 15,
    slug: "best-ai-freelance-niches-2026-high-demand",
    title: "Best AI Freelance Niches Exploding in 2026 — High Demand, Low Competition",
    excerpt: "8 freelance niches with high demand and low competition in 2026 — all created by AI. Real entry strategies and earning potential for each.",
    category: "AI Reviews",
    date: "May 15, 2026",
    readTime: "11 min read",
    color: "#5F8B6E",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: 16,
    slug: "ai-prompt-engineering-freelance-service-2026",
    title: "AI Prompt Engineering as a Freelance Service — How to Get Paid in 2026",
    excerpt: "How to turn prompt engineering into a paid freelance service. Real clients, real rates, and the exact skills you need to start today.",
    category: "Productivity",
    date: "May 15, 2026",
    readTime: "10 min read",
    color: "#5F8B6E",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: 17,
    slug: "how-to-use-notion-ai-freelancers-2026",
    title: "How to Use Notion AI for Freelancers in 2026 — Complete Workflow Guide",
    excerpt: "Set up your entire freelance business in Notion. Client management, project tracking, invoicing, and AI workflows that save hours every week.",
    category: "Productivity",
    date: "May 15, 2026",
    readTime: "10 min read",
    color: "#5F8B6E",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: 18,
    slug: "best-ai-tools-social-media-content-2026",
    title: "Best AI Tools for Social Media Content Creation in 2026 — Complete Guide",
    excerpt: "The best AI tools for social media content creation tested on real accounts. Save hours every week while maintaining quality and brand consistency.",
    category: "AI Reviews",
    date: "May 15, 2026",
    readTime: "11 min read",
    color: "#5F8B6E",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: 19,
    slug: "how-to-make-500-week-freelancing-ai-beginners",
    title: "How to Make $500 a Week Freelancing with AI — Realistic Guide for Beginners 2026",
    excerpt: "A realistic, step-by-step guide to making $500 per week freelancing with AI tools. Real numbers, real timelines, no hype.",
    category: "Productivity",
    date: "June 2, 2026",
    readTime: "12 min read",
    color: "#5F8B6E",
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: 20,
    slug: "best-ai-tools-content-writers-2026",
    title: "Best AI Tools for Content Writers Who Hate Wasting Time in 2026",
    excerpt: "The AI tools content writers actually use to save hours every week. Honest reviews from a working writer — no sponsored content.",
    category: "AI Reviews",
    date: "June 2, 2026",
    readTime: "11 min read",
    color: "#5F8B6E",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: 21,
    slug: "how-to-use-claude-ai-write-blog-posts-rank-google",
    title: "How to Use Claude AI to Write Blog Posts That Actually Rank on Google in 2026",
    excerpt: "Step-by-step guide to using Claude AI for blog posts that rank on Google. Exact prompts, workflow, and SEO strategy.",
    category: "Productivity",
    date: "June 2, 2026",
    readTime: "12 min read",
    color: "#5F8B6E",
    image: "https://images.unsplash.com/photo-1542435503-956c469947f6?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: 22,
    slug: "upwork-vs-fiverr-vs-contra-2026-which-pays-more",
    title: "Upwork vs Fiverr vs Contra in 2026 — Which Platform Pays Freelancers More?",
    excerpt: "Upwork vs Fiverr vs Contra compared on fees, client quality, and earning potential. Which platform actually pays more?",
    category: "Comparisons",
    date: "June 2, 2026",
    readTime: "11 min read",
    color: "#5F8B6E",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: 23,
    slug: "ai-tools-replaced-my-paid-freelance-tools-honest-review",
    title: "AI Tools That Replaced My $500/Month Freelance Tools — Honest Review 2026",
    excerpt: "I replaced $500 per month in freelance tool subscriptions with AI tools. Here is exactly what I switched and what actually works better.",
    category: "AI Reviews",
    date: "June 2, 2026",
    readTime: "10 min read",
    color: "#5F8B6E",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80&auto=format&fit=crop",
  },
];

export default function Home() {
  const [typed, setTyped] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [visible, setVisible] = useState(false);
const [menuOpen, setMenuOpen] = useState(false);
  const fullText = "AI Tools for Freelancers";

  useEffect(() => {
    setVisible(true);
    let i = 0;
    const timer = setInterval(() => {
      setTyped(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) clearInterval(timer);
    }, 80);
    const blink = setInterval(() => setShowCursor(p => !p), 500);
    return () => { clearInterval(timer); clearInterval(blink); };
  }, []);

  return (
    <main style={{ minHeight: "100vh", position: "relative", zIndex: 1 }}>

      {/* Navbar */}
      <nav style={{
  display: "flex", justifyContent: "space-between", alignItems: "center",
  padding: "1.2rem 1rem", borderBottom: "1px solid rgba(95,139,110,0.15)",
  backdropFilter: "blur(20px)", position: "sticky", top: 0, zIndex: 100,
  background: "rgba(8,0,16,0.95)",
  opacity: visible ? 1 : 0, transition: "opacity 0.8s ease",
}}>
  <a href="/" style={{
    fontFamily: "'Syne', sans-serif", fontSize: "1.2rem",
    fontWeight: 800, color: "#5F8B6E", textDecoration: "none",
  }}>
    AI<span style={{ color: "#ffffff" }}>FREELANCE</span>
  </a>

  {/* Desktop Nav */}
  <div style={{ display: "flex", gap: "2rem" }} className="nav-links">
    {[
      { label: "Home", href: "/" },
      { label: "Reviews", href: "/#latest" },
      { label: "Comparisons", href: "/#latest" },
      { label: "Productivity", href: "/#latest" },
      { label: "About", href: "/about" },
    ].map((item) => (
      <a key={item.label} href={item.href} style={{
        color: "#8b7fa8", textDecoration: "none", fontSize: "0.85rem",
        fontFamily: "'Syne', sans-serif", fontWeight: 500,
        letterSpacing: "1px", textTransform: "uppercase",
        transition: "color 0.2s",
      }}
        onMouseEnter={e => (e.target as HTMLElement).style.color = "#5F8B6E"}
        onMouseLeave={e => (e.target as HTMLElement).style.color = "#8b7fa8"}
      >{item.label}</a>
    ))}
  </div>

  {/* Hamburger Button */}
  <button
    onClick={() => setMenuOpen(!menuOpen)}
    style={{
      background: "transparent",
      border: "1px solid #5F8B6E",
      color: "#5F8B6E",
      padding: "6px 12px",
      borderRadius: "4px",
      fontSize: "1.2rem",
      cursor: "pointer",
    }}
    className="hamburger-btn"
  >☰</button>

  {/* Mobile Menu */}
  {menuOpen && (
    <div style={{
      position: "absolute", top: "100%", left: 0, right: 0,
      background: "rgba(245,240,232,0.98)",
      padding: "1rem 1.5rem",
      display: "flex", flexDirection: "column", gap: "1rem",
      borderBottom: "1px solid rgba(95,139,110,0.2)",
      zIndex: 200,
    }}>
      {[
        { label: "Home", href: "/" },
        { label: "Reviews", href: "/#latest" },
        { label: "Comparisons", href: "/#latest" },
        { label: "Productivity", href: "/#latest" },
        { label: "About", href: "/about" },
      ].map(item => (
        <a key={item.label} href={item.href} style={{
          color: "#5F8B6E", textDecoration: "none",
          fontSize: "1rem", fontFamily: "'Syne', sans-serif",
          letterSpacing: "1px", textTransform: "uppercase",
        }}>{item.label}</a>
      ))}
    </div>
  )}
</nav>

      {/* Hero */}
      <section style={{
        padding: "4rem 1.5rem 3rem", maxWidth: "1100px", margin: "0 auto",
        opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(30px)",
        transition: "all 1s ease 0.2s",
      }}>
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          padding: "4px 16px", border: "1px solid rgba(95,139,110,0.4)",
          borderRadius: "20px", marginBottom: "1.5rem",
          fontSize: "0.75rem", letterSpacing: "2px",
          color: "#5F8B6E", textTransform: "uppercase",
          fontFamily: "'Syne', sans-serif",
          background: "rgba(95,139,110,0.05)",
        }}>
          <span style={{
            display: "inline-block", width: 8, height: 8,
            borderRadius: "50%", background: "#06b6d4",
            boxShadow: "0 0 8px #06b6d4",
            animation: "pulse-glow 1.5s infinite",
          }} />
          Honest Reviews — Real Results
        </div>

        <h1 style={{
  fontFamily: "'Syne', sans-serif",
  fontSize: "clamp(2rem, 4.5vw, 3.2rem)",
  fontWeight: 800, lineHeight: 1.15, marginBottom: "1.5rem",
  letterSpacing: "-0.5px",
}}>
  <span style={{ color: "#2C4A35" }}>Master </span>
  <span style={{
    color: "#5F8B6E",
    borderRight: showCursor ? "3px solid #5F8B6E" : "3px solid transparent",
    paddingRight: "4px",
  }}>
    {typed}
  </span>
</h1>

        <p style={{
          fontSize: "1.1rem", color: "#3D4A3E", maxWidth: "580px",
          marginBottom: "2.5rem", lineHeight: 1.8, fontWeight: 400,
        }}>
          Honest AI tool reviews, productivity hacks & income strategies —
          built for freelancers who want to earn more without wasting money.
        </p>

        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          {[
            { label: "EXPLORE BLOG", color: "#FFFFFF", border: "#5F8B6E", bg: "#5F8B6E" },
{ label: "LATEST POSTS", color: "#FFFFFF", border: "#5F8B6E", bg: "#5F8B6E" },
          ].map(btn => (
            <button key={btn.label} style={{
              padding: "12px 28px", background: "#5F8B6E",
              border: `1px solid #5F8B6E`, color: "#FFFFFF",
              fontFamily: "'Syne', sans-serif", fontSize: "0.8rem",
              letterSpacing: "2px", borderRadius: "4px",
              transition: "background 0.2s, box-shadow 0.2s",
            }}
              onMouseEnter={e => {
  (e.currentTarget as HTMLElement).style.background = "#4A7A5A";
  (e.currentTarget as HTMLElement).style.boxShadow = `0 4px 15px rgba(95,139,110,0.4)`;
}}
onMouseLeave={e => {
  (e.currentTarget as HTMLElement).style.background = "#5F8B6E";
  (e.currentTarget as HTMLElement).style.boxShadow = "none";
}}
            >{btn.label}</button>
          ))}
        </div>

        {/* Stats */}
        <div style={{
          display: "flex", gap: "3rem", marginTop: "4rem",
          paddingTop: "2rem", borderTop: "1px solid rgba(95,139,110,0.15)",
        }}>
          {[["50+", "Tools Reviewed"], ["100%", "Honest Reviews"], ["10K+", "Monthly Readers"]].map(([num, label]) => (
            <div key={label}>
              <div style={{
                fontFamily: "'Syne', sans-serif", fontSize: "1.8rem",
                fontWeight: 700, color: "#5F8B6E",
              }}>{num}</div>
              <div style={{ fontSize: "0.8rem", color: "#8b7fa8", letterSpacing: "1px" }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Blog Posts */}
      <section style={{ padding: "2rem 1.5rem 4rem", maxWidth: "1100px", margin: "0 auto" }}>
        <h2 style={{
          fontFamily: "'Syne', sans-serif", fontSize: "1rem",
          letterSpacing: "3px", color: "#8b7fa8", textTransform: "uppercase",
          marginBottom: "2rem",
        }}>Latest Posts</h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem", alignItems: "stretch" }}>
          {posts.map((post, i) => (
            <a key={post.id} href={`/blog/${post.slug}`} style={{ textDecoration: "none" }}>
              <article style={{
  background: "rgba(255,255,255,0.6)",
  border: `1px solid rgba(95,139,110,0.15)`,
  borderRadius: "12px", overflow: "hidden",
  backdropFilter: "blur(10px)",
  display: "flex", flexDirection: "column",
  height: "100%",
boxShadow: "inset 0 0 30px rgba(95,139,110,0.06)",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.6s ease ${0.4 + i * 0.15}s, transform 0.6s ease ${0.4 + i * 0.15}s, border-color 0.08s, box-shadow 0.08s`,
              }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = post.color;
                  el.style.boxShadow = `0 8px 40px ${post.color}25`;
                  el.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "rgba(95,139,110,0.12)";
                  el.style.boxShadow = "none";
                  el.style.transform = "translateY(0)";
                }}
              >
                {/* Image */}
                <div style={{
                  width: "100%", height: "180px", overflow: "hidden",
                  position: "relative",
                }}>
                  <img
                    src={post.image}
                    alt={post.title}
                    style={{
                      width: "100%", height: "100%", objectFit: "cover",
                      transition: "transform 0.4s ease",
                    }}
                    onMouseEnter={e => (e.target as HTMLElement).style.transform = "scale(1.05)"}
                    onMouseLeave={e => (e.target as HTMLElement).style.transform = "scale(1)"}
                  />
                  <div style={{
                    position: "absolute", inset: 0,
                    background: `linear-gradient(to bottom, transparent 40%, rgba(13,0,24,0.95) 100%)`,
                  }} />
                  <div style={{ display: "none" }}>{post.category}</div>
                </div>

                {/* Content */}
                <div style={{ padding: "1.25rem", display: "flex", flexDirection: "column", flex: 1 }}>
                  <div style={{
  display: "inline-flex", padding: "3px 10px",
  borderRadius: "20px", marginBottom: "0.75rem",
  width: "fit-content",
  fontSize: "0.65rem", letterSpacing: "1px",
  color: "#ffffff", textTransform: "uppercase",
  fontFamily: "'Syne', sans-serif", fontWeight: 600,
  background: "rgba(95,139,110,0.85)",
}}>{post.category}</div>

<h3 style={{
  fontFamily: "'Syne', sans-serif", fontSize: "0.95rem",
  fontWeight: 700, marginBottom: "0.75rem", lineHeight: 1.4,
  color: "#2C4A35",
                    textShadow: "0 0 12px rgba(95,139,110,0.25), 0 0 25px rgba(95,139,110,0.12)",
                  }}>{post.title}</h3>

                  <p style={{ color: "#3D4A3E", fontSize: "0.875rem", marginBottom: "1rem", lineHeight: 1.6 }}>
                    {post.excerpt}
                  </p>

                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontSize: "0.75rem", color: "#5a4f6e" }}>{post.date}</span>
                    <span style={{ fontSize: "0.75rem", color: post.color, fontFamily: "'Syne', sans-serif" }}>{post.readTime} →</span>
                  </div>
                </div>
              </article>
            </a>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        borderTop: "1px solid rgba(95,139,110,0.1)",
        padding: "2rem 3rem", textAlign: "center",
        color: "#5a4f6e", fontSize: "0.8rem",
        fontFamily: "'Syne', sans-serif", letterSpacing: "1px",
      }}>
        AI<span style={{ color: "#2C4A35" }}>FREELANCE</span> © 2026 — Built for Freelancers
      </footer>

    </main>
  );
}