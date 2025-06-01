<template>
  <div>
    <!-- Scroll Progress Indicator -->
    <ScrollProgress />
    
    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-light fixed-top shadow-lg">
      <div class="container px-4 d-flex align-items-center">
        <a class="navbar-brand fw-bold" href="#">Hugo Portfolio</a>
        <div class="d-flex align-items-center ms-4 me-auto d-none d-lg-flex">
          <Clock />
          <WeatherHK />
        </div>
        <div class="d-flex align-items-center gap-3">
          <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item"><a class="nav-link px-3" href="#hero">Home</a></li>
            <li class="nav-item"><a class="nav-link px-3" href="#projects">Projects</a></li>
            <li class="nav-item"><a class="nav-link px-3" href="#skills">Skills</a></li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Hero Section with Integrated About -->
    <section class="hero py-5 mt-5" id="hero">
      <div class="container px-4">
        <!-- Main Hero Content -->
        <div class="row align-items-center min-vh-60 mb-5">
          <div class="col-lg-6 mb-4 mb-lg-0" ref="heroContent">
            <h1 class="display-4 fw-bold mb-3" style="background: linear-gradient(45deg, #ec9a9a, #f4b1b1); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">Li Yin Chung, Hugo</h1>
            <h2 class="h3 mb-4" style="color: #ec9a9a;">Web Developer & AI Enthusiast</h2>
            
            <!-- Hero Quote with Cherry Blossoms -->
            <div class="hero-quote mb-4" style="position: relative; overflow: hidden;">
              <!-- Cherry Blossoms Animation -->
              <div class="cherry-blossoms">
                <div v-for="i in 8" :key="i" class="cherry-blossom" :style="getBlossomStyle(i)">🌸</div>
              </div>
              
              <div class="hero-quote-text">「桜の花は、全力で咲き誇り、命をかけて景色を作り出す」</div>
              <div class="hero-quote-translation">"Cherry blossoms bloom with all their might, creating scenery with their very lives"</div>
              <div class="hero-quote-meaning">
                A philosophy that resonates deeply with my journey in technology. Like cherry blossoms that bloom with complete dedication, I approach each line of code, every AI model, and each web application with unwavering commitment. Through my Computer Science studies, I believe in pouring my entire essence into creating digital experiences that transform how people interact with technology.
              </div>
            </div>
            
            <div class="d-flex gap-4">
              <a :href="linkedin" target="_blank" class="fs-4 hover-effect" style="color: #4b5563;"><i class="fab fa-linkedin"></i></a>
              <a :href="github" target="_blank" class="fs-4 hover-effect" style="color: #4b5563;"><i class="fab fa-github"></i></a>
              <a :href="'mailto:' + email" class="fs-4 hover-effect" style="color: #4b5563;"><i class="fas fa-envelope"></i></a>
            </div>
          </div>
          <div class="col-lg-6 text-center" ref="heroImage">
            <img src="https://ui-avatars.com/api/?name=Hugo&background=ffb7c5&color=fff&size=256" 
                 alt="Hugo Avatar" 
                 class="img-fluid rounded-circle shadow-lg hero-avatar" 
                 style="max-width: 250px;" />
          </div>
        </div>

        <!-- Integrated About Content -->
        <div class="row justify-content-center">
          <div class="col-lg-10">
            <!-- About Details -->
            <div class="row g-4">
              <div class="col-md-6">
                <div class="card border-0 shadow-lg h-100" style="background: rgba(255, 255, 255, 0.8); backdrop-filter: blur(10px);">
                  <div class="card-body p-4">
                    <h5 class="mb-3" style="color: #ec9a9a;"><i class="fas fa-graduation-cap me-2"></i>Education</h5>
                    <p class="mb-3" style="color: #374151;">
                      <strong>Bachelor of Computer Science</strong><br>
                      <small style="color: #6b7280;">HK Metropolitan University (2025)</small>
                    </p>
                    <p class="mb-0" style="color: #374151;">
                      <strong>Higher Diploma in Data Science</strong><br>
                      <small style="color: #6b7280;">HKU SPACE (2023)</small>
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="card border-0 shadow-lg h-100" style="background: rgba(255, 255, 255, 0.8); backdrop-filter: blur(10px);">
                  <div class="card-body p-4">
                    <h5 class="mb-3" style="color: #ec9a9a;"><i class="fas fa-code me-2"></i>Specialties</h5>
                    <div class="row">
                      <div class="col-6">
                        <p class="small mb-2" style="color: #4b5563;">Web Development</p>
                        <p class="small mb-2" style="color: #4b5563;">Frontend Development</p>
                        <p class="small mb-2" style="color: #4b5563;">AI Integration</p>
                      </div>
                      <div class="col-6">
                        <p class="small mb-2" style="color: #4b5563;">UI/UX Design</p>
                        <p class="small mb-2" style="color: #4b5563;">Web Performance</p>
                        <p class="small mb-2" style="color: #4b5563;">Modern Design</p>
                      </div>
                    </div>
                    <div class="mt-3">
                      <p class="small mb-0" style="color: #6b7280;">
                        <i class="fas fa-heart me-2" style="color: #ec9a9a;"></i>
                        Crafting with passion
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <AnimatedSection title="Featured works" subtitle="A showcase of my best work and collaborations." id="projects" bgClass="bg-light-secondary">
      <div class="row g-4">
        <div class="col-md-6 col-lg-4" v-for="project in projects" :key="project.title">
          <div class="card h-100 shadow-lg hover-card">
            <div class="card-body p-4">
              <div class="text-center mb-3">
                <i :class="project.icon + ' fa-2x'" style="color: #ec9a9a;"></i>
              </div>
              <h3 class="h5 card-title fw-bold" style="color: #1f2937;">{{ project.title }}</h3>
              <p class="card-text" style="color: #4b5563;">{{ project.description }}</p>
              <div class="d-flex flex-wrap gap-2 mb-3">
                <span v-for="tag in project.tags" :key="tag" class="badge" style="background: linear-gradient(45deg, #ec9a9a, #f4b1b1); color: white;">{{ tag }}</span>
              </div>
              <a :href="project.link" target="_blank" class="btn btn-outline-primary w-100">View on GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>

    <!-- Skills Section -->
    <AnimatedSection title="Skills" subtitle="Technologies, tools, and platforms I use." id="skills" bgClass="bg-light-tertiary">
      <div class="row g-4">
        <div class="col-6 col-md-4 col-lg-3" v-for="skill in skills" :key="skill.name">
          <div class="card h-100 text-center shadow-lg hover-card">
            <div class="card-body p-3">
              <i :class="skill.icon + ' fa-2x mb-2'" style="color: #ec9a9a;"></i>
              <p class="card-text mb-0 fw-medium skill-name" style="color: #1f2937;">{{ skill.name }}</p>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>

    <!-- Footer -->
    <footer class="py-5" style="background: linear-gradient(135deg, #f5f1ec 0%, #f2ede6 100%); border-top: 1px solid rgba(236, 154, 154, 0.2);">
      <div class="container px-4">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <!-- Contact Info -->
            <div class="text-center mb-4">
              <h5 class="mb-3" style="color: #1f2937;">Let's Connect</h5>
              <div class="d-flex justify-content-center gap-4 flex-wrap">
                <a :href="'mailto:' + email" class="text-decoration-none hover-effect" style="color: #4b5563;">
                  <i class="fas fa-envelope me-2" style="color: #ec9a9a;"></i> {{ email }}
                </a>
                <a href="tel:+85262095238" class="text-decoration-none hover-effect" style="color: #4b5563;">
                  <i class="fas fa-phone me-2" style="color: #ec9a9a;"></i> +852 62095238
                </a>
                <a href="https://discord.com/users/hugo_o.y" target="_blank" class="text-decoration-none hover-effect" style="color: #4b5563;">
                  <i class="fab fa-discord me-2" style="color: #ec9a9a;"></i> hugo_o.y
                </a>
                <span style="color: #4b5563;">
                  <i class="fas fa-map-marker-alt me-2" style="color: #ec9a9a;"></i> Hong Kong
                </span>
              </div>
            </div>
            
            <!-- Social Links -->
            <div class="text-center mb-4">
              <div class="d-flex justify-content-center gap-3">
                <a :href="linkedin" target="_blank" class="fs-4 hover-effect" rel="noopener" style="color: #4b5563;">
                  <i class="fab fa-linkedin"></i>
                </a>
                <a :href="github" target="_blank" class="fs-4 hover-effect" rel="noopener" style="color: #4b5563;">
                  <i class="fab fa-github"></i>
                </a>
              </div>
            </div>
            
            <!-- Tech Info -->
            <div class="text-center">
              <p class="mb-0 small" style="color: #6b7280;">
                Built with Vue.js & Bootstrap | Weather API: <a href="https://open-meteo.com/" target="_blank" rel="noopener" class="text-decoration-none" style="color: #ec9a9a;">Open-Meteo</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import AnimatedSection from './components/AnimatedSection.vue'
