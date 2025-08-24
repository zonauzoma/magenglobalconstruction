# Magen Global Construction Website

This repository contains the source code for the Magen Global Construction project.

## 📂 Project Structure
- package.json
- next.config.js
- postcss.config.js
- tailwind.config.js
- jsconfig.json
- /pages
  - _app.js
  - index.js
  - services.js
  - projects.js
  - about.js
  - contact.js
- /components
  - Layout.js
- /styles
  - globals.css
- /public
  - logo.png (placeholder)
  - favicon.ico (placeholder)

## 🚀 Getting Started

Clone the repository and follow the instructions below to set up and run the application.

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Visit [http://localhost:3000](http://localhost:3000) to see your site locally.

### 3. Build for Production
```bash
npm run build
npm start
```

### 4. Deployment (Vercel Recommended)
1. Push this project to a GitHub repository.
2. Go to [https://vercel.com](https://vercel.com), sign up with GitHub, and import your repository.
3. Vercel will auto-detect **Next.js**. Leave the default settings and click **Deploy**.
4. Once deployed, go to Project Settings → Domains, and add `magenglobalconstruction.com`.
5. Update your domain DNS records as instructed (usually an **A record** pointing to `76.76.21.21`).
6. Vercel provides free HTTPS automatically.

### 5. SEO Setup
Each page uses `<Head>` for title and description. Edit them for better SEO.

### 6. Contact Form
The contact form is static by default. To make it functional, connect it to:
- [Formspree](https://formspree.io/)
- [Getform](https://getform.io/)
- or create a custom API route using Next.js.

---

© 2025 Magen Global Construction. All rights reserved.