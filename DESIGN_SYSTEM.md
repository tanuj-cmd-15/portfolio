# Tushar Pawar Portfolio - Design System

## Mission

Create implementation-ready, token-driven UI guidance for Tushar Pawar's portfolio that is optimized for consistency, accessibility, and fast delivery across all sections.

## Brand

- **Product/Brand**: Tushar Pawar - ML Engineer & Full-Stack Developer Portfolio
- **URL**: https://tusharpawar1217-portfolio.netlify.app/
- **Audience**: Recruiters, hiring managers, tech professionals, potential collaborators
- **Product Surface**: Personal portfolio website

---

## Style Foundations

### Visual Style
Clean, functional, implementation-oriented with minimal aesthetic

### Typography System

**Base Configuration:**
- Primary font: `Inter, sans-serif`
- Base size: `13.6px` (1rem)
- Base weight: `400`
- Base line-height: `1.5` (20.4px)

**Type Scale:**
```css
--font-size-xs:   12.24px  /* Small labels, captions */
--font-size-sm:   13.6px   /* Body text, buttons */
--font-size-md:   14.69px  /* Emphasized body */
--font-size-lg:   16px     /* Subheadings */
--font-size-xl:   18.51px  /* Card titles */
--font-size-2xl:  24.24px  /* Section subheadings */
--font-size-3xl:  47.8px   /* Page headings */
--font-size-4xl:  59.84px  /* Hero titles */
```

### Color Palette

**Surface Colors:**
- `--color-surface-base`: #000000 (Main background)
- `--color-surface-elevated`: #0d0e13 (Raised surfaces)
- `--color-surface-card`: #1a1d2e (Card backgrounds)
- `--color-surface-muted`: #e5e2dd (Light accent)
- `--color-surface-strong`: #c8603d (Primary accent)

**Text Colors:**
- `--color-text-primary`: #ffffff (Headings, primary content)
- `--color-text-secondary`: #6f6f73 (Supporting text)
- `--color-text-tertiary`: #f3ede3 (De-emphasized text)
- `--color-text-muted`: rgba(255,255,255,0.6) (Subtle text)

**Border Colors:**
- `--color-border-default`: #0d0e13
- `--color-border-subtle`: rgba(255,255,255,0.1)
- `--color-border-strong`: rgba(255,255,255,0.3)

### Spacing Scale
```css
--space-1: 6.8px    /* Tight spacing */
--space-2: 10px     /* Compact spacing */
--space-3: 10.88px  /* Button padding */
--space-4: 13.6px   /* Standard gap */
--space-5: 20.4px   /* Section padding */
--space-6: 27.2px   /* Card padding */
--space-7: 62.97px  /* Large section gap */
--space-8: 95.2px   /* Hero padding */
```

### Border Radius
```css
--radius-xs: 3.4px   /* Minimal rounding */
--radius-sm: 6.8px   /* Small elements */
--radius-md: 10px    /* Cards, inputs */
--radius-lg: 13.6px  /* Large cards */
--radius-full: 50px  /* Pills, circles */
```

### Motion Tokens
```css
--motion-duration-instant: 100ms  /* Immediate feedback */
--motion-duration-fast: 300ms     /* Quick transitions */
--motion-duration-normal: 500ms   /* Standard animations */
--motion-duration-slow: 600ms     /* Deliberate motion */
--motion-duration-slower: 1000ms  /* Extended animations */
```

---

## Accessibility Requirements

### Target: WCAG 2.2 Level AA

**Non-Negotiable Requirements:**

1. **Keyboard Navigation**
   - All interactive elements MUST be keyboard accessible
   - Tab order MUST follow logical reading order
   - Focus indicators MUST be visible with minimum 2px outline
   - Escape key MUST close modals and dropdowns

2. **Color Contrast**
   - Text on background MUST meet 4.5:1 ratio for normal text
   - Large text (18pt+) MUST meet 3:1 ratio
   - UI components MUST meet 3:1 ratio against adjacent colors
   - Focus indicators MUST meet 3:1 contrast ratio

3. **Screen Reader Support**
   - All images MUST have meaningful alt text
   - Form inputs MUST have associated labels
   - Buttons MUST have descriptive text or aria-label
   - Loading states MUST announce via aria-live regions

4. **Motion and Animation**
   - All animations MUST respect prefers-reduced-motion
   - Auto-playing animations MUST have pause controls
   - Transitions MUST not flash more than 3 times per second

---

## Component Library

### 1. Button Component

**Anatomy:**
```jsx
<button 
  className="btn [btn-primary|btn-secondary|btn-ghost]"
  disabled={false}
  aria-busy={false}
>
  <span className="btn-icon">Icon</span>
  <span className="btn-text">Label</span>
</button>
```

