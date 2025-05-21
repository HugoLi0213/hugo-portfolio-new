# Project Structure: Hugo Portfolio Vue App

```
/ (root)
├── index.html                # Main HTML entry point
├── package.json              # Project metadata and dependencies
├── README.md                 # Project overview and instructions
├── vite.config.js            # Vite build configuration
├── public/
│   ├── hugo-favicon.svg      # Favicon for the site
│   ├── hugo-logo.svg         # Logo asset
│   └── vite.svg              # Vite logo asset
├── src/
│   ├── App.vue               # Main Vue app component (root layout, data, logic)
│   ├── main.js               # App entry point, mounts Vue app
│   ├── style.css             # Global and component styles
│   ├── assets/
│   │   └── vue.svg           # Example asset
│   └── components/
│       ├── AnimatedSection.vue # Reusable section with GSAP animation
│       ├── Clock.vue           # Compact HKT clock widget (navbar)
│       └── WeatherHK.vue       # Compact Hong Kong weather widget (navbar)
```

## Description
- **App.vue**: Main layout, data, and logic for the portfolio (MVC: View + Controller).
- **components/**: Reusable UI widgets and animated sections.
- **style.css**: All global and component styles (moved from App.vue for maintainability).
- **main.js**: Vue app bootstrapper.
- **public/**: Static assets (favicons, logos).
- **README.md**: Project info and setup instructions.

## Notes
- All section data (projects, skills, links) is managed in `App.vue`.
- Weather and clock widgets fetch live data and update reactively.
- Animations are handled via GSAP in `AnimatedSection.vue` and `App.vue`.
- The app is styled with Bootstrap and custom CSS.
