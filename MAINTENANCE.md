# Hugo Portfolio - Maintenance Guide

## 📋 Table of Contents
- [Overview](#overview)
- [Project Structure](#project-structure)
- [Code Organization](#code-organization)
- [Component Documentation](#component-documentation)
- [Styling Guidelines](#styling-guidelines)
- [Maintenance Tasks](#maintenance-tasks)
- [Troubleshooting](#troubleshooting)

## 🔍 Overview

This maintenance guide provides comprehensive documentation for the Hugo Portfolio website codebase. The project follows Vue.js 3 best practices with a focus on maintainability, performance, and clean code architecture.

### Key Design Principles
- **Component-based architecture**: Reusable, self-contained components
- **Responsive design**: Mobile-first approach with Bootstrap 5
- **Performance optimization**: Lazy loading and code splitting
- **Clean code**: Comprehensive commenting and consistent naming
- **Modern JavaScript**: ES6+ features and Vue 3 Composition API

## 📁 Project Structure

```
hugo-portfolio-new/
├── public/                          # Static assets
│   ├── hugo-favicon.svg            # Website favicon
│   ├── hugo-logo.svg               # Brand logo
│   └── vite.svg                    # Vite logo
├── src/                            # Source code
│   ├── components/                 # Reusable Vue components
│   │   ├── AnimatedSection.vue     # Scroll-triggered section wrapper
│   │   ├── Clock.vue              # Live time display (Hong Kong)
│   │   ├── CodeSnippet.vue        # Code display with syntax highlighting
│   │   ├── ContactForm.vue        # Contact form component
│   │   ├── PerformanceMetrics.vue # Website performance stats
│   │   ├── ScrollProgress.vue     # Page scroll indicator
│   │   ├── SkillRadar.vue        # Skill proficiency radar chart
│   │   ├── TechStack.vue         # Technology showcase
│   │   ├── Terminal.vue          # Interactive terminal widget
│   │   ├── ThemeToggle.vue       # Dark/light mode toggle
│   │   └── WeatherHK.vue         # Hong Kong weather widget
│   ├── pages/                     # Page components
│   │   ├── Home.vue              # Homepage with all sections
│   │   └── About.vue             # About page
│   ├── router/                   # Vue Router configuration
│   │   └── index.js             # Route definitions
│   ├── assets/                   # Media files
│   │   ├── IMG_3399.jpg         # Profile photo
│   │   ├── profile.jpg          # Alternative profile image
│   │   └── vue.svg              # Vue.js logo
│   ├── App.vue                  # Root layout component
│   ├── main.js                  # Application entry point
│   └── style.css               # Global styles and theme
├── index.html                   # HTML entry point
├── package.json                 # Dependencies and scripts
├── vite.config.js              # Vite build configuration
├── README.md                   # Project documentation
├── STRUCTURE.md               # Detailed structure overview
└── MAINTENANCE.md             # This maintenance guide
```

## 🏗️ Code Organization

### 1. Component Architecture

#### Core Layout Components
- **`App.vue`**: Root layout with navigation, footer, and router view
- **`Home.vue`**: Main homepage with all portfolio sections
- **`About.vue`**: Additional information page

#### Reusable Components
- **`AnimatedSection.vue`**: Wrapper for sections with scroll animations
- **`ScrollProgress.vue`**: Site-wide scroll progress indicator

#### Widget Components (Currently Removed)
- **`Clock.vue`**: Hong Kong time display (removed from navbar)
- **`WeatherHK.vue`**: Weather information (removed from navbar)

### 2. Styling Strategy

#### CSS Architecture
- **Global styles**: `src/style.css` for site-wide theming
- **Scoped styles**: Component-specific styles in `<style scoped>` blocks
- **Bootstrap integration**: Utility classes for rapid development
- **Custom properties**: CSS variables for consistent theming

#### Color Palette
```css
/* Primary theme colors */
--primary-pink: #ec9a9a;
--light-pink: #f4b1b1;
--dark-gray: #1f2937;
--medium-gray: #4b5563;
--light-gray: #6b7280;
--background-cream: #faf7f4;
```

### 3. Animation System

#### GSAP Integration
- **ScrollTrigger**: Scroll-based animations
- **Timeline animations**: Complex sequences
- **Performance optimization**: Hardware acceleration

#### Animation Patterns
```javascript
// Standard fade-in from bottom
gsap.from(element, {
  opacity: 0,
  y: 30,
  duration: 0.8,
  delay: index * 0.2  // Staggered timing
})

// Scroll trigger configuration
scrollTrigger: {
  trigger: section,
  start: 'top 80%',
  toggleActions: 'play none none reverse'
}
```

## 📚 Component Documentation

### AnimatedSection.vue
**Purpose**: Reusable wrapper for sections with automated scroll animations
**Props**:
- `title` (required): Section heading text
- `subtitle` (optional): Descriptive text below title
- `id` (required): HTML ID for the section
- `bgClass` (optional): Background CSS class

**Usage**:
```vue
<AnimatedSection 
  title="My Projects" 
  subtitle="Featured work and collaborations"
  id="projects"
  bgClass="bg-light"
>
  <!-- Section content goes here -->
</AnimatedSection>
```

### ScrollProgress.vue
**Purpose**: Visual indicator of page scroll progress
**Features**:
- Fixed position at top of viewport
- Smooth width animation
- Glassmorphism design
- Automatic cleanup of event listeners

### Home.vue Data Structure

#### Projects Array
```javascript
const projects = [
  {
    title: "Project Name",
    description: "Project description...",
    technologies: ["Vue.js", "Node.js"],
    githubUrl: "https://github.com/username/repo",
    demoUrl: "https://demo-url.com",
    imageUrl: "path/to/image.jpg"
  }
]
```

#### Skills Array
```javascript
const skills = [
  {
    name: "Technology Name",
    icon: "fab fa-icon-class"  // FontAwesome icon class
  }
]
```

## 🎨 Styling Guidelines

### 1. CSS Naming Conventions
- **BEM-like approach**: `.component-name__element--modifier`
- **Utility classes**: Bootstrap classes for common patterns
- **Semantic names**: Descriptive class names over presentational

### 2. Responsive Design
```css
/* Mobile-first breakpoints */
@media (max-width: 576px) { /* Small phones */ }
@media (max-width: 768px) { /* Tablets */ }
@media (max-width: 992px) { /* Small laptops */ }
@media (max-width: 1200px) { /* Large laptops */ }
```

### 3. Animation Performance
- Use `transform` and `opacity` for smooth animations
- Avoid animating layout properties (`width`, `height`, `margin`)
- Enable hardware acceleration with `will-change` when needed

## 🔧 Maintenance Tasks

### Regular Updates

#### 1. Content Updates
- **Profile information**: Update contact details in `App.vue`
- **Project showcase**: Add new projects to `Home.vue` projects array
- **Skills list**: Update technologies in skills array
- **Resume/CV**: Update education and experience sections

#### 2. Dependency Updates
```bash
# Check for outdated packages
npm outdated

# Update dependencies
npm update

# Update major versions (requires testing)
npm install package-name@latest
```

#### 3. Performance Monitoring
- **Bundle size**: Monitor with `npm run build`
- **Core Web Vitals**: Test with Lighthouse
- **Animation performance**: Check frame rates in DevTools

### Code Quality

#### 1. Commenting Standards
- **File headers**: Describe component purpose and features
- **Function documentation**: Explain complex logic
- **CSS comments**: Document design decisions and browser workarounds

#### 2. Vue.js Best Practices
- Use Composition API for new components
- Implement proper prop validation
- Handle component cleanup in `onUnmounted`
- Use reactive refs for dynamic data

### Security Considerations

#### 1. External Links
- Always use `rel="noopener"` for `target="_blank"` links
- Validate all external URLs
- Use HTTPS for all external resources

#### 2. Form Handling
- Implement proper form validation
- Sanitize user inputs
- Use CSRF protection for sensitive forms

## 🐛 Troubleshooting

### Common Issues

#### 1. Animation Problems
**Symptom**: Animations not triggering or looking jerky
**Solutions**:
- Check ScrollTrigger registration
- Verify element refs are properly bound
- Ensure elements exist before animating
- Test on different devices and browsers

#### 2. Styling Issues
**Symptom**: Styles not applying or layout breaking
**Solutions**:
- Check CSS specificity conflicts
- Verify Bootstrap classes are loading
- Test responsive breakpoints
- Validate HTML structure

#### 3. Performance Issues
**Symptom**: Slow loading or laggy animations
**Solutions**:
- Optimize image sizes and formats
- Implement lazy loading for images
- Reduce animation complexity
- Profile with browser DevTools

### Development Tips

#### 1. Hot Module Replacement
Vite provides instant updates during development:
```bash
npm run dev
# Server runs on http://localhost:5173
```

#### 2. Build Analysis
Analyze bundle size and dependencies:
```bash
npm run build
# Check dist/ folder size
```

#### 3. Browser Testing
Test across different browsers and devices:
- Chrome DevTools device simulation
- Firefox responsive design mode
- Safari Web Inspector
- Real device testing

## 📞 Support

### Getting Help
1. **Vue.js Documentation**: https://vuejs.org/guide/
2. **Bootstrap Documentation**: https://getbootstrap.com/docs/
3. **GSAP Documentation**: https://greensock.com/docs/
4. **Vite Documentation**: https://vitejs.dev/guide/

### Code Review Checklist
- [ ] All components have proper documentation
- [ ] Responsive design tested on multiple devices
- [ ] Performance impact assessed
- [ ] Accessibility guidelines followed
- [ ] Code follows project conventions
- [ ] No console errors or warnings

---

**Last Updated**: June 2025  
**Maintainer**: Hugo Li  
**Contact**: hugoapple213@gmail.com
