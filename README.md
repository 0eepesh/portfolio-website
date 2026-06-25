# Deepesh Sonkar | Professional Full-Stack Developer Portfolio

A premium, modern developer portfolio website designed with a minimal tech luxury theme (warm amber golds, sleek bronzes, and soft cream/white backgrounds). The site features fluid layouts, responsive navigation, scroll-triggered animations, and a simulated enterprise dashboard demo.

## 🛠️ Technology Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vite.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Routing**: [React Router v7](https://reactrouter.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Contact Form Integration**: [Web3Forms](https://web3forms.com/)

## 📂 Project Structure

```text
├── public/                 # Static assets (images, redirects configuration)
│   ├── favicon.svg         # Favicon
│   ├── hero.png            # Hero section illustration
│   ├── pfp.png             # Profile photo
│   ├── _redirects          # Netlify routing configuration
├── src/
│   ├── components/
│   │   └── ScrollReveal.jsx # Intersection Observer scroll animation component
│   ├── pages/
│   │   ├── Home.jsx        # Landing hero page with dynamic pitch and stats
│   │   ├── Services.jsx    # Full-stack developer and UI/UX design service offerings
│   │   ├── Projects.jsx    # Project grid and Acme Corp dashboard simulation modal
│   │   └── Contact.jsx     # Web3Forms-integrated contact form
│   ├── App.jsx             # Main routing setup and layout (Header/Navbar/Footer)
│   ├── index.css           # Global styles and custom Tailwind v4 theme definitions
│   └── main.jsx            # Application entrypoint
├── eslint.config.js        # ESLint rules
├── vite.config.js          # Vite config with React and Tailwind v4 plugins
├── vercel.json             # Vercel deployment routing configuration
└── package.json            # Scripts & dependencies
```

## 🚀 Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed (LTS recommended).

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd portfolio-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Setup environment variables (optional for contact form):
   Create a `.env` file in the root directory:
   ```env
   VITE_WEB3FORMS_ACCESS_KEY=your_web3forms_access_key
   ```

### Development Scripts

- **Start Dev Server**: `npm run dev`
- **Build Production Bundle**: `npm run build`
- **Lint Code**: `npm run lint`
- **Preview Production Build**: `npm run preview`