**Variants:**
- `btn-primary`: Solid background, high emphasis
- `btn-secondary`: Outlined, medium emphasis
- `btn-ghost`: Minimal, low emphasis

**States:**
- Default: `color-text-primary`, `border-subtle`
- Hover: `border-strong`, scale up slightly
- Focus-visible: 2px outline with `color-interactive-focus`
- Active: scale(0.98), slightly darker
- Disabled: opacity 0.5, cursor not-allowed
- Loading: shimmer animation, pointer-events none

**Spacing:**
- Padding: `space-3` vertical, `space-5` horizontal
- Gap between icon and text: `space-2`
- Minimum touch target: 44x44px

**Keyboard Behavior:**
- Enter/Space: Activates button
- Tab: Moves focus to next element

**Accessibility Checklist:**
- ✅ Has visible focus indicator
- ✅ Has descriptive text or aria-label
- ✅ Disabled state uses aria-disabled
- ✅ Loading state announces via aria-busy

---

### 2. Card Component

**Anatomy:**
```jsx
<article className="card">
  <div className="card-media">Image/Icon</div>
  <div className="card-content">
    <h3 className="card-title">Title</h3>
    <p className="card-description">Description</p>
    <div className="card-actions">
      <button>Action</button>
    </div>
  </div>
</article>
```

**Variants:**
- `card-elevated`: With shadow
- `card-outlined`: Border only
- `card-interactive`: Hover effects

**States:**
- Default: `bg-card`, `border-subtle`
- Hover: `border-strong`, translateY(-4px)
- Focus-within: outline on card
- Loading: shimmer overlay

**Spacing:**
- Padding: `space-6`
- Gap between elements: `space-4`
- Image aspect ratio: 16:9 or 4:3

**Responsive Behavior:**
- Mobile: Full width, stack vertically
- Tablet: 2 columns, 50% width
- Desktop: 3-4 columns, fixed width

**Accessibility Checklist:**
- ✅ Uses semantic `<article>` element
- ✅ Has accessible heading hierarchy
- ✅ Images have alt text
- ✅ Interactive cards have hover/focus states

---

### 3. Navigation Component

**Anatomy:**
```jsx
<nav aria-label="Main navigation">
  <ul className="nav-list">
    <li className="nav-item">
      <a href="#section" className="nav-link">
        Label
      </a>
    </li>
  </ul>
</nav>
```

**States:**
- Default: `text-muted`
- Hover: `text-primary`, underline
- Active/Current: `text-primary`, border-bottom
- Focus-visible: outline with offset

**Spacing:**
- Gap between items: `space-5`
- Padding: `space-4` vertical, `space-5` horizontal

**Keyboard Behavior:**
- Tab: Move between links
- Enter: Activate link
- Arrow keys: Optional for horizontal nav

**Mobile Behavior:**
- Below 768px: Hamburger menu
- Menu slides in from right
- Overlay backdrop dims page
- Close on outside click or Escape

**Accessibility Checklist:**
- ✅ Has aria-label or aria-labelledby
- ✅ Current page marked with aria-current
- ✅ Mobile menu has aria-expanded
- ✅ Focus trapped when menu open

---

### 4. Input Component

**Anatomy:**
```jsx
<div className="input-group">
  <label htmlFor="input-id" className="input-label">
    Label
  </label>
  <input 
    id="input-id"
    type="text"
    className="input"
    aria-describedby="input-help"
    aria-invalid={false}
  />
  <span id="input-help" className="input-help">
    Help text
  </span>
</div>
```

**States:**
- Default: `border-subtle`
- Hover: `border-interactive`
- Focus: `border-strong`, focus ring
- Error: `border-error`, error message
- Disabled: opacity 0.5
- Readonly: different background

**Spacing:**
- Height: 44px minimum (touch target)
- Padding: `space-3` vertical, `space-4` horizontal
- Gap between label and input: `space-2`

**Validation:**
- Inline validation on blur
- Error messages must be descriptive
- Success state optional
- Required fields marked with asterisk

**Accessibility Checklist:**
- ✅ Label associated with for/id
- ✅ Help text linked via aria-describedby
- ✅ Error announced via aria-invalid
- ✅ Required marked with aria-required

---

### 5. Modal/Dialog Component

**Anatomy:**
```jsx
<div 
  role="dialog" 
  aria-modal="true"
  aria-labelledby="modal-title"
  className="modal"
>
  <div className="modal-backdrop" />
  <div className="modal-content">
    <h2 id="modal-title">Title</h2>
    <div className="modal-body">Content</div>
    <div className="modal-actions">
      <button>Cancel</button>
      <button>Confirm</button>
    </div>
  </div>
</div>
```