import Clock from './components/Clock.vue'
import WeatherHK from './components/WeatherHK.vue'
import ScrollProgress from './components/ScrollProgress.vue'

// Social media links
const linkedin = 'https://www.linkedin.com/in/hugo-li-77a0581b0/'
const github = 'https://github.com/HugoLi0213'
const email = 's12332146@gmail.com'

// Project data
const projects = [
  {
    title: "WeatherApp",
    description: "A simple weather application that fetches and displays weather data for any city.",
    tags: ["JavaScript", "API", "Web App", "HTML", "CSS"],
    link: "https://github.com/HugoLi0213/weatherapp",
    icon: "fas fa-cloud-sun"
  },
  {
    title: "PPE Detection & Danger Zone Monitoring",
    description: "Monitors safety by detecting PPE and danger zones using computer vision.",
    tags: ["HTML", "AI", "Computer Vision", "Python", "OpenCV", "Flask"],
    link: "https://github.com/HugoLi0213/PPE-Detection-and-Danger-Zone-Monitoring-System",
    icon: "fas fa-hard-hat"
  },
  {
    title: "SEO Sleuth with AI",
    description: "An AI-powered tool to analyze and improve website SEO.",
    tags: ["TypeScript", "AI", "SEO", "Node.js", "Express", "React"],
    link: "https://github.com/HugoLi0213/SEO-Sleuth-with-AI",
    icon: "fas fa-search"
  },
  {
    title: "Sun Yat-Sen Tour Guide",
    description: "A web guide for Sun Yat-Sen tours, providing historical information and navigation.",
    tags: ["HTML", "Web Guide", "JavaScript", "Bootstrap", "CSS"],
    link: "https://github.com/HugoLi0213/Sun-Yat-Sen-tour-guid",
    icon: "fas fa-map-marked-alt"
  },
  {
    title: "Hong Kong Date Countdown Web",
    description: "A Vue.js web app celebrating Hong Kong's significant moments - like cherry blossoms marking seasons, this app marks time with beauty and meaning.",
    tags: ["Vue.js", "Bootstrap", "Web App", "JavaScript", "HTML", "CSS"],
    link: "https://github.com/HugoLi0213/Hong-Kong-date-countdown-web",
    icon: "fas fa-calendar-alt"
  }
];

