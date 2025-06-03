// ====================================================================
// MAIN.JS - APPLICATION ENTRY POINT
// ====================================================================
// This is the main entry point for the Vue.js portfolio application.
// It configures the Vue app, router, and imports all necessary dependencies
// including CSS frameworks and components.

// EXTERNAL CSS DEPENDENCIES
// =========================
// Import FontAwesome icons for social media and interface icons
import '@fortawesome/fontawesome-free/css/all.min.css'

// Import Bootstrap CSS framework for responsive grid and utility classes
import 'bootstrap/dist/css/bootstrap.min.css'

// Import Bootstrap JavaScript for interactive components (modals, dropdowns, etc.)
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// VUE.JS CORE IMPORTS
// ===================
import { createApp } from 'vue'; // Vue 3 app factory function
import { createRouter, createWebHistory } from 'vue-router'; // Vue Router for single-page app routing

// APPLICATION COMPONENTS
// ======================
import App from './App.vue'; // Root layout component
import Home from './pages/Home.vue'; // Homepage component (eagerly loaded)

// CUSTOM STYLES
// =============
import './style.css'; // Application-specific CSS

// ROUTING CONFIGURATION
// =====================
// Define the application routes for Vue Router
const routes = [
  { 
    path: '/', 
    component: Home                                        // Root path shows Home component (eagerly loaded)
  }, 
  { 
    path: '/about', 
    component: () => import('./pages/About.vue')          // About page with lazy loading for performance
  }
]

// ROUTER INSTANCE CREATION
// ========================
// Create router instance with HTML5 history mode for clean URLs
const router = createRouter({
  history: createWebHistory(),                             // Uses HTML5 History API (no hash in URLs)
  routes                                                   // Route definitions from above
})

// APPLICATION INITIALIZATION
// ==========================
// Create and mount the Vue application
createApp(App)                                            // Create Vue app instance with root component
  .use(router)                                            // Install Vue Router plugin
  .mount('#app')                                          // Mount app to DOM element with id="app"
