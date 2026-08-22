# Tushar Pawar — Bento Grid Dark Theme Portfolio

An ultra-modern, high-performance portfolio website built with **Next.js**, **React**, and **Tailwind CSS**. Redesigned with a premium dark-theme Bento Grid layout inspired by cutting-edge developer portfolios, featuring a clean neural-network constellation background and smooth micro-animations.

## 🛠️ Tech Stack & Key Features
- **Framework:** Next.js 14 (App Router)
- **Styling:** Next-optimized Tailwind CSS
- **Animations:** Framer Motion (for reveal animations and coordinate stagger effects)
- **Icons:** React Icons & Lucide Icons
- **Interactive Background:** HTML5 Canvas Constellation Galaxy (Neural network nodes reacting to mouse cursor repulsion)
- **Interactive Bento Cards:** Mouse-hover spotlight gradient tracking effect (pure CSS custom property transition)
- **Contact Integration:** Formspree react component for seamless form submissions.

---

## 📂 Project Structure
```text
portfolio/
├── app/
│   ├── globals.css         # Custom design tokens, Bento utilities & base styling
│   ├── layout.jsx          # Font declarations, metadata, and canvas layer
│   └── page.jsx            # Main interactive single-page layout (Bento sections)
├── components/
│   ├── ui/                 # Reusable UI primitives
│   ├── Header.jsx          # Glassmorphism sticky navbar
│   ├── Nav.jsx             # Active desktop navigation pills
│   ├── MobileNav.jsx       # Side-drawer responsive menu
│   ├── ParticleGalaxy.jsx  # Floating constellation interactive background
│   └── Social.jsx          # Circular clean social links
└── tailwind.config.js      # Core extensions for colors (copper & zinc scales) & animation keyframes
```

---

## 🎨 Design Tokens (Custom Theme)
- **Primary Background:** `#000000` (Pure Black)
- **Card Background:** `#09090b` (Zinc-950)
- **Accent Color:** `#B87333` (Copper/Bronze)
- **Typography:**
  - **Headings:** Cabinet Grotesk (800)
  - **Body text:** Outfit (300 to 700)
  - **Monospace/Labels:** JetBrains Mono

---

## 🖥️ Getting Started

### 1. Clone & Install Dependencies
Ensure you have Node.js installed on your machine.
```bash
# Install packages
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view your local copy.

### 3. Build for Production
To generate an optimized build of the site:
```bash
npm run build
npm run start
```

---

## 📝 Personalizing the Portfolio
All details can be edited inside [`app/page.jsx`](file:///c:/Users/pawar/OneDrive/Desktop/New%20folder/portfolio/app/page.jsx):
- **Hero Title & Taglines:** Update the top titles, resume downloads, and pulsing availability badge.
- **Projects Array:** Add or update custom cards under the `projects` constant.
- **Timeline Array:** Update M.Tech & B.E. research points under the `timeline` constant.
- **Skills Categories:** Add your programming languages, machine learning frameworks, or cloud platforms under `skills`.
- **Contact Form Endpoint:** Update the Formspree ID inside the contact section:
  ```jsx
  const [formState, handleSubmit] = useForm("your-formspree-id");
  ```
