# Nakula Design System Implementation Guide

## Context and Goals

**Design Intent:** Deliver a clean, functional, and accessible interface that prioritizes developer experience while maintaining visual consistency across the marketing site.

**Target Audience:** Developers and technical teams  
**Product Surface:** Marketing site  
**Accessibility Target:** WCAG 2.2 AA compliance  
**Implementation Philosophy:** Token-driven, keyboard-first, implementation-ready

---

## Design Tokens and Foundations

All design tokens are defined in `/styles/tokens.css`. Components **must** reference semantic tokens, not raw hex values.

### Typography

```css
/* Font Family */
--font-family-primary: 'Geist', 'Geist Placeholder', sans-serif;

/* Font Sizes */
--font-size-xs: 12px;
--font-size-sm: 13px;
--font-size-md: 14px;
--font-size-lg: 16px;
--font-size-xl: 24px;  /* Base size */
--font-size-2xl: 32px;
--font-size-3xl: 56px;
--font-size-4xl: 80px;

/* Font Weights */
--font-weight-base: 500;
--font-weight-medium: 500;
--font-weight-semibold: 600;
--font-weight-bold: 700;

/* Line Heights */
--line-height-base: 25.2px;  /* 1.05 ratio at 24px */
```

### Color Palette

```css
/* Text Colors */
--color-text-primary: #cacaca;    /* Main text */
--color-text-secondary: #8f8f8f;  /* Subdued text */
--color-text-tertiary: #ff4925;   /* Accent/emphasis */
--color-text-inverse: #0000ee;    /* Blue inverse */

/* Surface Colors */
--color-surface-base: #000000;    /* Primary background */
--color-surface-muted: #0a0a0a;   /* Subtle elevation */
--color-surface-raised: #333333;  /* Elevated surfaces */

/* Interactive States */
--color-interactive-default: #ff4925;
--color-interactive-hover: #ff6245;
--color-interactive-active: #cc3a1e;
--color-interactive-focus: #0000ee;
```

### Spacing Scale

```css
--space-1: 1px;
--space-2: 4px;    /* xs */
--space-3: 10px;   /* sm */
--space-4: 12px;
--space-5: 16px;   /* md */
--space-6: 20px;   /* lg */
--space-7: 24px;   /* xl */
--space-8: 150px;  /* section spacing */
```

### Border Radius & Motion

```css
--radius-xs: 10px;
--radius-sm: 1000px;  /* Pill shape */

--motion-duration-instant: 100ms;
--motion-duration-fast: 200ms;
--motion-duration-base: 300ms;
```

---

## Component-Level Rules

### 1. Button Component

#### Anatomy
```html
<button class="btn btn-primary">
  <span class="btn-icon"><!-- optional --></span>
  <span class="btn-label">Label</span>
</button>
```

#### Variants
- **Primary:** Main CTA actions
- **Secondary:** Supporting actions
- **Ghost:** Minimal emphasis
- **Danger:** Destructive actions

#### States & Behavior

| State | Visual Treatment | Token Reference |
|-------|-----------------|-----------------|
| Default | Background: `--color-interactive-default`, Text: white | `--color-interactive-default` |
| Hover | Background: `--color-interactive-hover`, Scale: 1.02 | `--color-interactive-hover` |
| Focus-visible | Outline: 2px solid blue, Offset: 2px | `--color-border-focus` |
| Active | Background: `--color-interactive-active` | `--color-interactive-active` |
| Disabled | Opacity: 0.5, Cursor: not-allowed | `--color-interactive-disabled` |
| Loading | Show spinner, Disable interaction | N/A |

#### Keyboard Behavior
- **Enter/Space:** Activate button
- **Tab:** Focus next interactive element
- **Shift+Tab:** Focus previous interactive element

#### Accessibility Requirements
- Must have accessible name (text content or `aria-label`)
- Must support keyboard activation
- Must have visible focus indicator with 3:1 contrast ratio
- Disabled buttons must have `aria-disabled="true"` or `disabled` attribute
- Loading state must include `aria-busy="true"`

#### Implementation Example
```css
.btn {
  font-family: var(--font-family-primary);
  font-size: var(--font-size-md);
  font-weight: var(--font-weight-medium);
  padding: var(--space-4) var(--space-6);
  border-radius: var(--radius-xs);
  transition: all var(--motion-duration-fast) var(--motion-ease-default);
}

.btn-primary {
  background: var(--color-interactive-default);
  color: var(--color-text-on-dark);
}

.btn-primary:hover:not(:disabled) {
  background: var(--color-interactive-hover);
  transform: scale(1.02);
}

.btn:focus-visible {
  outline: 2px solid var(--color-border-focus);
  outline-offset: 2px;
}
```

