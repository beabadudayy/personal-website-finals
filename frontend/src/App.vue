<template>
  <div id="app">
    <!-- Navigation Bar -->
    <nav class="navbar">
      <div class="container">
        <div class="logo">My Portfolio</div>
        <ul class="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#guestbook">Guestbook</a></li>
        </ul>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <h1>Welcome to My Portfolio</h1>
        <p>Full Stack Developer | Problem Solver | Tech Enthusiast</p>
      </div>
    </section>

    <!-- About Section -->
    <section id="about">
      <div class="container">
        <h2>About Me</h2>
        <div class="card">
          <p style="text-align: center; max-width: 800px; margin: 0 auto; line-height: 1.8;">
            I'm a passionate full-stack developer with expertise in modern web technologies.
            I love building innovative solutions and learning new technologies.
            With a strong foundation in both frontend and backend development,
            I create scalable and user-friendly applications.
          </p>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section id="skills">
      <div class="container">
        <h2>Skills</h2>
        <div class="grid grid-3">
          <div class="card">
            <h3>Frontend</h3>
            <div class="skills-list">
              <span class="skill-tag">Vue.js</span>
              <span class="skill-tag">React</span>
              <span class="skill-tag">HTML/CSS</span>
              <span class="skill-tag">JavaScript</span>
            </div>
          </div>
          <div class="card">
            <h3>Backend</h3>
            <div class="skills-list">
              <span class="skill-tag">Node.js</span>
              <span class="skill-tag">Nest.js</span>
              <span class="skill-tag">Express</span>
              <span class="skill-tag">REST APIs</span>
            </div>
          </div>
          <div class="card">
            <h3>Database & Tools</h3>
            <div class="skills-list">
              <span class="skill-tag">Supabase</span>
              <span class="skill-tag">PostgreSQL</span>
              <span class="skill-tag">Git</span>
              <span class="skill-tag">Vercel</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects">
      <div class="container">
        <h2>Projects</h2>
        <div class="grid grid-2">
          <div class="card project-card">
            <h3>E-Commerce Platform</h3>
            <p>A full-featured online shopping platform with payment integration and real-time inventory management.</p>
            <div class="project-tech">
              <span>Vue.js</span> • <span>Node.js</span> • <span>PostgreSQL</span>
            </div>
          </div>
          <div class="card project-card">
            <h3>Task Management App</h3>
            <p>Collaborative task management application with team features and real-time updates.</p>
            <div class="project-tech">
              <span>React</span> • <span>Nest.js</span> • <span>Supabase</span>
            </div>
          </div>
          <div class="card project-card">
            <h3>Social Media Dashboard</h3>
            <p>Analytics dashboard for managing multiple social media accounts with scheduling features.</p>
            <div class="project-tech">
              <span>Vue.js</span> • <span>Express</span> • <span>MongoDB</span>
            </div>
          </div>
          <div class="card project-card">
            <h3>Weather App</h3>
            <p>Real-time weather application with location-based forecasting and interactive maps.</p>
            <div class="project-tech">
              <span>JavaScript</span> • <span>APIs</span> • <span>CSS</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact">
      <div class="container">
        <h2>Contact Me</h2>
        <div class="contact-info">
          <div class="contact-item">
            <strong>Email:</strong>
            <a href="mailto:your.email@example.com">your.email@example.com</a>
          </div>
          <div class="contact-item">
            <strong>GitHub:</strong>
            <a href="https://github.com/yourusername" target="_blank">github.com/yourusername</a>
          </div>
          <div class="contact-item">
            <strong>LinkedIn:</strong>
            <a href="https://linkedin.com/in/yourprofile" target="_blank">linkedin.com/in/yourprofile</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Guestbook Section -->
    <section id="guestbook">
      <div class="container">
        <h2>Guestbook</h2>
        
        <!-- Comment Form -->
        <Guestbook />
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <p>&copy; 2026 My Portfolio. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script>
import Guestbook from './components/Guestbook.vue'

export default {
  name: 'App',
  components: {
    Guestbook
  }
}
</script>
