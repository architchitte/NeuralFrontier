```markdown
# Design System Specification: High-End Institutional Web3 Financials

## 1. Overview & Creative North Star
**Creative North Star: The Algorithmic Atelier**

This design system is envisioned as a marriage between institutional academic rigor and the ethereal nature of decentralized finance. We are moving away from the "clunky tech" aesthetic of early Web3 and toward a "Digital Curator" experience. The layout should feel like a high-end financial journal—airy, intentional, and impeccably organized.

We break the "template" look by utilizing a **Minimalist Bento-Grid** structure that relies on **Tonal Layering** rather than structural containment. The visual rhythm is driven by the tension between the fluid, organic warmth of the Serif headings and the cold, surgical precision of the Monospace financial data.

---

## 2. Colors & Surface Logic
The palette is rooted in a soft, mint-infused off-white (#f3fbf6), designed to reduce eye strain while conveying a sense of "fresh capital" and transparency.

### The "No-Line" Rule
To achieve a premium editorial feel, **1px solid borders are strictly prohibited for sectioning.** Conventional dividers create visual noise that clutters the data. Instead, boundaries must be defined through:
*   **Background Shifts:** Using `surface_container_low` against a `surface` background.
*   **Tonal Transitions:** Defining an area by a subtle shift from `surface` to `surface_container`.

### Surface Hierarchy & Nesting
Treat the UI as physical layers of fine vellum paper. 
*   **Base:** `surface` (#f3fbf6)
*   **Sectioning:** `surface_container_low` (#edf5f0) to define broad content areas.
*   **Interactive Cards:** `surface_container_lowest` (#ffffff) to provide "lift" and focus.
*   **Active/Hero Elements:** Use `surface_container_high` (#e2eae5) for recessed, ultra-stable elements.

### The Glass & Gradient Rule
For floating overlays (modals, dropdowns), use **Glassmorphism**. Apply `surface` at 80% opacity with a `16px` backdrop blur. This ensures the "Mint Glow" of the brand permeates through every layer. For primary CTAs, use a subtle linear gradient from `primary` (#5d5e61) to `primary_fixed_dim` (#c6c6c9) at a 135-degree angle to add "soul" and weight.

---

## 3. Typography
Our typography is a triad of intent: **Authority (Serif), Clarity (Sans), and Truth (Mono).**

*   **The Authority (Noto Serif):** Used for `display` and `headline` scales. This conveys the academic, institutional tone. Use it for page titles and high-level portfolio summaries.
*   **The Clarity (Inter):** Used for `title` and `body` scales. It handles the functional UI—labels, navigation, and explanatory text. It is the "bridge" between the art and the data.
*   **The Truth (Space Grotesk):** Used for all `label` scales and any numerical data. Financial metrics, wallet addresses, and percentages must be set in this monospace-adjacent face to ensure every digit is distinct and authoritative.

---

## 4. Elevation & Depth
Depth is achieved through **Tonal Layering**, mimicking how light interacts with stacked materials.

*   **The Layering Principle:** Place a `surface_container_lowest` card on a `surface_container_low` section. The slight delta in brightness creates a soft, natural lift that feels sophisticated and expensive.
*   **Ambient Shadows:** If a "floating" effect is required (e.g., a hover state on a bento card), use a shadow with a 32px blur, 0px spread, and 6% opacity. The shadow color should be tinted with `on_surface` (#161d1a) to avoid a "muddy" grey look.
*   **The Ghost Border Fallback:** If accessibility requires a container boundary, use a "Ghost Border": the `outline_variant` token (#c3c7c4) at 15% opacity. It should be barely perceptible.
*   **Geometric Accents:** Use `tertiary_fixed_dim` (#83d5c5) for thin (0.5pt) concentric circles or hairline geometric accents behind data visualizations to reinforce the "Institutional" theme.

---

## 5. Components

### Cards (Bento Structure)
*   **Style:** No borders. Use `surface_container_low` backgrounds.
*   **Rounding:** `xl` (0.75rem) for main containers; `md` (0.375rem) for nested elements.
*   **Spacing:** Use generous padding (24px - 32px) to maintain an "airy" feel.

### Buttons
*   **Primary:** A subtle gradient of `primary` to `primary_fixed_dim`. Text color: `on_primary`. 
*   **Secondary:** `secondary_container` background with `on_secondary_container` text.
*   **Tertiary/Ghost:** No background. Use `on_surface_variant` text with a `label-md` weight.

### Financial Input Fields
*   **Background:** `surface_container_highest` (#dce4df) to indicate interactivity.
*   **Data Text:** Must use `Space Grotesk` (label-md).
*   **State:** On focus, use a `tertiary` (#006b5e) "Ghost Border" at 40% opacity.

### Chips & Tags
*   **Selection:** Use `tertiary_container` with `on_tertiary_container` text.
*   **Shape:** `full` (9999px) for a soft, pill-like aesthetic that contrasts with the geometric bento grid.

### Lists
*   **Separation:** Forbid divider lines. Use `16px` of vertical white space and a 2px `surface_container_high` left-accent bar on hover to indicate selection.

---

## 6. Do’s and Don’ts

### Do:
*   **Do** use asymmetrical layouts within the bento grid. Let one card be significantly wider to create an editorial focal point.
*   **Do** use `tertiary` (#006b5e) for "success" or "positive growth" metrics, as it aligns with the mint aesthetic.
*   **Do** prioritize "Breathing Room." If you think a section needs more space, double it.

### Don’t:
*   **Don’t** use pure black (#000000). Always use `on_surface` (#161d1a).
*   **Don’t** use standard 1px borders to separate content. Use background color shifts.
*   **Don’t** mix typography mid-sentence. Keep Noto Serif for headlines and Inter for the accompanying body text.
*   **Don’t** use high-intensity shadows. If the shadow is "obvious," it's too dark. 

---
*Director's Note: Precision is our signature. Every pixel must feel like it was placed by a cartographer. If the layout feels "busy," remove a line and add a margin.*```