---

### 2. Input Component

#### Anatomy
```html
<div class="input-group">
  <label for="input-id" class="input-label">Label</label>
  <input 
    type="text" 
    id="input-id" 
    class="input-field" 
    placeholder="Placeholder text"
    aria-describedby="input-help"
  />
  <span id="input-help" class="input-hint">Helper text</span>
</div>
```

#### States & Behavior

| State | Visual Treatment | Token Reference |
|-------|-----------------|-----------------|
| Default | Border: `--color-border-default`, Background: transparent | `--color-border-default` |
| Hover | Border: `--color-border-emphasis` | `--color-border-emphasis` |
| Focus | Border: 2px `--color-border-focus`, Glow effect | `--color-border-focus` |
| Error | Border: `--color-text-error`, Show error message | `--color-text-error` |
| Disabled | Opacity: 0.5, Cursor: not-allowed | `--color-text-disabled` |
| Success | Border: `--color-text-success` | `--color-text-success` |

#### Accessibility Requirements
- Must have associated `<label>` with matching `for` attribute
- Error messages must be associated with `aria-describedby`
- Required fields must have `required` attribute or `aria-required="true"`
- Invalid inputs must have `aria-invalid="true"`
- Placeholder text must not be sole label

#### Long Content & Overflow
- Text inputs must use `text-overflow: ellipsis` when content exceeds width
- Multi-line inputs (textarea) must have defined `min-height` and `max-height`
- Scrollable on overflow with visible scrollbar

---

### 3. Link Component

#### Anatomy
```html
<a href="/path" class="link link-primary">
  Link text
  <span class="link-icon" aria-hidden="true">→</span>
</a>
```

#### Variants
- **Inline:** Within paragraph text
- **Standalone:** Independent navigation element
- **Navigation:** Header/footer links

#### States & Behavior

| State | Visual Treatment |
|-------|-----------------|
| Default | Color: `--color-text-tertiary`, Underline on hover |
| Hover | Color: `--color-interactive-hover`, Underline visible |
| Focus-visible | Outline: 2px solid `--color-border-focus` |
| Active | Color: `--color-interactive-active` |
| Visited | Same as default (no distinction for UX consistency) |

#### Keyboard Behavior
- **Enter:** Activate link
- **Tab/Shift+Tab:** Navigate between links

#### Accessibility Requirements
- Must have descriptive link text (avoid "click here")
- External links should include `rel="noopener noreferrer"`
- Icon-only links must have `aria-label`
- Links opening in new tab should indicate with `aria-label` or visible text

---

### 4. Navigation Component

#### Anatomy
```html
<nav aria-label="Main navigation" class="nav">
  <ul class="nav-list">
    <li class="nav-item">
      <a href="/" class="nav-link" aria-current="page">Home</a>
    </li>
    <li class="nav-item">
      <a href="/about" class="nav-link">About</a>
    </li>
  </ul>
</nav>
```

#### Responsive Behavior
- **Desktop (≥1024px):** Horizontal navigation with all items visible
- **Tablet (768-1023px):** Horizontal with condensed spacing
- **Mobile (<768px):** Hamburger menu with slide-out drawer

#### States & Behavior
- **Current page:** `aria-current="page"` with visual indicator
- **Hover:** Background highlight
- **Focus-visible:** Focus ring with high contrast

#### Accessibility Requirements
- Must use `<nav>` semantic element with `aria-label`
- Current page must have `aria-current="page"`
- Mobile menu button must have `aria-expanded` state
- Keyboard navigation must support arrow keys within menu
- Focus must trap within mobile menu when open

---

### 5. Card Component

#### Anatomy
```html
<article class="card">
  <div class="card-header">
    <h3 class="card-title">Title</h3>
  </div>
  <div class="card-body">
    <p class="card-description">Content</p>
  </div>
  <div class="card-footer">
    <a href="#" class="card-link">Action →</a>
  </div>
</article>
```

#### Variants
- **Default:** Minimal border, no shadow
- **Elevated:** Subtle shadow on `--color-surface-raised`
- **Interactive:** Hover effect with scale transform

