<template>
  <div>
    <!-- Main Content - Hidden until loading complete -->
    <div :class="{ 'content-hidden': !isImageLoaded }">
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
    <section class="hero py-3 mt-3" id="hero">
      <div class="container px-4" style="position: relative; z-index: 3;">
          <!-- Main Hero Content - Split layout: text left, image right -->
        <div class="row align-items-center min-vh-40 mb-3">
            <!-- Left Column: Personal Introduction -->          <div class="col-lg-6 mb-3 mb-lg-0" ref="heroContent">
            <!-- Main Name Title with gradient text effect -->
            <h1 class="display-4 fw-bold mb-2 gradient-text">LI YIN CHUNG, Hugo</h1>
              <!-- Professional Title -->
            <h2 class="h3 mb-3 professional-title">Web Developer & AI Enthusiast</h2>
              <!-- Hero Quote with Cherry Blossoms Animation -->
            <div class="hero-quote mb-3" style="position: relative; overflow: hidden;">
              <!-- Cherry Blossoms Animation Container - positioned absolutely for floating effect -->
              <div class="cherry-blossoms">
                <!-- Generate 8 animated cherry blossom emojis with random properties -->
                <div v-for="i in 8" :key="i" class="cherry-blossom" :style="getBlossomStyle(i)">🌸</div>
              </div>
              
              <!-- Quote Content - Japanese quote with translation and meaning -->
              <div class="hero-quote-text">「桜の花は、全力で咲き誇り、命をかけて景色を作り出す」</div>
              <div class="hero-quote-translation">"Cherry blossoms bloom with all their might, creating scenery with their very lives"</div>
              <div class="hero-quote-meaning">
                A philosophy that resonates deeply with my journey in technology. Like cherry blossoms that bloom with complete dedication, I approach each line of code, every AI model, and each web application with unwavering commitment. Through my Computer Science studies, I believe in pouring my entire essence into creating digital experiences that transform how people interact with technology.
              </div>
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
          
          <!-- Right Column: Profile Image -->
          <div class="col-lg-6 text-center" ref="heroImage">
            <img 
              ref="profileImage"
              src="../assets/IMG_3399.jpg" 
              alt="LI YIN CHUNG, Hugo Profile Photo" 
              class="img-fluid rounded-circle shadow-lg hero-avatar" 
              style="object-fit: cover; object-position: center;" 
              @load="onImageLoaded"
              @error="onImageError"
              loading="eager"
              decoding="sync"
              fetchpriority="high"
            />
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
          <div class="card h-100 shadow-lg hover-card">
            <div class="card-body p-4">
              <!-- Project Title with Icon -->
              <h3 class="h5 card-title fw-bold" style="color: #1f2937;">
                <i :class="project.icon + ' me-2'" style="color: #ec9a9a;"></i>{{ project.title }}
              </h3>
              
              <!-- Project Description -->
              <p class="card-text" style="color: #4b5563;">{{ project.description }}</p>
              
              <!-- Technology Tags - Shows technologies used in the project -->
              <div class="d-flex flex-wrap gap-2 mb-3">
                <span v-for="tag in project.tags" :key="tag" class="badge" style="background: linear-gradient(45deg, #ec9a9a, #f4b1b1); color: white;">{{ tag }}</span>
              </div>
              
              <!-- Action Buttons - GitHub link (always) and Live Demo (if available) -->
              <a :href="project.link" target="_blank" class="btn btn-outline-primary w-100 mb-2">View on GitHub</a>
              <a v-if="project.demo" :href="project.demo" target="_blank" class="btn btn-outline-success w-100">Live Demo</a>
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
          <div class="card h-100 text-center shadow-lg hover-card">
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
    
    <!-- Loading Overlay - Shown while assets are loading -->
    <div v-if="!isImageLoaded" class="loading-overlay">
      <div class="loading-content">
        <div class="loading-spinner"></div>
        <p class="loading-text">Loading...</p>
      </div>
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
const heroImage = ref(null)
const profileImage = ref(null)

