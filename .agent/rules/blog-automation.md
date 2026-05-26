---
# Sitecraf — Blog Automation Workflow
# Auto-loaded for every blog generation task
# DO NOT modify without explicit instruction

## TARGET AUDIENCE
Small business owners in India and Malaysia.
Write like a friendly expert — use "you" and "your business".
Short paragraphs (2-3 sentences max). Real examples, 
specific Indian/Malaysian scenarios and prices.

## STEP 1: KEYWORD RESEARCH
- Use SERPAPI to find keywords: website design, SEO, AEO, GEO, 
  web development, small business India/Malaysia
- Filter: volume > 100/month, difficulty < 40, question-format preferred
- MUST CHECK kb/used-keywords.md — NEVER repeat a listed keyword
- Select TOP 1 keyword only
- Output: chosen_keyword, search_volume, difficulty, search_intent

## STEP 2: WRITE THE BLOG
- Length: 1500-2000 words
- Tone: friendly expert talking to a small business owner
- Use "you" and "your business" throughout
- Short paragraphs (2-3 sentences max)
- Real examples, specific numbers, India/Malaysia scenarios
- H2 subheadings every 250-300 words
- 2-3 internal links to existing sitecraf.com/blog posts
- 1-2 external authority links (Google, HubSpot, Moz only)
- End with WhatsApp CTA: wa.me/919599143235

BANNED WORDS — never use these:
"In today's digital landscape", "It's important to note",
"Leverage", "Game-changer", "Unlock", "Empower", "Seamless",
"Revolutionary", "Cutting-edge", "Robust", "Scalable",
"In conclusion", "To summarize"

## STEP 3: SEO + AEO + GEO OPTIMIZATION
MDX frontmatter required fields:
- title (primary keyword, under 60 chars)
- description (150-160 chars, keyword + clear benefit)
- ogTitle / ogDescription (optimized for click-through)
- seoTag, date (YYYY-MM-DD), author: "Sitecraf Team"
- category, readTime (calculate from word count)
- image: /[blog-slug]/[blog-slug]-hero.webp
- faqs: exactly 5 PAA-format Q&A pairs
  (questions must end with ?, answers 2-4 sentences)
- Schema: FAQPage + Article structured data blocks

## STEP 4: IMAGE GENERATION
Follow ALL rules in: .agent/rules/image-generation.md
That file is the single source of truth for all image rules.
ALWAYS read it before generating any image.

## STEP 5: CONTENT QUALITY AUDIT
Score each dimension (0-10):
- E-E-A-T score
- AEO score (question targeting, direct answers, FAQ quality)
- GEO score (citation-worthy passages, structured data)
- AI-detection risk (lower is better)

Rules:
- Any score below 7 → rewrite that section before proceeding
- AI-detection risk above 4 → humanize with specific examples

## STEP 6: COMMIT TO GITHUB
- Match exact MDX format of existing content/blog/*.mdx files
- Read one existing MDX file first to match structure exactly
- Commit to new branch: blog/[blog-slug]-[YYYY-MM-DD]
- Do NOT merge to main — open a PR and stop
- PR title: "🚀 New Blog: [Blog Title]"

## STEP 7: SEND APPROVAL EMAIL
Send via Resend API:
- From: info@sitecraf.com  
- To: pramodvermabroken@gmail.com
- Subject: "🚀 Blog Ready for Review: [Blog Title]"
- Email body must include:
  * Chosen keyword + volume + difficulty
  * Quality scores (E-E-A-T, AEO, GEO, AI-risk)
  * First 200 words of the blog as preview
  * GitHub PR link (clickable)
  * Blog slug / URL path
- STOP after sending — do NOT merge — await human approval

## AFTER HUMAN APPROVES:
When instructed to merge:
1. Merge PR to main
2. Update kb/used-keywords.md — add the new keyword
3. Confirm: "Blog live at sitecraf.com/blog/[slug]"
---
