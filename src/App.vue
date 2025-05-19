<template>
  <div>
    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-light bg-white fixed-top shadow-sm">
      <div class="container px-4">
        <a class="navbar-brand fw-bold" href="#">Hugo Portfolio</a>
        <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item"><a class="nav-link px-3" href="#hero">Home</a></li>
            <li class="nav-item"><a class="nav-link px-3" href="#projects">Projects</a></li>
            <li class="nav-item"><a class="nav-link px-3" href="#skills">Skills</a></li>
            <li class="nav-item"><a class="nav-link px-3" href="#about">About</a></li>
            <li class="nav-item"><a class="nav-link px-3" href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="hero py-5 mt-5" id="hero">
      <div class="container px-4">
        <div class="row align-items-center min-vh-75">
          <div class="col-lg-6 mb-5 mb-lg-0">
            <h1 class="display-4 fw-bold mb-3">Li Yin Chung, Hugo</h1>
            <h2 class="h3 mb-4 text-secondary">Web Developer & AI Enthusiast</h2>
            <p class="lead mb-4">
              I build beautiful, performant web experiences.<br>
              Let's create something amazing together.
            </p>
            <div class="d-flex gap-4">
              <a :href="linkedin" target="_blank" class="text-dark fs-4 hover-effect"><i class="fab fa-linkedin"></i></a>
              <a :href="github" target="_blank" class="text-dark fs-4 hover-effect"><i class="fab fa-github"></i></a>
              <a :href="'mailto:' + email" class="text-dark fs-4 hover-effect"><i class="fas fa-envelope"></i></a>
            </div>
          </div>
          <div class="col-lg-6 text-center">
            <img src="https://ui-avatars.com/api/?name=Hugo&background=000000&color=fff&size=256" 
                 alt="Hugo Avatar" 
                 class="img-fluid rounded-circle shadow-lg" 
                 style="max-width: 250px;" />
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section class="py-5 bg-light" id="projects">
      <div class="container px-4">
        <h2 class="text-center mb-5 display-5 fw-bold">Featured Projects</h2>
        <div class="row g-4">
          <div class="col-md-6 col-lg-4" v-for="project in projects" :key="project.title">
            <div class="card h-100 shadow-sm hover-card">
              <div class="card-body p-4">
                <div class="text-center mb-3">
                  <i :class="project.icon + ' fa-2x text-primary'"></i>
                </div>
                <h3 class="h5 card-title fw-bold">{{ project.title }}</h3>
                <p class="card-text text-secondary">{{ project.description }}</p>
                <div class="d-flex flex-wrap gap-2 mb-3">
                  <span v-for="tag in project.tags" :key="tag" 
                        class="badge bg-light text-dark">
                    {{ tag }}
                  </span>
                </div>
                <a :href="project.link" target="_blank" class="btn btn-outline-dark w-100">View on GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section class="py-5" id="skills">
      <div class="container px-4">
        <h2 class="text-center mb-5 display-5 fw-bold">Skills</h2>
        <div class="row g-4">
          <div class="col-6 col-md-4 col-lg-3" v-for="skill in skills" :key="skill.name">
            <div class="card h-100 text-center shadow-sm hover-card">
              <div class="card-body p-3">
                <i :class="skill.icon + ' fa-2x mb-2 text-primary'"></i>
                <p class="card-text mb-0 fw-medium skill-name">{{ skill.name }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="py-5 bg-light" id="about">
      <div class="container px-4">
        <h2 class="text-center mb-5 display-5 fw-bold">About Me</h2>
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <div class="card shadow-sm">
              <div class="card-body p-4">
                <p class="lead mb-4">
                  Hi! I'm Hugo, a passionate web developer based in Hong Kong.<br>
                  I love building modern, user-focused web apps and exploring the latest in AI and frontend tech.
                </p>
                <p class="mb-4">
                  <strong>Education:</strong><br>
                  Bachelor of Computer Science, HK Metropolitan University (2025)<br>
                  Higher Diploma in Data Science, HKU SPACE (2023)
                </p>
                <p class="mb-0">
                  <strong>About this web:</strong><br>
                  This portfolio is built with Vue.js and Bootstrap, showcasing my web development and AI projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="py-5" id="contact">
      <div class="container px-4">
        <h2 class="text-center mb-5 display-5 fw-bold">Contact</h2>
        <div class="row justify-content-center">
          <div class="col-md-8">
            <div class="card shadow-sm">
              <div class="card-body p-4">
                <div class="d-flex flex-column align-items-center gap-4">
                  <a :href="'mailto:' + email" class="text-dark text-decoration-none hover-effect">
                    <i class="fas fa-envelope me-2"></i> {{ email }}
                  </a>
                  <a href="tel:+85262095238" class="text-dark text-decoration-none hover-effect">
                    <i class="fas fa-phone me-2"></i> +852 62095238
                  </a>
                  <span class="text-dark">
                    <i class="fas fa-map-marker-alt me-2"></i> Hong Kong
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="py-4 bg-light">
      <div class="container px-4">
        <div class="row justify-content-center">
          <div class="col-md-8 text-center">
            <p class="text-secondary mb-0">
              Built with Vue.js | Styled with Bootstrap | Hosted on Vercel
            </p>
          </div>
        </div>
      </div>
    </footer>
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
.hero {
  background: linear-gradient(120deg, #ffffff 60%, #f5f5f5 100%);
}

.navbar {
  padding: 1rem 0;
}

.nav-link {
  font-weight: 500;
  transition: color 0.3s;
}

.nav-link:hover {
  color: #000000 !important;
}

.hover-card {
  transition: transform 0.3s, box-shadow 0.3s;
}

.hover-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
}

.hover-effect {
  transition: transform 0.3s, color 0.3s;
}

.hover-effect:hover {
  transform: translateY(-2px);
  color: #000000 !important;
}

.min-vh-75 {
  min-height: 75vh;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .display-5 {
    font-size: 2.5rem;
  }
  
  .container {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
}

@media (max-width: 576px) {
  .display-5 {
    font-size: 2rem;
  }
  
  .container {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}

.skill-name {
  font-size: 0.9rem;
  line-height: 1.2;
  min-height: 2.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (max-width: 576px) {
  .card-body {
    padding: 0.75rem !important;
  }
  
  .skill-name {
    font-size: 0.8rem;
    min-height: 2rem;
  }
  
  .fa-2x {
    font-size: 1.5em;
  }
}
</style>