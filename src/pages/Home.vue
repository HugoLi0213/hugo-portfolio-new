<template>
  <div>
    <!-- Hero Section with Integrated About -->
    <section class="hero py-5 mt-5" id="hero">
      <div class="container px-4" style="position: relative; z-index: 3;">
        <!-- Main Hero Content -->
        <div class="row align-items-center min-vh-60 mb-5">
          <div class="col-lg-6 mb-4 mb-lg-0" ref="heroContent">
            <h1 class="display-4 fw-bold mb-3" style="background: linear-gradient(45deg, #ec9a9a, #f4b1b1); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">LI YIN CHUNG</h1>
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
            
            <div class="d-flex gap-3 flex-wrap"> <!-- Changed gap-4 to gap-3 and added flex-wrap -->
              <a :href="linkedin" target="_blank" class="text-decoration-none hover-effect" style="color: #4b5563;"><i class="fab fa-linkedin me-2"></i>LinkedIn</a>
              <a :href="github" target="_blank" class="text-decoration-none hover-effect" style="color: #4b5563;"><i class="fab fa-github me-2"></i>GitHub</a>
              <a :href="'mailto:' + email" class="text-decoration-none hover-effect" style="color: #4b5563;"><i class="fas fa-envelope me-2"></i>Email</a>
              <a href="#projects" class="text-decoration-none hover-effect" style="color: #4b5563;"><i class="fas fa-briefcase me-2"></i>Works</a>
              <a href="#skills" class="text-decoration-none hover-effect" style="color: #4b5563;"><i class="fas fa-cogs me-2"></i>Skills</a>
            </div>
          </div>
          <div class="col-lg-6 text-center" ref="heroImage">
            <img src="../assets/IMG_3399.jpg" alt="LI YIN CHUNG Profile Photo" class="img-fluid rounded-circle shadow-lg hero-avatar" style="object-fit: cover; object-position: center;" />
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
                    <p class="mb-1" style="color: #374151;">
                      <strong>Bachelor of Computer Science</strong><br>
                      <small style="color: #6b7280; font-weight: bold; font-size: 1.1em; letter-spacing: 0.02em;">HK Metropolitan University (2025)</small>
                    </p>
                    <p class="mb-3" style="color: #4b5563;">
                      <a href="https://gorgeous-cardigan-bf1.notion.site/Completed-course-2056edaa848380cabfebee176b41af3b" target="_blank" class="text-decoration-none hover-effect" style="color: #ec9a9a; font-size: 0.9rem;">
                        <i class="fas fa-external-link-alt me-1"></i>View Completed Courses
                      </a>
                    </p>
                    <p class="mb-0" style="color: #374151;">
                      <strong>Higher Diploma in Data Science</strong><br>
                      <small style="color: #6b7280; font-weight: bold; font-size: 1.1em; letter-spacing: 0.02em;">HKU SPACE (2023)</small>
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="card border-0 shadow-lg h-100" style="background: rgba(255, 255, 255, 0.8); backdrop-filter: blur(10px);">
                  <div class="card-body p-4">
                    <h5 class="mb-3" style="color: #ec9a9a;"><i class="fas fa-concierge-bell me-2"></i>Specialties</h5>
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
    </section>

    <!-- Projects Section -->
    <AnimatedSection title="My Creative & Technical Projects" subtitle="A showcase of my best work and collaborations." id="projects" bgClass="bg-light-secondary">
      <div class="row g-4">
        <div class="col-md-6 col-lg-4" v-for="project in projects" :key="project.title">
          <div class="card h-100 shadow-lg hover-card">
            <div class="card-body p-4">
              <h3 class="h5 card-title fw-bold" style="color: #1f2937;"><i :class="project.icon + ' me-2'" style="color: #ec9a9a;"></i>{{ project.title }}</h3>
              <p class="card-text" style="color: #4b5563;">{{ project.description }}</p>
              <div class="d-flex flex-wrap gap-2 mb-3">
                <span v-for="tag in project.tags" :key="tag" class="badge" style="background: linear-gradient(45deg, #ec9a9a, #f4b1b1); color: white;">{{ tag }}</span>
              </div>
              <a :href="project.link" target="_blank" class="btn btn-outline-primary w-100 mb-2">View on GitHub</a>
              <a v-if="project.demo" :href="project.demo" target="_blank" class="btn btn-outline-success w-100">Live Demo</a>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>

    <!-- Skills Section -->
    <AnimatedSection title="My Technical Skillset & Proficiencies" subtitle="Technologies, tools, and platforms I use." id="skills" bgClass="bg-light-tertiary">
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
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import AnimatedSection from '../components/AnimatedSection.vue'; // Adjusted path

