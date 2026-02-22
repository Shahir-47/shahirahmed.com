# **🌐 shahirahmed.com**

![image](https://github.com/user-attachments/assets/49e456e2-cbed-4db5-97f4-8cb5561c389a)

Welcome to **shahirahmed.com**, my personal portfolio website! This is where I showcase my skills, projects, and professional journey as a Software Engineer. Whether you're here to explore my work, learn more about me, or get in touch, this is the place to do it. 🌟

---

## **🌍 Live Preview**

Visit the live site: [shahirahmed.com](https://shahirahmed.com)

---

## **📖 About the Website**

This portfolio is designed to provide visitors with an intuitive and engaging experience while exploring who I am and what I do. It includes:

- **Home Page**: A friendly introduction with a typing animation showcasing my roles and quick navigation to all sections.
- **About Page**: My background, work experience (Sarva, FarmData2, Mermaid.js, 84 Lumber), open source contributions, hackathon projects, education, certifications, and GitHub stats, with a sticky table of contents.
- **Projects Page**: A filterable and searchable gallery of 16 projects across professional, open source, hackathon, and personal categories with live demos and source code links.
- **Contact Page**: A fully functional contact form powered by EmailJS, plus links to all my socials.
- **404 Page**: A helpful (and fun) guide for lost visitors.

---

## **🎨 Features**

- **Responsive Design**: Looks great on any device, from widescreens to smartphones.
- **Smooth Page Transitions**: Seamless animations enhance the browsing experience.
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
├── jsconfig.json
├── next.config.js
├── package.json
├── vercel.json
├── public/
│   ├── .well-known/
│   │   └── ai-plugin.json
│   ├── background.jpg
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
    │   ├── ContactMe.jsx
    │   ├── ErrorPage.jsx
    │   ├── Footer.jsx
    │   ├── GitHubStats.jsx
    │   ├── HomePage.jsx
    │   ├── Navbar.jsx
    │   ├── Projects.jsx
    │   ├── Resume.jsx
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
Let me know if you need anything else! 😊
