<template>
  <div>
    <div>
      <!-- 
        HOME PAGE TEMPLATE
        ===================
        This is the main homepage layout containing:
        1. Hero section with personal introduction and cherry blossom animation
        2. About section with education and specialties
        3. Projects showcase section
        4. Skills/technologies section
      -->
      <!-- Hero Section with Integrated About -->
    <section class="hero pro-hero simple-hero py-4 mt-4" id="hero">
      <div class="container px-4 container-condensed" style="position: relative; z-index: 3;">
        <div class="simple-hero__shell" ref="heroContent">
            <p class="eyebrow-text text-uppercase mb-2">Systems-grade frontend for IT teams</p>
            <h1 class="display-4 fw-bold mb-2 gradient-text text-balanced">LI YIN CHUNG, Hugo</h1>
            <h2 class="h3 mb-3 professional-title text-balanced">Web Developer & AI Enthusiast</h2>
            <p class="lead hero-lead mb-4 text-balanced">Designing resilient web experiences with measurable KPIs for technology, operations, and data teams across Hong Kong.</p>
            <div class="professional-pill mb-4 body-medium">
              Shipping React/Vue/Next.js systems with AI workflows, performance budgets, and production-ready observability.
            </div>
            <div class="cta-group mb-5">
              <a href="#projects" class="btn cta-primary">View case studies</a>
              <a :href="'mailto:' + email" class="btn cta-secondary">Book a call</a>
            </div>
            <div class="stats-grid mb-5">
              <div class="stat-card" v-for="stat in heroStats" :key="stat.label">
                <div class="stat-value">{{ stat.value }}</div>
                <div class="stat-label">{{ stat.label }}</div>
              </div>
            </div>
            <div class="hero-quote card-soft mb-0 text-start">
              <p class="hero-quote-text text-balanced">「桜の花は、全力で咲き誇り、命をかけて景色を作り出す」</p>
              <p class="hero-quote-translation body-small text-muted mb-1">"Cherry blossoms bloom with all their might, creating scenery with their very lives"</p>
              <p class="hero-quote-meaning body-small text-muted mb-0">
                A philosophy that resonates deeply with my journey in technology. Like cherry blossoms that bloom with complete dedication, I approach each line of code, every AI model, and each web application with unwavering commitment.
              </p>
            </div>
            
            <!-- Navigation Links - Quick access to different sections and external profiles -->
            <div class="d-flex gap-3 flex-wrap">
              <a :href="linkedin" target="_blank" class="text-decoration-none hover-effect" style="color: #4b5563;"><i class="fab fa-linkedin me-2"></i>LinkedIn</a>
              <a :href="github" target="_blank" class="text-decoration-none hover-effect" style="color: #4b5563;"><i class="fab fa-github me-2"></i>GitHub</a>
              <a :href="'mailto:' + email" class="text-decoration-none hover-effect" style="color: #4b5563;"><i class="fas fa-envelope me-2"></i>Email</a>
              <a href="#projects" class="text-decoration-none hover-effect" style="color: #4b5563;"><i class="fas fa-briefcase me-2"></i>Works</a>
              <a href="#skills" class="text-decoration-none hover-effect" style="color: #4b5563;"><i class="fas fa-cogs me-2"></i>Skills</a>
            </div>
        </div>

        <!-- About Section - Education and Specialties Cards -->
        <div class="row justify-content-center">
          <div class="col-lg-10">
            <div class="row g-4">
              
              <!-- Education Card -->
              <div class="col-md-6">
                <div class="card border-0 shadow-lg h-100" style="background: rgba(255, 255, 255, 0.8); backdrop-filter: blur(10px);">
                  <div class="card-body p-4">
                    <h5 class="mb-3" style="color: #ec9a9a;"><i class="fas fa-graduation-cap me-2"></i>Education</h5>
                    
                    <!-- Current Education -->
                    <p class="mb-1" style="color: #374151;">
                      <strong>Bachelor of Computer Science</strong><br>
                      <small style="color: #6b7280; font-weight: bold; font-size: 1.1em; letter-spacing: 0.02em;">HK Metropolitan University (2025)</small>
                    </p>
                    
                    <!-- Link to completed courses -->
                    <p class="mb-3" style="color: #4b5563;">
                      <a href="https://gorgeous-cardigan-bf1.notion.site/Completed-course-2056edaa848380cabfebee176b41af3b" target="_blank" class="text-decoration-none hover-effect" style="color: #ec9a9a; font-size: 0.9rem;">
                        <i class="fas fa-external-link-alt me-1"></i>View Completed Courses
                      </a>
                    </p>
                    
                    <!-- Previous Education -->
                    <p class="mb-0" style="color: #374151;">
                      <strong>Higher Diploma in Data Science</strong><br>
                      <small style="color: #6b7280; font-weight: bold; font-size: 1.1em; letter-spacing: 0.02em;">HKU SPACE (2023)</small>
                    </p>
                  </div>
                </div>
              </div>
              
              <!-- Specialties Card -->
              <div class="col-md-6">
                <div class="card border-0 shadow-lg h-100" style="background: rgba(255, 255, 255, 0.8); backdrop-filter: blur(10px);">
                  <div class="card-body p-4">
                    <h5 class="mb-3" style="color: #ec9a9a;"><i class="fas fa-concierge-bell me-2"></i>Specialties</h5>
                    
                    <!-- Two-column layout for specialties -->
                    <div class="row">
                      <div class="col-6">
                        <p class="small mb-2 specialty-highlight">Web Development</p>
                        <p class="small mb-2 specialty-highlight">Frontend Development</p>
                        <p class="small mb-2 specialty-highlight">AI Integration</p>
                      </div>
                      <div class="col-6">
                        <p class="small mb-2 specialty-highlight">UI/UX Design</p>
                        <p class="small mb-2 specialty-highlight">Web Performance</p>
                        <p class="small mb-2 specialty-highlight">Modern Design</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>    <!-- Projects Section - Showcases portfolio projects with GitHub links and live demos -->
    <AnimatedSection title="My Creative & Technical Projects" subtitle="A showcase of my best work and collaborations." id="projects" bgClass="bg-light-secondary">
      <div class="row g-4">
        <!-- Project Card Loop - Displays each project from the projects array -->
        <div class="col-md-6 col-lg-4" v-for="project in projects" :key="project.title">
          <div class="card h-100 shadow-lg hover-card project-card">
            <div class="card-body p-4 d-flex flex-column">
              <div class="project-card__header mb-3">
                <span class="project-badge">{{ project.badge }}</span>
                <span class="project-icon">
                  <i :class="project.icon"></i>
                </span>
              </div>
              <!-- Project Title with Icon -->
              <h3 class="h5 card-title fw-bold mb-2" style="color: #0f172a;">
                {{ project.title }}
              </h3>
              
              <!-- Project Description -->
              <p class="card-text flex-grow-1" style="color: #4b5563;">{{ project.description }}</p>
              
              <!-- Technology Tags - Shows technologies used in the project -->
              <div class="d-flex flex-wrap gap-2 mb-3">
                <span v-for="tag in project.tags" :key="tag" class="badge badge-tech">{{ tag }}</span>
              </div>
              
              <!-- Action Buttons - GitHub link (always) and Live Demo (if available) -->
              <div class="project-card__actions">
                <a :href="project.link" target="_blank" class="btn btn-outline-primary w-100 mb-2">Repository</a>
                <a v-if="project.demo" :href="project.demo" target="_blank" class="btn btn-outline-success w-100">Live Demo</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>

    <!-- Skills Section - Displays technical skills and tools in a grid layout -->
    <AnimatedSection title="My Technical Skillset & Proficiencies" subtitle="Technologies, tools, and platforms I use." id="skills" bgClass="bg-light-tertiary">
      <div class="row g-4">
        <!-- Skill Card Loop - Shows each skill with icon and name -->
        <div class="col-6 col-md-4 col-lg-3" v-for="skill in skills" :key="skill.name">
          <div class="card h-100 text-center shadow-lg hover-card skill-card">
            <div class="card-body p-3">
              <!-- Skill Icon -->
              <i :class="skill.icon + ' fa-2x mb-2'" style="color: #ec9a9a;"></i>
              <!-- Skill Name -->
              <p class="card-text mb-0 fw-medium skill-name" style="color: #1f2937;">{{ skill.name }}</p>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
    </div>
  </div>
