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
    color: "#00d4ff",
  },
  {
    id: 2,
    slug: "claude-vs-chatgpt-real-test-freelancers",
    title: "Claude vs ChatGPT — Real Test for Freelancers",
    excerpt: "I used both for 30 days on real client work. Here's the honest truth about which one is worth your money.",
    category: "Comparisons",
    date: "Apr 25, 2026",
    readTime: "12 min read",
    color: "#00ff9f",
  },
  {
    id: 3,
    slug: "free-ai-tools-that-actually-work-2026",
    title: "Free AI Tools That Actually Work in 2026",
    excerpt: "No budget? No problem. These free AI tools will 3x your freelance productivity without spending a rupee.",
    category: "Productivity",
    date: "Apr 20, 2026",
    readTime: "6 min read",
    color: "#ff006e",
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
        padding: "1.2rem 3rem", borderBottom: "1px solid rgba(0,212,255,0.1)",
        backdropFilter: "blur(10px)", position: "sticky", top: 0, zIndex: 100,
        background: "rgba(2,4,8,0.8)",
        opacity: visible ? 1 : 0, transition: "opacity 0.8s ease",
      }}>
        <div style={{
          fontFamily: "'Syne', sans-serif", fontSize: "1.2rem",
          fontWeight: 800, color: "#00d4ff",
          textShadow: "0 0 20px rgba(0,212,255,0.5)",
        }}>
          AI<span style={{ color: "#00ff9f" }}>FREELANCE</span>
        </div>
        <div style={{ display: "flex", gap: "2rem" }}>
          {["Home", "Reviews", "Comparisons", "Productivity", "About"].map((item) => (
            <a key={item} href="#" style={{
              color: "#4a7fa5", textDecoration: "none", fontSize: "0.85rem",
              fontFamily: "'Syne', sans-serif", fontWeight: 500,
              letterSpacing: "1px", textTransform: "uppercase",
              transition: "color 0.2s",
            }}
              onMouseEnter={e => (e.target as HTMLElement).style.color = "#00d4ff"}
              onMouseLeave={e => (e.target as HTMLElement).style.color = "#4a7fa5"}
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
          padding: "4px 16px", border: "1px solid rgba(0,212,255,0.3)",
          borderRadius: "20px", marginBottom: "1.5rem",
          fontSize: "0.75rem", letterSpacing: "2px",
          color: "#00d4ff", textTransform: "uppercase",
          fontFamily: "'Syne', sans-serif",
        }}>
          <span style={{
            display: "inline-block", width: 8, height: 8,
            borderRadius: "50%", background: "#00ff9f",
            boxShadow: "0 0 8px #00ff9f",
            animation: "pulse-glow 1.5s infinite",
          }} />
          Honest Reviews — Real Results
        </div>

        <h1 style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: "clamp(1.6rem, 3.5vw, 2.5rem)",
          fontWeight: 500, lineHeight: 1.2, marginBottom: "1.5rem",
        }}>
          Master{" "}
          <span style={{
            color: "#00d4ff",
            textShadow: "0 0 30px rgba(0,212,255,0.6)",
            borderRight: showCursor ? "3px solid #00d4ff" : "3px solid transparent",
            paddingRight: "4px",
          }}>
            {typed}
          </span>
        </h1>

        <p style={{
          fontSize: "1.1rem", color: "#4a7fa5", maxWidth: "580px",
          marginBottom: "2.5rem", lineHeight: 1.8, fontWeight: 400,
        }}>
          Honest AI tool reviews, productivity hacks & income strategies —
          built for freelancers who want to earn more without wasting money.
        </p>

        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          {[
            { label: "EXPLORE BLOG", color: "#00d4ff", border: "#00d4ff" },
            { label: "LATEST POSTS", color: "#4a7fa5", border: "rgba(255,255,255,0.1)" },
          ].map(btn => (
            <button key={btn.label} style={{
              padding: "12px 28px", background: "transparent",
              border: `1px solid ${btn.border}`, color: btn.color,
              fontFamily: "'Syne', sans-serif", fontSize: "0.8rem",
              letterSpacing: "2px", borderRadius: "2px",
              transition: "background 0.2s, box-shadow 0.2s",
            }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = "rgba(0,212,255,0.08)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 0 16px rgba(0,212,255,0.2)";
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
          paddingTop: "2rem", borderTop: "1px solid rgba(0,212,255,0.1)",
        }}>
          {[["50+", "Tools Reviewed"], ["100%", "Honest Reviews"], ["10K+", "Monthly Readers"]].map(([num, label]) => (
            <div key={label}>
              <div style={{
                fontFamily: "'Syne', sans-serif", fontSize: "1.8rem",
                fontWeight: 700, color: "#00d4ff",
              }}>{num}</div>
              <div style={{ fontSize: "0.8rem", color: "#4a7fa5", letterSpacing: "1px" }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Blog Posts */}
      <section style={{ padding: "2rem 3rem 6rem", maxWidth: "1100px", margin: "0 auto" }}>
        <h2 style={{
          fontFamily: "'Syne', sans-serif", fontSize: "1rem",
          letterSpacing: "3px", color: "#4a7fa5", textTransform: "uppercase",
          marginBottom: "2rem",
        }}>Latest Posts</h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
          {posts.map((post, i) => (
            <a key={post.id} href={`/blog/${post.slug}`} style={{ textDecoration: "none" }}>
              <article style={{
                background: "rgba(6,13,20,0.8)",
                border: "1px solid rgba(0,212,255,0.1)",
                borderRadius: "4px", padding: "1.5rem", height: "100%",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.6s ease ${0.4 + i * 0.15}s, transform 0.6s ease ${0.4 + i * 0.15}s, border-color 0.08s, box-shadow 0.08s`,
                position: "relative", overflow: "hidden",
              }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = post.color;
                  el.style.boxShadow = `0 0 25px ${post.color}33`;
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "rgba(0,212,255,0.1)";
                  el.style.boxShadow = "none";
                }}
              >
                <div style={{
                  display: "inline-block", padding: "3px 10px",
                  border: `1px solid ${post.color}44`, borderRadius: "2px",
                  marginBottom: "1rem", fontSize: "0.7rem", letterSpacing: "1px",
                  color: post.color, textTransform: "uppercase",
                  fontFamily: "'Syne', sans-serif",
                }}>{post.category}</div>

                <h3 style={{
                  fontFamily: "'Syne', sans-serif", fontSize: "0.95rem",
                  fontWeight: 700, marginBottom: "0.75rem", lineHeight: 1.4,
                  color: "#e0f0ff",
                }}>{post.title}</h3>

                <p style={{ color: "#4a7fa5", fontSize: "0.9rem", marginBottom: "1.25rem", lineHeight: 1.6 }}>
                  {post.excerpt}
                </p>

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: "0.75rem", color: "#2a5f7a" }}>{post.date}</span>
                  <span style={{ fontSize: "0.75rem", color: post.color }}>{post.readTime}</span>
                </div>
              </article>
            </a>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        borderTop: "1px solid rgba(0,212,255,0.1)",
        padding: "2rem 3rem", textAlign: "center",
        color: "#2a5f7a", fontSize: "0.8rem",
        fontFamily: "'Syne', sans-serif", letterSpacing: "1px",
      }}>
        AI<span style={{ color: "#00ff9f" }}>FREELANCE</span> © 2026 — Built for Freelancers
      </footer>

    </main>
  );
}