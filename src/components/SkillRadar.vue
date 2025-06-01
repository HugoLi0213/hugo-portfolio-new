<template>
  <div class="skill-radar-container">
    <div class="radar-header">
      <h6 class="radar-title">
        <i class="fas fa-chart-area me-2"></i>
        Skill Proficiency
      </h6>
    </div>
    <div class="radar-chart" ref="radarChart">
      <svg viewBox="0 0 200 200" class="radar-svg">
        <!-- Background grid -->
        <g class="grid">
          <circle v-for="level in 5" :key="level" 
                  :cx="100" :cy="100" 
                  :r="level * 16" 
                  fill="none" 
                  stroke="rgba(255,255,255,0.1)" 
                  stroke-width="1"/>
          <g v-for="(skill, index) in radarSkills" :key="skill.name">
            <line :x1="100" :y1="100" 
                  :x2="100 + 80 * Math.cos((index * 2 * Math.PI) / radarSkills.length - Math.PI/2)"
                  :y2="100 + 80 * Math.sin((index * 2 * Math.PI) / radarSkills.length - Math.PI/2)"
                  stroke="rgba(255,255,255,0.1)" 
                  stroke-width="1"/>
          </g>
        </g>
        
        <!-- Skill area -->
        <polygon 
          :points="skillPoints" 
          fill="rgba(99, 102, 241, 0.2)" 
          stroke="#6366f1" 
          stroke-width="2"/>
        
        <!-- Skill points -->
        <g v-for="(skill, index) in radarSkills" :key="`point-${skill.name}`">
          <circle 
            :cx="100 + (skill.level * 16) * Math.cos((index * 2 * Math.PI) / radarSkills.length - Math.PI/2)"
            :cy="100 + (skill.level * 16) * Math.sin((index * 2 * Math.PI) / radarSkills.length - Math.PI/2)"
            r="3" 
            fill="#6366f1"/>
        </g>
        
        <!-- Labels -->
        <g v-for="(skill, index) in radarSkills" :key="`label-${skill.name}`">
          <text 
            :x="100 + 90 * Math.cos((index * 2 * Math.PI) / radarSkills.length - Math.PI/2)"
            :y="100 + 90 * Math.sin((index * 2 * Math.PI) / radarSkills.length - Math.PI/2)"
            text-anchor="middle" 
            dominant-baseline="middle"
            class="skill-label"
            :class="{ 'label-left': (100 + 90 * Math.cos((index * 2 * Math.PI) / radarSkills.length - Math.PI/2)) < 100 }">
            {{ skill.name }}
          </text>
        </g>
      </svg>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const radarSkills = ref([
  { name: 'Frontend', level: 4.5 },
  { name: 'Backend', level: 3.5 },
  { name: 'AI/ML', level: 4.0 },
  { name: 'DevOps', level: 3.0 },
  { name: 'Design', level: 3.5 },
  { name: 'Mobile', level: 2.5 }
])

const skillPoints = computed(() => {
  return radarSkills.value.map((skill, index) => {
    const angle = (index * 2 * Math.PI) / radarSkills.value.length - Math.PI/2
    const x = 100 + (skill.level * 16) * Math.cos(angle)
    const y = 100 + (skill.level * 16) * Math.sin(angle)
    return `${x},${y}`
  }).join(' ')
})

const radarChart = ref(null)

onMounted(() => {
  // Animate the radar chart
  if (radarChart.value) {
    const polygon = radarChart.value.querySelector('polygon')
    if (polygon) {
      polygon.style.strokeDasharray = polygon.getTotalLength()
      polygon.style.strokeDashoffset = polygon.getTotalLength()
      polygon.style.animation = 'drawRadar 2s ease-out forwards'
    }
  }
})
</script>

<style scoped>
.skill-radar-container {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 1.5rem;
  backdrop-filter: blur(10px);
  max-width: 350px;
}

.radar-header {
  margin-bottom: 1rem;
  text-align: center;
}

.radar-title {
  color: rgba(255, 255, 255, 0.9);
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
}

.radar-chart {
  width: 100%;
  height: auto;
}

.radar-svg {
  width: 100%;
  height: auto;
  max-width: 250px;
}

.skill-label {
  fill: rgba(255, 255, 255, 0.9);
  font-size: 10px;
  font-weight: 500;
  font-family: system-ui, -apple-system, sans-serif;
}

.label-left {
  text-anchor: end;
}

@keyframes drawRadar {
  to {
    stroke-dashoffset: 0;
  }
}

/* Responsive */
@media (max-width: 768px) {
  .skill-radar-container {
    max-width: 100%;
    padding: 1rem;
  }
  
  .skill-label {
    font-size: 9px;
  }
}
</style>