// Skills data
const skills = [
  { name: "JavaScript", icon: "fab fa-js-square" },
  { name: "Python", icon: "fab fa-python" },
  { name: "HTML5", icon: "fab fa-html5" },
  { name: "CSS3", icon: "fab fa-css3-alt" },
  { name: "React.js", icon: "fab fa-react" },
  { name: "React Native", icon: "fab fa-react" },
  { name: "Vue.js", icon: "fab fa-vuejs" },
  { name: "GenAI", icon: "fas fa-robot" },
  { name: "Business Analysis", icon: "fas fa-chart-line" },
  { name: "Microsoft Office", icon: "fas fa-file-word" },
  { name: "GitHub", icon: "fab fa-github" },
  { name: "Figma", icon: "fab fa-figma" },
  { name: "Canva", icon: "fas fa-paint-brush" },
  { name: "Cursor", icon: "fas fa-mouse-pointer" },
]

// Animation references
const heroContent = ref(null)
const heroImage = ref(null)

// Cherry blossom animation function
const getBlossomStyle = (index) => {
  return {
    '--delay': Math.random() * 10 + 's',
    '--duration': (Math.random() * 3 + 5) + 's',
    '--x-start': Math.random() * 100 + '%',
    '--x-end': (Math.random() * 100) + '%',
    '--size': (Math.random() * 0.8 + 0.6) + 'rem',
    '--rotation': Math.random() * 360 + 'deg'
  }
}

// Initialize animations
onMounted(() => {
  const gsap = window.gsap
  if (gsap && heroContent.value && heroImage.value) {
    // Animate only element nodes and set a fallback title if needed
    Array.from(heroContent.value.children).forEach((el, i) => {
      if (el.nodeType === 1 && el.tagName) {
        gsap.from(el, {
          opacity: 0,
          y: 30,
          duration: 1,
          delay: 0.5 + i * 0.2
        })
      }
    })
    gsap.from(heroImage.value, {
      opacity: 0,
      scale: 0.8,
      duration: 1,
      delay: 0.8
    })
  }
})
</script>

<style scoped>
/* Light Cherry Blossom Theme Styles */
.hero {
  background: linear-gradient(135deg, #faf7f4 0%, #f7f3f0 30%, #f5f0eb 70%, #f3ede6 100%);
  position: relative;
  overflow: hidden;
  min-height: 100vh;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 20% 80%, rgba(236, 154, 154, 0.08) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(244, 177, 177, 0.06) 0%, transparent 50%),
    radial-gradient(circle at 40% 40%, rgba(251, 207, 207, 0.05) 0%, transparent 50%);
  pointer-events: none;
}

