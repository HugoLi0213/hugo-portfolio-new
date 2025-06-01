# Hugo Portfolio

A modern, dark-themed personal portfolio website showcasing web development and AI projects. Built with Vue.js, featuring professional animations and interactive components.

## 🚀 Features

### Core Features
- **Dark Theme Design**: Modern, premium dark theme with subtle gradients
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: GSAP-powered scroll animations and transitions
- **Professional Navigation**: Fixed navbar with glassmorphism effects

### Interactive Components
- **📊 Scroll Progress Indicator**: Visual progress bar showing page scroll
- **🌙 Theme Toggle**: Light/dark mode switcher with persistence
- **💻 Terminal Widget**: Interactive terminal simulation with typewriter effect
- **📈 Skill Radar Chart**: Visual representation of technical proficiencies
- **🛠️ Tech Stack Showcase**: Animated technology proficiency display
- **🎨 Code Snippet Display**: Syntax-highlighted code examples with copy functionality

### Professional Widgets
- **🕐 Live Clock**: Real-time Hong Kong time display
- **🌤️ Weather Widget**: Live Hong Kong weather using Open-Meteo API
- **📱 Contact Footer**: Integrated contact information and social links

## 🛠️ Tech Stack

- **Frontend**: Vue.js 3 (Composition API)
- **Build Tool**: Vite
- **Styling**: Bootstrap 5 + Custom CSS
- **Animations**: GSAP (GreenSock)
- **Icons**: Font Awesome
- **Weather API**: Open-Meteo

## 📱 Sections

1. **Hero Section**: Introduction with animated avatar and social links
2. **About Me**: Personal background with interactive terminal and tech showcase
3. **Projects**: Featured work with live GitHub links
4. **Skills**: Interactive skill cards with hover effects
5. **Footer**: Contact information and social media links

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation
```bash
# Clone the repository
git clone [repository-url]

# Navigate to project directory
cd hugo-portfolio-new

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎨 Customization

### Theme Colors
The portfolio uses CSS custom properties for easy theming:
```css
:root {
  --bg-primary: #1a1a2e;
  --bg-secondary: #1e1e2e;
  --accent-primary: #6366f1;
  --accent-secondary: #8b5cf6;
}
```

### Component Structure
```
src/
├── components/
│   ├── AnimatedSection.vue    # Reusable animated sections
│   ├── Clock.vue             # Hong Kong time widget
│   ├── CodeSnippet.vue       # Code display with syntax highlighting
│   ├── ScrollProgress.vue    # Page scroll indicator
│   ├── SkillRadar.vue       # Skill proficiency radar chart
│   ├── TechStack.vue        # Technology showcase
│   ├── Terminal.vue         # Interactive terminal widget
│   ├── ThemeToggle.vue      # Dark/light mode toggle
│   └── WeatherHK.vue        # Hong Kong weather widget
├── App.vue                  # Main application component
├── main.js                  # Application entry point
└── style.css               # Global styles and theme
```

## 📈 Performance Features

- **Lazy Loading**: Components load on scroll
- **Optimized Animations**: Hardware-accelerated CSS transforms
- **Minimal Bundle**: Tree-shaking and code splitting
- **Fast Development**: Vite's lightning-fast HMR

## 🌐 Deployment

The portfolio is optimized for deployment on:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

### Build Commands
```bash
# Production build
npm run build

# The `dist/` folder contains the built application
```

## 📄 License

This project is open source and available under the MIT License.

---

**Built with ❤️ by Hugo Li** | Hong Kong | 2025
