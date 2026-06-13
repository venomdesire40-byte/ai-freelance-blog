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
        padding: "1.2rem 3rem", borderBottom: "1px solid rgba(95,200,136,0.15)",
        backdropFilter: "blur(20px)", position: "sticky", top: 0, zIndex: 100,
        background: "rgba(11,30,20,0.9)",
      }}>
        <a href="/" style={{
          fontFamily: "'Syne', sans-serif", fontSize: "1.2rem",
          fontWeight: 800, color: "#5FC888", textDecoration: "none",
          textShadow: "0 0 20px rgba(95,200,136,0.4)",
        }}>
          AI<span style={{ color: "#ffffff" }}>FREELANCE</span>
        </a>
        <a href="/" style={{
          color: "#7AB899", textDecoration: "none", fontSize: "0.85rem",
          fontFamily: "'Syne', sans-serif", letterSpacing: "1px",
          transition: "color 0.2s",
        }}
          onMouseEnter={e => (e.target as HTMLElement).style.color = "#5FC888"}
          onMouseLeave={e => (e.target as HTMLElement).style.color = "#7AB899"}
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
          padding: "4px 16px", border: "1px solid rgba(95,200,136,0.3)",
          borderRadius: "20px", marginBottom: "1.5rem",
          fontSize: "0.75rem", letterSpacing: "2px",
          color: "#5FC888", textTransform: "uppercase",
          fontFamily: "'Syne', sans-serif",
          background: "rgba(95,200,136,0.05)",
        }}>
          <span style={{
            width: 8, height: 8, borderRadius: "50%",
            background: "#5FC888", display: "inline-block",
            boxShadow: "0 0 8px #5FC888",
          }} />
          About This Blog
        </div>

        <h1 style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
          fontWeight: 800, lineHeight: 1.2,
          marginBottom: "1.5rem", color: "#E8F5EE",
          letterSpacing: "-0.5px",
        }}>
          Honest AI Reviews.<br />
          <span style={{ color: "#5FC888" }}>Zero Sponsored Content.</span>
        </h1>

        <p style={{
          fontSize: "1.1rem", color: "#A8D8BC", lineHeight: 1.9,
          marginBottom: "2rem",
        }}>
          AIFreelance is an independent blog built for freelancers who want to use AI tools to earn more — without wasting money on tools that don't work.
        </p>

        <p style={{
          fontSize: "1rem", color: "#7AB899", lineHeight: 1.9,
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
              background: "rgba(14,32,24,0.85)",
              border: "1px solid rgba(95,200,136,0.12)",
              borderRadius: "10px", padding: "1.25rem",
              transition: "border-color 0.08s, transform 0.08s",
            }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = "#5FC888";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(95,200,136,0.12)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>{item.icon}</div>
              <h3 style={{
                fontFamily: "'Syne', sans-serif", fontSize: "0.9rem",
                fontWeight: 700, color: "#E8F5EE", marginBottom: "0.4rem",
              }}>{item.title}</h3>
              <p style={{ fontSize: "0.85rem", color: "#7AB899", lineHeight: 1.6 }}>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Mission */}
        <div style={{
          padding: "2rem",
          border: "1px solid rgba(95,200,136,0.2)",
          borderRadius: "10px",
          background: "rgba(95,200,136,0.04)",
          marginBottom: "3rem",
        }}>
          <h2 style={{
            fontFamily: "'Syne', sans-serif", fontSize: "1.1rem",
            fontWeight: 700, color: "#5FC888", marginBottom: "1rem",
          }}>Our Mission</h2>
          <p style={{ color: "#A8D8BC", lineHeight: 1.9, fontSize: "1rem" }}>
            To help every freelancer — regardless of budget or background — use AI tools effectively. The freelancers winning in 2026 are not the most talented. They are the ones who learned to work smarter with AI. This blog exists to close that knowledge gap.
          </p>
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center" }}>
          <a href="/" style={{
            display: "inline-block", padding: "12px 28px",
            border: "1px solid #5FC888", color: "#5FC888",
            textDecoration: "none", fontFamily: "'Syne', sans-serif",
            fontSize: "0.8rem", letterSpacing: "2px", borderRadius: "4px",
            transition: "background 0.2s",
          }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "rgba(95,200,136,0.1)"}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = "transparent"}
          >READ LATEST ARTICLES →</a>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        borderTop: "1px solid rgba(95,200,136,0.1)",
        padding: "2rem 3rem", textAlign: "center",
        color: "#4A7B60", fontSize: "0.8rem",
        fontFamily: "'Syne', sans-serif", letterSpacing: "1px",
        marginTop: "3rem",
      }}>
        AI<span style={{ color: "#ffffff" }}>FREELANCE</span> © 2026 — Built for Freelancers
      </footer>

    </main>
  );
}