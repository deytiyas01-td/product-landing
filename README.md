# Product Landing Page

A modern, responsive, and feature-rich product landing page built with **HTML5**, **Tailwind CSS**, and **Vanilla JavaScript**. This project is designed for conversion-driven layouts with interactive components.

---

## 🎨 Color System

The color palette is built using Tailwind's utility classes to maintain a clean visual hierarchy, high contrast, and accessibility compliance:

* **Primary (`Indigo / Violet`):** `#4F46E5` (Tailwind `indigo-600`) — Used for primary CTA buttons, active states, pricing highlights, and key brand accents.
* **Secondary (`Slate`):** `#0F172A` (Tailwind `slate-900`) — Used for high-impact headings, primary text, and dark-themed components like navigation and footer sections.
* **Neutral Light (`Gray / Slate Light`):** `#F8FAFC` (Tailwind `slate-50`) — Used for background cards, subtle section alternating, and container fills.
* **Accent (`Emerald`):** `#10B981` (Tailwind `emerald-500`) — Used for checkmarks, discount badges, and success states.

---

## 🔠 Typography Scale

The project utilizes the **Inter** font family for clean readability across modern viewports:

* **Hero Headline:** `text-4xl sm:text-5xl md:text-6xl` (Font Weight: `Extrabold` / `700`)
* **Section Headings:** `text-3xl` or `text-4xl` (Font Weight: `Bold` / `600`)
* **Subtext & Body Copy:** `text-base` to `text-lg` (Font Weight: `Normal` / `400`, Leading: `relaxed`)
* **Card Titles & Pricing:** `text-xl` to `text-2xl` (Font Weight: `Semibold` / `600`)
* **Badges & Captions:** `text-sm` (Font Weight: `Medium` / `500`)

---

## 🧩 Component Architecture

The codebase is structured into clean, modular HTML sections enhanced by lightweight JavaScript interactivity:

1. **Sticky Navigation Bar (`<header>`):**
   * Responsive layout with brand logo and navigation links.
   * Mobile hamburger menu toggle for small viewports.
   * Sticky positioning (`sticky top-0 z-50`) with backdrop blur.

2. **Hero Section (`<section id="hero">`):**
   * High-impact headline, subtext, and dual CTA buttons ("Get Started Free" & "Watch Demo").
   * Product preview mockup card with gradient highlights.

3. **Feature Showcase Grid (`<section id="features">`):**
   * Grid layout highlighting product capabilities with SVG iconography.
   * Hover micro-interactions and structured card padding.

4. **Pricing Tier Cards (`<section id="pricing">`):**
   * Monthly/Annual billing switch powered by JavaScript state toggling.
   * Responsive single-column stacking on mobile viewports and 3-column layout on desktop.
   * Highlighted "Popular" tier with distinct border styling.

5. **Interactive FAQ Accordion (`<section id="faq">`):**
   * Expandable accordion items managed via vanilla JavaScript.
   * Accessible ARIA attributes (`aria-expanded`) for screen readers and smooth toggle transitions.

6. **Call to Action & Footer (`<footer>`):**
   * Final conversion banner and multi-column site footer with copyright info.

---

## 🚀 Acceptance Criteria Checklist

* [x] **FAQ Accordion:** Items toggle smoothly with accessible ARIA attributes.
* [x] **Responsive Pricing Cards:** Automatically adapt from a 3-column desktop layout to single-column stacking on mobile viewports[cite: 1].
* [x] **Visual Hierarchy:** Clean typography scale and consistent spacing rhythms throughout[cite: 1].
* [x] **Mobile Navigation:** Fully functional responsive drawer menu.
