"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

const posts: Record<string, {
  title: string;
  category: string;
  date: string;
  readTime: string;
  color: string;
  content: { type: string; text: string }[];
}> = {
  "5-best-ai-tools-for-freelance-writers-2026": {
    title: "5 Best AI Tools for Freelance Writers in 2026",
    category: "AI Reviews",
    date: "Apr 28, 2026",
    readTime: "8 min read",
    color: "#00d4ff",
    content: [
      { type: "intro", text: "If you're a freelance writer in 2026, AI tools are no longer optional — they're your competitive edge. I tested 20+ tools over 3 months on real client projects. Here are the 5 that actually made me money." },
      { type: "h2", text: "1. Claude by Anthropic — Best for Long-Form Writing" },
      { type: "p", text: "Claude is the best AI for deep, nuanced long-form content. It understands context better than any competitor. I used it to write 3,000-word client articles in under 20 minutes — articles that passed editorial review without a single rewrite request." },
      { type: "verdict", text: "Best for: Blog posts, research articles, client reports. Free tier available." },
      { type: "h2", text: "2. ChatGPT-4o — Best for Brainstorming & Speed" },
      { type: "p", text: "ChatGPT remains the go-to for quick ideation. Need 20 headline ideas in 30 seconds? Done. First drafts under pressure? Excellent. It's slightly weaker than Claude on depth but unbeatable on raw speed for short tasks." },
      { type: "verdict", text: "Best for: Headlines, outlines, quick drafts, email copy. Free tier available." },
      { type: "h2", text: "3. Grammarly AI — Best for Polishing Client Work" },
      { type: "p", text: "Grammarly in 2026 is not just grammar anymore. Its AI rewrites entire sentences for tone, clarity, and engagement. Every piece I deliver to clients goes through Grammarly — it has saved me from embarrassing errors more than once." },
      { type: "verdict", text: "Best for: Final edits, tone adjustment, professional polish. Free tier available." },
      { type: "h2", text: "4. Perplexity AI — Best for Research" },
      { type: "p", text: "Perplexity gives cited, sourced answers in seconds. Instead of spending 2 hours researching a topic before writing, I spend 15 minutes with Perplexity and have everything I need. For freelancers writing in unfamiliar niches, this is a game changer." },
      { type: "verdict", text: "Best for: Topic research, fact-checking, niche discovery. Free tier available." },
      { type: "h2", text: "5. Notion AI — Best for Managing Your Freelance Business" },
      { type: "p", text: "Writing the content is only half the battle. Managing clients, deadlines, and invoices is the other half. Notion AI combines project management with AI assistance — summarizing meetings, drafting proposals, and organizing your entire freelance pipeline in one place." },
      { type: "verdict", text: "Best for: Client management, proposals, workflow organization. Free tier available." },
      { type: "h2", text: "The Winning Stack — Use All 5 Together" },
      { type: "p", text: "The freelancers earning the most in 2026 are not using one AI tool — they are using a stack. Research with Perplexity → Draft with Claude → Brainstorm headlines with ChatGPT → Polish with Grammarly → Manage everything in Notion. This stack costs $0 on free tiers and can 3x your output starting today." },
    ],
  },
  "claude-vs-chatgpt-real-test-freelancers": {
    title: "Claude vs ChatGPT for Freelancers — Honest 30-Day Test",
    category: "Comparisons",
    date: "Apr 25, 2026",
    readTime: "12 min read",
    color: "#00ff9f",
    content: [
      { type: "intro", text: "I paid for both Claude Pro and ChatGPT Plus for 30 days and used them on real client work — no shortcuts, no cherry-picking. Here is the full honest breakdown of which tool is worth your money as a freelancer." },
      { type: "h2", text: "Writing Quality — Claude Wins" },
      { type: "p", text: "For long-form articles, blog posts, and detailed reports, Claude produces noticeably better output. The writing is more natural, less repetitive, and requires fewer edits. ChatGPT tends to pad content with filler phrases that slow down editing." },
      { type: "verdict", text: "Winner: Claude — for anything over 500 words." },
      { type: "h2", text: "Speed & Short Tasks — ChatGPT Wins" },
      { type: "p", text: "For quick copy — subject lines, social posts, product descriptions — ChatGPT is faster and just as accurate. Its interface is snappier and the responses come slightly quicker for short prompts. For high-volume short content work, ChatGPT has the edge." },
      { type: "verdict", text: "Winner: ChatGPT — for anything under 300 words." },
      { type: "h2", text: "Research & Accuracy — Tie" },
      { type: "p", text: "Both tools have knowledge cutoffs and both make mistakes. Neither should be used as a sole research source. Always verify claims before publishing for clients. For real-time research, use Perplexity AI instead — it cites live sources." },
      { type: "verdict", text: "Winner: Tie — always verify both." },
      { type: "h2", text: "Following Instructions — Claude Wins" },
      { type: "p", text: "This was the biggest surprise. When I gave Claude a complex brief with specific tone, word count, and formatting requirements, it followed every instruction precisely. ChatGPT frequently ignored word count limits and sometimes drifted from the brief. For client work where briefs are detailed, Claude is far more reliable." },
      { type: "verdict", text: "Winner: Claude — by a significant margin." },
      { type: "h2", text: "Price — Dead Even" },
      { type: "p", text: "Both cost $20 per month for Pro/Plus plans. At the same price point, Claude delivers more value for most freelance writing work. However, ChatGPT Pro includes image generation with DALL-E and data analysis — making it more versatile if your work spans multiple service types." },
      { type: "verdict", text: "Winner: Tie — depends on your service type." },
      { type: "h2", text: "Final Verdict — Which One Should You Buy?" },
      { type: "p", text: "If you write articles, reports, or long-form content for clients: buy Claude Pro. If you do mixed work including design, data, or short copy at volume: buy ChatGPT Plus. If budget allows, get both — the combination is genuinely more powerful than either alone. Most successful freelancers in 2026 use both." },
    ],
  },
  "free-ai-tools-that-actually-work-2026": {
    title: "7 Free AI Tools That Actually Work for Freelancers in 2026",
    category: "Productivity",
    date: "Apr 20, 2026",
    readTime: "6 min read",
    color: "#ff006e",
    content: [
      { type: "intro", text: "You do not need to spend a rupee to start using AI as a freelancer. These 7 free AI tools have generous free tiers that handle real, professional work — not demos, not watered-down previews." },
      { type: "h2", text: "1. Claude.ai — Free Tier is Genuinely Powerful" },
      { type: "p", text: "Claude's free plan gives you access to one of the world's best AI models with no credit card required. For freelancers just starting out, the free tier handles most daily writing, research, and brainstorming tasks without hitting limits." },
      { type: "h2", text: "2. ChatGPT Free — Still the Most Versatile" },
      { type: "p", text: "The free version of ChatGPT remains the most versatile AI tool available at zero cost. Use it for drafts, outlines, email templates, and client communication. It has daily limits but rarely hits them for light to moderate freelance use." },
      { type: "h2", text: "3. Canva AI — Free Design for Non-Designers" },
      { type: "p", text: "Canva's free plan includes AI-powered design tools that let any freelancer create professional graphics, social posts, and presentations. The Magic Design feature generates complete layouts from a single prompt — no design experience needed." },
      { type: "h2", text: "4. Grammarly Free — Non-Negotiable for Every Freelancer" },
      { type: "p", text: "The free version of Grammarly catches grammar, spelling, and clarity issues in real time. Install the browser extension once and it works everywhere — Gmail, Google Docs, LinkedIn, every client portal. There is no excuse for typos in client work." },
      { type: "h2", text: "5. Perplexity AI Free — Your Research Assistant" },
      { type: "p", text: "Perplexity's free tier gives you AI-powered research with cited sources. Ask any question and get a structured answer with links to verify. For freelancers writing in industries they don't know well, this tool alone saves hours per week." },
      { type: "h2", text: "6. Otter.ai Free — Never Miss a Client Detail Again" },
      { type: "p", text: "Otter.ai transcribes your client calls automatically. The free plan gives 300 minutes of transcription per month — enough for most freelancers. After every call, you get a full transcript and AI summary of action items. No more forgetting what the client asked for." },
      { type: "h2", text: "7. Notion AI Free Trial — Organize Your Entire Business" },
      { type: "p", text: "Notion's free plan combined with its AI trial gives you a powerful workspace to manage clients, projects, invoices, and content pipelines. Even without the paid AI, the free Notion workspace alone is the best free project management tool for solo freelancers." },
      { type: "h2", text: "The Zero-Cost Freelance AI Stack" },
      { type: "p", text: "Use Claude or ChatGPT for writing. Perplexity for research. Grammarly for editing. Canva for design. Otter for calls. Notion for management. This entire stack costs $0 and can handle 90% of what most freelancers do daily. Start here before spending anything on paid tools." },
    ],
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
    <main style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#020408" }}>
      <div style={{ textAlign: "center", fontFamily: "'Syne', sans-serif", color: "#4a7fa5" }}>
        <h1 style={{ fontSize: "2rem", color: "#00d4ff", marginBottom: "1rem" }}>404</h1>
        <p>Post not found.</p>
        <a href="/" style={{ color: "#00d4ff", marginTop: "1rem", display: "inline-block" }}>← Back Home</a>
      </div>
    </main>
  );

  return (
    <main style={{ minHeight: "100vh", position: "relative", zIndex: 1 }}>
      <nav style={{
        display: "flex", justifyContent: "space-between", alignItems: "center",
        padding: "1.2rem 3rem", borderBottom: "1px solid rgba(0,212,255,0.1)",
        backdropFilter: "blur(10px)", position: "sticky", top: 0, zIndex: 100,
        background: "rgba(2,4,8,0.9)",
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
          transition: "color 0.2s",
        }}
          onMouseEnter={e => (e.target as HTMLElement).style.color = "#00d4ff"}
          onMouseLeave={e => (e.target as HTMLElement).style.color = "#4a7fa5"}
        >← Back to Blog</a>
      </nav>

      <article style={{
        maxWidth: "780px", margin: "0 auto", padding: "4rem 2rem 6rem",
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
          fontFamily: "'Syne', sans-serif",
          fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)",
          fontWeight: 700, lineHeight: 1.3,
          marginBottom: "1rem", color: "#e0f0ff",
        }}>{post.title}</h1>

        <div style={{
          display: "flex", gap: "1.5rem", marginBottom: "3rem",
          paddingBottom: "1.5rem", borderBottom: "1px solid rgba(0,212,255,0.1)",
        }}>
          <span style={{ fontSize: "0.8rem", color: "#2a5f7a" }}>{post.date}</span>
          <span style={{ fontSize: "0.8rem", color: post.color }}>{post.readTime}</span>
        </div>

        <div>
          {post.content.map((block, i) => {
            if (block.type === "intro") return (
              <p key={i} style={{
                fontSize: "1.15rem", color: "#8ab4cc", lineHeight: 1.9,
                marginBottom: "2rem", fontWeight: 400,
                borderLeft: `3px solid ${post.color}`,
                paddingLeft: "1.25rem",
              }}>{block.text}</p>
            );
            if (block.type === "h2") return (
              <h2 key={i} style={{
                fontFamily: "'Syne', sans-serif", fontSize: "1.2rem",
                fontWeight: 700, color: "#e0f0ff",
                margin: "2.5rem 0 0.75rem",
              }}>{block.text}</h2>
            );
            if (block.type === "verdict") return (
              <div key={i} style={{
                background: `${post.color}11`,
                border: `1px solid ${post.color}33`,
                borderRadius: "3px", padding: "10px 16px",
                fontSize: "0.85rem", color: post.color,
                marginTop: "0.75rem", marginBottom: "1rem",
                fontFamily: "'Syne', sans-serif",
              }}>✦ {block.text}</div>
            );
            return (
              <p key={i} style={{
                color: "#4a7fa5", lineHeight: 1.9,
                fontSize: "1rem", marginBottom: "1rem",
              }}>{block.text}</p>
            );
          })}
        </div>

        {/* CTA */}
        <div style={{
          marginTop: "4rem", padding: "2rem",
          border: "1px solid rgba(0,212,255,0.15)",
          borderRadius: "4px", background: "rgba(0,212,255,0.03)",
          textAlign: "center",
        }}>
          <p style={{
            fontFamily: "'Syne', sans-serif", color: "#e0f0ff",
            fontSize: "1rem", marginBottom: "1rem",
          }}>Want more honest AI tool reviews?</p>
          <a href="/" style={{
            display: "inline-block", padding: "10px 24px",
            border: "1px solid #00d4ff", color: "#00d4ff",
            textDecoration: "none", fontFamily: "'Syne', sans-serif",
            fontSize: "0.8rem", letterSpacing: "2px", borderRadius: "2px",
          }}>← BACK TO ALL POSTS</a>
        </div>
      </article>

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