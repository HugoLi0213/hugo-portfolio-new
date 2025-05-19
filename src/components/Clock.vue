<template>
  <div class="clock-code-compact">
    <img src="https://cdn.jsdelivr.net/gh/edent/SuperTinyIcons/images/svg/cat.svg" alt="Cat Logo" class="cat-logo-icon" />
    <span class="clock-time">{{ time }}</span>
    <span class="clock-hkt">HKT</span>
  </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'

const time = ref('')
let timer = null

const updateTime = () => {
  const now = new Date().toLocaleString('en-US', {
    timeZone: 'Asia/Hong_Kong',
    hour12: false
  })
  const timeStr = now.split(', ')[1]
  time.value = timeStr
}

onMounted(() => {
  updateTime()
  timer = setInterval(updateTime, 1000)
})

onBeforeUnmount(() => {
  if (timer) {
    clearInterval(timer)
  }
})
</script>

<style scoped>
.clock-code-compact {
  display: flex;
  align-items: center;
  font-family: 'Fira Mono', 'Consolas', 'Menlo', monospace;
  background: #fff;
  color: #111;
  border-radius: 6px;
  padding: 0.1em 0.7em 0.1em 0.5em;
  font-size: 1em;
  gap: 0.3em;
  border: 1px solid #e0e0e0;
  min-width: 0;
  height: 2.1em;
}
.cat-logo-icon {
  width: 1.5em;
  height: 1.5em;
  margin-right: 0.4em;
  display: inline-block;
  vertical-align: middle;
  border-radius: 2px;
  object-fit: cover;
  background: #fff;
}
.clock-time {
  font-variant-numeric: tabular-nums;
  font-size: 1em;
  letter-spacing: 0.03em;
  color: #111;
}
.clock-hkt {
  color: #111;
  font-size: 0.8em;
  margin-left: 0.25em;
  font-weight: 600;
  letter-spacing: 0.04em;
  opacity: 0.7;
}
</style>