// LOADING STATE
// =============
// Track image loading state to ensure smooth entrance
const isImageLoaded = ref(false)
const isAnimationReady = ref(false)
const loadingStartTime = ref(Date.now())

// CONTACT & SOCIAL MEDIA LINKS
// ===========================
// These could be moved to a config file or store for better maintainability
const linkedin = 'https://www.linkedin.com/in/hugo-li-77a0581b0/'
const github = 'https://github.com/HugoLi0213'
const email = 'hugoapple213@gmail.com'

// PROJECT PORTFOLIO DATA
// ======================
// Array of project objects containing:
// - title: Project name
// - description: Brief project overview
// - tags: Technologies/skills used
// - link: GitHub repository URL
// - demo: Live demo URL (optional)
// - icon: FontAwesome icon class
const projects = [
  {
    title: "WeatherApp",
    description: "A simple weather application that fetches and displays weather data for any city.",
    tags: ["JavaScript", "API", "Web App", "HTML", "CSS", "React Native"],
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
// heroContent and heroImage refs are defined above with loading state

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

// IMAGE LOADING HANDLERS
// ======================
// Handle image loading events to ensure smooth entrance
const onImageLoaded = () => {
  console.log('Profile image loaded successfully')
  
  // Calculate how long loading has been displayed
  const elapsedTime = Date.now() - loadingStartTime.value
  const minLoadingTime = 700 // 0.7 seconds
  
  if (elapsedTime >= minLoadingTime) {
    // Minimum time has passed, show content immediately
    isImageLoaded.value = true
    checkAndStartAnimation()
  } else {
    // Wait for remaining time before showing content
    const remainingTime = minLoadingTime - elapsedTime
    setTimeout(() => {
      isImageLoaded.value = true
      checkAndStartAnimation()
    }, remainingTime)
  }
}

const onImageError = () => {
  console.warn('Profile image failed to load, proceeding with animation')
  
  // Apply same minimum loading time even for errors
  const elapsedTime = Date.now() - loadingStartTime.value
  const minLoadingTime = 700 // 0.7 seconds
  
  if (elapsedTime >= minLoadingTime) {
    isImageLoaded.value = true
    checkAndStartAnimation()
  } else {
    const remainingTime = minLoadingTime - elapsedTime
    setTimeout(() => {
      isImageLoaded.value = true
      checkAndStartAnimation()
    }, remainingTime)
  }
}

// PRELOAD CRITICAL IMAGES
// ========================
// Preload important images to ensure smooth loading experience
const preloadCriticalImages = () => {
  const imagePaths = [
    '../assets/IMG_3399.jpg',
    '../assets/profile.jpg'  // Backup image if available
  ]
  
  let loadedCount = 0
  const totalImages = imagePaths.length
  
  imagePaths.forEach((path, index) => {
    const img = new Image()
    img.onload = () => {
      loadedCount++
      console.log(`Preloaded image ${index + 1}/${totalImages}`)
      
      // If this is the main profile image, mark as loaded
      if (index === 0) {
        onImageLoaded() // Use the updated handler with minimum time logic
      }
    }
    img.onerror = () => {
      loadedCount++
      console.warn(`Failed to preload image ${index + 1}/${totalImages}`)
      
      // If this is the main profile image and it fails, still proceed
      if (index === 0) {
        onImageError() // Use the updated handler with minimum time logic
      }
    }
    img.src = path
  })
}

// ANIMATION CONTROL
// =================
// Start animations only after all critical resources are loaded
const checkAndStartAnimation = () => {
  if (isImageLoaded.value && isAnimationReady.value) {
    startEntranceAnimations()
  }
}

const startEntranceAnimations = () => {
  const gsap = window.gsap
  
  // Check if GSAP is loaded and refs are available
  if (gsap && heroContent.value && heroImage.value) {
    console.log('Starting entrance animations')
    
    // Create a timeline for coordinated animations
    const tl = gsap.timeline()
    
    // First, ensure content is visible
    tl.set(document.querySelector('.content-hidden'), { 
      opacity: 1, 
      visibility: 'visible' 
    })
    
    // Animate hero content children with staggered entrance
    Array.from(heroContent.value.children).forEach((el, i) => {
      if (el.nodeType === 1 && el.tagName) { // Only animate element nodes
        tl.from(el, {
          opacity: 0,
          y: 30,                    // Slide up from 30px below
          duration: 0.8,
          delay: i * 0.1,           // Reduced stagger for smoother flow
          ease: "power2.out"
        }, i * 0.1)
      }
    })
    
    // Animate hero image with scale and fade
    tl.from(heroImage.value, {
      opacity: 0,
      scale: 0.9,                 // Start at 90% scale for subtler effect
      duration: 1,
      ease: "power2.out"
    }, 0.3)                       // Start slightly after text begins
    
    // Add a subtle floating animation to the avatar
    tl.to(heroImage.value.querySelector('.hero-avatar'), {
      y: -10,
      duration: 2,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true
    }, 1.5)
  } else {
    console.warn('GSAP not loaded or refs not available')
    // Fallback: just show content without animation
    const content = document.querySelector('.content-hidden')
    if (content) {
      content.style.opacity = '1'
      content.style.visibility = 'visible'
    }
  }
}

// GSAP ANIMATIONS INITIALIZATION
// ==============================
// Runs after component is mounted, but waits for image loading
onMounted(() => {
  console.log('Home component mounted, starting image preload')
  
  // Record loading start time
  loadingStartTime.value = Date.now()
  
  // Mark that component is ready for animation
  isAnimationReady.value = true
  
  // Start preloading critical images
  preloadCriticalImages()
  
  // Also check if the image in the DOM is already loaded (for faster subsequent visits)
  if (profileImage.value) {
    if (profileImage.value.complete && profileImage.value.naturalHeight !== 0) {
      // Image is already fully loaded
      console.log('Profile image already cached and loaded')
      onImageLoaded()
    } else {
      // Image is still loading, events will handle completion
      console.log('Profile image still loading, waiting for load event')
    }
  }
  
  // Fallback timeout to ensure page doesn't stay hidden too long
  setTimeout(() => {
    if (!isImageLoaded.value) {
      console.warn('Image loading timeout, proceeding with animation')
      isImageLoaded.value = true
      checkAndStartAnimation()
    }
  }, 700) // 0.7 second timeout
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


/* LOADING OVERLAY STYLES
   =====================
   Full-screen loading overlay with spinner and smooth transitions */

.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #fef7f7 0%, #fdf2f8 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  transition: opacity 0.5s ease-out;
}

.loading-content {
  text-align: center;
  color: #f06292;
}

.loading-spinner {
  width: 50px;
  height: 50px;
  border: 4px solid rgba(240, 98, 146, 0.2);
  border-left: 4px solid #f06292;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto 1rem;
}

.loading-text {
  font-family: 'Inter', sans-serif;
  font-size: 1.2rem;
  font-weight: 500;
  color: #f06292;
  margin: 0;
  opacity: 0.8;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* CONTENT VISIBILITY CONTROLS
   ===========================
   Hide content until all assets are loaded */

.content-hidden {
  opacity: 0;
  visibility: hidden;
  transition: none; /* Remove transition to prevent flickering */
}

/* When content becomes visible */
.content-hidden:not(.content-hidden) {
  opacity: 1;
  visibility: visible;
}

/* HERO AVATAR ENHANCEMENTS
   ========================
   Improved styling for profile image */

.hero-avatar {
  border: 5px solid transparent;
  background-image: linear-gradient(white, white), linear-gradient(45deg, #ec9a9a, #f4b1b1);
  background-origin: border-box;
  background-clip: content-box, border-box;
  box-shadow: 0 0 35px rgba(236, 154, 154, 0.4);
  transition: all 0.3s ease;
  max-width: 320px;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
  /* Ensure image loads with proper aspect ratio */
  aspect-ratio: 1;
  width: 100%;
  height: auto;
}

.hero-avatar:hover {
  transform: scale(1.05);
  box-shadow: 0 0 45px rgba(236, 154, 154, 0.6);
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
