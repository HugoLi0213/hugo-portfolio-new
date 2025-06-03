<template>
  <!--
    APP.VUE - ROOT LAYOUT COMPONENT
    ===============================
    This is the main layout component that wraps all pages.
    Contains:
    1. Scroll progress indicator
    2. Fixed navigation bar with responsive menu
    3. Router view for page content
    4. Footer with contact information and social links
    
    Navigation features:
    - Fixed position with backdrop blur effect
    - Responsive hamburger menu for mobile
    - Router-link integration with active states
    - Gradient brand styling
  -->
  <div>
    <!-- 
      SCROLL PROGRESS INDICATOR
      Shows user's reading progress on the page with animated bar
    -->
    <ScrollProgress />
    
    <!-- 
      MAIN NAVIGATION BAR
      Fixed-position navbar with glassmorphism design
      Features: responsive menu, router-link integration, gradient branding
    -->
    <nav class="navbar navbar-expand-lg navbar-light fixed-top shadow-lg">
      <div class="container px-4 d-flex align-items-center" style="position: relative; z-index: 2;">
        
        <!-- Brand Logo/Title - Router link to home -->
        <router-link class="navbar-brand fw-bold" to="/">Hugo Portfolio</router-link>
        
        <!-- Mobile Menu Toggle Button -->
        <div class="d-flex align-items-center gap-3">
          <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
        
        <!-- Collapsible Navigation Menu -->
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <!-- Primary navigation items with router-link integration -->
            <li class="nav-item"><router-link class="nav-link px-3" to="/">Home</router-link></li>
            <li class="nav-item"><router-link class="nav-link px-3" to="/about">About this web</router-link></li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- 
      ROUTER VIEW CONTAINER
      Dynamically renders the component for the current route
      All page content is displayed here based on Vue Router configuration
    -->
    <router-view />    <!-- 
      FOOTER SECTION
      ==============
      Site-wide footer with contact information and social links
      Features: gradient background, centered layout, hover effects
      Contains: email, location, LinkedIn, GitHub, tech stack info
    -->
    <footer class="py-5" style="background: linear-gradient(135deg, #f5f1ec 0%, #f2ede6 100%); border-top: 1px solid rgba(236, 154, 154, 0.2);">
      <div class="container px-4" style="position: relative; z-index: 2;">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            
            <!-- Contact Information Section -->
            <div class="text-center mb-4">
              <h5 class="mb-3" style="color: #1f2937;">Let's Connect</h5>              <div class="d-flex justify-content-center gap-4 flex-wrap">
                
                <!-- Email Contact Link -->
                <a :href="'mailto:' + email" class="text-decoration-none hover-effect" style="color: #4b5563;">
                  <i class="fas fa-envelope me-2"></i>{{ email }}
                </a>
                
                <!-- Location Information -->
                <span style="color: #4b5563;">
                  <i class="fas fa-map-marker-alt me-2"></i>Hong Kong
                </span>
              </div>
            </div>
            
            <!-- Social Media Links Section -->
            <div class="text-center mb-4">
              <div class="d-flex justify-content-center gap-3">
                
                <!-- LinkedIn Profile Link -->
                <a :href="linkedin" target="_blank" class="text-decoration-none hover-effect" rel="noopener" style="color: #4b5563;">
                  <i class="fab fa-linkedin fa-lg me-1"></i>LinkedIn
                </a>
                  <!-- GitHub Profile Link -->
                <a :href="github" target="_blank" class="text-decoration-none hover-effect" rel="noopener" style="color: #4b5563;">
                  <i class="fab fa-github fa-lg me-1"></i>GitHub
                </a>              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
// ====================================================================
// APP.VUE SCRIPT - ROOT COMPONENT CONFIGURATION
// ====================================================================
// This script section configures the main layout component that wraps
// all pages in the portfolio website. It imports necessary components
// and defines contact/social media information used in the footer.

// COMPONENT IMPORTS
// =================
// Import the scroll progress indicator component
// This component shows a progress bar indicating how far the user has scrolled
import ScrollProgress from './components/ScrollProgress.vue'

// CONTACT & SOCIAL MEDIA CONFIGURATION
// ====================================
// These constants define the contact information and social media links
// displayed in the footer section across all pages

// Professional social media profiles
const linkedin = 'https://www.linkedin.com/in/hugo-li-77a0581b0/'  // LinkedIn profile URL
const github = 'https://github.com/HugoLi0213'                     // GitHub profile URL

// Primary contact email address
// This email is used in the footer contact section and can be clicked to open email client
const email = 'hugoapple213@gmail.com'
</script>

