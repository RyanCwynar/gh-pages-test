# Dark Theme Resume Website

A professional dark theme resume website built with React and Vite, ready for GitHub Pages deployment.

## 🎨 Features

- **Modern Stack**: React 19 + Vite 7 for fast development and optimal builds
- **Dark Theme**: Beautiful dark color scheme with purple gradient header
- **Responsive Design**: Mobile-friendly layout that adapts to different screen sizes
- **Professional Sections**: Header, About, Experience, Skills, Education, Projects, and Footer

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Visit `http://localhost:5173` to see your site in development mode.

### Build

```bash
npm run build
```

This will create an optimized production build in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 📦 Deployment to GitHub Pages

To deploy your site to GitHub Pages:

```bash
npm run deploy
```

This will:
1. Build your site for production
2. Deploy the `dist` folder to the `gh-pages` branch
3. Make your site available at `https://[username].github.io/[repository-name]/`

## 🎨 Customization

### Update Personal Information

Edit `src/App.jsx` to customize:
- Name and title in the header
- Contact information (email, phone, GitHub, LinkedIn)
- About section
- Work experience
- Skills
- Education
- Projects

### Modify Styling

Edit `src/App.css` and `src/index.css` to customize:
- Colors and gradients
- Typography
- Layout and spacing
- Responsive breakpoints

### Configure for Different Repository

If deploying to a different repository, update the `base` path in `vite.config.js`:

```javascript
base: process.env.NODE_ENV === 'production' ? '/your-repo-name/' : '/',
```

## 📄 License

Feel free to use this template for your own resume website!
