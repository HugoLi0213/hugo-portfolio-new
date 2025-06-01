<template>
  <div class="clock-code-compact">
    <img src="https://upload.wikimedia.org/wikipedia/commons/5/5b/Flag_of_Hong_Kong.svg" alt="HK Flag" class="hk-flag-icon" />
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
  background: rgba(236, 154, 154, 0.1);
  color: #4b5563;
  border-radius: 8px;
  padding: 0.1em 0.7em 0.1em 0.5em;
  font-size: 1em;
  gap: 0.3em;
  border: 1px solid rgba(236, 154, 154, 0.2);
  min-width: 0;
  height: 2.1em;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.clock-code-compact:hover {
  background: rgba(236, 154, 154, 0.2);
  border-color: rgba(236, 154, 154, 0.5);
}

.hk-flag-icon {
  width: 1.5em;
  height: 1.5em;
  margin-right: 0.4em;
  display: inline-block;
  vertical-align: middle;
  border-radius: 2px;
  object-fit: cover;
  background: #fff;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
}

.clock-time {
  font-variant-numeric: tabular-nums;
  font-size: 1em;
  letter-spacing: 0.03em;
  color: #1f2937;
  font-weight: 500;
}

.clock-hkt {
  color: #6b7280;
  font-size: 0.8em;
  margin-left: 0.25em;
  font-weight: 600;
  letter-spacing: 0.04em;
}
</style>
