"use client";
import { useEffect, useState } from "react";

export default function About() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <main style={{ minHeight: "100vh", position: "relative", zIndex: 1 }}>

      {/* Navbar */}
      <nav style={{
        display: "flex", justifyContent: "space-between", alignItems: "center",
        padding: "1.2rem 3rem", borderBottom: "1px solid rgba(249,115,22,0.15)",
        backdropFilter: "blur(20px)", position: "sticky", top: 0, zIndex: 100,
        background: "rgba(8,0,16,0.85)",
      }}>
        <a href="/" style={{
          fontFamily: "'Syne', sans-serif", fontSize: "1.2rem",
          fontWeight: 800, color: "#f97316", textDecoration: "none",
          textShadow: "0 0 20px rgba(249,115,22,0.4)",
        }}>
          AI<span style={{ color: "#ffffff" }}>FREELANCE</span>
        </a>
        <a href="/" style={{
          color: "#8b7fa8", textDecoration: "none", fontSize: "0.85rem",
          fontFamily: "'Syne', sans-serif", letterSpacing: "1px",
          transition: "color 0.2s",
        }}
          onMouseEnter={e => (e.target as HTMLElement).style.color = "#f97316"}
          onMouseLeave={e => (e.target as HTMLElement).style.color = "#8b7fa8"}
        >← Back to Blog</a>
      </nav>

      {/* Hero */}
      <section style={{
        maxWidth: "780px", margin: "0 auto", padding: "5rem 2rem 3rem",
        opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: "all 0.8s ease",
      }}>
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          padding: "4px 16px", border: "1px solid rgba(249,115,22,0.3)",
          borderRadius: "20px", marginBottom: "1.5rem",
          fontSize: "0.75rem", letterSpacing: "2px",
          color: "#f97316", textTransform: "uppercase",
          fontFamily: "'Syne', sans-serif",
          background: "rgba(249,115,22,0.05)",
        }}>
          <span style={{
            width: 8, height: 8, borderRadius: "50%",
            background: "#f97316", display: "inline-block",
            boxShadow: "0 0 8px #f97316",
          }} />
          About This Blog
        </div>

        <h1 style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
          fontWeight: 800, lineHeight: 1.2,
          marginBottom: "1.5rem", color: "#f1f0f5",
          letterSpacing: "-0.5px",
        }}>
          Honest AI Reviews.<br />
          <span style={{ color: "#f97316" }}>Zero Sponsored Content.</span>
        </h1>

        <p style={{
          fontSize: "1.1rem", color: "#a89bc0", lineHeight: 1.9,
          marginBottom: "2rem",
        }}>
          AIFreelance is an independent blog built for freelancers who want to use AI tools to earn more — without wasting money on tools that don't work.
        </p>

        <p style={{
          fontSize: "1rem", color: "#8b7fa8", lineHeight: 1.9,
          marginBottom: "3rem",
        }}>
          Every tool reviewed on this blog has been personally tested on real client work. No affiliate bias. No sponsored reviews. Just honest data from real freelance projects.
        </p>

        {/* Values */}
        <div style={{
          display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "1rem", marginBottom: "3rem",
        }}>
          {[
            { icon: "🧪", title: "Personally Tested", desc: "Every tool is tested on real client work before being reviewed." },
            { icon: "🚫", title: "No Sponsored Posts", desc: "Zero paid promotions. What you read is what actually works." },
            { icon: "💸", title: "Budget Focused", desc: "We prioritize free and affordable tools — not enterprise solutions." },
            { icon: "🎯", title: "Beginner Friendly", desc: "Written for freelancers starting out — no technical jargon." },
          ].map((item, i) => (
            <div key={i} style={{
              background: "rgba(13,0,24,0.7)",
              border: "1px solid rgba(249,115,22,0.12)",
              borderRadius: "10px", padding: "1.25rem",
              transition: "border-color 0.08s, transform 0.08s",
            }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = "#f97316";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(249,115,22,0.12)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>{item.icon}</div>
              <h3 style={{
                fontFamily: "'Syne', sans-serif", fontSize: "0.9rem",
                fontWeight: 700, color: "#f1f0f5", marginBottom: "0.4rem",
              }}>{item.title}</h3>
              <p style={{ fontSize: "0.85rem", color: "#8b7fa8", lineHeight: 1.6 }}>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Mission */}
        <div style={{
          padding: "2rem",
          border: "1px solid rgba(249,115,22,0.2)",
          borderRadius: "10px",
          background: "rgba(249,115,22,0.04)",
          marginBottom: "3rem",
        }}>
          <h2 style={{
            fontFamily: "'Syne', sans-serif", fontSize: "1.1rem",
            fontWeight: 700, color: "#f97316", marginBottom: "1rem",
          }}>Our Mission</h2>
          <p style={{ color: "#a89bc0", lineHeight: 1.9, fontSize: "1rem" }}>
            To help every freelancer — regardless of budget or background — use AI tools effectively. The freelancers winning in 2026 are not the most talented. They are the ones who learned to work smarter with AI. This blog exists to close that knowledge gap.
          </p>
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center" }}>
          <a href="/" style={{
            display: "inline-block", padding: "12px 28px",
            border: "1px solid #f97316", color: "#f97316",
            textDecoration: "none", fontFamily: "'Syne', sans-serif",
            fontSize: "0.8rem", letterSpacing: "2px", borderRadius: "4px",
            transition: "background 0.2s",
          }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "rgba(249,115,22,0.1)"}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = "transparent"}
          >READ LATEST ARTICLES →</a>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        borderTop: "1px solid rgba(249,115,22,0.1)",
        padding: "2rem 3rem", textAlign: "center",
        color: "#5a4f6e", fontSize: "0.8rem",
        fontFamily: "'Syne', sans-serif", letterSpacing: "1px",
        marginTop: "3rem",
      }}>
        AI<span style={{ color: "#ffffff" }}>FREELANCE</span> © 2026 — Built for Freelancers
      </footer>

    </main>
  );
}