#### States & Behavior
- **Default:** Background: `--color-surface-muted`, Border: subtle
- **Hover:** Background: `--color-surface-hover`, Transform: scale(1.02)
- **Focus-within:** Outline when child element focused

#### Long Content Handling
- Title must truncate with ellipsis after 2 lines
- Description must show max 3 lines with "Read more" expansion
- Images must maintain aspect ratio with `object-fit: cover`

---

## Content and Tone Standards

### Writing Principles
- **Concise:** Every word must serve a purpose
- **Confident:** Use active voice, avoid hedging language
- **Implementation-focused:** Provide actionable guidance

### Label Examples

| Context | ❌ Avoid | ✅ Use |
|---------|---------|--------|
| Button | Click here | Get started |
| Link | Learn more | View documentation |
| Error | Something went wrong | Email address is invalid |
| Empty state | No data | No projects yet. Create your first project. |

### Microcopy Patterns
- **Loading:** "Loading..." or specific action "Loading projects..."
- **Error:** Specific, actionable, and solution-oriented
- **Success:** Confirm action with next step if applicable
- **Empty state:** Explain why empty + primary action to populate

---

## Accessibility Requirements and Acceptance Criteria

### Testable Acceptance Criteria

#### Color Contrast
- ✅ **PASS:** Text primary on black background ≥ 4.5:1 contrast ratio
- ✅ **PASS:** Text secondary on black background ≥ 4.5:1 contrast ratio
- ✅ **PASS:** Interactive elements have 3:1 contrast with background
- ❌ **FAIL:** Text color contrast < 4.5:1 for body text
- ❌ **FAIL:** Text color contrast < 3:1 for large text (18px+)

#### Keyboard Navigation
- ✅ **PASS:** All interactive elements reachable via Tab key
- ✅ **PASS:** Tab order follows visual layout (left-to-right, top-to-bottom)
- ✅ **PASS:** Focus indicator visible with 3:1 contrast ratio
- ✅ **PASS:** Escape key closes modals and dropdowns
- ❌ **FAIL:** Keyboard focus trapped without escape mechanism
- ❌ **FAIL:** Interactive element not reachable via keyboard

#### Screen Reader Support
- ✅ **PASS:** All images have `alt` attribute (empty for decorative)
- ✅ **PASS:** Form inputs have associated `<label>` elements
- ✅ **PASS:** ARIA attributes used correctly per spec
- ✅ **PASS:** Headings follow hierarchical order (h1 → h2 → h3)
- ❌ **FAIL:** Icon-only button without accessible name

#### Touch Target Size
- ✅ **PASS:** Interactive elements minimum 44×44px touch target
- ✅ **PASS:** Adequate spacing between touch targets (8px minimum)
- ❌ **FAIL:** Button or link < 44×44px without sufficient padding

---

## Anti-Patterns and Prohibited Implementations

### ❌ Prohibited

1. **Low-contrast text combinations**
   ```css
   /* NEVER USE */
   color: #666666; /* on black background - fails WCAG AA */
   ```

2. **Hidden focus indicators**
   ```css
   /* NEVER USE */
   *:focus { outline: none; }
   ```

3. **One-off spacing values**
   ```css
   /* NEVER USE */
   margin: 13px; /* Not in spacing scale */
   ```

4. **Raw hex colors in components**
   ```css
   /* NEVER USE */
   background: #ff4925; /* Use --color-interactive-default */
   ```

5. **Ambiguous labels**
   ```html
   <!-- NEVER USE -->
   <button>Click here</button>
   <a href="#">Learn more</a> <!-- Without context -->
   ```

6. **Placeholder-only labels**
   ```html
   <!-- NEVER USE -->
   <input type="email" placeholder="Enter email"> <!-- Missing <label> -->
   ```

### ✅ Recommended

1. **Use semantic tokens**
   ```css
   background: var(--color-interactive-default);
   color: var(--color-text-primary);
   ```

2. **Explicit state handling**
   ```jsx
   <button 
     disabled={isLoading}
     aria-busy={isLoading}
     aria-disabled={isLoading}
   >
     {isLoading ? 'Loading...' : 'Submit'}
   </button>
   ```

3. **Descriptive link text**
   ```html
   <a href="/docs">View Nakula documentation</a>
   ```

---

## Edge Cases and Special Handling

### Long Content
- **Button labels:** Truncate after 20 characters with ellipsis, show full text in tooltip
- **Card titles:** Max 2 lines, then ellipsis
- **Descriptions:** Max 3 lines with "Read more" expansion

