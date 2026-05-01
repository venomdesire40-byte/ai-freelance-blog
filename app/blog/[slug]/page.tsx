"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

const posts: Record<string, {
  title: string;
  category: string;
  date: string;
  readTime: string;
  color: string;
  content: string;
}> = {
  "5-best-ai-tools-for-freelance-writers-2026": {
    title: "5 Best AI Tools for Freelance Writers in 2026",
    category: "AI Reviews",
    date: "Apr 28, 2026",
    readTime: "8 min read",
    color: "#00d4ff",
    content: `
      If you're a freelance writer in 2026, AI tools are no longer optional — they're your competitive edge.
      I tested 20+ tools over 3 months. Here are the 5 that actually saved me time and made me money.

      ## 1. Claude by Anthropic
      The best AI for long-form writing. It understands context better than any other tool.
      Perfect for blog posts, articles, and client work.

      ## 2. ChatGPT-4o
      Great for quick drafts and brainstorming. Not as deep as Claude but faster for short tasks.

      ## 3. Jasper AI
      Built specifically for marketers. Templates save a lot of time for repetitive content.

      ## 4. Copy.ai
      Best free option for beginners. Limited but surprisingly good for short copy.

      ## 5. Grammarly AI
      Not just grammar anymore — it now rewrites and improves your tone. Essential for client work.
    `,
  },
  "claude-vs-chatgpt-real-test-freelancers": {
    title: "Claude vs ChatGPT — Real Test for Freelancers",
    category: "Comparisons",
    date: "Apr 25, 2026",
    readTime: "12 min read",
    color: "#00ff9f",
    content: `
      I used both Claude and ChatGPT for 30 days on real client projects.
      Here's my honest comparison — no sponsored content, just real results.

      ## Writing Quality
      Claude wins for long-form content. ChatGPT is better for short, punchy copy.

      ## Speed
      Both are fast. ChatGPT slightly faster for short tasks.

      ## Price
      Claude Pro: $20/month. ChatGPT Plus: $20/month. Same price — different strengths.

      ## Verdict
      Use Claude for articles and research. Use ChatGPT for quick tasks and code.
      If budget allows — get both.
    `,
  },
  "free-ai-tools-that-actually-work-2026": {
    title: "Free AI Tools That Actually Work in 2026",
    category: "Productivity",
    date: "Apr 20, 2026",
    readTime: "6 min read",
    color: "#ff006e",
    content: `
      No budget? No problem. These free AI tools will transform your freelance workflow
      without costing a single rupee.

      ## 1. Claude.ai (Free Tier)
      Generous free tier. Perfect for writers and researchers.

      ## 2. ChatGPT Free
      Still powerful on the free plan. Great for daily tasks.

      ## 3. Canva AI
      Free AI image generation and design tools. Essential for content creators.

      ## 4. Notion AI (Free Trial)
      Best free tool for organizing your freelance business.

      ## 5. Google Gemini
      Free and integrated with Google Docs. Underrated tool.
    `,
  },
};

export default function BlogPost() {
  const params = useParams();
  const slug = params.slug as string;
  const post = posts[slug];
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  if (!post) return (
    <main style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ textAlign: "center", fontFamily: "'Syne', sans-serif", color: "#4a7fa5" }}>
        <h1 style={{ fontSize: "2rem", color: "#00d4ff", marginBottom: "1rem" }}>404</h1>
        <p>Post not found.</p>
        <a href="/" style={{ color: "#00d4ff", marginTop: "1rem", display: "inline-block" }}>← Back Home</a>
      </div>
    </main>
  );

  return (
    <main style={{ minHeight: "100vh", position: "relative", zIndex: 1 }}>

      {/* Navbar */}
      <nav style={{
        display: "flex", justifyContent: "space-between", alignItems: "center",
        padding: "1.2rem 3rem", borderBottom: "1px solid rgba(0,212,255,0.1)",
        backdropFilter: "blur(10px)", position: "sticky", top: 0, zIndex: 100,
        background: "rgba(2,4,8,0.8)",
      }}>
        <a href="/" style={{
          fontFamily: "'Syne', sans-serif", fontSize: "1.2rem",
          fontWeight: 800, color: "#00d4ff",
          textShadow: "0 0 20px rgba(0,212,255,0.5)",
          textDecoration: "none",
        }}>
          AI<span style={{ color: "#00ff9f" }}>FREELANCE</span>
        </a>
        <a href="/" style={{
          color: "#4a7fa5", textDecoration: "none", fontSize: "0.85rem",
          fontFamily: "'Syne', sans-serif", letterSpacing: "1px",
        }}>← Back to Blog</a>
      </nav>

      {/* Article */}
      <article style={{
        maxWidth: "780px", margin: "0 auto", padding: "4rem 2rem",
        opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: "all 0.8s ease",
      }}>
        <div style={{
          display: "inline-block", padding: "3px 12px",
          border: `1px solid ${post.color}44`, borderRadius: "2px",
          marginBottom: "1.5rem", fontSize: "0.7rem", letterSpacing: "1px",
          color: post.color, textTransform: "uppercase",
          fontFamily: "'Syne', sans-serif",
        }}>{post.category}</div>

        <h1 style={{
          fontFamily: "'Syne', sans-serif", fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)",
          fontWeight: 700, lineHeight: 1.3, marginBottom: "1rem", color: "#e0f0ff",
        }}>{post.title}</h1>

        <div style={{
          display: "flex", gap: "1.5rem", marginBottom: "3rem",
          paddingBottom: "1.5rem", borderBottom: "1px solid rgba(0,212,255,0.1)",
        }}>
          <span style={{ fontSize: "0.8rem", color: "#2a5f7a" }}>{post.date}</span>
          <span style={{ fontSize: "0.8rem", color: post.color }}>{post.readTime}</span>
        </div>

        <div style={{ color: "#4a7fa5", lineHeight: 1.9, fontSize: "1rem" }}>
          {post.content.split('\n').map((line, i) => {
            if (line.startsWith('## ')) return (
              <h2 key={i} style={{
                fontFamily: "'Syne', sans-serif", fontSize: "1.2rem",
                fontWeight: 700, color: "#e0f0ff", margin: "2rem 0 0.75rem",
              }}>{line.replace('## ', '')}</h2>
            );
            if (line.trim() === '') return <br key={i} />;
            return <p key={i} style={{ marginBottom: "0.5rem" }}>{line}</p>;
          })}
        </div>
      </article>

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