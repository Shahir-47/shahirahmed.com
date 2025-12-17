# **🌐 shahirahmed.com**

![image](https://github.com/user-attachments/assets/49e456e2-cbed-4db5-97f4-8cb5561c389a)

Welcome to **shahirahmed.com**—my personal portfolio website! This is where I showcase my skills, projects, and professional journey as a software developer. Whether you're here to explore my work, learn more about me, or get in touch—this is the place to do it. 🌟

---

## **🌍 Live Preview**

Visit the live site: [shahirahmed.com](https://shahirahmed.com)

---

## **📖 About the Website**

This portfolio is designed to provide visitors with an intuitive and engaging experience while exploring who I am and what I do. It includes:

- **Home Page**: A friendly introduction to welcome you.
- **About Page**: My background, education, skills, and experience—all in one place.
- **Projects Page**: A gallery of my best work with links to live demos and source code.
- **Contact Page**: A fully functional contact form, plus links to all my socials.
- **404 Page**: A helpful (and fun) guide for lost visitors.

---

## **🎨 Features**

- **Responsive Design**: Looks great on any device, from widescreens to smartphones.
- **Smooth Page Transitions**: Seamless animations enhance the browsing experience.
- **Custom Domain**: Hosted at [shahirahmed.com](https://shahirahmed.com).
- **404 Error Page**: User-friendly error handling with quick navigation options.
- **SEO Optimized**: Server-side rendering, structured data, and meta tags for maximum discoverability.
- **AI-Friendly**: Content optimized for AI chatbots and search engines.

---

## **🔧 Tech Stack**

This project is built using modern web development tools:

| Category | Technologies |
|----------|-------------|
| **Framework** | Next.js 15 (App Router) |
| **Frontend** | React 18 |
| **Styling** | Material UI 6 & Custom CSS |
| **Animations** | Typed.js, React Vertical Timeline |
| **Form Handling** | EmailJS |
| **Hosting** | Vercel |
| **Domain** | [shahirahmed.com](https://shahirahmed.com) |

### **🔍 SEO & Discoverability**

- **Server-Side Rendering (SSR)** for optimal SEO performance
- **JSON-LD Structured Data** (Person, WebSite, ProfilePage schemas)
- **Dynamic sitemap.xml** (`/sitemap.xml`) for search engine crawling
- **Optimized robots.txt** (`/robots.txt`) with AI bot allowances
- **Open Graph & Twitter Cards** for rich social media previews
- **AI-Friendly Content**:
  - `/llms.txt` - Structured content for AI chatbots
  - `/.well-known/ai-plugin.json` - AI plugin manifest
- **PWA Manifest** (`/manifest.json`) for app-like experience
- **OpenSearch** (`/opensearch.xml`) for browser search integration
- **Optimized Images** with Next.js Image component

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
│   ├── humans.txt
│   ├── llms.txt
│   ├── manifest.json
│   └── opensearch.xml
└── src/
    ├── app/
    │   ├── layout.jsx          # Root layout with SEO metadata
    │   ├── page.jsx            # Home page
    │   ├── not-found.jsx       # 404 page
    │   ├── robots.js           # Dynamic robots.txt
    │   ├── sitemap.js          # Dynamic sitemap.xml
    │   ├── about/
    │   │   └── page.jsx
    │   ├── contact/
    │   │   └── page.jsx
    │   └── projects/
    │       └── page.jsx
    ├── assets/                 # Images and static assets
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
    │   └── SocialIcons.jsx
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

---

## **📜 License**

This project is licensed under the [MIT License](LICENSE). Feel free to use and adapt it for your own purposes—just give credit where it's due!

---

Thank you for checking out my portfolio! 🎉
Let me know if you need anything else! 😊
