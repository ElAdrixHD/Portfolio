# 🚀 Adrian Muñoz - Portfolio

<div align="center">
  <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&pause=1000&width=435&lines=Senior+Software+Engineer;Mobile+App+Developer;AI+%26+Data+Science+Specialist;Flutter+Expert" alt="Typing SVG" />
</div>

## 🌟 Overview

Welcome to my personal portfolio! This is a modern, responsive website built with **Astro** showcasing my journey as a Senior Software Engineer with expertise in mobile development, AI, and data science.

🌐 **Live Demo**: [adrianmmudarra.es](https://adrianmmudarra.es)

## ✨ Features

- **Modern Design**: Clean, minimalist design with glassmorphism effects
- **Responsive**: Fully responsive across all devices and screen sizes
- **Interactive Animations**: Smooth animations and particle backgrounds
- **Performance Optimized**: Built with Astro for lightning-fast loading
- **Contact Form**: Functional contact form with Web3Forms integration
- **SEO Optimized**: Meta tags and structured data for better search visibility

## 🛠️ Tech Stack

### Frontend Framework
- **[Astro](https://astro.build/)** - Modern static site generator
- **TypeScript** - Type-safe JavaScript
- **CSS3** - Modern styling with custom properties

### Deployment & CI/CD
- **GitHub Actions** - Automated deployment pipeline
- **FTP Deployment** - Direct deployment to hosting server
- **Static Generation** - Optimized static assets

### Design & UX
- **Custom CSS Animations** - Smooth transitions and micro-interactions
- **Glassmorphism UI** - Modern glass-effect design elements
- **Particle System** - Interactive background animations
- **Progressive Enhancement** - Works without JavaScript

## 📁 Project Structure

```
portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   ├── astro.svg
│   │   └── background.svg
│   ├── components/
│   │   ├── About.astro
│   │   ├── Contact.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── Navigation.astro
│   │   ├── ParticlesBackground.astro
│   │   ├── Projects.astro
│   │   ├── Skills.astro
│   │   └── Welcome.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
├── .github/
│   └── workflows/
│       └── deploy.yml
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ElAdrixHD/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:4321
   ```

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment.

## 🎨 Customization

### Color Scheme
The portfolio uses CSS custom properties for easy theming:

```css
:root {
  --primary: #8b5cf6;    /* Purple */
  --secondary: #ec4899;  /* Pink */
  --accent: #3b82f6;     /* Blue */
  --dark: #0f0f0f;       /* Dark background */
  --light: #ffffff;      /* Light text */
  --gray: #6b7280;       /* Gray text */
}
```

### Typography
- **Headings**: 'Bebas Neue' - Bold, modern sans-serif
- **Body**: 'Inter' - Clean, readable system font

### Animations
- **Particle Background**: Interactive floating orbs
- **Scroll Animations**: Fade-in effects on scroll
- **Hover Effects**: Smooth transitions and transforms

## 📧 Contact Form Setup

The contact form uses [Web3Forms](https://web3forms.com/) for form handling:

1. Sign up at Web3Forms
2. Get your access key
3. Replace the access key in `src/components/Contact.astro`:

```javascript
formData.append("access_key", "YOUR_ACCESS_KEY_HERE");
```

## 🚢 Deployment

### Automatic Deployment

The project includes GitHub Actions for automatic deployment:

1. **Set up repository secrets**:
   - `FTP_SERVER`: Your hosting server
   - `FTP_USERNAME`: FTP username
   - `FTP_PASSWORD`: FTP password

2. **Push to main branch**:
   ```bash
   git push origin main
   ```

The site will automatically build and deploy to your server.

### Manual Deployment

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Upload the `dist/` folder** to your web server

## 🔧 Configuration

### Site Configuration

Edit `astro.config.mjs` to customize build settings:

```javascript
export default defineConfig({
  site: 'https://yourdomain.com',
  output: 'static',
  build: {
    assets: 'assets',
    format: 'directory'
  }
});
```

### TypeScript Configuration

The project uses strict TypeScript settings in `tsconfig.json` for better code quality.

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## ⚡ Performance

- **Lighthouse Score**: 95+ across all metrics
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/ElAdrixHD/portfolio/issues).

## 📄 License

This project is [MIT](LICENSE) licensed.

## 👤 Author

**Adrian Muñoz**
- 💼 LinkedIn: [@adrianmmudarra](https://www.linkedin.com/in/adrianmmudarra/)
- 🐙 GitHub: [@ElAdrixHD](https://github.com/ElAdrixHD/)
- 📧 Email: adrianmmudarra@gmail.com
- 🌐 Website: [adrianmmudarra.es](https://adrianmmudarra.es)

## 🙏 Acknowledgments

- **Astro Team** - For the amazing static site generator
- **Lucide Icons** - For the beautiful icon set
- **Web3Forms** - For the simple form handling solution
- **GitHub** - For CI/CD capabilities

---

<div align="center">
  <strong>⭐ Star this repository if you found it helpful!</strong>
  <br>
  <sub>Built with ❤️ using Astro</sub>
</div>