.hero-avatar {
  border: 3px solid #ec9a9a;
  box-shadow: 0 0 30px rgba(236, 154, 154, 0.3);
  transition: all 0.3s ease;
}

.hero-avatar:hover {
  box-shadow: 0 0 40px rgba(236, 154, 154, 0.5);
  transform: scale(1.05);
}

.navbar {
  padding: 1rem 0;
  backdrop-filter: blur(15px);
  background: rgba(250, 247, 244, 0.95) !important;
  border-bottom: 1px solid rgba(236, 154, 154, 0.2);
  box-shadow: 0 2px 20px rgba(236, 154, 154, 0.08);
}

.navbar-brand {
  font-size: 1.5rem;
  background: linear-gradient(45deg, #ec9a9a, #f4b1b1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 600;
}

.nav-link {
  font-weight: 500;
  transition: all 0.3s ease;
  color: rgba(51, 51, 51, 0.8) !important;
  position: relative;
}

.nav-link:hover {
  color: #ec9a9a !important;
  transform: translateY(-2px);
}

.nav-link::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: -5px;
  left: 50%;
  background: linear-gradient(45deg, #ec9a9a, #f4b1b1);
  transition: all 0.3s ease;
  transform: translateX(-50%);
}

.nav-link:hover::after {
  width: 80%;
}

/* Custom background classes */
.bg-light-secondary {
  background: linear-gradient(135deg, #f5f1ec 0%, #f2ede6 100%) !important;
}

.bg-light-tertiary {
  background: linear-gradient(135deg, #f7f4ef 0%, #f4f0ea 100%) !important;
}

.bg-dark-secondary {
  background: linear-gradient(135deg, #f7f4ef 0%, #f4f0ea 100%) !important;
}

.hover-card {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(236, 154, 154, 0.15) !important;
  background: rgba(255, 255, 255, 0.85) !important;
  backdrop-filter: blur(10px);
}

.hover-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 20px 40px rgba(236, 154, 154, 0.2) !important;
  border-color: rgba(236, 154, 154, 0.3) !important;
}

.hover-effect {
  transition: all 0.3s ease;
}

.hover-effect:hover {
  transform: scale(1.2);
  color: #ec9a9a !important;
}

.min-vh-75 {
  min-height: 75vh;
}

.min-vh-50 {
  min-height: 50vh;
}

.min-vh-60 {
  min-height: 60vh;
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

/* Responsive adjustments */
@media (max-width: 768px) {
  .display-5 {
    font-size: 2.5rem;
  }
  
  .container {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
  
  .hero::before {
    display: none;
  }
}

@media (max-width: 576px) {
  .display-5 {
    font-size: 2rem;
  }
  
  .container {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  
  .card-body {
    padding: 0.75rem !important;
  }
  
  .skill-name {
    font-size: 0.8rem;
    min-height: 2rem;
  }
  
  .fa-2x {
    font-size: 1.5em;
  }
}

.skill-name {
  transition: all 0.2s ease-in-out;
  font-size: 0.9rem;
  line-height: 1.2;
  min-height: 2.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card:hover .skill-name {
  color: #ec9a9a;
}

/* Add smooth scrolling to the page */
html {
  scroll-behavior: smooth;
}

/* Improve spacing for sections */
section {
  padding-top: 5rem;
  padding-bottom: 5rem;
}

/* Text shadow for better readability */
.text-white {
  color: #1f2937 !important;
  text-shadow: none;
}

.text-light {
  color: #4b5563 !important;
  text-shadow: none;
}

/* Global light cherry blossom theme */
body {
  background: linear-gradient(135deg, #faf7f4 0%, #f7f3f0 100%) !important;
  color: #374151;
}

/* Custom scrollbar with Cherry Blossom theme */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #faf7f4;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(45deg, #ec9a9a, #f4b1b1);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(45deg, #e88888, #ec9a9a);
}

/* Quote Section Styles */
.quote-section {
  margin-bottom: 2rem;
}

.quote-card {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(250, 247, 244, 0.8) 100%);
  border: 1px solid rgba(236, 154, 154, 0.2);
  border-radius: 20px;
  padding: 3rem;
  text-align: center;
  backdrop-filter: blur(15px);
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(236, 154, 154, 0.15);
}

/* Cherry Blossoms Animation */
.cherry-blossoms {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.cherry-blossom {
  position: absolute;
  font-size: var(--size, 1rem);
  color: #ec9a9a;
  animation: fall var(--duration, 8s) var(--delay, 0s) infinite linear;
  opacity: 0.8;
  filter: drop-shadow(0 0 3px rgba(236, 154, 154, 0.3));
}

@keyframes fall {
  0% {
    transform: translateX(var(--x-start, 0%)) translateY(-10px) rotate(0deg);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translateX(var(--x-end, 0%)) translateY(calc(100vh + 50px)) rotate(var(--rotation, 360deg));
    opacity: 0;
  }
}

/* Floating animation for gentle movement */
@keyframes float {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-10px) rotate(5deg);
  }
}

.cherry-blossom:nth-child(odd) {
  animation-name: fall, float;
  animation-duration: var(--duration, 8s), 3s;
  animation-iteration-count: infinite, infinite;
  animation-timing-function: linear, ease-in-out;
}

/* Hover effect on quote card */
.quote-card:hover .cherry-blossom {
  animation-play-state: paused;
  transform: scale(1.2);
  transition: transform 0.3s ease;
}

/* Special cherry blossom variants */
.cherry-blossom:nth-child(3n) {
  color: #f4b1b1;
  filter: drop-shadow(0 0 5px rgba(244, 177, 177, 0.4));
}

.cherry-blossom:nth-child(5n) {
  color: #f7c4c4;
  filter: drop-shadow(0 0 4px rgba(247, 196, 196, 0.5));
}

.cherry-blossom:nth-child(7n) {
  color: #f0a8a8;
  filter: drop-shadow(0 0 6px rgba(240, 168, 168, 0.3));
}

.quote-card::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(45deg, transparent, rgba(236, 154, 154, 0.03), transparent);
  animation: shimmer 4s infinite;
  pointer-events: none;
  z-index: 0;
}

@keyframes shimmer {
  0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
  100% { transform: translateX(100%) translateY(100%) rotate(45deg); }
}

.quote-text {
  font-size: 1.5rem;
  font-weight: 500;
  color: #1f2937;
  margin-bottom: 1.5rem;
  font-family: 'Georgia', 'Times New Roman', serif;
  line-height: 1.7;
  position: relative;
  z-index: 2;
}

.quote-translation {
  font-size: 1.1rem;
  color: #4b5563;
  font-style: italic;
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 2;
}

.quote-meaning {
  font-size: 1rem;
  color: #6b7280;
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
}

/* Responsive quote styles */
@media (max-width: 768px) {
  .quote-card {
    padding: 1.5rem;
  }
  
  .quote-text {
    font-size: 1.2rem;
  }
  
  .quote-translation {
    font-size: 0.9rem;
  }
  
  .quote-meaning {
    font-size: 0.85rem;
  }
  
  /* Reduce cherry blossoms on mobile for better performance */
  .cherry-blossom:nth-child(n+8) {
    display: none;
  }
  
  .cherry-blossom {
    font-size: 0.8rem;
  }
}

/* Hero Quote Styles */
.hero-quote {
  background: linear-gradient(135deg, rgba(236, 154, 154, 0.08) 0%, rgba(244, 177, 177, 0.06) 100%);
  border: 1px solid rgba(236, 154, 154, 0.15);
  border-radius: 12px;
  padding: 1.5rem;
  backdrop-filter: blur(8px);
}

.hero-quote-text {
  font-size: 1.1rem;
  font-weight: 400;
  color: #1f2937;
  margin-bottom: 0.5rem;
  font-family: 'Georgia', 'Times New Roman', serif;
  line-height: 1.5;
}

.hero-quote-translation {
  font-size: 0.9rem;
  color: #4b5563;
  font-style: italic;
  margin-bottom: 1rem;
}

.hero-quote-meaning {
  font-size: 0.85rem;
  color: #6b7280;
  line-height: 1.6;
  margin-bottom: 0;
}

/* About section enhancements */
.philosophy-section {
  padding-top: 1rem;
  border-top: 1px solid rgba(236, 154, 154, 0.15);
  margin-top: 1rem;
}

.about-intro h3 {
  background: linear-gradient(45deg, #ec9a9a, #f4b1b1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Small text styling */
small {
  color: #6b7280 !important;
  font-size: 0.8rem;
}

/* Custom background classes */
.bg-light-secondary {
  background: linear-gradient(135deg, #f7f3f0 0%, #f5f0eb 100%) !important;
}

.bg-light-tertiary {
  background: linear-gradient(135deg, #f5f0eb 0%, #f3ede6 100%) !important;
}

.bg-dark-secondary {
  background: linear-gradient(135deg, #f5f0eb 0%, #f3ede6 100%) !important;
}
</style>