### Empty States
- Must include illustration or icon
- Must include descriptive text explaining why empty
- Must include primary action to populate (when applicable)

### Loading States
- Show skeleton loaders for content-heavy sections
- Show spinner for actions (button clicks, form submissions)
- Minimum loading duration: 300ms (prevent flash)

### Error States
- Display inline validation errors immediately on blur
- Display form-level errors at top of form
- Provide actionable guidance for resolution

### Responsive Breakpoints
- **Mobile:** <640px - Single column, touch-optimized
- **Tablet:** 640-1023px - Condensed layout
- **Desktop:** ≥1024px - Full feature set

---

## QA Checklist

### Visual QA
- [ ] All colors use semantic tokens from `tokens.css`
- [ ] All spacing values use scale from `tokens.css`
- [ ] Typography matches defined scale and weights
- [ ] Border radius uses `--radius-xs` or `--radius-sm`
- [ ] No hardcoded hex colors in component styles

### Interaction QA
- [ ] All buttons respond to hover with visual feedback
- [ ] All interactive elements have focus-visible indicator
- [ ] Hover states use tokens (`--color-interactive-hover`)
- [ ] Active states use tokens (`--color-interactive-active`)
- [ ] Disabled states prevent interaction and show visually

### Accessibility QA
- [ ] Color contrast ≥ 4.5:1 for body text
- [ ] Color contrast ≥ 3:1 for large text and UI elements
- [ ] All interactive elements keyboard accessible
- [ ] Tab order follows visual layout
- [ ] Focus indicator visible with 3:1 contrast
- [ ] All images have `alt` attribute
- [ ] All form inputs have `<label>` elements
- [ ] Error messages associated with inputs via `aria-describedby`
- [ ] ARIA attributes used correctly per WAI-ARIA spec

### Keyboard QA
- [ ] Tab moves focus forward through interactive elements
- [ ] Shift+Tab moves focus backward
- [ ] Enter activates buttons and links
- [ ] Space activates buttons and toggles checkboxes
- [ ] Escape closes modals, dropdowns, and menus
- [ ] Arrow keys navigate within menus and dropdowns

### Responsive QA
- [ ] Layout adapts at breakpoints (640px, 768px, 1024px)
- [ ] Touch targets ≥ 44×44px on mobile
- [ ] Text remains readable at all viewport sizes
- [ ] Images scale proportionally
- [ ] Navigation collapses to mobile menu <768px

### Content QA
- [ ] All labels are descriptive and contextual
- [ ] No "click here" or ambiguous link text
- [ ] Error messages are specific and actionable
- [ ] Loading states have clear messaging
- [ ] Empty states explain context and provide action

### Performance QA
- [ ] Animations use `transform` and `opacity` for GPU acceleration
- [ ] Transitions respect `prefers-reduced-motion`
- [ ] No layout shift during load
- [ ] Images have width and height attributes

---

## Implementation Notes

### Font Integration
```html
<!-- Add to <head> -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&display=swap" rel="stylesheet">
```

### Token Import
```css
/* Import at top of global styles */
@import './styles/tokens.css';
```

### Component Page Density (Reference)
Based on extracted site data:
- **Links:** 38 instances
- **Inputs:** 12 instances
- **Buttons:** 9 instances
- **Navigation:** 1 instance
- **Lists:** 1 instance

---

## Migration Notes

### From Current Implementation to Nakula Tokens

1. **Replace hardcoded colors:**
   ```css
   /* Before */
   background: #000000;
   color: #cacaca;
   
   /* After */
   background: var(--color-surface-base);
   color: var(--color-text-primary);
   ```

2. **Replace spacing values:**
   ```css
   /* Before */
   padding: 20px;
   margin: 24px;
   
   /* After */
   padding: var(--space-6);
   margin: var(--space-7);
   ```

3. **Update typography:**
   ```css
   /* Before */
   font-size: 24px;
   font-weight: 500;
   line-height: 1.05;
   
   /* After */
   font-size: var(--font-size-xl);
   font-weight: var(--font-weight-base);
   line-height: var(--line-height-tight);
   ```

---

## Resources

- **Design System Tokens:** `/styles/tokens.css`
- **WCAG 2.2 Guidelines:** https://www.w3.org/WAI/WCAG22/quickref/
- **WAI-ARIA Practices:** https://www.w3.org/WAI/ARIA/apg/

---

**Last Updated:** 2026-01-19  
**Version:** 1.0.0  
**Maintained by:** Design System Team
