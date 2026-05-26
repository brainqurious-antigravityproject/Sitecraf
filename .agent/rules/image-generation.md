---

# Sitecraf — Blog Image Generation Rules
# Auto-loaded by agent for every blog image generation task

## PURPOSE
These rules apply to ALL blog images generated for sitecraf.com.
The agent MUST follow these rules for every blog post, every time.

---

## MANDATORY DIMENSIONS
- Image 1 (Hero): 21:9 ratio — 1260×540px — NO EXCEPTIONS
- Images 2–6 (Section): 4:3 ratio — 800×600px — NO EXCEPTIONS
- Format: WebP only
- Save path: public/[blog-slug]/

---

## COLOR RULES — STRICT

### Image Backgrounds (CRITICAL):
- USE: WHITE (#ffffff) or very light grey (#f5f5f5 / #f8f8f8)
- NEVER use: black, dark grey, or any dark background on images
- Reason: Website is black (#000000) — images must contrast and POP

### Vibrant Accent Colors (use freely inside images):
- Coral/Red:   #FF4757 — for problems, warnings, comparisons (bad side)
- Blue:        #2196F3 — for steps, info, neutral elements
- Green:       #00C853 — for solutions, wins, comparisons (good side)
- Amber:       #FF9800 — for cautions, pricing, highlights
- Purple:      #7C4DFF — for AI/tech concepts, advanced topics
- Pink:        #E91E63 — for CTAs, attention-grabbing highlights
- Lime:        #b5ff3e — Sitecraf brand accent ONLY (use sparingly)

### Text on Images:
- Headings: #1a1a1a (near black) — bold, large, high contrast
- Body text: #333333 — readable, medium weight
- Captions: #666666 — grey, smaller size
- NEVER use white text on white background
- NEVER use dark text that is too small to read at 50% zoom

### Watermark:
- Text: "sitecraf" lowercase
- Style: tiny #b5ff3e text in a small dark pill/badge
- Position: bottom-right corner of every image
- Size: very small — accent only, not dominant

---

## STYLE DIRECTIVE — "Explain to a 12-Year-Old"

Every image must communicate its concept WITHOUT reading the blog.
Design principle: colorful school textbook diagram + modern tech poster.

MUST HAVE in every image:
✓ BIG bold icons (not tiny decorative ones)
✓ ARROWS showing flow or direction where applicable
✓ LABELS on every element — nothing unlabelled
✓ COLOR CODING — same color = same category throughout
✓ Clear visual hierarchy — important = bigger and bolder
✓ Maximum 3-4 concepts per image — never overcrowded
✓ Anyone understands the image in under 5 seconds

Style: Flat design, bold shapes, thick outlines, generous spacing
Reference: Canva infographic + Duolingo illustration energy

FORBIDDEN:
✗ Clip art or outdated illustration style
✗ Photorealistic images
✗ Images that look like website UI components
✗ Images that match or blend into the dark website theme
✗ More than 4 concepts in one image
✗ Unlabelled diagrams or charts

---

## HUMAN FIGURES IN IMAGES — CONDITIONAL RULE

Use human figures ONLY when it adds trust or relatability.
Never force humans into every image.

### USE humans when:
- Showing a small business owner or customer scenario
  Example: person looking confused at pricing quotes
- WhatsApp CTA images — friendly person chatting on phone
- Testimonial or trust-building context
- "Before and after" scenarios showing a real person's journey

### DO NOT USE humans when:
- Technical diagrams (flow charts, comparison tables, checklists)
- Abstract concept illustrations (SEO funnels, ranking charts)
- Data visualization or infographic-style images
- The concept is process-based, not people-based

### Human figure style (when used):
- Flat vector illustration style — NOT photorealistic
- Diverse representation — Indian/South Asian appearance preferred
  (target audience: small business owners in India & Malaysia)
- No detailed facial features needed — silhouette style acceptable
- Warm, approachable body language (smiling, engaged, confident)
- Clothing: casual business — kurta, office shirt, or smart casual
- NO: western corporate stock photo style
- NO: generic western-looking characters

---

## 6-IMAGE STRUCTURE FOR EVERY BLOG

### IMAGE 1 — Hero Banner (21:9 — 1260×540px)
- White/light background
- LEFT 60%: Blog title (bold dark), subtitle (grey), sitecraf badge
- RIGHT 40%: Colorful topic illustration (3-4 vibrant colors)
- Bottom: thin #b5ff3e separator line
- Mood: Magazine cover / Forbes article thumbnail

### IMAGE 2 — Problem Illustration (4:3 — 800×600px)
- Show the PAIN the blog solves
- Use RED (#FF4757) for problem elements
- Bold headline = the problem in plain English
- Human figure optional if problem is person-facing
- Mood: "Oh no, that's me!" reaction

### IMAGE 3 — Solution Visual (4:3 — 800×600px)
- Left-to-right or top-to-bottom flow diagram
- Use GREEN (#00C853) for solution/positive elements
- Max 4 steps with colored cards + labels + arrows
- Mood: "Oh, that's easy! I can do this."

### IMAGE 4 — Comparison Diagram (4:3 — 800×600px)
- Two-column layout: OLD WAY (red/pink bg) vs NEW WAY (green bg)
- VS badge in dark circle between columns
- ✗ icons in red on left, ✓ icons in green on right
- Mood: Crystal clear which side to be on

### IMAGE 5 — WhatsApp CTA (4:3 — 800×600px)
- White to light-green gradient background
- Giant WhatsApp icon (#25D366) with soft glow
- wa.me/919599143235 clearly visible
- Human figure optional: person chatting on phone builds trust
- Mood: Warm, friendly, approachable — not corporate

### IMAGE 6 — Supporting Infographic (4:3 — 800×600px)
- White background
- Numbered items (01, 02, 03) each in different vibrant color
- Short bold title + 1-sentence explanation per item
- Bottom: thin #b5ff3e line + "sitecraf.com"
- Mood: Screenshot-worthy cheat sheet people save to their phone

---

## MDX PLACEMENT RULES
- Image 1 → frontmatter `image:` field (hero/thumbnail)
- Images 2–6 → inline in MDX after the H2 heading they illustrate
- NEVER place two images back-to-back without body text between them
- NEVER place an image before the first H2

---
File saved. These rules are now permanent and auto-apply to all 
future blog image generation tasks.
