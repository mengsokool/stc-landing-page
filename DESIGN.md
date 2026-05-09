---
name: Thai Vocational Institution Portal
description: Educational service portal quick menu
colors:
  primary: "#ef4444"
  primary-hover: "#dc2626"
  primary-light: "#fee2e2"
  neutral-bg: "#f9fafb"
  neutral-text: "#1f2937"
  neutral-border: "#f3f4f6"
typography:
  display:
    fontFamily: "ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.875rem, 4vw, 2.25rem)"
    fontWeight: 700
  headline:
    fontFamily: "ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 700
  title:
    fontFamily: "ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 700
  label:
    fontFamily: "ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
rounded:
  2xl: "16px"
spacing:
  2: "8px"
  4: "16px"
  8: "32px"
  16: "64px"
components:
  card-menu:
    backgroundColor: "{colors.neutral-bg}"
    textColor: "{colors.neutral-text}"
    rounded: "{rounded.2xl}"
    padding: "{spacing.4}"
---

# Design System: Thai Vocational Institution Portal

## 1. Overview

**Creative North Star: "The Vibrant Official Hub"**

The design philosophy for this vocational institution portal is centered around being a vibrant yet highly credible touchpoint. It uses soft layering and a configurable institutional accent to bring life to an official academic structure. The interface is highly structured and clearly navigable, completely rejecting the cluttered density and tiny text often associated with old government systems. It should never feel like an uninspired, generic AI template, but rather a purposeful, modern, and confident digital service center.

**Key Characteristics:**
- **Clear and Confident:** Interfaces emphasize readability and distinct touch targets.
- **Vibrant Yet Official:** Saturated red tones balanced by generous clean, white/gray paper space.
- **Soft Layering:** Depth is conveyed through subtle, soft shadows rather than hard lines or flat surfaces.

## 2. Colors

The palette is anchored by an energetic crimson against clean official paper, ensuring high contrast and a modern academic feel.

### Primary
- **Energetic Crimson** (`#ef4444` / Tailwind `red-500`): Used for primary interactions, key icons, and important borders. It communicates the vibrant energy of vocational education.
- **Deep Crimson** (`#dc2626` / Tailwind `red-600`): Used for hover states and the header gradient to add depth and confirmation of interaction.
- **Soft Crimson Muted** (`#fee2e2` / Tailwind `red-100`): Used as a subtle background for icons to create a highlighted grouping without overwhelming the card.

### Neutral
- **Clean Official Paper** (`#f9fafb` / Tailwind `gray-50`): The canvas background. It feels slightly softer than pure white, reducing eye strain while maintaining a formal document feel.
- **Charcoal Text** (`#1f2937` / Tailwind `gray-800`): Primary text color for headings and main labels, ensuring maximum readability.
- **Soft Border** (`#f3f4f6` / Tailwind `gray-100`): Used for card borders to softly define edges without creating harsh grid lines.

### Named Rules
**The Vibrant Accent Rule.** Red is used purposefully to draw the eye to interactive elements and icons. It should not be used as a large solid background except for the primary Hero/Header section.

## 3. Typography

**Display Font:** System Sans (Inter, Apple-system, Roboto)
**Body Font:** System Sans

**Character:** Highly legible, clean, and confident, prioritizing fast scanning over decorative flair.

### Hierarchy
- **Display** (700, clamp(1.875rem, 4vw, 2.25rem)): Page titles. Used in the main header to establish the portal's identity.
- **Headline** (700, 1.25rem): Section headers (e.g., "บริการหลัก", "ระบบบุคลากร"). Accompanied by a 4px red left-border.
- **Title** (700, 1rem): Main card labels. Highly visible and confident.
- **Label** (600, 0.875rem): Secondary card labels for staff and utility menus. Keeps the grid tight but legible.

### Named Rules
**The No-Clutter Rule.** Text should be restricted to essential labels only. No secondary descriptive paragraphs inside quick menu cards.

## 4. Elevation

The system uses **Soft Layering** to create a modern, slightly lifted interface that invites interaction.

### Shadow Vocabulary
- **Resting Shadow** (`box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05)`): A very soft, ambient shadow applied to all menu cards to separate them from the "Clean Official Paper" background.
- **Hover Lift** (`box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)`): When hovered, the shadow expands and softens further, physically lifting the card towards the user to indicate clickability.
- **Header Glow** (`box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)`): Used on the primary top header to establish it as the highest element in the z-index hierarchy.

### Named Rules
**The Tactile Feedback Rule.** Every clickable card must respond to hover with both a shadow lift and a subtle background color shift (e.g., to `#fef2f2`).

## 5. Components

### Cards / Menu Items
- **Corner Style:** 16px radius (`rounded-2xl`).
- **Background:** Pure white (`#ffffff`) resting, shifting to Soft Crimson Tint (`#fef2f2` / `red-50`) on hover.
- **Shadow Strategy:** Soft Layering (Resting `shadow-sm`, Hover `shadow-md`).
- **Border:** 1px solid Soft Border (`#f3f4f6`).
- **Internal Padding:** 32px (`p-8`) for Main Services to emphasize importance, 16px (`p-4`) for Staff/Utility Services.

### Icons (Inside Cards)
- **Container:** 16px radius (`rounded-2xl`).
- **Background:** Soft Crimson Muted (`#fee2e2`).
- **Color:** Energetic Crimson (`#ef4444`).
- **Hover / Focus:** Inverts to Energetic Crimson background with pure white icon.

### Section Headers
- **Style:** 20px Bold Charcoal Text.
- **Border:** 4px solid Energetic Crimson left border (`border-l-4 border-red-500`).
- **Internal Padding:** 8px horizontal padding (`px-2`).

## 6. Do's and Don'ts

### Do:
- **Do** use `rounded-2xl` (16px) for cards to maintain the modern, approachable feel.
- **Do** apply Soft Layering to all clickable cards to ensure they feel tactile and responsive.
- **Do** highlight the "Admission" action so it stands out unmistakably from routine administrative tasks.
- **Do** stick to the specific spacing scale (2, 4, 8, 16, 24, 32).

### Don't:
- **Don't** create old, cluttered government layouts with tiny text and disorganized grids.
- **Don't** use overly futuristic, complex interfaces (like excessive glassmorphism or neon colors) that hinder usability.
- **Don't** generate "AI Slop" (generic, soulless templates, obvious AI clichés, or repetitive card grids lacking deliberate design choices).
- **Don't** use a spacing value of 6 (`gap-6`, `p-6`, etc.). This is explicitly forbidden in this design system.
