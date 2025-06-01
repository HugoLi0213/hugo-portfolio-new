<template>
  <div class="tech-stack-showcase">
    <div class="stack-header">
      <h6 class="stack-title">
        <i class="fas fa-layer-group me-2"></i>
        Tech Stack
      </h6>
    </div>
    <div class="stack-grid">
      <div v-for="tech in techStack" :key="tech.name" 
           class="tech-item" 
           :style="{ animationDelay: tech.delay }"
           @mouseenter="playHoverSound">
        <div class="tech-icon">
          <i :class="tech.icon" :style="{ color: tech.color }"></i>
        </div>
        <div class="tech-info">
          <div class="tech-name">{{ tech.name }}</div>
          <div class="tech-category">{{ tech.category }}</div>
          <div class="tech-level">
            <div class="level-bar">
              <div class="level-fill" :style="{ width: tech.proficiency + '%', backgroundColor: tech.color }"></div>
            </div>
            <span class="level-text">{{ tech.proficiency }}%</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const techStack = ref([
  { name: 'Vue.js', category: 'Frontend', proficiency: 85, icon: 'fab fa-vuejs', color: '#4FC08D', delay: '0.1s' },
  { name: 'React', category: 'Frontend', proficiency: 75, icon: 'fab fa-react', color: '#61DAFB', delay: '0.2s' },
  { name: 'JavaScript', category: 'Language', proficiency: 90, icon: 'fab fa-js-square', color: '#F7DF1E', delay: '0.3s' },
  { name: 'TypeScript', category: 'Language', proficiency: 70, icon: 'fab fa-js-square', color: '#3178C6', delay: '0.4s' },
  { name: 'Python', category: 'Language', proficiency: 80, icon: 'fab fa-python', color: '#3776AB', delay: '0.5s' },
  { name: 'Node.js', category: 'Backend', proficiency: 75, icon: 'fab fa-node-js', color: '#339933', delay: '0.6s' },
  { name: 'HTML5', category: 'Markup', proficiency: 95, icon: 'fab fa-html5', color: '#E34F26', delay: '0.7s' },
  { name: 'CSS3', category: 'Styling', proficiency: 85, icon: 'fab fa-css3-alt', color: '#1572B6', delay: '0.8s' },
  { name: 'Git', category: 'DevOps', proficiency: 80, icon: 'fab fa-git-alt', color: '#F05032', delay: '0.9s' },
  { name: 'AI/ML', category: 'AI', proficiency: 70, icon: 'fas fa-robot', color: '#FF6B6B', delay: '1.0s' }
])

const playHoverSound = () => {
  // Create a subtle audio feedback (optional)
  try {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)()
    const oscillator = audioContext.createOscillator()
    const gainNode = audioContext.createGain()
    
    oscillator.connect(gainNode)
    gainNode.connect(audioContext.destination)
    
    oscillator.frequency.setValueAtTime(800, audioContext.currentTime)
    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime)
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1)
    
    oscillator.start(audioContext.currentTime)
    oscillator.stop(audioContext.currentTime + 0.1)
  } catch (e) {
    // Silently fail if audio context isn't supported
  }
}
</script>

<style scoped>
.tech-stack-showcase {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 1.5rem;
  backdrop-filter: blur(10px);
}

.stack-header {
  margin-bottom: 1.5rem;
  text-align: center;
}

.stack-title {
  color: rgba(255, 255, 255, 0.9);
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
}

.stack-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1rem;
}

.tech-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.75rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  transform: translateY(20px);
  animation: slideInUp 0.6s ease-out forwards;
  cursor: pointer;
}

.tech-item:hover {
  transform: translateY(-2px) scale(1.02);
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
}

.tech-icon {
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  transition: all 0.3s ease;
}

.tech-item:hover .tech-icon {
  transform: scale(1.1) rotate(5deg);
}

.tech-info {
  flex: 1;
  min-width: 0;
}

.tech-name {
  font-weight: 600;
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.95rem;
  margin-bottom: 0.25rem;
}

.tech-category {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.tech-level {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.level-bar {
  flex: 1;
  height: 4px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
  overflow: hidden;
}

.level-fill {
  height: 100%;
  transition: width 1s ease-out 0.5s;
  border-radius: 2px;
  position: relative;
}

.level-fill::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
  transform: translateX(-100%);
  animation: shine 2s ease-out infinite;
}

.level-text {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;
  min-width: 2.5rem;
  text-align: right;
  font-variant-numeric: tabular-nums;
}

@keyframes slideInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes shine {
  0% { transform: translateX(-100%); }
  50% { transform: translateX(100%); }
  100% { transform: translateX(100%); }
}

/* Responsive */
@media (max-width: 768px) {
  .stack-grid {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }
  
  .tech-item {
    padding: 0.5rem;
  }
  
  .tech-icon {
    width: 2.5rem;
    height: 2.5rem;
    font-size: 1.5rem;
  }
  
  .tech-name {
    font-size: 0.9rem;
  }
  
  .tech-category {
    font-size: 0.75rem;
  }
}
</style>
