# FreshBin Co. — Project Context for Claude Code

> Read this file first. It contains everything you need to understand the business, the website, and how to continue building it.

---

## The Business

**FreshBin Co.** is a professional bin cleaning service operating in South East Melbourne, Australia.

- **Owner:** Qasim
- **Phone:** 0424 149 749 (WhatsApp preferred)
- **WhatsApp deep link:** https://wa.me/61424149749
- **Website:** https://freshbinsco.com.au (hosted on Netlify)
- **Netlify project:** jovial-treacle-d102c9
- **Email:** (owner's Google account, used for booking notifications)

### What We Do

We come to the customer's kerb on their bin collection day (after the truck empties the bins) and deep clean with a commercial pressure washer using an exclusive bin soap formula — blasting out grime, bacteria, and build-up. Then we deodorise every corner so the bin smells incredible, and dry it to a spotless shine.

### Service Area — South East Melbourne Suburbs

Berwick, Narre Warren, Narre Warren North, Narre Warren South, Cranbourne, Cranbourne North, Cranbourne East, Cranbourne West, Clyde, Clyde North, Beaconsfield, Beaconsfield Upper, Officer, Officer South, Pakenham, Pakenham Upper, Hallam, Hampton Park, Lynbrook, Lyndhurst, Doveton, Endeavour Hills, Dandenong, Dandenong South, Springvale, Springvale South, Noble Park, Noble Park North, Keysborough, Bangholme

### Pricing

| Plan | Price per Bin | Saving |
|---|---|---|
| One-Off Clean | $25 | — |
| Quarterly (every 3 months) | $23 | Save 8% |
| Bimonthly (every 2 months) | $22 | Save 12% |
| Monthly | $20 | Save 20% ⭐ Most Popular |

- Prices are **per bin**
- No lock-in contracts
- Min 1 bin, customers can select 1–5+ bins

### Services Offered

- **Bin Deep Clean** — core service (pressure wash, exclusive soap, deodorise, dry)
- Window Cleaning (add-on)
- Car Exterior Cleaning (add-on)

---

## Design System

### Brand Palette

```css
:root {
  --navy:       #091422;   /* darkest — main background */
  --navy-mid:   #0d1b2a;   /* cards, form backgrounds */
  --navy-light: #142233;   /* subtle contrast areas */
  --teal:       #00c896;   /* primary brand accent */
  --teal-light: #00dfa8;   /* hover states */
  --teal-dark:  #00a87a;   /* darker teal for depth */
  --white:      #ffffff;
  --muted:      rgba(255,255,255,0.5);
  --border:     rgba(0,200,150,0.15);
  --radius:     14px;
}
```

**Rules:**
- Background is always dark navy, never white or light
- Accent is always teal (#00c896), never red, yellow, orange, or purple
- CTAs: teal background with dark navy text
- Borders: semi-transparent teal (rgba(0,200,150,0.15))
- Muted text: rgba(255,255,255,0.5)

### Typography

- **Font:** Inter (Google Fonts) — weights 400, 500, 600, 700, 900
- Import: `<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&display=swap" rel="stylesheet">`
- Headings: font-weight 900, letter-spacing negative
- Body: font-size 15–16px, line-height 1.6

### Bin Icon SVG

This SVG is used consistently as the logo across all pages (no wheel — just the bin body):

```svg
<svg viewBox="0 0 44 56" xmlns="http://www.w3.org/2000/svg">
  <!-- handle -->
  <rect x="14" y="0"  width="16" height="5"  rx="2.5" fill="#00c896"/>
  <!-- lid -->
  <rect x="4"  y="5"  width="36" height="7"  rx="3.5" fill="#00c896"/>
  <!-- lid-body join line -->
  <rect x="4"  y="12" width="36" height="2"  fill="rgba(255,255,255,0.3)"/>
  <!-- body -->
  <rect x="6"  y="14" width="32" height="38" rx="3"   fill="#00c896"/>
  <!-- vertical slats (left, centre, right) -->
  <rect x="13" y="17" width="2.5" height="32" rx="1.25" fill="rgba(255,255,255,0.18)"/>
  <rect x="21" y="17" width="2.5" height="32" rx="1.25" fill="rgba(255,255,255,0.18)"/>
  <rect x="29" y="17" width="2.5" height="32" rx="1.25" fill="rgba(255,255,255,0.18)"/>
</svg>
```

**In nav** (34×42px): `<svg width="34" height="42" viewBox="0 0 44 56" ...>`
**In booking page nav** (28×35px): `<svg width="28" height="35" viewBox="0 0 44 56" ...>`

### Brand Name Rendering

```html
<span class="fresh">Fresh</span><span class="bin">Bin</span> Co.
<!-- "Fresh" = white, "Bin" = #00c896 teal, " Co." = white -->
```

---

## File Structure

```
website/
├── index.html          ← Main landing page (homepage)
├── book.html           ← Booking form page
├── instagram.html      ← Instagram redirect page
├── tiktok.html         ← TikTok redirect page
├── _redirects          ← Netlify URL rewrite rules
└── apps-script.js      ← Google Apps Script (deploy separately to script.google.com)

CLAUDE.md               ← This file
```

All files are vanilla HTML/CSS/JS — no build tools, no npm, no frameworks.

---

## index.html — Main Landing Page

**URL:** https://freshbinsco.com.au/

### Page Structure

1. **Sticky Nav** — logo + nav links (Services, Pricing, Areas, Book Now CTA)
2. **Hero** — headline + subheading + two CTAs (Book Now → book.html, Call/WhatsApp → wa.me link) + animated bin illustration with sparkles
3. **How It Works** — 3 steps: We Come to You, Deep Clean Process, Fresh & Done
4. **Services** — 3 service cards (Bin Deep Clean featured, Window Cleaning, Car Exterior)
5. **Pricing** — 4 plan cards (One-Off, Quarterly, Bimonthly, Monthly) + "Book This Plan" CTAs
6. **Why Us** — 6 USP tiles
7. **Suburbs** — 30-suburb cloud display
8. **CTA Section** — final "Ready for a fresh bin?" CTA
9. **Footer** — logo, nav links, social (Instagram/TikTok), copyright

### Key Content

- **Hero headline:** "Your bins cleaned, fresh & sparkling"
- **Hero sub:** "We deep clean with a commercial pressure washer using our exclusive bin soap formula — blasting out grime, bacteria, and build-up. Then we deodorise every corner so your bin smells incredible, and dry it to a spotless shine. Done at your kerb."
- **Hero CTAs:** Book Now (→ book.html), 📱 WhatsApp Us (→ https://wa.me/61424149749)
- **Nav CTA:** "Book Now" → book.html
- **Social links in footer:** instagram.html, tiktok.html

### Nav Links

```
Services | Pricing | Areas | Book Now
```

Nav mobile: hamburger menu collapses to vertical drawer on screens < 768px.

---

## book.html — Booking Form

**URL:** https://freshbinsco.com.au/book (via _redirects rewrite)

### Form Fields

| Field | Type | Required |
|---|---|---|
| Full Name | text input | ✅ |
| Phone Number | tel input | ✅ |
| Suburb | select dropdown (30 suburbs + "Other") | ✅ |
| Full Address | text input | ✅ |
| Number of Bins | select (1, 2, 3, 4, 5+) | ✅ |
| Services | checkboxes (Bin Deep Clean ✓ pre-checked, Window Cleaning, Car Exterior) | ✅ |
| Plan | radio cards (One-Off $25, Quarterly $23, Bimonthly $22, Monthly $20 ⭐) | ✅ |
| Preferred Day | select (Mon–Sat) | ✅ |
| Preferred Time | select (Early Morning, Morning, Afternoon) | ✅ |
| Bin Collection Day | select (Mon–Sat) | ✅ |
| Additional Notes | textarea | ❌ |

### Form Submission

The form POSTs JSON to Google Apps Script via `fetch()`:

```javascript
const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbz6TCPq1d-Ixu5twygJPRja8vAXPYvTynoUJTkS_cs6BoX1exwpqUp9jw7ChRsBB4f5jQ/exec';

fetch(SCRIPT_URL, {
  method: 'POST',
  mode: 'no-cors',   // required — prevents CORS error, response is always opaque
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(payload)
});
```

Because `mode: 'no-cors'` makes the response opaque, the success screen always shows after submission — we assume the form went through. Data is saved server-side in Google Sheets.

### Success Screen

After submit, the form card is hidden and a success card is shown with:
- Checkmark icon
- "Booking Received!" heading
- Message about being contacted within 24 hours via WhatsApp

### WhatsApp Strip

A sticky strip at the bottom of the page with: "Prefer to book by phone? Chat on WhatsApp → https://wa.me/61424149749"

---

## Google Sheets Integration

**Spreadsheet ID:** `1-zDwdGYyZul7H_jk_pKo3Yoo2KVDtCXVitlLu7EHnDo`
**Sheet tab name:** `Website Bookings`
**Apps Script URL (live):** `https://script.google.com/macros/s/AKfycbz6TCPq1d-Ixu5twygJPRja8vAXPYvTynoUJTkS_cs6BoX1exwpqUp9jw7ChRsBB4f5jQ/exec`

### How It Works

1. Customer fills out book.html and submits
2. JavaScript POSTs JSON to the Apps Script Web App URL
3. `doPost()` in apps-script.js writes a row to the "Website Bookings" tab
4. Sends an email notification to Qasim's Google account with booking details + WhatsApp link

### Columns Written

Timestamp | Name | Phone | Suburb | Address | Bins | Services | Plan | Preferred Day | Preferred Time | Collection Day | Notes | Status

Status defaults to "New" (teal background in sheet).

### Re-deploying Apps Script

If the Apps Script URL ever needs to change:
1. Go to https://script.google.com
2. Open the "FreshBin Booking Form" project
3. Deploy → Manage deployments → copy URL
4. Update `SCRIPT_URL` constant in book.html

---

## instagram.html & tiktok.html

Simple branded redirect pages. Each:
- Has a `<meta http-equiv="refresh">` auto-redirect after 2 seconds
- Shows FreshBin branding, a loading spinner, and a direct button
- Has a "← Back to FreshBin Co." link

**Instagram** redirects to: `https://www.instagram.com/freshbinco`
**TikTok** redirects to: `https://www.tiktok.com/@freshbinco`

⚠️ **TODO:** Replace these placeholder handles with Qasim's real Instagram and TikTok profile URLs once accounts are created.

---

## _redirects

The `_redirects` file defines short URL rules for the hosting provider:

```
/instagram   /instagram.html   302
/insta       /instagram.html   302
/ig          /instagram.html   302
/tiktok      /tiktok.html      302
/tt          /tiktok.html      302
/book        /book.html        200
/whatsapp    https://wa.me/61424149749   302
/wa          https://wa.me/61424149749   302
```

Short links available:
- `freshbinsco.com.au/book` → booking form
- `freshbinsco.com.au/instagram` → Instagram
- `freshbinsco.com.au/tiktok` → TikTok
- `freshbinsco.com.au/wa` → WhatsApp chat

---

## Coding Conventions

1. **No build tools.** Pure HTML, CSS, JS. No npm, no webpack, no React.
2. **Single-file pages.** All CSS and JS goes inside the HTML file — no separate .css or .js files.
3. **Vanilla JS only.** No jQuery, no libraries.
4. **Mobile-first responsive.** Breakpoint at 768px for nav and grid changes.
5. **CSS variables** — always use `--navy`, `--teal`, etc. defined in `:root` on index.html. For book.html and other pages, use the hex values directly since variables aren't re-declared there.
6. **Inter font** always loaded from Google Fonts.
7. **All links** that would have been a phone number CTA should go to `https://wa.me/61424149749`.
8. **All "book" CTAs** should go to `book.html` (relative) or `https://freshbinsco.com.au/book`.
9. **No external tracking, no ads, no analytics** (yet).

---

## What's Done ✅

- [x] Homepage (index.html) — full landing page with all sections
- [x] Booking form (book.html) — with Google Sheets integration live
- [x] Social redirect pages (instagram.html, tiktok.html)
- [x] Netlify _redirects for clean URLs
- [x] Google Apps Script deployed and connected
- [x] All pricing tiers: One-Off, Quarterly, Bimonthly, Monthly
- [x] All 30 suburbs listed
- [x] WhatsApp deep links throughout
- [x] Automated social media agents (scheduled via Claude)

## What Still Needs Doing ⬜

- [ ] **Update social handles** — replace `@freshbinco` in instagram.html and tiktok.html with real profile URLs
- [ ] **Domain propagation** — freshbinsco.com.au linked to Netlify, may still be propagating
- [ ] **Google Business Profile** — almost set up, needs photos and posts
- [ ] **Logo in Canva** — SVG bin icon exists; Canva assets have the logo but the wheel can't be programmatically removed from the PNG (it's a flat raster). Use the SVG version for print/digital.
- [ ] **Add favicon** — create a 32×32 and 180×180 PNG of the bin icon, add `<link rel="icon">` to all pages
- [ ] **SEO meta tags** — Open Graph tags (og:title, og:description, og:image) for social sharing
- [ ] **Analytics** — consider adding Google Analytics or Plausible once live

---

## Agents & Automation

Four scheduled Claude agents are running. Qasim reviews their outputs and posts manually.

| Agent | Schedule | Purpose |
|---|---|---|
| Daily Content | 9 PM daily | Generate Instagram/TikTok post ideas |
| Monday Strategy | 9 PM Monday | Weekly marketing and growth strategy |
| Wednesday Sales | 9 PM Wednesday | Sales tips, follow-up prompts, offer ideas |
| Sunday Report | 9 AM Sunday | Weekly recap — bookings, wins, focus for next week |

Context file used by agents: `.agents/shared/bin-business-context.md`

---

## Quick Reference

| Thing | Value |
|---|---|
| Business name | FreshBin Co. |
| Owner | Qasim |
| Phone / WhatsApp | 0424 149 749 |
| WhatsApp link | https://wa.me/61424149749 |
| Website | https://freshbinsco.com.au |
| Google Sheet ID | 1-zDwdGYyZul7H_jk_pKo3Yoo2KVDtCXVitlLu7EHnDo |
| Apps Script URL | https://script.google.com/macros/s/AKfycbz6TCPq1d-Ixu5twygJPRja8vAXPYvTynoUJTkS_cs6BoX1exwpqUp9jw7ChRsBB4f5jQ/exec |
| Primary teal | #00c896 |
| Primary navy | #091422 |
| Font | Inter (Google Fonts) |
| Service area | South East Melbourne |
| Cheapest plan | $20/bin/month (Monthly) |
| Most expensive | $25/bin (One-Off) |