// Props for social media links (passed from App.vue or defined here if only for hero)
// For simplicity, we'll redefine them here. If they are needed globally, consider props or provide/inject.
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
    demo: null,
    icon: "fas fa-cloud-sun"
  },
  {
    title: "PPE Detection & Danger Zone Monitoring",
    description: "Monitors safety by detecting PPE and danger zones using computer vision. Runs on Jetson Nano (edge device) with Linux.",
    tags: ["HTML", "AI", "Computer Vision", "Python", "OpenCV", "Flask", "Jetson Nano", "Linux"],
    link: "https://github.com/HugoLi0213/PPE-Detection-and-Danger-Zone-Monitoring-System",
    demo: null,
    icon: "fas fa-hard-hat"
  },
  {
    title: "SEO Sleuth with AI",
    description: "An AI-powered tool to analyze and improve website SEO.",
    tags: ["TypeScript", "AI", "SEO", "Node.js", "Express", "React"],
    link: "https://github.com/HugoLi0213/SEO-Sleuth-with-AI",
    demo: "https://seo-henna-two.vercel.app/",
    icon: "fas fa-search"
  },
  {
    title: "Sun Yat-Sen Tour Guide",
    description: "A web guide for Sun Yat-Sen tours, providing historical information and navigation.",
    tags: ["HTML", "Web Guide", "JavaScript", "Bootstrap", "CSS"],
    link: "https://github.com/HugoLi0213/Sun-Yat-Sen-tour-guid",
    demo: "https://sun-yat-sen-tour-guid.netlify.app/",
    icon: "fas fa-map-marked-alt"
  },
  {
    title: "Hong Kong Date Countdown Web",
    description: "A Vue.js web app celebrating Hong Kong's significant moments - like cherry blossoms marking seasons, this app marks time with beauty and meaning.",
    tags: ["Vue.js", "Bootstrap", "Web App", "JavaScript", "HTML", "CSS"],
    link: "https://github.com/HugoLi0213/Hong-Kong-date-countdown-web",
    demo: "https://hong-kong-date-countdown-web.vercel.app/",
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
/* Styles specific to Home.vue content, if any, can go here */
/* Most styles are likely global or in App.vue, but hero-specific ones could be here */

.hero {
  background: none; /* Explicitly remove background */
  position: relative;
  overflow: hidden;
  min-height: 100vh; /* Or adjust as needed for content within router-view */
}

.hero-avatar {
  border: 5px solid transparent; /* Increased border width and made transparent to allow background to show */
  background-image: linear-gradient(white, white), linear-gradient(45deg, #ec9a9a, #f4b1b1); /* White inner, gradient outer */
  background-origin: border-box;
  background-clip: content-box, border-box;
  box-shadow: 0 0 35px rgba(236, 154, 154, 0.4); /* Slightly enhanced shadow */
  transition: all 0.3s ease;
  max-width: 320px;
  object-fit: cover;
  object-position: center;
  border-radius: 50%; /* Ensure it remains circular */
}

.hero-quote {
  /* Styles for hero quote, if they were in App.vue and specific to hero */
  position: relative; /* Ensure this is set for absolute positioning of blossoms */
  padding: 1rem;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(5px);
  margin-bottom: 1.5rem; /* Add some space below the quote block */
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
  /* Styles for individual cherry blossom */
  position: absolute;
  font-size: var(--size, 1rem);
  color: #ec9a9a; /* Pink color for blossoms */
  animation: fall var(--duration, 8s) var(--delay, 0s) linear infinite, 
             sway 3s ease-in-out infinite alternate;
  opacity: 0.8;
  left: var(--x-start, 50%); /* Start position */
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


/* Copied from App.vue for sections, adjust if they are global */
.bg-light-secondary {
  background: linear-gradient(135deg, #f5f1ec 0%, #f2ede6 100%) !important;
}

.bg-light-tertiary {
  background: linear-gradient(135deg, #f7f4ef 0%, #f4f0ea 100%) !important;
}

.hover-card {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(236, 154, 154, 0.15) !important;
  background: rgba(255, 255, 255, 0.85) !important;
  backdrop-filter: blur(10px);
  position: relative;
  z-index: 2; /* Ensure cards are above any section-level pseudo-elements */
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

/* Responsive adjustments if specific to home content */
@media (max-width: 576px) {
  .skill-name {
    font-size: 0.8rem;
    min-height: 2rem;
  }
  .fa-2x {
    font-size: 1.5em; /* Ensure icons are not too large on small screens */
  }
}

</style>
