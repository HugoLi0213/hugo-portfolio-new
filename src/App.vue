<template>
  <div>
    <!-- Navigation -->
    <nav class="navbar">
      <div class="nav-logo">Hugo Portfolio</div>
      <ul>
        <li><a href="#hero">Home</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>

    <!-- Hero Section -->
    <section class="hero" id="hero">
      <div class="hero-content">
        <h1>Li Yin Chung, Hugo</h1>
        <h2>Web Developer & AI Enthusiast</h2>
        <p>
          I build beautiful, performant web experiences.<br>
          Let's create something amazing together.
        </p>
        <div class="hero-links">
          <a :href="linkedin" target="_blank" title="LinkedIn"><i class="fab fa-linkedin"></i></a>
          <a :href="github" target="_blank" title="GitHub"><i class="fab fa-github"></i></a>
          <a :href="'mailto:' + email" title="Email"><i class="fas fa-envelope"></i></a>
        </div>
      </div>
      <div class="hero-image">
        <img src="https://ui-avatars.com/api/?name=Hugo&background=000000&color=fff&size=256" alt="Hugo Avatar" />
      </div>
    </section>

    <!-- Projects Section -->
    <section class="section projects-section" id="projects">
      <h2>Featured Projects</h2>
      <div class="projects-grid">
        <div class="project-card" v-for="project in projects" :key="project.title">
          <div class="project-image">
            <i :class="project.icon"></i>
          </div>
          <div class="project-info">
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
            <div class="project-tags">
              <span v-for="tag in project.tags" :key="tag">{{ tag }}</span>
            </div>
            <a :href="project.link" target="_blank" class="project-link">View on GitHub</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section class="section skills-section" id="skills">
      <h2>Skills</h2>
      <div class="skills-list">
        <div class="skill" v-for="skill in skills" :key="skill.name">
          <i :class="skill.icon"></i>
          <span>{{ skill.name }}</span>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="section about-section" id="about">
      <h2>About Me</h2>
      <div class="about-content">
        <p>
          Hi! I'm Hugo, a passionate web developer based in Hong Kong.<br>
          I love building modern, user-focused web apps and exploring the latest in AI and frontend tech.<br>
          <br>
          <strong>Education:</strong><br>
          Bachelor of Computer Science, HK Metropolitan University (2025)<br>
          Higher Diploma in Data Science, HKU SPACE (2023)
          <br><br>
          <strong>About this web:</strong><br>
          This portfolio is built with Vue.js and showcases my web development and AI projects. It features a modern, responsive design.
        </p>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="section contact-section" id="contact">
      <h2>Contact</h2>
      <div class="contact-info">
        <a :href="'mailto:' + email"><i class="fas fa-envelope"></i> {{ email }}</a>
        <a href="tel:+85262095238"><i class="fas fa-phone"></i> +852 62095238</a>
        <span><i class="fas fa-map-marker-alt"></i> Hong Kong</span>
      </div>
    </section>
  </div>
</template>

<script setup>
const email = "s12332146@gmail.com";
const linkedin = "https://www.linkedin.com/";
const github = "https://github.com/HugoLi0213";

