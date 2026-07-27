# Nakula Design System - Quick Implementation Guide

## Overview
This guide shows how to apply Nakula design tokens to your existing portfolio components.

---

## Current Status
✅ **Completed:**
- Nakula tokens created in `/styles/tokens.css`
- Tokens imported in `globals.css`
- Comprehensive design system documentation created

🔄 **Next Steps:**
- Update component styles to use Nakula tokens
- Replace hardcoded values with semantic tokens
- Test accessibility compliance

---

## Token Migration Examples

### 1. Typography Migration

**Before (Hardcoded):**
```css
font-size: 24px;
font-weight: 500;
line-height: 1.05;
color: #cacaca;
```

**After (Nakula Tokens):**
```css
font-size: var(--font-size-xl);
font-weight: var(--font-weight-base);
line-height: var(--line-height-tight);
color: var(--color-text-primary);
```

### 2. Color Migration

**Before:**
```css
background: #000000;
color: #cacaca;
border: 1px solid #333333;
```

**After:**
```css
background: var(--color-surface-base);
color: var(--color-text-primary);
border: 1px solid var(--color-surface-raised);
```

### 3. Spacing Migration

**Before:**
```css
padding: 20px;
margin: 24px;
gap: 16px;
```

**After:**
```css
padding: var(--space-6);
margin: var(--space-7);
gap: var(--space-5);
```

### 4. Interactive States Migration

**Before:**
```css
.button {
  background: #ff4925;
}

.button:hover {
  background: #ff6245;
}

.button:focus {
  outline: 2px solid #0000ee;
}
```

**After:**
```css
.button {
  background: var(--color-interactive-default);
}

.button:hover {
  background: var(--color-interactive-hover);
}

.button:focus-visible {
  outline: 2px solid var(--color-interactive-focus);
}
```

---

## Component-by-Component Migration Plan

### Hero Section
**Current:** Dark cinematic design with scroll-zoom effect  
**Nakula Enhancements:**
```css
.hero-section {
  background: var(--color-surface-base);
  color: var(--color-text-primary);
}

.hero-title {
  font-size: var(--font-size-4xl);
  font-weight: var(--font-weight-base);
  color: var(--color-text-primary);
}

.hero-tagline {
  font-size: var(--font-size-2xl);
  color: var(--color-text-secondary);
}

.hero-cta {
  background: var(--color-interactive-default);
  padding: var(--space-5) var(--space-7);
  border-radius: var(--radius-xs);
  transition: all var(--motion-duration-base) var(--motion-ease-default);
}
```

### Navigation
```css
.nav {
  height: var(--nav-height);
  background: var(--color-surface-base);
  border-bottom: 1px solid var(--color-border-subtle);
}

.nav-link {
  padding: var(--nav-link-padding);
  color: var(--color-text-primary);
  transition: color var(--motion-duration-fast);
}

.nav-link:hover {
  color: var(--color-text-tertiary);
}

.nav-link:focus-visible {
  outline: 2px solid var(--color-border-focus);
  outline-offset: 2px;
}
```

### Buttons
```css
.btn-primary {
  font-family: var(--font-family-primary);
  font-size: var(--button-font-size);
  font-weight: var(--button-font-weight);
  padding: var(--button-padding-y) var(--button-padding-x);
  background: var(--color-interactive-default);
  color: var(--color-text-on-dark);
  border: none;
  border-radius: var(--radius-xs);
  cursor: pointer;
  transition: all var(--motion-duration-base) var(--motion-ease-default);
}

.btn-primary:hover:not(:disabled) {
  background: var(--color-interactive-hover);
  transform: translateY(-2px);
}

.btn-primary:active {
  background: var(--color-interactive-active);
}

.btn-primary:focus-visible {
  outline: 2px solid var(--color-border-focus);
  outline-offset: 2px;
}
```

### Cards
```css
.card {
  background: var(--color-surface-muted);
  border: 1px solid var(--color-border-subtle);
  border-radius: var(--radius-xs);
  padding: var(--space-6);
  transition: all var(--motion-duration-base) var(--motion-ease-default);
}

.card:hover {
  background: var(--color-surface-hover);
  border-color: var(--color-border-emphasis);
  box-shadow: var(--shadow-md);
  transform: translateY(-4px);
}

.card-title {
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
  margin-bottom: var(--space-4);
}

.card-description {
  font-size: var(--font-size-md);
  color: var(--color-text-secondary);
  line-height: var(--line-height-relaxed);
}
```

