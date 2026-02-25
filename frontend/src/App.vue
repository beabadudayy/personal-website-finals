<template>
  <div id="app" class="dashboard-layout">

    <!-- Fixed Left Sidebar -->
    <aside class="sidebar">
      <!-- Logo / Title at top -->
      <div class="sidebar-logo">
        <img
          src="https://i.pinimg.com/736x/c2/dc/98/c2dc9805037622f8f9b7d49fc7f93b84.jpg"
          alt="Raiza"
          class="sidebar-profile-img"
        />
        <span class="sidebar-logo-text">Raiza</span>
      </div>

      <!-- Nav Links -->
      <nav class="sidebar-nav">
        <span class="sidebar-section-label">Menu</span>
        <a href="#about" @click.prevent="navigateTo('about')" class="sidebar-link">
          <span class="link-icon"><i class="bi bi-house-door-fill"></i></span>
          <span>About Me</span>
        </a>
        <a href="#education" @click.prevent="navigateTo('education')" class="sidebar-link">
          <span class="link-icon"><i class="bi bi-mortarboard-fill"></i></span>
          <span>Education</span>
        </a>
        <a href="#hobbies" @click.prevent="navigateTo('hobbies')" class="sidebar-link">
          <span class="link-icon"><i class="bi bi-heart-fill"></i></span>
          <span>Hobbies</span>
        </a>
        <a href="#goals" @click.prevent="navigateTo('goals')" class="sidebar-link">
          <span class="link-icon"><i class="bi bi-trophy-fill"></i></span>
          <span>Goals</span>
        </a>
        <a href="#experience" @click.prevent="navigateTo('experience')" class="sidebar-link">
          <span class="link-icon"><i class="bi bi-laptop-fill"></i></span>
          <span>IT Experience</span>
        </a>
        <a href="#gallery" @click.prevent="navigateTo('gallery')" class="sidebar-link">
          <span class="link-icon"><i class="bi bi-images"></i></span>
          <span>Photo Gallery</span>
        </a>
        <a href="#guestbook" @click.prevent="navigateTo('guestbook')" class="sidebar-link">
          <span class="link-icon"><i class="bi bi-chat-square-text-fill"></i></span>
          <span>Guestbook</span>
        </a>
      </nav>

      <!-- Footer -->
      <div class="sidebar-footer">
        <span class="sidebar-section-label">Display</span>
        <button class="theme-toggle-btn" @click="toggleTheme">
          <span class="link-icon"><i :class="isDarkMode ? 'bi bi-sun-fill' : 'bi bi-moon-fill'"></i></span>
          <span>{{ isDarkMode ? 'Light Mode' : 'Dark Mode' }}</span>
        </button>
      </div>
    </aside>

    <!-- Main Scrollable Content -->
    <main class="main-content">

      <!-- ── Top Bar ── -->
      <header class="db-topbar">
        <nav class="db-topbar-nav">
          <a href="#about"      @click.prevent="navigateTo('about')"      class="db-nav-link active">Home</a>
          <a href="#experience" @click.prevent="navigateTo('experience')" class="db-nav-link">Projects</a>
          <a href="#guestbook"  @click.prevent="navigateTo('guestbook')"  class="db-nav-link">Guestbook</a>
        </nav>
        <div class="db-topbar-right">
          <button class="db-btn-outline" @click="toggleTheme">
            <i :class="isDarkMode ? 'bi bi-sun-fill' : 'bi bi-moon-fill'"></i>
            {{ isDarkMode ? ' Light' : ' Dark' }}
          </button>
          <a href="#guestbook" @click.prevent="navigateTo('guestbook')" class="db-btn-fill">Say Hello ›</a>
        </div>
      </header>

      <!-- ── Hero Banner ── -->
      <section class="db-hero" id="about">
        <div class="db-hero-text">
          <span class="db-hero-eyebrow"><i class="bi bi-diamond-fill"></i> Portfolio 2026</span>
          <h1 class="db-hero-title">Hello, I'm<br>Raiza Juvida</h1>
          <p class="db-hero-sub">Full Stack Developer &middot; Problem Solver &middot; Tech Enthusiast</p>
          <div class="db-hero-actions">
            <a href="#experience" @click.prevent="navigateTo('experience')" class="db-hero-btn">View Projects ›</a>
            <div class="db-hero-stats">
              <div class="db-hero-stat"><span class="db-hero-stat-n">4+</span><span class="db-hero-stat-l">Projects</span></div>
              <div class="db-hero-stat"><span class="db-hero-stat-n">2</span><span class="db-hero-stat-l">Degrees</span></div>
              <div class="db-hero-stat"><span class="db-hero-stat-n">8+</span><span class="db-hero-stat-l">Skills</span></div>
            </div>
          </div>
        </div>
        <div class="db-hero-img-wrap">
          <img
            src="https://i.pinimg.com/736x/4b/f6/31/4bf631aa5a49d05eb91a3b0715b933ba.jpg"
            alt="Raiza"
            class="db-hero-img"
          />
          <div class="db-hero-badge"><i class="bi bi-check-circle-fill"></i> Available for Work</div>
        </div>
      </section>

      <!-- ══ EDUCATION ══ -->
      <section class="ms-section ms-edu-section" id="education">
        <div class="ms-edu-card">
          <div class="ms-edu-visual">
            <img src="https://i.pinimg.com/736x/ab/a9/41/aba94111afe833e42a9dd5905dbeb565.jpg" alt="Education" class="ms-edu-cover" />
            <div class="ms-edu-avatar-ring">
              <img src="https://i.pinimg.com/736x/c2/dc/98/c2dc9805037622f8f9b7d49fc7f93b84.jpg" class="ms-edu-avatar" alt="Raiza" />
            </div>
          </div>
          <div class="ms-edu-body">
            <span class="ms-tag"><i class="bi bi-mortarboard-fill"></i> Education</span>
            <h2 class="ms-edu-name">Raiza Juvida</h2>
            <div class="ms-edu-timeline">
              <div class="ms-edu-item">
                <div class="ms-edu-yr">2022–26</div>
                <div class="ms-edu-detail">
                  <div class="ms-edu-deg">B.S. Computer Science</div>
                  <div class="ms-edu-school">University of Science &amp; Technology of Southern Philippines</div>
                  <span class="ms-edu-track">Software Engineering Track</span>
                </div>
              </div>
              <div class="ms-edu-item">
                <div class="ms-edu-yr">2018–22</div>
                <div class="ms-edu-detail">
                  <div class="ms-edu-deg">Senior High School</div>
                  <div class="ms-edu-school">STEM Track · Dean's Lister</div>
                  <span class="ms-edu-track">Science, Technology, Engineering &amp; Math</span>
                </div>
              </div>
            </div>
            <div class="ms-edu-stats">
              <div class="ms-edu-stat"><span>4+</span><label>Years</label></div>
              <div class="ms-edu-stat"><span>Dean's</span><label>Lister</label></div>
              <div class="ms-edu-stat"><span>BSCS</span><label>Degree</label></div>
            </div>
          </div>
        </div>
      </section>

      <!-- ══ HOBBIES + GOALS ══ -->
      <div class="ms-two-col" id="hobbies">

        <!-- Hobbies -->
        <section class="ms-section ms-hobbies-card">
          <span class="ms-tag"><i class="bi bi-heart-fill"></i> Hobbies</span>
          <h2 class="ms-card-title">What I Love</h2>
          <div class="ms-hob-bento">
            <div class="ms-hob-photo">
              <img src="https://i.pinimg.com/1200x/ff/bd/dd/ffbddd37b2ceffe750fc534bfa11429d.jpg" alt="Hobbies" />
              <div class="ms-hob-photo-label">My World</div>
            </div>
            <div class="ms-hob-item"><i class="bi bi-code-slash"></i><span>Coding</span></div>
            <div class="ms-hob-item"><i class="bi bi-palette-fill"></i><span>Design</span></div>
            <div class="ms-hob-item"><i class="bi bi-book-fill"></i><span>Reading</span></div>
            <div class="ms-hob-item"><i class="bi bi-camera-fill"></i><span>Photo</span></div>
          </div>
          <div class="ms-chips">
            <span class="db-chip">Vue.js</span>
            <span class="db-chip">React</span>
            <span class="db-chip">NestJS</span>
            <span class="db-chip">TypeScript</span>
            <span class="db-chip">Supabase</span>
            <span class="db-chip">PostgreSQL</span>
          </div>
        </section>

        <!-- Goals -->
        <section class="ms-section ms-goals-card" id="goals">
          <div class="ms-goals-banner">
            <img src="https://i.pinimg.com/1200x/8d/5b/a4/8d5ba4691a7f877ea25dc5eacca27688.jpg" alt="Goals" />
            <div class="ms-goals-banner-overlay">
              <span class="ms-tag ms-tag--light"><i class="bi bi-trophy-fill"></i> Goals</span>
              <h2 class="ms-goals-title">My Ambitions</h2>
            </div>
          </div>
          <div class="ms-goals-list">
            <div class="ms-goal-item"><span class="ms-goal-n">01</span><div class="ms-goal-text">Master React &amp; Vue.js</div><i class="bi bi-check-circle-fill ms-goal-check"></i></div>
            <div class="ms-goal-item"><span class="ms-goal-n">02</span><div class="ms-goal-text">Build 10 Full-Stack Projects</div><i class="bi bi-check-circle-fill ms-goal-check"></i></div>
            <div class="ms-goal-item"><span class="ms-goal-n">03</span><div class="ms-goal-text">Contribute to Open Source</div><i class="bi bi-check-circle-fill ms-goal-check"></i></div>
            <div class="ms-goal-item ms-goal-star"><span class="ms-goal-n">04</span><div class="ms-goal-text">Become a Lead Developer</div><i class="bi bi-star-fill ms-goal-check"></i></div>
            <div class="ms-goal-item"><span class="ms-goal-n">05</span><div class="ms-goal-text">Launch a SaaS Product</div><i class="bi bi-check-circle-fill ms-goal-check"></i></div>
            <div class="ms-goal-item"><span class="ms-goal-n">06</span><div class="ms-goal-text">Mentor Fellow Students</div><i class="bi bi-check-circle-fill ms-goal-check"></i></div>
          </div>
        </section>

      </div>

      <!-- ══ IT EXPERIENCE ══ -->
      <section class="ms-section ms-exp-section" id="experience">
        <div class="ms-exp-header">
          <div>
            <span class="ms-tag"><i class="bi bi-laptop-fill"></i> IT Experience</span>
            <h2 class="ms-card-title">Projects &amp; Skills</h2>
          </div>
          <div class="ms-exp-stats">
            <div class="ms-exp-stat"><span>4+</span><label>Projects</label></div>
            <div class="ms-exp-stat"><span>8+</span><label>Skills</label></div>
            <div class="ms-exp-stat"><span>2+</span><label>Yrs Exp</label></div>
          </div>
        </div>
        <div class="ms-exp-grid">
          <div class="ms-exp-card">
            <div class="ms-exp-img">
              <img src="https://i.pinimg.com/736x/cc/15/84/cc1584a9f472ef7f5a7958950fea804a.jpg" alt="E-Commerce" />
              <div class="ms-exp-overlay"><i class="bi bi-box-arrow-up-right"></i></div>
            </div>
            <div class="ms-exp-info">
              <h4>E-Commerce Platform</h4>
              <p>Full-stack online store with cart, auth &amp; payments.</p>
              <div class="ms-chips"><span class="db-chip">Vue.js</span><span class="db-chip">NestJS</span><span class="db-chip">Supabase</span></div>
            </div>
          </div>
          <div class="ms-exp-card">
            <div class="ms-exp-img">
              <img src="https://i.pinimg.com/736x/07/e3/05/07e305bdbf8c757fc084c6f5f0646a55.jpg" alt="Task App" />
              <div class="ms-exp-overlay"><i class="bi bi-box-arrow-up-right"></i></div>
            </div>
            <div class="ms-exp-info">
              <h4>Task Manager App</h4>
              <p>Collaborative task board with real-time updates.</p>
              <div class="ms-chips"><span class="db-chip">React</span><span class="db-chip">TypeScript</span><span class="db-chip">PostgreSQL</span></div>
            </div>
          </div>
          <div class="ms-exp-card">
            <div class="ms-exp-img">
              <img src="https://i.pinimg.com/736x/cd/6f/b7/cd6fb700f622912356bf5e0becad6f29.jpg" alt="Dashboard" />
              <div class="ms-exp-overlay"><i class="bi bi-box-arrow-up-right"></i></div>
            </div>
            <div class="ms-exp-info">
              <h4>Social Dashboard</h4>
              <p>Analytics dashboard with charts &amp; live feeds.</p>
              <div class="ms-chips"><span class="db-chip">Vue.js</span><span class="db-chip">Vite</span><span class="db-chip">Chart.js</span></div>
            </div>
          </div>
        </div>
      </section>

      <!-- ── Gallery ── -->
      <section class="db-gallery" id="gallery">
        <h2 class="db-gallery-heading">MY PHOTO GALLERY</h2>
        <div class="db-gallery-grid">
          <div class="db-gcard db-gcard--wide">
            <img src="https://i.pinimg.com/736x/cc/15/84/cc1584a9f472ef7f5a7958950fea804a.jpg" alt="Friends" />
            <div class="db-gcard-label">Friends</div>
          </div>
          <div class="db-gcard">
            <img src="https://i.pinimg.com/736x/07/e3/05/07e305bdbf8c757fc084c6f5f0646a55.jpg" alt="Friends" />
            <div class="db-gcard-label">Friends</div>
          </div>
          <div class="db-gcard">
            <img src="https://i.pinimg.com/736x/cd/6f/b7/cd6fb700f622912356bf5e0becad6f29.jpg" alt="Kwatro" />
            <div class="db-gcard-label">Kwatro</div>
          </div>
          <div class="db-gcard">
            <img src="https://i.pinimg.com/736x/01/67/4c/01674ce0a6fbb4fd9816e55a8732823d.jpg" alt="Family" />
            <div class="db-gcard-label">Family</div>
          </div>
          <div class="db-gcard">
            <img src="https://i.pinimg.com/736x/89/8c/d8/898cd82f9e383c6ff8e41cc4b2043c60.jpg" alt="Coffee" />
            <div class="db-gcard-label">Coffee</div>
          </div>
          <div class="db-gcard">
            <img src="https://i.pinimg.com/1200x/44/75/d9/4475d93d66caa62ced27af7a91bdf43a.jpg" alt="Travel" />
            <div class="db-gcard-label">Travel</div>
          </div>
          <div class="db-gcard db-gcard--wide">
            <img src="https://i.pinimg.com/736x/68/70/a4/6870a4affdba9e5ab60892fae66c4e26.jpg" alt="Cat" />
            <div class="db-gcard-label">Cat</div>
          </div>
        </div>
      </section>

      <!-- ── Guestbook ── -->
      <section class="ms-section ms-gb-section" id="guestbook">
        <div class="ms-section-header">
          <span class="ms-tag"><i class="bi bi-chat-square-text-fill"></i> Guestbook</span>
          <h2 class="ms-card-title">Say Hello <i class="bi bi-hand-wave-fill ms-wave-icon"></i></h2>
          <p class="ms-gb-sub">Leave a message, thought, or just say hi — I'd love to hear from you!</p>
        </div>
        <Guestbook />
      </section>

      <footer class="footer">
        <div class="footer-brand">
          <img src="https://i.pinimg.com/736x/c2/dc/98/c2dc9805037622f8f9b7d49fc7f93b84.jpg" alt="Raiza" class="footer-avatar" />
          <span class="footer-name">Raiza Juvida</span>
          <span class="footer-sep">·</span>
          <span class="footer-role">Full Stack Developer</span>
        </div>
        <span class="footer-copy">&copy; 2026 · Made with <i class="bi bi-heart-fill"></i></span>
        <div class="footer-social-row">
          <a class="footer-icon-btn" href="#"><i class="bi bi-github"></i></a>
          <a class="footer-icon-btn" href="#"><i class="bi bi-linkedin"></i></a>
          <a class="footer-icon-btn" href="#"><i class="bi bi-instagram"></i></a>
          <a class="footer-icon-btn" href="#"><i class="bi bi-envelope-fill"></i></a>
        </div>
      </footer>

    </main>
  </div>
</template>

<script>
import Guestbook from './components/Guestbook.vue'

export default {
  name: 'App',
  components: { Guestbook },
  data() {
    return {
      isDarkMode: false
    }
  },
  mounted() {
    const saved = localStorage.getItem('theme')
    if (saved === 'dark') {
      this.isDarkMode = true
      document.documentElement.setAttribute('data-theme', 'dark')
    }
  },
  methods: {
    navigateTo(section) {
      document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' })
    },
    toggleTheme() {
      this.isDarkMode = !this.isDarkMode
      if (this.isDarkMode) {
        document.documentElement.setAttribute('data-theme', 'dark')
        localStorage.setItem('theme', 'dark')
      } else {
        document.documentElement.removeAttribute('data-theme')
        localStorage.setItem('theme', 'light')
      }
    }
  }
}
</script>
