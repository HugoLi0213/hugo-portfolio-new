<template>
  <!--
    ANIMATED SECTION COMPONENT
    ==========================
    A reusable wrapper component that provides scroll-triggered animations
    for page sections. Features include:
    - GSAP-powered scroll animations with ScrollTrigger
    - Flexible content insertion via Vue slots
    - Customizable styling with props
    - Gradient text effects for section titles
    - Staggered animation for child elements
    
    Props:
    - title: Section heading text (required)
    - subtitle: Optional descriptive text below title
    - id: HTML id for the section (required)
    - bgClass: Optional CSS class for background styling
  -->
  <section :class="['animated-section-wrapper', id === 'about' ? 'py-3' : 'py-5', bgClass]" :id="id" ref="section">
    <div class="container px-4">
      <!-- Section Title with refined typesetting -->
      <h2 class="section-heading text-center mb-2" ref="titleEl" v-text="title"></h2>
      
      <!-- Optional Subtitle -->
      <p v-if="subtitle" class="section-subtitle text-center mb-4" v-text="subtitle"></p>
      
      <!-- Content Slot - Where child components/content is inserted -->
      <div ref="content" class="content-wrapper">
        <slot></slot>
      </div>
    </div>
  </section>
</template>

<script setup>
// ====================================================================
// ANIMATED SECTION COMPONENT SCRIPT
// ====================================================================
// This component provides scroll-triggered animations using GSAP and
// ScrollTrigger. It creates a reusable section wrapper with automated
// animation effects that trigger when the section enters the viewport.

// IMPORTS
// =======
import { gsap } from 'gsap'                    // GreenSock Animation Platform
import { ScrollTrigger } from 'gsap/ScrollTrigger'  // GSAP plugin for scroll-based triggers
import { onMounted, ref } from 'vue'           // Vue 3 composition API

// Register GSAP plugin for scroll-triggered animations
gsap.registerPlugin(ScrollTrigger)

// COMPONENT PROPS
// ===============
// Define the props this component accepts from parent components
const props = defineProps({
  title: { type: String, required: true },      // Section heading text
  subtitle: { type: String, default: '' },      // Optional subtitle below main title
  id: { type: String, required: true },         // HTML ID for the section element
  bgClass: { type: String, default: '' }        // Optional background CSS class
})

// TEMPLATE REFERENCES
// ===================
// Vue refs for accessing DOM elements in the template
const section = ref(null)      // Reference to the main section element
const titleEl = ref(null)      // Reference to the title heading element  
const content = ref(null)      // Reference to the content wrapper element

// ANIMATION SETUP
// ===============
// Configure scroll-triggered animations after component is mounted
onMounted(() => {
  // TITLE ANIMATION
  // Animate the section title when it enters viewport
  if (titleEl.value && section.value) {
    gsap.from(titleEl.value, {
      scrollTrigger: {
        trigger: section.value,                 // Element that triggers the animation
        start: 'top 80%',                      // Animation starts when section top reaches 80% down viewport
        toggleActions: 'play none none reverse' // Play on enter, reverse on leave
      },
      opacity: 0,                              // Start invisible
      y: 50,                                   // Start 50px below final position
      duration: 1                              // 1 second animation duration
    })
  }
  
  // CONTENT ANIMATION
  // Animate child elements with staggered timing for better visual effect
  if (content.value) {
    // Loop through each direct child element of the content wrapper
    Array.from(content.value.children).forEach((el, i) => {
      // Only animate actual DOM elements (not text nodes or comments)
      if (el.nodeType === 1 && el.tagName) {
        gsap.from(el, {
          scrollTrigger: {
            trigger: content.value,             // Content wrapper triggers all child animations
            start: 'top 75%',                  // Start when wrapper reaches 75% down viewport
            toggleActions: 'play none none reverse'
          },
          opacity: 0,                          // Start invisible
          y: 30,                              // Start 30px below final position
          duration: 0.8,                      // Shorter duration for content elements
          delay: i * 0.2                      // Staggered delay: 0s, 0.2s, 0.4s, etc.
        })
      }
    })
  }
})
</script>

<style scoped>
/* ====================================================================
   ANIMATED SECTION COMPONENT STYLES
   ====================================================================
   Minimal styling for the content wrapper. Most visual styling is
   handled by parent components and Bootstrap classes in the template.
*/

/* CONTENT WRAPPER
   ===============
   Container for slot content with relative positioning for animation context */
.content-wrapper {
  position: relative;                          /* Establishes positioning context for child animations */
}
</style>
