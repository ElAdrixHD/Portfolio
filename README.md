# Personal Portfolio

A modern, responsive portfolio website built with Astro, featuring smooth animations, glassmorphism effects, and a stunning visual design.

![Portfolio Preview](https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80)

## 🚀 Features

- **Modern Design**: Clean, minimalist design with glassmorphism effects
- **Fully Responsive**: Looks great on all devices
- **Smooth Animations**: Engaging animations and transitions
- **Interactive Elements**: Hover effects, animated backgrounds, and dynamic content
- **Fast Performance**: Built with Astro for optimal loading speeds
- **SEO Friendly**: Optimized for search engines

## 🎨 Sections

1. **Hero**: Eye-catching landing section with animated text
2. **About**: Personal introduction with skills preview
3. **Skills**: Technical skills with animated progress bars
4. **Projects**: Portfolio showcase with filter functionality
5. **Contact**: Contact form and social links
6. **Navigation**: Sticky navigation with smooth scroll
7. **Footer**: Links and social media

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build/)
- **Styling**: CSS3 with custom properties
- **Animations**: CSS animations and transitions
- **Typography**: Inter & Bebas Neue fonts
- **Icons**: Custom SVG icons

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:4321](http://localhost:4321) in your browser

## 🚀 Building for Production

```bash
npm run build
```

The build output will be in the `./dist/` directory.

## 📝 Customization

### Personal Information
Update the following files with your information:
- `src/components/Hero.astro` - Name and title
- `src/components/About.astro` - About text and image
- `src/components/Contact.astro` - Contact details
- `src/components/Footer.astro` - Copyright info

### Projects
Edit `src/components/Projects.astro` to add your own projects. Each project card includes:
- Title
- Description
- Technologies used
- Links to live demo and source code

### Skills
Update `src/components/Skills.astro` with your technical skills and proficiency levels.

### Colors
Customize the color scheme in `src/layouts/Layout.astro`:
```css
:root {
  --primary: #8b5cf6;
  --secondary: #ec4899;
  --accent: #3b82f6;
  --dark: #0f0f0f;
  --light: #ffffff;
  --gray: #6b7280;
}
```

## 🌟 Features in Detail

### Animated Background
The portfolio features animated gradient orbs that create a dynamic background effect. The orbs also respond to mouse movement for an interactive experience.

### Glassmorphism Effects
UI elements use backdrop filters and semi-transparent backgrounds to create a modern glass effect.

### Smooth Scroll Navigation
Navigation links smoothly scroll to their respective sections with a custom easing function.

### Project Filtering
The projects section includes category filters to showcase different types of work.

### Form Validation
The contact form includes client-side validation and visual feedback for form submission.

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints at:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔧 Development

### Project Structure
```
/
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
│   │   └── Skills.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

### Commands

| Command | Action |
|---------|--------|
| `npm install` | Install dependencies |
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📄 License

This project is MIT licensed.

## 👤 Author

**John Doe**
- GitHub: [@johndoe](https://github.com/johndoe)
- LinkedIn: [@johndoe](https://linkedin.com/in/johndoe)
- Twitter: [@johndoe](https://twitter.com/johndoe)

## 🙏 Acknowledgments

- Design inspiration from modern portfolio trends
- Built with [Astro](https://astro.build/)
- Icons from various sources

---

⭐️ If you like this portfolio, please give it a star!