### Inputs
```css
.input {
  font-family: var(--font-family-primary);
  font-size: var(--input-font-size);
  height: var(--input-height-md);
  padding: var(--input-padding-y) var(--input-padding-x);
  background: transparent;
  border: var(--input-border-width) solid var(--color-border-default);
  border-radius: var(--radius-xs);
  color: var(--color-text-primary);
  transition: all var(--motion-duration-fast);
}

.input:hover {
  border-color: var(--color-border-emphasis);
}

.input:focus {
  outline: none;
  border-color: var(--color-border-focus);
  box-shadow: var(--shadow-focus);
}

.input::placeholder {
  color: var(--color-text-disabled);
}

.input[aria-invalid="true"] {
  border-color: var(--color-text-error);
}
```

---

## Accessibility Checklist

### Color Contrast
- [ ] All text meets WCAG AA (4.5:1 for body, 3:1 for large)
- [ ] Interactive elements have 3:1 contrast with background
- [ ] Focus indicators have 3:1 contrast

### Keyboard Navigation
- [ ] All interactive elements reachable via Tab
- [ ] Tab order follows visual layout
- [ ] Focus-visible indicators on all interactive elements
- [ ] Escape closes modals/dropdowns

### Screen Reader Support
- [ ] All images have alt attributes
- [ ] Form inputs have associated labels
- [ ] ARIA attributes used correctly
- [ ] Headings follow hierarchical order (h1 → h2 → h3)

### Touch Targets
- [ ] All interactive elements minimum 44×44px
- [ ] Adequate spacing between touch targets (8px minimum)

---

## Testing Commands

### Build Test
```bash
npm run build
```

### Development Server
```bash
npm run dev
```

### Lint Check
```bash
npm run lint
```

---

## Quick Token Reference

### Most Common Tokens

**Typography:**
- `--font-family-primary` — Geist font
- `--font-size-md` — 14px (UI text)
- `--font-size-xl` — 24px (base size)
- `--font-size-3xl` — 56px (large headings)
- `--font-weight-base` — 500

**Colors:**
- `--color-text-primary` — #cacaca (main text)
- `--color-text-secondary` — #8f8f8f (subdued)
- `--color-text-tertiary` — #ff4925 (accent)
- `--color-surface-base` — #000000 (black background)
- `--color-interactive-default` — #ff4925 (CTA buttons)
- `--color-border-focus` — #0000ee (blue focus)

**Spacing:**
- `--space-3` — 10px (small)
- `--space-5` — 16px (medium)
- `--space-6` — 20px (large)
- `--space-7` — 24px (extra large)

**Motion:**
- `--motion-duration-fast` — 200ms
- `--motion-duration-base` — 300ms
- `--motion-ease-default` — cubic-bezier(0.4, 0, 0.2, 1)

---

## Implementation Priority

### Phase 1: Foundation (High Priority)
1. ✅ Create tokens file
2. ✅ Import tokens in globals.css
3. ⏳ Update hero section colors
4. ⏳ Update navigation styles
5. ⏳ Update button styles

### Phase 2: Components (Medium Priority)
6. ⏳ Update card components
7. ⏳ Update form inputs
8. ⏳ Update links
9. ⏳ Update project cards

### Phase 3: Polish (Low Priority)
10. ⏳ Add motion/animation tokens
11. ⏳ Test accessibility
12. ⏳ Add responsive breakpoint tokens
13. ⏳ Final QA pass

---

## Common Patterns

### Focus-Visible Pattern
```css
/* Always include on interactive elements */
.interactive-element:focus-visible {
  outline: 2px solid var(--color-border-focus);
  outline-offset: 2px;
}
```

### Hover Pattern
```css
.interactive-element {
  transition: all var(--motion-duration-fast) var(--motion-ease-default);
}

.interactive-element:hover {
  /* Your hover styles */
}
```

### Disabled Pattern
```css
.interactive-element:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}
```

### Loading Pattern
```css
.button[aria-busy="true"] {
  position: relative;
  color: transparent;
}

.button[aria-busy="true"]::after {
  content: '';
  position: absolute;
  /* Add spinner styles */
}
```

---

## Resources

- **Full Documentation:** `/NAKULA_DESIGN_SYSTEM.md`
- **Tokens File:** `/styles/tokens.css`
- **WCAG Guidelines:** https://www.w3.org/WAI/WCAG22/quickref/
- **WAI-ARIA Practices:** https://www.w3.org/WAI/ARIA/apg/

---

## Questions or Issues?

If you encounter any issues while implementing:
1. Check the full design system documentation
2. Verify token names in `/styles/tokens.css`
3. Test in multiple browsers for consistency
4. Run accessibility checks

---

**Last Updated:** 2026-01-19  
**Version:** 1.0.0