</template>

<script setup>
/*
  HOME PAGE SCRIPT
  ================
  This script handles the logic for the homepage including:
  - Vue composition API imports
  - Component imports
  - Data definitions (projects, skills, social links)
  - Animation functions
  - Lifecycle hooks for GSAP animations
*/

// Vue Composition API imports
import { onMounted, ref } from 'vue';
import AnimatedSection from '../components/AnimatedSection.vue';

// COMPONENT REFS
// ==============
// Vue refs for GSAP animation targets and image loading
const heroContent = ref(null)

// CONTACT & SOCIAL MEDIA LINKS
// ===========================
// These could be moved to a config file or store for better maintainability
const linkedin = 'https://www.linkedin.com/in/hugo-li-77a0581b0/'
const github = 'https://github.com/HugoLi0213'
const email = 'hugoapple213@gmail.com'

// HERO METRICS DATA
// ==================
// Quick stats that signal professionalism and delivery confidence
const heroStats = [
  { label: 'Production launches', value: '12+' },
  { label: 'Avg. Lighthouse score', value: '95+' },
  { label: 'Response SLA', value: '<24h' }
]

// PROJECT PORTFOLIO DATA
// ======================
// Array of project objects containing:
// - title: Project name
// - description: Brief project overview
// - tags: Technologies/skills used
// - link: GitHub repository URL
// - demo: Live demo URL (optional)
// - icon: FontAwesome icon class
// - badge: Quick context for stakeholders
const projects = [
  {
    title: "Hong Kong A&E Waits",
    description: "Real-time dashboard for Hong Kong Hospital Authority wait times with bilingual UI, severity tiers, and live refresh backed by official data.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Hospital Authority API", "Realtime", "Accessibility"],
    link: "https://github.com/HugoLi0213/Hong-Kong-A-E-Waits",
    demo: "https://hk-hospital-wait-times-sigma.vercel.app/",
    icon: "fas fa-hospital-user",
    badge: "Healthcare Ops"
  },
  {
    title: "Hong Kong Weather Cloudsea",
    description: "A modern weather app with cloudsea prediction for Hong Kong. Features HKO API integration, inversion layer analysis, and Apple Weather-style design with real-time data updates.",
    tags: ["React", "TypeScript", "API", "Weather", "HKO", "Tailwind CSS", "Open-Meteo"],
    link: "https://github.com/HugoLi0213/Hong-Kong-Weather-Cloudsea",
    demo: "https://hong-kong-weather-cloudsea.vercel.app/",
    icon: "fas fa-cloud-rain",
    badge: "Climate Intelligence"
  },
  {
    title: "HKMTRVUE - MTR & LRT Real-time Arrivals",
    description: "A Vue.js app providing real-time MTR and Light Rail schedules with traditional timetable view design. Perfect companion to Google Maps for Hong Kong transit navigation.",
    tags: ["Vue.js", "TypeScript", "Government API", "Transportation", "Real-time Data", "PWA"],
    link: "https://github.com/HugoLi0213/hkmtrvue",
    demo: "https://hk-mtr-lrt-vue-app.vercel.app/",
    icon: "fas fa-train",
    badge: "Transit Reliability"
  },
  {
    title: "WeatherApp",
    description: "A simple weather application that fetches and displays weather data for any city.",
    tags: ["JavaScript", "API", "Web App", "HTML", "CSS", "React Native"],
    link: "https://github.com/HugoLi0213/weatherapp",
    demo: null,
    icon: "fas fa-cloud-sun",
    badge: "Demo Toolkit"
  },
  {
    title: "PPE Detection & Danger Zone Monitoring",
    description: "Monitors safety by detecting PPE and danger zones using computer vision. Runs on Jetson Nano (edge device) with Linux.",
    tags: ["HTML", "AI", "Computer Vision", "Python", "OpenCV", "Flask", "Jetson Nano", "Linux"],
    link: "https://github.com/HugoLi0213/PPE-Detection-and-Danger-Zone-Monitoring-System",
    demo: null,
    icon: "fas fa-hard-hat",
    badge: "Computer Vision"
  },
  {
    title: "SEO Sleuth with AI",
    description: "An AI-powered tool to analyze and improve website SEO.",
    tags: ["TypeScript", "AI", "SEO", "Node.js", "Express", "React"],
    link: "https://github.com/HugoLi0213/SEO-Sleuth-with-AI",
    demo: "https://seo-henna-two.vercel.app/",
    icon: "fas fa-search",
    badge: "Growth Automation"
  },
  {
    title: "Sun Yat-Sen Tour Guide",
    description: "A web guide for Sun Yat-Sen tours, providing historical information and navigation.",
    tags: ["HTML", "Web Guide", "JavaScript", "Bootstrap", "CSS"],
    link: "https://github.com/HugoLi0213/Sun-Yat-Sen-tour-guid",
    demo: "https://sun-yat-sen-tour-guid.netlify.app/",
    icon: "fas fa-map-marked-alt",
    badge: "Cultural Tech"
  },
  {
    title: "Hong Kong Date Countdown Web",
    description: "A Vue.js web app celebrating Hong Kong's significant moments - like cherry blossoms marking seasons, this app marks time with beauty and meaning.",
    tags: ["Vue.js", "Bootstrap", "Web App", "JavaScript", "HTML", "CSS"],
    link: "https://github.com/HugoLi0213/Hong-Kong-date-countdown-web",
    demo: "https://hong-kong-date-countdown-web.vercel.app/",
    icon: "fas fa-calendar-alt",
    badge: "Experience Design"
  }
];

