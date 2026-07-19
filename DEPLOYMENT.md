# 🚀 Deployment Guide - Tushar Pawar Portfolio

## 📋 Environment Variables Required

Your portfolio uses **Formspree** for the contact form. You need to set up these environment variables:

### Required Variables:

```bash
NEXT_PUBLIC_FORMSPREE_FORM_ID=myzgzjwz
NEXT_PUBLIC_CONTACT_EMAIL=pawartushar1215@gmail.com
NODE_ENV=production
```

---

## 🌐 Deploy on Netlify (Recommended - Rarely Blocked)

### Step 1: Sign Up
1. Go to [https://www.netlify.com/](https://www.netlify.com/)
2. Click **"Sign up with GitHub"**
3. Authorize Netlify

### Step 2: Deploy
1. Click **"Add new site"** → **"Import an existing project"**
2. Choose **"Deploy with GitHub"**
3. Select repository: **`tanuj-cmd-15/portfolio`**

### Step 3: Configure Build Settings
```
Build command: npm run build
Publish directory: .next
```

### Step 4: Add Environment Variables
In Netlify Dashboard:
1. Go to **Site settings** → **Environment variables**
2. Add these variables:
   - `NEXT_PUBLIC_FORMSPREE_FORM_ID` = `myzgzjwz`
   - `NEXT_PUBLIC_CONTACT_EMAIL` = `pawartushar1215@gmail.com`
   - `NODE_ENV` = `production`

### Step 5: Deploy
Click **"Deploy site"** and wait 2-3 minutes.

Your site will be live at: `https://your-site-name.netlify.app`

---

## 🔄 Alternative Platforms

### Option 1: Vercel (Best for Next.js)
**URL:** [https://vercel.com](https://vercel.com)

**Pros:**
- Built specifically for Next.js
- Automatic deployments
- Free tier

**Cons:**
- May be blocked in some networks

**Deploy Steps:**
1. Sign up with GitHub at [vercel.com](https://vercel.com)
2. Import `tanuj-cmd-15/portfolio` repository
3. Add environment variables in Project Settings
4. Deploy automatically

---

### Option 2: Render
**URL:** [https://render.com](https://render.com)

**Pros:**
- Free tier available
- Good global CDN
- Rarely blocked

**Deploy Steps:**
1. Sign up at [render.com](https://render.com)
2. New → **Web Service**
3. Connect GitHub repository
4. Build command: `npm run build`
5. Start command: `npm start`
6. Add environment variables
7. Deploy

---

### Option 3: Cloudflare Pages
**URL:** [https://pages.cloudflare.com](https://pages.cloudflare.com)

**Pros:**
- Excellent CDN (rarely blocked)
- Free tier
- Fast globally

**Deploy Steps:**
1. Sign up at [pages.cloudflare.com](https://pages.cloudflare.com)
2. Connect GitHub account
3. Select `tanuj-cmd-15/portfolio`
4. Framework preset: **Next.js**
5. Add environment variables
6. Deploy

---

### Option 4: Railway
**URL:** [https://railway.app](https://railway.app)

**Pros:**
- Modern platform
- Easy to use
- Free tier

**Deploy Steps:**
1. Sign up at [railway.app](https://railway.app)
2. New Project → Deploy from GitHub
3. Select repository
4. Add environment variables
5. Deploy

---

## 📧 Formspree Setup (Contact Form)

Your contact form uses Formspree with ID: **myzgzjwz**

If you want to change the form or email:

1. Go to [https://formspree.io/](https://formspree.io/)
2. Sign up with your email: `pawartushar1215@gmail.com`
3. Create a new form or use existing form ID
4. Update `NEXT_PUBLIC_FORMSPREE_FORM_ID` in environment variables
5. Update the form ID in `app/page.jsx` (line 613):
   ```javascript
   const [state, handleSubmit] = useForm("YOUR_NEW_FORM_ID");
   ```

---

## 🔧 Local Development

1. Clone the repository:
```bash
git clone https://github.com/tanuj-cmd-15/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env.local` file:
```bash
NEXT_PUBLIC_FORMSPREE_FORM_ID=myzgzjwz
NEXT_PUBLIC_CONTACT_EMAIL=pawartushar1215@gmail.com
NODE_ENV=development
```

4. Run development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000)

---

## 🎯 What's Included

- ✅ Next.js 14 with App Router
- ✅ Tailwind CSS for styling
- ✅ Framer Motion for animations
- ✅ React Icons (GitHub, LinkedIn, Twitter, Threads, LeetCode)
- ✅ Formspree for contact form
- ✅ Responsive design
- ✅ 3D animated social icons
- ✅ Dark theme with accent colors

---

## 🌐 Custom Domain Setup

After deployment, you can add a custom domain:

### Netlify:
1. Site settings → Domain management
2. Add custom domain
3. Update DNS records (A record or CNAME)

### Vercel:
1. Project settings → Domains
2. Add domain
3. Configure DNS

---

## 📞 Support

For issues or questions:
- **Email:** pawartushar1215@gmail.com
- **GitHub:** [tanuj-cmd-15](https://github.com/tanuj-cmd-15)
- **LinkedIn:** [Tushar Pawar](https://www.linkedin.com/in/tushar-pawar-0524a7213/)

---

## 📝 License

This portfolio is open source and available for personal use.

---

**Built with ❤️ by Tushar Pawar**
