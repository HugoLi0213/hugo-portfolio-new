<template>
  <div class="weather-hk-compact" v-if="weather">
    <img v-if="weather.icon" :src="weather.icon" alt="weather icon" class="weather-icon" />
    <span class="weather-temp">{{ weather.temp }}°C</span>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const weather = ref(null)

async function fetchWeather() {
  // Open-Meteo API for Hong Kong (lat: 22.3193, lon: 114.1694)
  const url = 'https://api.open-meteo.com/v1/forecast?latitude=22.3193&longitude=114.1694&current_weather=true&timezone=Asia%2FHong_Kong'
  try {
    const res = await fetch(url)
    const data = await res.json()
    if (data.current_weather) {
      const temp = Math.round(data.current_weather.temperature)
      const code = data.current_weather.weathercode
      const icon = weatherCodeToIcon(code)
      weather.value = { temp, icon }
    }
  } catch (e) {
    weather.value = { temp: '--', icon: null }
  }
}

function weatherCodeToIcon(code) {
  // Use open-meteo icons or fallback
  if (code === 0) return 'https://cdn.jsdelivr.net/gh/erikflowers/weather-icons/svg/wi-day-sunny.svg'
  if ([1,2,3].includes(code)) return 'https://cdn.jsdelivr.net/gh/erikflowers/weather-icons/svg/wi-day-cloudy.svg'
  if ([45,48].includes(code)) return 'https://cdn.jsdelivr.net/gh/erikflowers/weather-icons/svg/wi-fog.svg'
  if ([51,53,55,56,57].includes(code)) return 'https://cdn.jsdelivr.net/gh/erikflowers/weather-icons/svg/wi-sprinkle.svg'
  if ([61,63,65,66,67,80,81,82].includes(code)) return 'https://cdn.jsdelivr.net/gh/erikflowers/weather-icons/svg/wi-rain.svg'
  if ([71,73,75,77,85,86].includes(code)) return 'https://cdn.jsdelivr.net/gh/erikflowers/weather-icons/svg/wi-snow.svg'
  if ([95,96,99].includes(code)) return 'https://cdn.jsdelivr.net/gh/erikflowers/weather-icons/svg/wi-thunderstorm.svg'
  return 'https://cdn.jsdelivr.net/gh/erikflowers/weather-icons/svg/wi-cloudy.svg'
}

onMounted(() => {
  fetchWeather() // Fetch immediately on mount
  setInterval(fetchWeather, 600000) // Refresh every 10 minutes
})
</script>

<style scoped>
.weather-hk-compact {
  display: flex;
  align-items: center;
  font-family: 'Fira Mono', 'Consolas', 'Menlo', monospace;
  background: rgba(236, 154, 154, 0.1);
  color: #4b5563;
  border-radius: 8px;
  padding: 0.1em 0.6em;
  font-size: 1em;
  gap: 0.4em;
  border: 1px solid rgba(236, 154, 154, 0.2);
  min-width: 0;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.weather-hk-compact:hover {
  background: rgba(236, 154, 154, 0.2);
  border-color: rgba(236, 154, 154, 0.5);
}

.weather-icon {
  height: 1.2em;
  width: 1.2em;
  margin-right: 0.2em;
  vertical-align: middle;
  filter: brightness(1.2) contrast(1.1);
}

.weather-temp {
  font-variant-numeric: tabular-nums;
  font-size: 1em;
  letter-spacing: 0.03em;
  color: #1f2937;
  font-weight: 500;
}
</style>
