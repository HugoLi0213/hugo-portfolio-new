<template>
  <div class="terminal-widget">
    <div class="terminal-header">
      <div class="terminal-controls">
        <span class="terminal-control red"></span>
        <span class="terminal-control yellow"></span>
        <span class="terminal-control green"></span>
      </div>
      <div class="terminal-title">hugo@portfolio:~$</div>
    </div>
    <div class="terminal-content">
      <div v-for="(line, index) in terminalLines" :key="index" class="terminal-line">
        <span class="terminal-prompt" v-if="line.type === 'command'">$ </span>
        <span :class="['terminal-text', line.type]">{{ line.text }}</span>
      </div>
      <div class="terminal-cursor"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const terminalLines = ref([])

const commands = [
  { type: 'command', text: 'git status' },
  { type: 'output', text: 'On branch main' },
  { type: 'output', text: 'Your branch is up to date' },
  { type: 'command', text: 'npm run dev' },
  { type: 'output', text: '🚀 Portfolio running at localhost:5173' },
  { type: 'command', text: 'git log --oneline -3' },
  { type: 'output', text: 'a1b2c3d Add dark theme implementation' },
  { type: 'output', text: 'e4f5g6h Update project animations' },
  { type: 'output', text: 'h7i8j9k Initial portfolio setup' },
]

const typeWriter = (text, delay = 50) => {
  return new Promise(resolve => {
    let index = 0
    const interval = setInterval(() => {
      if (index < text.length) {
        terminalLines.value[terminalLines.value.length - 1].text += text[index]
        index++
      } else {
        clearInterval(interval)
        resolve()
      }
    }, delay)
  })
}

const simulateTerminal = async () => {
  for (const command of commands) {
    terminalLines.value.push({ ...command, text: '' })
    await typeWriter(command.text, command.type === 'command' ? 100 : 30)
    await new Promise(resolve => setTimeout(resolve, 500))
  }
}

onMounted(() => {
  setTimeout(simulateTerminal, 1000)
})
</script>

<style scoped>
.terminal-widget {
  background: #1e1e1e;
  border-radius: 8px;
  border: 1px solid #333;
  font-family: 'Fira Code', 'Consolas', 'Monaco', monospace;
  font-size: 0.85rem;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  max-width: 450px;
}

.terminal-header {
  background: #2d2d2d;
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #333;
}

.terminal-controls {
  display: flex;
  gap: 0.5rem;
}

.terminal-control {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.terminal-control.red { background: #ff5f57; }
.terminal-control.yellow { background: #ffbd2e; }
.terminal-control.green { background: #28ca42; }

.terminal-title {
  color: #bbb;
  font-size: 0.8rem;
  font-weight: 500;
}

.terminal-content {
  padding: 1rem;
  max-height: 200px;
  overflow-y: auto;
  background: #1e1e1e;
}

.terminal-line {
  margin-bottom: 0.25rem;
  display: flex;
  align-items: flex-start;
}

.terminal-prompt {
  color: #6366f1;
  font-weight: bold;
  margin-right: 0.5rem;
}

.terminal-text.command {
  color: rgba(255, 255, 255, 0.9);
  font-weight: 500;
}

.terminal-text.output {
  color: #bbb;
  margin-left: 1rem;
}

.terminal-cursor {
  display: inline-block;
  background: #6366f1;
  width: 8px;
  height: 1rem;
  animation: blink 1s infinite;
  margin-left: 0.25rem;
}

@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

/* Custom scrollbar */
.terminal-content::-webkit-scrollbar {
  width: 4px;
}

.terminal-content::-webkit-scrollbar-track {
  background: #2d2d2d;
}

.terminal-content::-webkit-scrollbar-thumb {
  background: #6366f1;
  border-radius: 2px;
}
</style>
