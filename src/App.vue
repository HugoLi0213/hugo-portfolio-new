<template>
  <div>
    <!-- Scroll Progress Indicator -->
    <ScrollProgress />
    
    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-light fixed-top shadow-lg">
      <div class="container px-4 d-flex align-items-center" style="position: relative; z-index: 2;">
        <router-link class="navbar-brand fw-bold" to="/">Hugo Portfolio</router-link> <!-- Changed to router-link -->
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
            <li class="nav-item"><router-link class="nav-link px-3" to="/">Home</router-link></li> <!-- Changed to router-link -->
            <li class="nav-item"><router-link class="nav-link px-3" to="/about">About this web</router-link></li>
            
          </ul>
        </div>
      </div>
    </nav>

    <!-- Router View will render the component for the current route -->
    <router-view />

    <!-- Footer (can be part of App.vue layout or moved into Home.vue if specific to home) -->
    <footer class="py-5" style="background: linear-gradient(135deg, #f5f1ec 0%, #f2ede6 100%); border-top: 1px solid rgba(236, 154, 154, 0.2);">
      <div class="container px-4" style="position: relative; z-index: 2;">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <!-- Contact Info -->
            <div class="text-center mb-4">
              <h5 class="mb-3" style="color: #1f2937;">Let's Connect</h5>
              <div class="d-flex justify-content-center gap-4 flex-wrap">
                <a :href="'mailto:' + email" class="text-decoration-none hover-effect" style="color: #4b5563;">
                  <i class="fas fa-envelope me-2"></i>{{ email }}
                </a>
                <a href="tel:+85262095238" class="text-decoration-none hover-effect" style="color: #4b5563;">
                  <i class="fas fa-phone me-2"></i>+852 62095238
                </a>
                <a href="https://discord.com/users/hugo_o.y" target="_blank" class="text-decoration-none hover-effect" style="color: #4b5563;">
                  <i class="fab fa-discord me-2"></i>hugo_o.y
                </a>
                <span style="color: #4b5563;">
                  <i class="fas fa-map-marker-alt me-2"></i>Hong Kong
                </span>
              </div>
            </div>
            
            <!-- Social Links -->
            <div class="text-center mb-4">
              <div class="d-flex justify-content-center gap-3">
                <a :href="linkedin" target="_blank" class="text-decoration-none hover-effect" rel="noopener" style="color: #4b5563;">
                  <i class="fab fa-linkedin fa-lg me-1"></i>LinkedIn
                </a>
                <a :href="github" target="_blank" class="text-decoration-none hover-effect" rel="noopener" style="color: #4b5563;">
                  <i class="fab fa-github fa-lg me-1"></i>GitHub
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
// Import components used in App.vue layout (Navbar, Footer elements)
import Clock from './components/Clock.vue'
import ScrollProgress from './components/ScrollProgress.vue'
import WeatherHK from './components/WeatherHK.vue'

// Social media links - these are used in the footer, so keep them in App.vue
const linkedin = 'https://www.linkedin.com/in/hugo-li-77a0581b0/'
const github = 'https://github.com/HugoLi0213'
const email = 's12332146@gmail.com'

// Removed project and skills data, heroContent, heroImage refs, getBlossomStyle, onMounted for animations
// These are now part of Home.vue

</script>

<style scoped>
/* Light Cherry Blossom Theme Styles - Global styles for App.vue layout */
.navbar {
  padding: 1.15rem 0; /* Adjusted padding */
  backdrop-filter: blur(15px);
  background: #faf7f4 !important; /* Milk tea background */
  border-bottom: 1px solid rgba(236, 154, 154, 0.2); /* Pinkish border */
  box-shadow: 0 4px 25px rgba(236, 154, 154, 0.1); /* Refined shadow */
  position: relative;
  overflow: hidden; /* For potential decorative elements */
}

.navbar::before {
  display: none; /* Removed purple gradient */
}

.navbar-brand {
  font-size: 1.5rem;
  background: linear-gradient(45deg, #ec9a9a, #f4b1b1); /* Pink gradient */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 600;
  transition: transform 0.3s ease; /* Added transition for hover */
}

.navbar-brand:hover {
  transform: scale(1.03); /* Added hover effect */
}

.nav-link {
  font-weight: 500;
  transition: all 0.3s ease;
  color: rgba(51, 51, 51, 0.8) !important; /* Darker text for readability */
  position: relative;
  padding-top: 0.6rem; /* Adjusted vertical padding */
  padding-bottom: 0.6rem; /* Adjusted vertical padding */
  /* Horizontal padding is handled by .px-3 on the parent <li> or link itself */
}

.nav-link:hover, .nav-link.router-link-active, .nav-link.router-link-exact-active {
  color: #ec9a9a !important; /* Pink color for hover/active */
  transform: translateY(-2px);
  font-weight: 600; /* Added bolder font for active/hover */
}

.nav-link::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: 0.2rem; /* Adjusted position to be closer to text */
  left: 50%;
  background: linear-gradient(45deg, #ec9a9a, #f4b1b1); /* Pink gradient */
  transition: all 0.3s ease;
  transform: translateX(-50%);
}

.nav-link:hover::after, .nav-link.router-link-active::after, .nav-link.router-link-exact-active::after {
  width: 80%;
}

/* REMOVED EMPTY RULE: .cherry-footer */

/* REMOVED EMPTY RULE: .decorative-cherries */

/* Style for the navbar toggler icon */
.navbar-toggler {
  border: none; /* Ensure no default border interferes */
}

.navbar-toggler-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba(236, 154, 154, 0.8)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e") !important;
}

/* Responsive adjustments for navbar/footer if needed */
@media (max-width: 768px) {
  .container {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
}

@media (max-width: 576px) {
  .container {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}

html {
  scroll-behavior: smooth;
}
</style>