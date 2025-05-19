<template>
  <section :class="['py-5', bgClass]" :id="id" ref="section">
    <div class="container px-4">
      <h2 class="text-center mb-2 display-5 fw-bold" ref="titleEl" v-text="title"></h2>
      <div v-if="subtitle" class="text-center mb-5 text-secondary fs-5" v-text="subtitle"></div>
      <div ref="content" class="content-wrapper">
        <slot></slot>
      </div>
    </div>
  </section>
</template>

<script setup>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { onMounted, ref } from 'vue'
gsap.registerPlugin(ScrollTrigger)

const props = defineProps({
  title: { type: String, required: true },
  subtitle: { type: String, default: '' },
  id: { type: String, required: true },
  bgClass: { type: String, default: '' }
})

const section = ref(null)
const titleEl = ref(null)
const content = ref(null)

onMounted(() => {
  if (titleEl.value && section.value) {
    gsap.from(titleEl.value, {
      scrollTrigger: {
        trigger: section.value,
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      },
      opacity: 0,
      y: 50,
      duration: 1
    })
  }
  if (content.value) {
    // Animate each child element individually for better effect and accessibility
    Array.from(content.value.children).forEach((el, i) => {
      if (el.nodeType === 1 && el.tagName) {
        gsap.from(el, {
          scrollTrigger: {
            trigger: content.value,
            start: 'top 75%',
            toggleActions: 'play none none reverse'
          },
          opacity: 0,
          y: 30,
          duration: 0.8,
          delay: i * 0.2
        })
      }
    })
  }
})
</script>

<style scoped>
.content-wrapper {
  position: relative;
}
</style>
