<template>
  <button 
    @click="toggleTheme" 
    class="theme-toggle"
    :title="`Switch to ${isDark ? 'light' : 'dark'} mode`"
    aria-label="Toggle theme"
  >
    <i :class="isDark ? 'fas fa-sun' : 'fas fa-moon'"></i>
  </button>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'

const isDark = ref(true) // Default to dark theme

const toggleTheme = () => {
  isDark.value = !isDark.value
  applyTheme()
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
}

const applyTheme = () => {
  const root = document.documentElement
  if (isDark.value) {
    root.classList.add('dark-theme')
    root.classList.remove('light-theme')
  } else {
    root.classList.add('light-theme')
    root.classList.remove('dark-theme')
  }
}

onMounted(() => {
  // Load saved theme preference
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme) {
    isDark.value = savedTheme === 'dark'
  } else {
    // Check system preference
    isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
  }
  applyTheme()
})

watch(isDark, applyTheme)
</script>

<style scoped>
.theme-toggle {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: rgba(255, 255, 255, 0.9);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  font-size: 1rem;
}

.theme-toggle:hover {
  background: rgba(99, 102, 241, 0.2);
  border-color: rgba(99, 102, 241, 0.5);
  transform: scale(1.1);
}

.theme-toggle:focus {
  outline: 2px solid #6366f1;
  outline-offset: 2px;
}

.theme-toggle i {
  transition: transform 0.3s ease;
}

.theme-toggle:hover i {
  transform: rotate(180deg);
}
</style>