const projects = [
  {
    title: "WeatherApp",
    description: "A simple weather application that fetches and displays weather data for any city.",
    tags: ["JavaScript", "API", "Web App", "HTML", "CSS"],
    link: "https://github.com/HugoLi0213/weatherapp",
    icon: "fas fa-cloud-sun"
  },
  {
    title: "PPE Detection & Danger Zone Monitoring",
    description: "Monitors safety by detecting PPE and danger zones using computer vision.",
    tags: ["HTML", "AI", "Computer Vision", "Python", "OpenCV", "Flask"],
    link: "https://github.com/HugoLi0213/PPE-Detection-and-Danger-Zone-Monitoring-System",
    icon: "fas fa-hard-hat"
  },
  {
    title: "SEO Sleuth with AI",
    description: "An AI-powered tool to analyze and improve website SEO.",
    tags: ["TypeScript", "AI", "SEO", "Node.js", "Express", "React"],
    link: "https://github.com/HugoLi0213/SEO-Sleuth-with-AI",
    icon: "fas fa-search"
  },
  {
    title: "Sun Yat-Sen Tour Guide",
    description: "A web guide for Sun Yat-Sen tours, providing historical information and navigation.",
    tags: ["HTML", "Web Guide", "JavaScript", "Bootstrap", "CSS"],
    link: "https://github.com/HugoLi0213/Sun-Yat-Sen-tour-guid",
    icon: "fas fa-map-marked-alt"
  },
  {
    title: "Hong Kong Date Countdown Web",
    description: "A Vue.js web app to track significant Hong Kong dates, including Lunar New Year and public holidays. Features real-time countdowns and a responsive, user-friendly interface.",
    tags: ["Vue.js", "Bootstrap", "Web App", "JavaScript", "HTML", "CSS"],
    link: "https://github.com/HugoLi0213/Hong-Kong-date-countdown-web",
    icon: "fas fa-calendar-alt"
  }
];

const skills = [
  { name: "JavaScript", icon: "fab fa-js-square" },
  { name: "Python", icon: "fab fa-python" },
  { name: "HTML5", icon: "fab fa-html5" },
  { name: "CSS3", icon: "fab fa-css3-alt" },
  { name: "React.js", icon: "fab fa-react" },
  { name: "Vue.js", icon: "fab fa-vuejs" },
  { name: "GenAI", icon: "fas fa-robot" },
  { name: "Business Analysis", icon: "fas fa-chart-line" },
  { name: "Microsoft Office", icon: "fas fa-file-word" },
  { name: "GitHub", icon: "fab fa-github" },
  { name: "Figma", icon: "fab fa-figma" },
  { name: "Canva", icon: "fas fa-paint-brush" },
  { name: "Cursor", icon: "fas fa-mouse-pointer" },
];
</script>

