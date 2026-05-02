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
    color: "#f97316",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: 2,
    slug: "claude-vs-chatgpt-real-test-freelancers",
    title: "Claude vs ChatGPT — Honest 30-Day Test for Freelancers",
    excerpt: "I used both for 30 days on real client work. Here's the honest truth about which one is worth your money.",
    category: "Comparisons",
    date: "Apr 25, 2026",
    readTime: "12 min read",
    color: "#06b6d4",
    image: "https://images.unsplash.com/photo-1676299081847-824916de030a?w=600&q=80&auto=format&fit=crop",
  },
  {
    id: 3,
    slug: "free-ai-tools-that-actually-work-2026",
    title: "7 Free AI Tools That Actually Work for Freelancers in 2026",
    excerpt: "No budget? No problem. These free AI tools will 3x your freelance productivity without spending a rupee.",
    category: "Productivity",
    date: "Apr 20, 2026",
    readTime: "6 min read",
    color: "#f43f5e",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&q=80&auto=format&fit=crop",
  },
];

export default function Home() {
  const [typed, setTyped] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [visible, setVisible] = useState(false);
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
        padding: "1.2rem 3rem", borderBottom: "1px solid rgba(249,115,22,0.15)",
        backdropFilter: "blur(20px)", position: "sticky", top: 0, zIndex: 100,
        background: "rgba(8,0,16,0.85)",
        opacity: visible ? 1 : 0, transition: "opacity 0.8s ease",
      }}>
        <div style={{
          fontFamily: "'Syne', sans-serif", fontSize: "1.2rem",
          fontWeight: 800, color: "#f97316",
          textShadow: "0 0 20px rgba(249,115,22,0.6)",
        }}>
          AI<span style={{ color: "#ffffff" }}>FREELANCE</span>
        </div>
        <div style={{ display: "flex", gap: "2rem" }}>
          {["Home", "Reviews", "Comparisons", "Productivity", "About"].map((item) => (
            <a key={item} href={item === "About" ? "/about" : "/"} style={{
              color: "#8b7fa8", textDecoration: "none", fontSize: "0.85rem",
              fontFamily: "'Syne', sans-serif", fontWeight: 500,
              letterSpacing: "1px", textTransform: "uppercase",
              transition: "color 0.2s",
            }}
              onMouseEnter={e => (e.target as HTMLElement).style.color = "#f97316"}
              onMouseLeave={e => (e.target as HTMLElement).style.color = "#8b7fa8"}
            >{item}</a>
          ))}
        </div>
      </nav>

      {/* Hero */}
      <section style={{
        padding: "6rem 3rem 4rem", maxWidth: "1100px", margin: "0 auto",
        opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(30px)",
        transition: "all 1s ease 0.2s",
      }}>
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          padding: "4px 16px", border: "1px solid rgba(249,115,22,0.4)",
          borderRadius: "20px", marginBottom: "1.5rem",
          fontSize: "0.75rem", letterSpacing: "2px",
          color: "#f97316", textTransform: "uppercase",
          fontFamily: "'Syne', sans-serif",
          background: "rgba(249,115,22,0.05)",
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
  <span style={{ color: "#f1f0f5" }}>Master </span>
  <span style={{
    color: "#f97316",
    borderRight: showCursor ? "3px solid #f97316" : "3px solid transparent",
    paddingRight: "4px",
  }}>
    {typed}
  </span>
</h1>

        <p style={{
          fontSize: "1.1rem", color: "#a89bc0", maxWidth: "580px",
          marginBottom: "2.5rem", lineHeight: 1.8, fontWeight: 400,
        }}>
          Honest AI tool reviews, productivity hacks & income strategies —
          built for freelancers who want to earn more without wasting money.
        </p>

        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          {[
            { label: "EXPLORE BLOG", color: "#f97316", border: "#f97316", bg: "rgba(249,115,22,0.08)" },
            { label: "LATEST POSTS", color: "#8b7fa8", border: "rgba(255,255,255,0.1)", bg: "transparent" },
          ].map(btn => (
            <button key={btn.label} style={{
              padding: "12px 28px", background: "transparent",
              border: `1px solid ${btn.border}`, color: btn.color,
              fontFamily: "'Syne', sans-serif", fontSize: "0.8rem",
              letterSpacing: "2px", borderRadius: "4px",
              transition: "background 0.2s, box-shadow 0.2s",
            }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = btn.bg;
                (e.currentTarget as HTMLElement).style.boxShadow = `0 0 20px rgba(249,115,22,0.25)`;
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = "transparent";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >{btn.label}</button>
          ))}
        </div>

        {/* Stats */}
        <div style={{
          display: "flex", gap: "3rem", marginTop: "4rem",
          paddingTop: "2rem", borderTop: "1px solid rgba(249,115,22,0.15)",
        }}>
          {[["50+", "Tools Reviewed"], ["100%", "Honest Reviews"], ["10K+", "Monthly Readers"]].map(([num, label]) => (
            <div key={label}>
              <div style={{
                fontFamily: "'Syne', sans-serif", fontSize: "1.8rem",
                fontWeight: 700, color: "#f97316",
              }}>{num}</div>
              <div style={{ fontSize: "0.8rem", color: "#8b7fa8", letterSpacing: "1px" }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Blog Posts */}
      <section style={{ padding: "2rem 3rem 6rem", maxWidth: "1100px", margin: "0 auto" }}>
        <h2 style={{
          fontFamily: "'Syne', sans-serif", fontSize: "1rem",
          letterSpacing: "3px", color: "#8b7fa8", textTransform: "uppercase",
          marginBottom: "2rem",
        }}>Latest Posts</h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.5rem" }}>
          {posts.map((post, i) => (
            <a key={post.id} href={`/blog/${post.slug}`} style={{ textDecoration: "none" }}>
              <article style={{
                background: "rgba(13,0,24,0.7)",
                border: `1px solid rgba(249,115,22,0.12)`,
                borderRadius: "12px", overflow: "hidden",
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
                  el.style.borderColor = "rgba(249,115,22,0.12)";
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
                  <div style={{
                    position: "absolute", top: 12, left: 12,
                    padding: "3px 10px",
                    border: `1px solid ${post.color}66`,
                    borderRadius: "20px",
                    fontSize: "0.65rem", letterSpacing: "1px",
                    color: post.color, textTransform: "uppercase",
                    fontFamily: "'Syne', sans-serif",
                    background: "rgba(0,0,0,0.4)",
                    backdropFilter: "blur(8px)",
                  }}>{post.category}</div>
                </div>

                {/* Content */}
                <div style={{ padding: "1.25rem" }}>
                  <h3 style={{
                    fontFamily: "'Syne', sans-serif", fontSize: "0.95rem",
                    fontWeight: 700, marginBottom: "0.6rem", lineHeight: 1.4,
                    color: "#f1f0f5",
                  }}>{post.title}</h3>

                  <p style={{ color: "#8b7fa8", fontSize: "0.875rem", marginBottom: "1rem", lineHeight: 1.6 }}>
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
        borderTop: "1px solid rgba(249,115,22,0.1)",
        padding: "2rem 3rem", textAlign: "center",
        color: "#5a4f6e", fontSize: "0.8rem",
        fontFamily: "'Syne', sans-serif", letterSpacing: "1px",
      }}>
        AI<span style={{ color: "#ffffff" }}>FREELANCE</span> © 2026 — Built for Freelancers
      </footer>

    </main>
  );
}