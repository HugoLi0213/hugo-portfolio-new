<template>
  <div class="scroll-progress-container">
    <div class="scroll-progress-bar" :style="{ width: scrollProgress + '%' }"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const scrollProgress = ref(0)

const updateScrollProgress = () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop
  const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
  const progress = (scrollTop / scrollHeight) * 100
  scrollProgress.value = Math.min(progress, 100)
}

onMounted(() => {
  window.addEventListener('scroll', updateScrollProgress)
  updateScrollProgress()
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateScrollProgress)
})
</script>

<style scoped>
.scroll-progress-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: rgba(255, 255, 255, 0.1);
  z-index: 9999;
  backdrop-filter: blur(10px);
}

.scroll-progress-bar {
  height: 100%;
  background: linear-gradient(90deg, #6366f1, #8b5cf6);
  transition: width 0.1s ease-out;
  box-shadow: 0 0 10px rgba(99, 102, 241, 0.5);
}
</style>