<style scoped>
body {
  font-family: 'SF Pro Display', 'Segoe UI', 'Arial', sans-serif;
  background: #ffffff;
  margin: 0;
  padding: 0;
}
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  color: #000;
  padding: 1.2rem 3vw;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  position: sticky;
  top: 0;
  z-index: 100;
}
.nav-logo {
  font-weight: 700;
  font-size: 1.4rem;
  letter-spacing: 1px;
  color: #000;
}
.navbar ul {
  list-style: none;
  display: flex;
  gap: 2.2rem;
  margin: 0;
  padding: 0;
}
.navbar a {
  color: #000;
  text-decoration: none;
  font-weight: 500;
  font-size: 1.08rem;
  transition: color 0.2s;
}
.navbar a:hover {
  color: #444;
}
.hero {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  background: linear-gradient(120deg, #ffffff 60%, #f5f5f5 100%);
  padding: 3rem 2vw 2rem 2vw;
  border-bottom: 1px solid #e0e0e0;
}
.hero-content {
  flex: 1 1 350px;
  min-width: 320px;
  max-width: 500px;
  text-align: left;
  margin-right: 2.5rem;
}
.hero-content h1 {
  font-size: 3rem;
  font-weight: 700;
  margin: 0 0 0.5rem 0;
  letter-spacing: 1px;
  color: #000;
}
.hero-content h2 {
  color: #000;
  font-size: 1.5rem;
  margin-bottom: 1.2rem;
  font-weight: 500;
}
.hero-content p {
  font-size: 1.15rem;
  color: #444;
  margin-bottom: 1.5rem;
}
.hero-links a {
  margin-right: 1.1rem;
  font-size: 1.7rem;
  color: #000;
  transition: color 0.2s;
}
.hero-links a:hover {
  color: #444;
}
.hero-image {
  flex: 0 1 220px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.hero-image img {
  width: 180px;
  height: 180px;
  border-radius: 50%;
  border: 6px solid #000;
  box-shadow: 0 4px 32px rgba(0,0,0,0.15);
}
.section {
  max-width: 1100px;
  margin: 3.5rem auto;
  padding: 2.2rem 2vw 1.5rem 2vw;
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 2px 24px rgba(0,0,0,0.07);
}
.section h2 {
  color: #000;
  margin-bottom: 1.7rem;
  font-size: 2.2rem;
  letter-spacing: 1px;
  font-weight: 700;
  text-align: center;
}
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2.2rem;
  margin-top: 1.5rem;
}
.project-card {
  background: #f5f5f5;
  border-radius: 14px;
  box-shadow: 0 2px 16px rgba(0,0,0,0.08);
  padding: 2rem 1.3rem 1.3rem 1.3rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transition: box-shadow 0.2s, transform 0.2s;
  min-height: 260px;
  position: relative;
  overflow: hidden;
  animation: fadeInUp 0.7s;
  border: 1px solid #e0e0e0;
  margin-bottom: 0.5rem;
}
.project-card:hover {
  transform: translateY(-6px) scale(1.02);
  box-shadow: 0 6px 24px rgba(0,0,0,0.13);
  border-color: #bdbdbd;
}
.project-image {
  font-size: 2.5rem;
  color: #000;
  margin-bottom: 0.7rem;
}
.project-card h3 {
  margin: 0 0 0.5rem 0;
  color: #000;
  font-size: 1.35rem;
  font-weight: 600;
  letter-spacing: 0.5px;
}
.project-card p {
  color: #444;
  font-size: 1.08rem;
  margin-bottom: 0.7rem;
  margin-top: 0.2rem;
}
.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
  margin-top: 0.5rem;
  background: #e9ecef;
  padding: 0.6rem 0.7rem;
  border-radius: 7px;
  width: 100%;
}
.project-tags span {
  background: #d1e7dd;
  color: #155724;
  border-radius: 5px;
  padding: 0.25rem 0.85rem;
  font-size: 1.01rem;
  margin-bottom: 0.3rem;
}
.project-link {
  color: #fff;
  background: #000;
  padding: 0.4rem 1.1rem;
  border-radius: 5px;
  text-decoration: none;
  font-weight: 500;
  transition: background 0.2s;
  margin-top: auto;
  align-self: flex-end;
}
.project-link:hover {
  background: #444;
}
.skills-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
  margin-top: 1.5rem;
}
.skill {
  background: #f5f5f5;
  border-radius: 8px;
  padding: 1.1rem 1.5rem;
  text-align: center;
  font-size: 1.1rem;
  box-shadow: 0 1px 6px rgba(0,0,0,0.07);
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 110px;
  transition: transform 0.15s, box-shadow 0.15s;
}
.skill i {
  font-size: 2rem;
  margin-bottom: 0.4rem;
  color: #000;
}
.skill:hover {
  transform: translateY(-5px) scale(1.04);
  box-shadow: 0 4px 16px rgba(0,0,0,0.13);
}
.about-content {
  max-width: 700px;
  margin: 0 auto;
  font-size: 1.15rem;
  color: #444;
  text-align: center;
}
.contact-info {
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
  font-size: 1.15rem;
  align-items: center;
  margin-top: 1.5rem;
}
.contact-info a, .contact-info span {
  color: #000;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.1rem;
}
.contact-info a:hover {
  color: #444;
}
@media (max-width: 900px) {
  .hero {
    flex-direction: column;
    text-align: center;
    padding: 2.5rem 2vw 1.5rem 2vw;
  }
  .hero-content {
    margin-right: 0;
    text-align: center;
  }
  .hero-image {
    margin-top: 1.5rem;
  }
  .section {
    padding: 1.2rem 1vw 1rem 1vw;
  }
  .projects-grid {
    grid-template-columns: 1fr;
  }
  .skills-list {
    gap: 1rem;
  }
}
</style>