**States:**
- Opening: Fade in backdrop, scale up content
- Open: Full opacity, focus trapped
- Closing: Fade out, scale down

**Keyboard Behavior:**
- Escape: Closes modal
- Tab: Cycles through focusable elements
- Initial focus on first interactive element

**Spacing:**
- Modal padding: `space-6`
- Max width: 90vw or 600px
- Min height: auto, max height: 90vh

**Accessibility Checklist:**
- ✅ Has role="dialog"
- ✅ Has aria-modal="true"
- ✅ Title linked via aria-labelledby
- ✅ Focus trapped within modal
- ✅ Focus returns to trigger on close
- ✅ Escape closes modal

---

## Content Guidelines

### Writing Tone

**Voice Characteristics:**
- Confident but not arrogant
- Technical but accessible
- Concise and action-oriented
- Professional yet personable

**Do's:**
- Use active voice
- Lead with value
- Be specific with metrics
- Use industry terminology correctly

**Don'ts:**
- Avoid jargon without context
- Don't use filler words
- Avoid passive constructions
- Don't make unsubstantiated claims

**Examples:**

✅ **Good:** "Built a CNN-BiLSTM model achieving 98.77% accuracy on 34,700+ audio samples"

❌ **Bad:** "Used advanced deep learning techniques to create a really good model"

✅ **Good:** "Reduced processing latency by 40% through optimized PostgreSQL queries"

❌ **Bad:** "Made the system faster using database improvements"

---

## Anti-Patterns

### Prohibited Implementations

**1. Color Usage:**
- ❌ Don't use raw hex colors (`#ff0000`)
- ✅ Use semantic tokens (`--color-status-error`)

**2. Spacing:**
- ❌ Don't use arbitrary margins (`margin: 15px`)
- ✅ Use spacing scale (`margin: var(--space-4)`)

**3. Typography:**
- ❌ Don't use pixel values (`font-size: 18px`)
- ✅ Use type scale (`font-size: var(--font-size-xl)`)

**4. Accessibility:**
- ❌ Don't hide focus indicators
- ❌ Don't use `<div>` for buttons
- ❌ Don't forget alt text on images
- ❌ Don't have touch targets smaller than 44x44px

**5. Responsiveness:**
- ❌ Don't use fixed widths on mobile
- ❌ Don't make users scroll horizontally
- ❌ Don't hide critical content on small screens

---

## QA Checklist

### Before Deployment

**Functionality:**
- [ ] All links navigate correctly
- [ ] Forms validate and submit properly
- [ ] Images load and display correctly
- [ ] Animations complete without errors

**Accessibility:**
- [ ] Keyboard navigation works throughout
- [ ] Focus indicators visible on all interactive elements
- [ ] Screen reader announces all content correctly
- [ ] Color contrast meets WCAG 2.2 AA (4.5:1)
- [ ] All images have descriptive alt text
- [ ] Form inputs have associated labels
- [ ] Reduced motion is respected

**Responsiveness:**
- [ ] Layout works on 320px width
- [ ] No horizontal scrolling on mobile
- [ ] Touch targets are minimum 44x44px
- [ ] Text is readable without zoom

**Performance:**
- [ ] Images are optimized and compressed
- [ ] Fonts load without flash of unstyled text
- [ ] Animations don't cause jank
- [ ] Page loads in under 3 seconds

**Browser Compatibility:**
- [ ] Works in Chrome (last 2 versions)
- [ ] Works in Firefox (last 2 versions)
- [ ] Works in Safari (last 2 versions)
- [ ] Works in Edge (last 2 versions)

**Content:**
- [ ] No spelling or grammar errors
- [ ] All metrics and dates are accurate
- [ ] Contact information is up to date
- [ ] External links open in new tab

---

## Implementation Priority

**Phase 1: Foundation**
1. Import design tokens
2. Update base typography
3. Implement color system
4. Add focus-visible styles

**Phase 2: Components**
1. Update button components
2. Refactor card components
3. Enhance navigation
4. Improve form inputs

**Phase 3: Accessibility**
1. Audit keyboard navigation
2. Test with screen readers
3. Verify color contrast
4. Add ARIA attributes

**Phase 4: Polish**
1. Optimize animations
2. Test responsive layouts
3. Performance audit
4. Cross-browser testing

---

## Resources

- WCAG 2.2 Guidelines: https://www.w3.org/WAI/WCAG22/quickref/
- Contrast Checker: https://webaim.org/resources/contrastchecker/
- Keyboard Testing: https://www.w3.org/WAI/perspective-videos/keyboard/
- Screen Reader Testing: https://www.nvaccess.org/download/

---

**Last Updated:** 2026-07-21
**Version:** 1.0.0
**Maintained by:** Tushar Pawar
