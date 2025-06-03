<template>
  <!--
    SCROLL PROGRESS COMPONENT
    =========================
    A fixed-position progress bar that tracks user's scroll position on the page.
    Features:
    - Shows visual progress from 0% to 100% as user scrolls
    - Fixed at the top of the viewport with high z-index
    - Glassmorphism design with gradient colors
    - Smooth animation during scroll
  -->
  <div class="scroll-progress-container">
    <!-- Progress bar with dynamic width based on scroll percentage -->
    <div class="scroll-progress-bar" :style="{ width: scrollProgress + '%' }"></div>
  </div>
</template>

<script setup>
// ====================================================================
// SCROLL PROGRESS COMPONENT SCRIPT
// ====================================================================
// This component tracks the user's scroll position and displays it as
// a visual progress bar at the top of the page. Uses reactive Vue 3
// composition API with lifecycle hooks for event management.

// IMPORTS
// =======
import { ref, onMounted, onUnmounted } from 'vue'

// REACTIVE STATE
// ==============
// Tracks scroll progress as a percentage (0-100)
const scrollProgress = ref(0)

// SCROLL CALCULATION FUNCTION
// ===========================
// Calculates current scroll progress as a percentage of total scrollable content
const updateScrollProgress = () => {
  // Get current scroll position from top of page
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop
  
  // Calculate total scrollable height (document height minus viewport height)
  const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
  
  // Calculate progress percentage
  const progress = (scrollTop / scrollHeight) * 100
  
  // Ensure progress never exceeds 100% and update reactive state
  scrollProgress.value = Math.min(progress, 100)
}

// LIFECYCLE HOOKS
// ===============
// Set up scroll event listener when component is mounted
onMounted(() => {
  window.addEventListener('scroll', updateScrollProgress)
  updateScrollProgress() // Initialize progress on mount
})

// Clean up event listener when component is unmounted to prevent memory leaks
onUnmounted(() => {
  window.removeEventListener('scroll', updateScrollProgress)
})
</script>

<style scoped>
/* ====================================================================
   SCROLL PROGRESS COMPONENT STYLES
   ====================================================================
   Styling for the scroll progress indicator with glassmorphism design.
   Uses fixed positioning to stay at top of viewport and gradient colors
   for visual appeal.
*/

/* PROGRESS CONTAINER
   ==================
   Fixed container at top of page with glassmorphism background */
.scroll-progress-container {
  position: fixed;                                                 /* Fixed position at top of viewport */
  top: 0;                                                          /* Align to top edge */
  left: 0;                                                         /* Align to left edge */
  width: 100%;                                                     /* Full width across viewport */
  height: 3px;                                                     /* Thin 3px height for subtle presence */
  background: rgba(255, 255, 255, 0.1);                          /* Semi-transparent white background */
  z-index: 9999;                                                  /* High z-index to appear above all content */
  backdrop-filter: blur(10px);                                    /* Glassmorphism blur effect */
}

/* PROGRESS BAR
   ============
   The actual progress indicator with gradient colors and smooth animation */
.scroll-progress-bar {
  height: 100%;                                                    /* Fill container height */
  background: linear-gradient(90deg, #6366f1, #8b5cf6);          /* Purple to violet gradient */
  transition: width 0.1s ease-out;                               /* Smooth width animation during scroll */
  box-shadow: 0 0 10px rgba(99, 102, 241, 0.5);                  /* Subtle glow effect */
}
</style>
