# **🌐 shahirahmed.com**

![Home page of shahirahmed.com](docs/screenshots/home.webp)

Welcome to **shahirahmed.com**, my personal portfolio website! This is where I showcase my skills, projects, and professional journey as a Software Engineer. Whether you're here to explore my work, learn more about me, or get in touch, this is the place to do it. 🌟

---

## **🌍 Live Preview**

Visit the live site: [shahirahmed.com](https://shahirahmed.com)

---

## **📖 About the Website**

This portfolio is designed to provide visitors with an intuitive and engaging experience while exploring who I am and what I do. It includes:

- **Home Page**: A short introduction with a typing animation, a preview of my background, my three featured projects, and a way to get in touch.
- **About Page**: My background, the tools I've worked with, work experience (Sarva, Mermaid.js, FarmData2, teaching, 84 Lumber), open source contributions, hackathons, education, certifications, and GitHub stats, with a sticky table of contents.
- **Projects Page**: All 16 of my personal and hackathon projects, with filters, search, live demos, and source code links.
- **Contact Page**: A contact form powered by EmailJS, plus links to all my socials.
- **404 Page**: A helpful (and fun) guide for lost visitors.

---

## **📸 Screenshots**

| About | Projects |
| ----- | -------- |
| ![About page](docs/screenshots/about.webp) | ![Projects page](docs/screenshots/projects.webp) |
| **Featured projects on the home page** | **Contact** |
| ![Featured projects on the home page](docs/screenshots/home-projects.webp) | ![Contact page](docs/screenshots/contact.webp) |

### On mobile

<p align="center">
  <img src="docs/screenshots/mobile-home.webp" alt="Home page on mobile" width="250" />
  <img src="docs/screenshots/mobile-about.webp" alt="About page on mobile" width="250" />
  <img src="docs/screenshots/mobile-projects.webp" alt="Projects page on mobile" width="250" />
</p>

---

## **🎨 Features**

- **Responsive Design**: Looks great on any device, from widescreens to smartphones.
- **Scroll Animations**: Home page sections fade in as you scroll, and the animation is skipped for visitors who prefer reduced motion.
- **Custom Domain**: Hosted at [shahirahmed.com](https://shahirahmed.com).
- **404 Error Page**: User-friendly error handling with quick navigation options.
- **SEO Optimized**: Server-side rendering, structured data (Person, WebSite, Occupation, Credential schemas), Open Graph, Twitter Cards, and comprehensive meta tags for maximum discoverability.
- **AI-Friendly**: Content optimized for AI chatbots and search engines with dedicated discovery files.
- **Performance Optimized**: Lazy-loaded images, DNS prefetch, HSTS, compressed responses, and long-lived cache headers for high Core Web Vitals scores.
- **PWA Ready**: Installable as a progressive web app with manifest and theme colors.

---

## **🔧 Tech Stack**

This project is built using modern web development tools:

| Category          | Technologies                               |
| ----------------- | ------------------------------------------ |
| **Framework**     | Next.js 15 (App Router)                    |
| **Frontend**      | React 18                                   |
| **Styling**       | Material UI 6 & Custom CSS                 |
| **Animations**    | Typed.js, React Vertical Timeline          |
| **Form Handling** | EmailJS                                    |
| **Analytics**     | Vercel Analytics & Speed Insights          |
| **Hosting**       | Vercel                                     |
| **Domain**        | [shahirahmed.com](https://shahirahmed.com) |

### **🔍 SEO & Discoverability**

- **Static Site Generation (SSG)** for optimal SEO performance and fast page loads
- **JSON-LD Structured Data** with rich schemas:
  - `Person` with `hasOccupation`, `hasCredential`, `knowsAbout`, and `sameAs`
  - `WebSite`, `ProfilePage`, `AboutPage`, `ContactPage`, `CollectionPage`
  - `BreadcrumbList` on every page
  - `ItemList` with `SoftwareSourceCode` entries for all projects
- **Dynamic sitemap.xml** (`/sitemap.xml`) for search engine crawling
- **Optimized robots.txt** (`/robots.txt`) with allowances for Googlebot, Bingbot, Applebot, and AI crawlers (GPTBot, ClaudeBot, PerplexityBot)
- **Open Graph & Twitter Cards** for rich social media previews
- **Dynamic OG Images** generated at the edge via `opengraph-image.jsx` and `twitter-image.jsx`
- **AI-Friendly Content**:
  - `/llms.txt` - Narrative profile for AI chatbots
  - `/llms.json` - Machine-readable profile, experience, projects, skills, and education data
  - `/.well-known/ai-plugin.json` + `/openapi.yaml` - AI plugin-style discovery manifest
- **PWA Manifest** (`/manifest.json`) for app-like installability
- **OpenSearch** (`/opensearch.xml`) for browser search integration
- **Optimized Images** with Next.js Image component and lazy loading

### **🔒 Security & Performance**

- **Strict-Transport-Security (HSTS)** with 2-year max-age and preload
- **Permissions-Policy** restricting camera, microphone, and geolocation
- **X-Frame-Options**, **X-Content-Type-Options**, **Referrer-Policy** headers
- **DNS prefetch** for third-party domains (fonts, badge images)
- **Lazy loading** with `loading="lazy"` and `decoding="async"` on below-fold images
- **Long-lived cache headers** (1 year, immutable) on static assets
- **Gzip compression** enabled
- **Powered-by header** removed

---

## **📂 Project Structure**

```plaintext
├── README.md
├── docs/
│   └── screenshots/                # Images used in this README
├── jsconfig.json
├── next.config.js
├── package.json
├── vercel.json
├── public/
│   ├── .well-known/
│   │   └── ai-plugin.json
│   ├── background.jpg
│   ├── figma/                      # Illustrations and doodle background
│   ├── humans.txt
│   ├── icon.svg
│   ├── llms.txt
│   ├── llms.json
│   ├── manifest.json
│   ├── openapi.yaml
│   ├── opensearch.xml
│   └── shahir.jpeg
└── src/
    ├── app/
    │   ├── layout.jsx              # Root layout with SEO metadata & JSON-LD
    │   ├── page.jsx                # Home page
    │   ├── not-found.jsx           # 404 page
    │   ├── robots.js               # Dynamic robots.txt
    │   ├── sitemap.js              # Dynamic sitemap.xml
    │   ├── opengraph-image.jsx     # Dynamic OG image (edge runtime)
    │   ├── twitter-image.jsx       # Dynamic Twitter image (edge runtime)
    │   ├── about/
    │   │   └── page.jsx
    │   ├── contact/
    │   │   └── page.jsx
    │   └── projects/
    │       └── page.jsx
    ├── assets/                     # Images and static assets
    ├── components/
    │   ├── About.jsx
    │   ├── AboutArt.jsx
    │   ├── ContactArt.jsx
    │   ├── ContactMe.jsx
    │   ├── ErrorPage.jsx
    │   ├── Footer.jsx
    │   ├── GitHubStats.jsx
    │   ├── HomePage.jsx
    │   ├── Navbar.jsx
    │   ├── Projects.jsx
    │   ├── Resume.jsx
    │   ├── ScrollCue.jsx
    │   ├── SocialIcons.jsx
    │   └── TableOfContents.jsx
    └── css/
        ├── normalize.css
        └── style.css
```

---

## **🚀 Get Started**

Here's how you can run the website locally:

1. **Clone the Repository**

   ```bash
   git clone https://github.com/Shahir-47/shahirahmed.com.git
   cd shahirahmed.com
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Run the Development Server**

   ```bash
   npm run dev
   ```

4. **Build for Production**

   ```bash
   npm run build
   ```

5. **Start Production Server**

   ```bash
   npm run start
   ```

Now you're all set! 🎉

---

## **🌐 Deployment**

This project is deployed on **Vercel** with automatic deployments on push to `main`.

### Deploy Your Own

1. Fork this repository
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub
3. Click "Add New Project" and import your forked repo
4. Vercel will auto-detect Next.js settings
5. Click "Deploy"

### Environment Variables (Optional)

If you want to use the contact form, add these to Vercel:

- `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
- `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
- `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`

For Google Search Console verification:

- `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`

---

## **🤝 Contributing**

Suggestions or contributions are always welcome! Here's how you can contribute:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b your-feature-branch
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Your message"
   ```
4. Push to your branch:
   ```bash
   git push origin your-feature-branch
   ```
5. Open a pull request. 🚀

---

## **📬 Get in Touch**

Feel free to reach out through:

- **[Contact Page](https://shahirahmed.com/contact)**: Use the built-in form to send me a message.
- **[LinkedIn](https://www.linkedin.com/in/shahir47/)**: Let's connect!
- **[GitHub](https://github.com/Shahir-47)**: Check out my work.

---

## **📜 License**

This project is licensed under the [MIT License](LICENSE). Feel free to use and adapt it for your own purposes. Just give credit where it's due!

---

Thank you for checking out my portfolio! 🎉