// TECHNICAL SKILLS DATA
// =====================
// Array of skill objects containing:
// - name: Technology/tool name
// - icon: FontAwesome icon class
// Skills are organized by tool categories for better grouping
const skills = [
  // Programming Languages
  { name: "JavaScript", icon: "fab fa-js-square" },
  { name: "Python", icon: "fab fa-python" },
  
  // Frontend Technologies
  { name: "HTML5", icon: "fab fa-html5" },
  { name: "CSS3", icon: "fab fa-css3-alt" },
  { name: "React.js", icon: "fab fa-react" },
  { name: "React Native", icon: "fab fa-react" },
  { name: "Vue.js", icon: "fab fa-vuejs" },
  
  // Development Tools
  { name: "VS Code", icon: "fas fa-code" },
  { name: "Cursor", icon: "fas fa-mouse-pointer" },
  { name: "GitHub", icon: "fab fa-github" },
  
  // Design Tools
  { name: "Figma", icon: "fab fa-figma" },
  { name: "Canva", icon: "fas fa-paint-brush" },
  
  // AI & Analysis Tools
  { name: "GenAI", icon: "fas fa-robot" },
  { name: "Perplexity", icon: "fas fa-search" },
  { name: "Business Analysis", icon: "fas fa-chart-line" },
  
  // Office & Productivity
  { name: "Microsoft Office", icon: "fas fa-file-word" },
]

