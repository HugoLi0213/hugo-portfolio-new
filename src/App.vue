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