<style scoped>
/* ====================================================================
   APP.VUE STYLES - ROOT COMPONENT STYLING
   ====================================================================
   This stylesheet defines the visual design for the main layout component.
   Design approach: Clean, modern aesthetic with soft pink/coral theme,
   glassmorphism effects, and smooth animations throughout.
   
   Key Features:
   - Glassmorphism navigation with backdrop blur
   - Gradient text effects for branding
   - Smooth hover animations and transitions
   - Responsive design for all screen sizes
   - Consistent color palette with CSS custom properties
*/

/* NAVIGATION BAR STYLES
   =====================
   Fixed-position navbar with glassmorphism design and responsive behavior */

/* Main navbar container with glassmorphism effect */
.navbar {
  padding: 1.15rem 0;                                              /* Generous padding for breathing room */
  backdrop-filter: blur(15px);                                     /* Glassmorphism blur effect */
  background: #faf7f4 !important;                                  /* Soft cream background */
  border-bottom: 1px solid rgba(236, 154, 154, 0.2);             /* Subtle pink border */
  box-shadow: 0 4px 25px rgba(236, 154, 154, 0.1);               /* Soft shadow with pink tint */
  position: relative;                                              /* Relative positioning for z-index context */
  overflow: hidden;                                                /* Hide overflow for animations */
}

/* Brand logo styling with gradient text effect */
.navbar-brand {
  font-size: 1.5rem;                                              /* Prominent brand size */
  background: linear-gradient(45deg, #ec9a9a, #f4b1b1);          /* Pink to light pink gradient */
  -webkit-background-clip: text;                                   /* Clip gradient to text (WebKit) */
  -webkit-text-fill-color: transparent;                           /* Make text transparent to show gradient */
  background-clip: text;                                           /* Standard property for text clipping */
  font-weight: 600;                                                /* Semi-bold weight for prominence */
  transition: transform 0.3s ease;                                /* Smooth scale animation on hover */
}

/* Brand hover effect - subtle scale up */
.navbar-brand:hover {
  transform: scale(1.03);                                          /* 3% scale increase on hover */
}

/* Navigation link base styling */
.nav-link {
  font-weight: 500;                                                /* Medium font weight */
  transition: all 0.3s ease;                                      /* Smooth transitions for all properties */
  color: rgba(51, 51, 51, 0.8) !important;                       /* Dark gray with transparency */
  position: relative;                                              /* Relative positioning for pseudo-elements */
  padding-top: 0.6rem;                                            /* Custom vertical padding */
  padding-bottom: 0.6rem;
}

/* Active and hover states for navigation links */
.nav-link:hover, 
.nav-link.router-link-active, 
.nav-link.router-link-exact-active {
  color: #ec9a9a !important;                                      /* Pink color for active/hover */
  transform: translateY(-2px);                                    /* Subtle upward movement */
  font-weight: 600;                                                /* Bolder weight for emphasis */
}

/* Animated underline effect using pseudo-element */
.nav-link::after {
  content: '';                                                     /* Empty content for pseudo-element */
  position: absolute;                                              /* Absolute positioning for precise placement */
  width: 0;                                                        /* Start with no width */
  height: 2px;                                                     /* 2px thick underline */
  bottom: 0.2rem;                                                  /* Position slightly above bottom */
  left: 50%;                                                       /* Center horizontally */
  background: linear-gradient(45deg, #ec9a9a, #f4b1b1);          /* Gradient underline */
  transition: all 0.3s ease;                                      /* Smooth width transition */
  transform: translateX(-50%);                                    /* Center the element */
}

/* Show underline on hover and active states */
.nav-link:hover::after, 
.nav-link.router-link-active::after, 
.nav-link.router-link-exact-active::after {
  width: 80%;                                                      /* Expand to 80% width */
}

/* Mobile menu toggle button styling */
.navbar-toggler {
  border: none;                                                    /* Remove default border */
}

/* Custom hamburger icon with pink color */
.navbar-toggler-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba(236, 154, 154, 0.8)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e") !important;
}

/* RESPONSIVE DESIGN BREAKPOINTS
   =============================
   Mobile-first approach with progressive enhancement */

/* Tablet and small desktop adjustments */
@media (max-width: 768px) {
  .container {
    padding-left: 1.5rem;                                         /* Increased padding for tablets */
    padding-right: 1.5rem;
  }
}

/* Mobile phone adjustments */
@media (max-width: 576px) {
  .container {
    padding-left: 1rem;                                           /* Reduced padding for small screens */
    padding-right: 1rem;
  }
}

/* GLOBAL BEHAVIOR STYLES
   ======================
   Site-wide styling that affects user experience */

/* Smooth scrolling for anchor links and navigation */
html {
  scroll-behavior: smooth;                                         /* Smooth scrolling for better UX */
}
</style>