// ANIMATION REFERENCES
// ===================
// Additional refs for loading state management
// heroContent ref defined above for entrance animations

// CHERRY BLOSSOM ANIMATION FUNCTION
// ================================
// Generates random CSS custom properties for each cherry blossom
// Returns object with CSS variables for animation timing and positioning
const getBlossomStyle = (index) => {
  return {
    '--delay': Math.random() * 10 + 's',        // Random delay 0-10s
    '--duration': (Math.random() * 3 + 5) + 's', // Random duration 5-8s
    '--x-start': Math.random() * 100 + '%',      // Random start position
    '--x-end': (Math.random() * 100) + '%',      // Random end position
    '--size': (Math.random() * 0.8 + 0.6) + 'rem', // Random size 0.6-1.4rem
    '--rotation': Math.random() * 360 + 'deg'     // Random rotation
  }
}

const startEntranceAnimations = () => {
  const gsap = window.gsap
  if (gsap && heroContent.value) {
    const tl = gsap.timeline()
    Array.from(heroContent.value.children).forEach((el, i) => {
      if (el.nodeType === 1 && el.tagName) {
        tl.from(el, {
          opacity: 0,
          y: 24,
          duration: 0.7,
          delay: i * 0.08,
          ease: 'power2.out'
        }, i * 0.08)
      }
    })
  }
}

onMounted(() => {
  startEntranceAnimations()
})

</script>

<style scoped>
/* Styles specific to Home.vue content, if any, can go here */
/* Most styles are likely global or in App.vue, but hero-specific ones could be here */

/* Clean and elegant typography for the main title */
.gradient-text {
  /* Use elegant serif font for the name */
  font-family: 'Playfair Display', 'Georgia', serif;
  font-weight: 600;
  font-size: 3.5rem;
  letter-spacing: -0.02em;
  color: #2d3748;
  line-height: 1.2;
  padding: 0.1em 0;
  display: inline-block;
}



/* Professional title styling - simple and clean */
.professional-title {
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  color: #f06292; /* 淺一點的櫻花粉紅色 */
  letter-spacing: 0.03em;
  text-transform: uppercase;
  font-size: 1.1rem;
}

.hero {
  background: none; /* Explicitly remove background */
  position: relative;
  overflow: hidden;
  min-height: 100vh; /* Or adjust as needed for content within router-view */
}

.hero-quote {
  position: relative;
  padding: 1.2rem;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(255, 155, 179, 0.3);
  margin-bottom: 1.2rem;
  overflow: hidden;
}

/* Japanese quote text styling - simple */
.hero-quote-text {
  font-family: 'Playfair Display', serif;
  font-size: 1.4rem;
  font-weight: 500;
  color: #f06292; /* 淺一點的櫻花粉紅色 */
  line-height: 1.4;
  margin-bottom: 0.8rem;
  text-align: center;
}

/* English translation styling - clean */
.hero-quote-translation {
  font-family: 'Inter', sans-serif;
  font-style: italic;
  font-size: 1.1rem;
  font-weight: 400;
  color: #f06292; /* 淺一點的櫻花粉紅色 */
  text-align: center;
  margin-bottom: 1.2rem;
}

/* Philosophy paragraph styling - minimal */
.hero-quote-meaning {
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
  line-height: 1.6;
  color: #374151; /* Standard text color */
  text-align: left;
  font-weight: 400;
}

.cherry-blossoms {
  /* Styles for cherry blossoms in hero quote */
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none; /* So they don't interfere with text selection */
  overflow: hidden; /* Keep blossoms contained */
}
.cherry-blossom {
  position: absolute;
  font-size: var(--size, 1rem);
  color: #f4a2b8; /* Soft sakura pink */
  animation: fall var(--duration, 10s) var(--delay, 0s) linear infinite, 
             sway 4s ease-in-out infinite alternate;
  opacity: 0.6;
  left: var(--x-start, 50%);
  user-select: none;
}

@keyframes fall {
  0% {
    transform: translateY(-10vh) rotate(0deg);
    opacity: 0.8;
  }
  100% {
    transform: translateY(110vh) rotate(var(--rotation, 360deg));
    opacity: 0;
  }
}

@keyframes sway {
  0% {
    transform: translateX(0px) rotate(0deg);
  }
  100% {
    transform: translateX(calc(var(--x-end) - var(--x-start))) rotate(15deg); /* Simplified sway */
  }
}


/* Loading overlay and hero avatar styles removed after simplifying hero */

/* Copied from App.vue for sections, adjust if they are global */
.bg-light-secondary {
  background: #f8f7f4 !important;
}

.bg-light-tertiary {
  background: #f6f5f2 !important;
}

.hover-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid rgba(15, 23, 42, 0.05) !important;
  background: #ffffff !important;
  box-shadow: none;
  position: relative;
  z-index: 2;
}

.hover-card:hover {
  box-shadow: 0 15px 35px rgba(15, 23, 42, 0.08);
}

.hover-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 20px 40px rgba(236, 154, 154, 0.2) !important;
  border-color: rgba(236, 154, 154, 0.3) !important;
}

.badge {
  font-size: 0.75rem;
  padding: 0.5em 0.75em;
  border-radius: 6px;
}

.btn-outline-primary {
  border: 2px solid #ec9a9a;
  color: #ec9a9a;
  font-weight: 600;
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.1);
}

.btn-outline-primary:hover {
  background: linear-gradient(45deg, #ec9a9a, #f4b1b1);
  color: white;
  border-color: #ec9a9a;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(236, 154, 154, 0.3);
}

.btn-outline-success {
  border: 2px solid #38a169;
  color: #38a169;
  font-weight: 600;
  transition: all 0.3s ease;
  background: rgba(56, 161, 105, 0.1);
}

.btn-outline-success:hover {
  background: linear-gradient(45deg, #38a169, #68d391);
  color: white;
  border-color: #38a169;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(56, 161, 105, 0.3);
}

.skill-name {
  transition: all 0.2s ease-in-out;
  font-size: 0.9rem;
  line-height: 1.2;
  min-height: 2.4rem; /* Ensure consistent height */
  display: flex;
  align-items: center;
  justify-content: center;
}

.card:hover .skill-name {
  color: #ec9a9a; /* Pink color on hover */
}

.specialty-highlight {
  color: #4b5563;
  font-weight: bold;
  font-size: 1.05em;
  letter-spacing: 0.01em;
}

/* Responsive adjustments - simplified */
@media (max-width: 768px) {
  .professional-title {
    font-size: 1rem;
  }
  
  .hero-quote {
    padding: 1.2rem;
  }
  
  .hero-quote-text {
    font-size: 1.2rem;
  }
  
  .hero-quote-translation {
    font-size: 1rem;
  }
  
  .hero-quote-meaning {
    font-size: 0.9rem;
  }
}

@media (max-width: 576px) {
  .professional-title {
    font-size: 0.9rem;
  }
  
  .hero-quote {
    padding: 1rem;
  }
  
  .hero-quote-text {
    font-size: 1.1rem;
  }
  
  .hero-quote-translation {
    font-size: 0.95rem;
  }
  
  .hero-quote-meaning {
    font-size: 0.85rem;
  }

  .skill-name {
    font-size: 0.8rem;
    min-height: 2rem;
  }
  .fa-2x {
    font-size: 1.5em; /* Ensure icons are not too large on small screens */
  }
}

</style>
