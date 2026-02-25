<template>
  <div id="app" class="dashboard-layout">

    <!-- Mobile Sidebar Overlay -->
    <div class="sidebar-overlay" :class="{ 'is-visible': isMobileMenuOpen }" @click="isMobileMenuOpen = false"></div>

    <!-- Fixed Left Sidebar -->
    <aside class="sidebar" :class="{ 'is-open': isMobileMenuOpen }">
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
        <a href="#about" @click.prevent="navigateTo('about'); isMobileMenuOpen = false" class="sidebar-link">
          <span class="link-icon"><i class="bi bi-house-door-fill"></i></span>
          <span>About Me</span>
        </a>
        <a href="#education" @click.prevent="navigateTo('education'); isMobileMenuOpen = false" class="sidebar-link">
          <span class="link-icon"><i class="bi bi-mortarboard-fill"></i></span>
          <span>Education</span>
        </a>
        <a href="#hobbies" @click.prevent="navigateTo('hobbies'); isMobileMenuOpen = false" class="sidebar-link">
          <span class="link-icon"><i class="bi bi-heart-fill"></i></span>
          <span>Hobbies</span>
        </a>
        <a href="#goals" @click.prevent="navigateTo('goals'); isMobileMenuOpen = false" class="sidebar-link">
          <span class="link-icon"><i class="bi bi-trophy-fill"></i></span>
          <span>Goals</span>
        </a>
        <a href="#experience" @click.prevent="navigateTo('experience'); isMobileMenuOpen = false" class="sidebar-link">
          <span class="link-icon"><i class="bi bi-laptop-fill"></i></span>
          <span>IT Experience</span>
        </a>
        <a href="#studybeats" @click.prevent="navigateTo('studybeats'); isMobileMenuOpen = false" class="sidebar-link">
          <span class="link-icon"><i class="bi bi-music-note-beamed"></i></span>
          <span>Study Beats</span>
        </a>
        <a href="#gallery" @click.prevent="navigateTo('gallery'); isMobileMenuOpen = false" class="sidebar-link">
          <span class="link-icon"><i class="bi bi-images"></i></span>
          <span>Photo Gallery</span>
        </a>
        <a href="#guestbook" @click.prevent="navigateTo('guestbook'); isMobileMenuOpen = false" class="sidebar-link">
          <span class="link-icon"><i class="bi bi-chat-square-text-fill"></i></span>
          <span>Guestbook</span>
        </a>
      </nav>

      <!-- Close button (mobile only) -->
      <button class="sidebar-close-btn" @click="isMobileMenuOpen = false" aria-label="Close menu">
        <i class="bi bi-x-lg"></i>
      </button>

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
        <button class="db-mobile-menu-btn" @click="isMobileMenuOpen = !isMobileMenuOpen" aria-label="Toggle menu">
          <i class="bi bi-list"></i>
        </button>
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
                  <div class="ms-edu-deg">B.S. Information Technology</div>
                  <div class="ms-edu-school">University of Science &amp; Technology of Southern Philippines</div>
                  <span class="ms-edu-track">Information Technology Track</span>
                </div>
              </div>
              <div class="ms-edu-item">
                <div class="ms-edu-yr">2018–22</div>
                <div class="ms-edu-detail">
                  <div class="ms-edu-deg">Senior High School</div>
                  <div class="ms-edu-school">ICT Track · High Honor Student</div>
                  <span class="ms-edu-track">Information and Communications Technology</span>
                </div>
              </div>
            </div>
            <div class="ms-edu-stats">
              <div class="ms-edu-stat"><span>4+</span><label>Years</label></div>
              <div class="ms-edu-stat"><span>High</span><label>Honor</label></div>
              <div class="ms-edu-stat"><span>BSIT</span><label>Degree</label></div>
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
            <h2 class="ms-card-title">School Projects &amp; Skills</h2>
          </div>
          <div class="ms-exp-stats">
            <div class="ms-exp-stat"><span>2nd</span><label>Year</label></div>
            <div class="ms-exp-stat"><span>BSIT</span><label>Student</label></div>
          </div>
        </div>
        <div class="ms-exp-grid">
          <div class="ms-exp-card">
            <div class="ms-exp-img">
              <img src="https://i.pinimg.com/1200x/d3/94/4a/d3944a08ec6880457799884ccd23afc5.jpg" alt="Personal Website" />
              <div class="ms-exp-overlay"><i class="bi bi-box-arrow-up-right"></i></div>
            </div>
            <div class="ms-exp-info">
              <h4>Personal Portfolio Website</h4>
              <p>A responsive personal website built as a web programming final project using Vue.js and CSS.</p>
              <div class="ms-chips"><span class="db-chip">Vue.js</span><span class="db-chip">CSS</span><span class="db-chip">HTML</span></div>
            </div>
          </div>
          <div class="ms-exp-card">
            <div class="ms-exp-img">
              <img src="https://i.pinimg.com/736x/8a/1a/62/8a1a62717c1a65ccbdf9b97b8484b41e.jpg" alt="Student Record System" />
              <div class="ms-exp-overlay"><i class="bi bi-box-arrow-up-right"></i></div>
            </div>
            <div class="ms-exp-info">
              <h4>Student Record System</h4>
              <p>A simple CRUD app for managing student info, built as a database systems course project.</p>
              <div class="ms-chips"><span class="db-chip">PHP</span><span class="db-chip">MySQL</span><span class="db-chip">Bootstrap</span></div>
            </div>
          </div>
          <div class="ms-exp-card">
            <div class="ms-exp-img">
              <img src="https://i.pinimg.com/736x/69/a5/2b/69a52b7c1275c237e26eb15ab5ecc2eb.jpg" alt="Calculator App" />
              <div class="ms-exp-overlay"><i class="bi bi-box-arrow-up-right"></i></div>
            </div>
            <div class="ms-exp-info">
              <h4>To-Do List App</h4>
              <p>A beginner JavaScript project — add, complete, and delete tasks, with localStorage to save data.</p>
              <div class="ms-chips"><span class="db-chip">JavaScript</span><span class="db-chip">HTML</span><span class="db-chip">CSS</span></div>
            </div>
          </div>
        </div>
      </section>

      <!-- ══ STUDY BEATS ══ -->
      <section class="ms-section sb-section" id="studybeats">
        <div class="sb-widget">

          <!-- Left: Now Playing -->
          <div class="sb-nowplaying">
            <div class="sb-embed-wrap">
              <div ref="sbEmbed" class="sb-embed-container"></div>
              <span class="sb-now-badge"><i class="bi bi-broadcast"></i> Now Playing</span>
            </div>
            <div class="sb-np-meta">
              <span class="ms-tag"><i class="bi bi-headphones"></i> Study Beats</span>
              <h3 class="sb-np-title">{{ tracks[activeTrack].title }}</h3>
              <p class="sb-np-artist">{{ tracks[activeTrack].artist }} &middot; {{ tracks[activeTrack].album }}</p>

              <!-- Waveform -->
              <div class="sb-waveform">
                <span v-for="n in 36" :key="n" class="sb-wave-bar" :class="{ 'sb-wave-bar--active': isPlaying }" :style="`--i: ${n}`"></span>
              </div>

              <!-- Progress -->
              <div class="sb-progress-row">
                <span class="sb-time">{{ currentTimeStr }}</span>
                <div class="sb-progress-track" @click="seekTrack">
                  <div class="sb-progress-fill" :style="`width:${progressPct}%`"></div>
                  <div class="sb-progress-thumb" :style="`left:${progressPct}%`"></div>
                </div>
                <span class="sb-time">{{ tracks[activeTrack].duration }}</span>
              </div>

              <!-- Controls -->
              <div class="sb-controls">
                <button class="sb-ctrl-btn" :class="{ 'sb-ctrl-btn--active': isShuffled }" @click="toggleShuffle" title="Shuffle"><i class="bi bi-shuffle"></i></button>
                <button class="sb-ctrl-btn" @click="prevTrack" title="Previous"><i class="bi bi-skip-start-fill"></i></button>
                <button class="sb-ctrl-btn sb-ctrl-play" @click="togglePlay" :title="isPlaying ? 'Pause' : 'Play'">
                  <i :class="isPlaying ? 'bi bi-pause-fill' : 'bi bi-play-fill'"></i>
                </button>
                <button class="sb-ctrl-btn" @click="nextTrack" title="Next"><i class="bi bi-skip-end-fill"></i></button>
                <button class="sb-ctrl-btn" :class="{ 'sb-ctrl-btn--active': isRepeat }" @click="toggleRepeat" :title="isRepeat === 'one' ? 'Repeat One' : isRepeat ? 'Repeat All' : 'Repeat'">
                  <i :class="isRepeat === 'one' ? 'bi bi-repeat-1' : 'bi bi-repeat'"></i>
                </button>
              </div>

              <!-- Volume -->
              <div class="sb-volume-row">
                <i class="bi bi-volume-down-fill sb-vol-icon"></i>
                <input type="range" class="sb-vol-slider" v-model="volume" min="0" max="100" />
                <i class="bi bi-volume-up-fill sb-vol-icon"></i>
                <span class="sb-vol-num">{{ volume }}%</span>
              </div>
            </div>
          </div>

          <!-- Right: Playlist -->
          <div class="sb-playlist">
            <div class="sb-pl-header">
              <span class="ms-tag"><i class="bi bi-music-note-list"></i> Playlist</span>
              <h3 class="sb-pl-title">My Study Favorites</h3>
              <div class="sb-pl-meta-row">
                <p class="sb-pl-sub">{{ tracks.length }} tracks · perfect for focus</p>
                <a
                  href="https://open.spotify.com/playlist/5ZUBMQFakYVrkHCCpxvbUU?si=a6aeb4cf2c9d4555"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="sb-spotify-btn"
                >
                  <svg class="sb-spotify-logo" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12 12-5.373 12-12S18.628 0 12 0zm5.52 17.305a.75.75 0 0 1-1.032.249c-2.83-1.729-6.39-2.12-10.586-1.161a.75.75 0 1 1-.334-1.463c4.592-1.048 8.532-.596 11.703 1.343a.75.75 0 0 1 .249 1.032zm1.472-3.27a.937.937 0 0 1-1.288.308c-3.238-1.99-8.172-2.567-12-1.407a.937.937 0 1 1-.545-1.794c4.37-1.327 9.8-.684 13.525 1.605a.937.937 0 0 1 .308 1.288zm.127-3.408C15.27 8.39 8.898 8.175 5.274 9.3a1.125 1.125 0 1 1-.652-2.154c4.213-1.277 11.218-1.03 15.643 1.633a1.125 1.125 0 0 1-1.146 1.848z"/></svg>
                  Open in Spotify
                </a>
              </div>
            </div>
            <div class="sb-tracks">
              <div
                v-for="(track, i) in tracks"
                :key="i"
                class="sb-track"
                :class="{ 'sb-track--active': i === activeTrack }"
                @click="activeTrack = i"
              >
                <span class="sb-track-num">
                  <span v-if="i === activeTrack && isPlaying" class="sb-eq">
                    <span></span><span></span><span></span>
                  </span>
                  <span v-else>{{ String(i + 1).padStart(2, '0') }}</span>
                </span>
                <img :src="track.cover" :alt="track.title" class="sb-track-thumb" />
                <div class="sb-track-info">
                  <span class="sb-track-title">{{ track.title }}</span>
                  <span class="sb-track-artist">{{ track.artist }}</span>
                </div>
                <div class="sb-track-right">
                  <span class="sb-track-tag">{{ track.genre }}</span>
                  <span class="sb-track-dur">{{ track.duration }}</span>
                </div>
              </div>
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
  computed: {
    progressPct() {
      if (!this.trackDurationSeconds) return 0
      return Math.min((this.currentPosition / this.trackDurationSeconds) * 100, 100)
    },
    currentTimeStr() {
      const s = Math.floor(this.currentPosition)
      const m = Math.floor(s / 60)
      const sec = s % 60
      return `${m}:${sec.toString().padStart(2, '0')}`
    }
  },
  data() {
    return {
      isDarkMode: false,
      isMobileMenuOpen: false,
      isPlaying: false,
      isShuffled: false,
      isRepeat: false,
      volume: 72,
      activeTrack: 0,
      embedController: null,
      currentPosition: 0,
      trackDurationSeconds: 0,
      tracks: [
        {
          title: 'Casablanca',
          artist: 'Fly By Midnight',
          album: 'The Fastest Time Of Our Lives',
          duration: '3:40',
          genre: 'Indie Pop',
          spotifyId: '5guLzFXRDXXvygWZ9Nme8S',
          cover: 'https://i.scdn.co/image/ab67616d00001e02c9893920d6f8c103d7346c65'
        },
        {
          title: 'Loveland',
          artist: 'Fly By Midnight',
          album: 'The Fastest Time Of Our Lives',
          duration: '3:38',
          genre: 'Indie Pop',
          spotifyId: '0j0oUnUbksjyQK9l6Az8Zn',
          cover: 'https://i.scdn.co/image/ab67616d00001e02c9893920d6f8c103d7346c65'
        },
        {
          title: 'Set My Eyes (Live)',
          artist: 'Michael Bethany',
          album: 'Overflow (Live)',
          duration: '5:52',
          genre: 'Worship',
          spotifyId: '2qvPXTnSt8lxZKe4MF4lbT',
          cover: 'https://i.scdn.co/image/ab67616d00001e02adb7e6f2ccd5d703118d3dea'
        },
        {
          title: 'Tulala',
          artist: 'nicole',
          album: 'Tulala',
          duration: '4:22',
          genre: 'OPM',
          spotifyId: '1bDaK08ze2UzFEmoeCZfFN',
          cover: 'https://i.scdn.co/image/ab67616d00001e02030445f2c3ac0dd48025da00'
        },
        {
          title: 'Summa Cum Laude',
          artist: 'Matt Wilson',
          album: 'Summa Cum Laude',
          duration: '3:22',
          genre: 'OPM',
          spotifyId: '4xnPpy340UhTzo9JdwF5s0',
          cover: 'https://i.scdn.co/image/ab67616d00001e02d6fbf7798fbf29e79a6a9eee'
        },
        {
          title: 'Walk With You',
          artist: 'Michael Bethany',
          album: 'Walk With You',
          duration: '6:22',
          genre: 'Worship',
          spotifyId: '6XFUYEgpExi8Ag9pfGqUmk',
          cover: 'https://i.scdn.co/image/ab67616d00001e02b04db228718e428c8b65cd9a'
        }
      ]
    }
  },
  mounted() {
    const saved = localStorage.getItem('theme')
    if (saved === 'dark') {
      this.isDarkMode = true
      document.documentElement.setAttribute('data-theme', 'dark')
    }
    this.initSpotifyEmbed()
  },
  watch: {
    activeTrack(newIdx) {
      if (this.embedController) {
        this.embedController.loadUri(`spotify:track:${this.tracks[newIdx].spotifyId}`)
        this.embedController.play()
        this.isPlaying = true
        this.currentPosition = 0
      }
    }
  },
  methods: {
    navigateTo(section) {
      document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' })
    },
    initSpotifyEmbed() {
      window.onSpotifyIframeApiReady = (IFrameAPI) => {
        const element = this.$refs.sbEmbed
        const options = {
          uri: `spotify:track:${this.tracks[0].spotifyId}`
        }
        IFrameAPI.createController(element, options, (controller) => {
          this.embedController = controller
          controller.addListener('playback_update', (e) => {
            this.isPlaying = !e.data.isPaused
            this.currentPosition = e.data.position || 0
            this.trackDurationSeconds = e.data.duration || 0
          })
        })
      }
      if (!document.getElementById('spotify-iframe-api')) {
        const script = document.createElement('script')
        script.id = 'spotify-iframe-api'
        script.src = 'https://open.spotify.com/embed/iframe-api/v1'
        script.async = true
        document.body.appendChild(script)
      }
    },
    togglePlay() {
      if (this.embedController) {
        this.embedController.togglePlay()
      } else {
        this.isPlaying = !this.isPlaying
      }
    },
    seekTrack(event) {
      if (!this.embedController || !this.trackDurationSeconds) return
      const bar = event.currentTarget
      const rect = bar.getBoundingClientRect()
      const pct = Math.max(0, Math.min(1, (event.clientX - rect.left) / rect.width))
      const posMs = Math.floor(pct * this.trackDurationSeconds * 1000)
      this.embedController.seek(posMs)
    },
    nextTrack() {
      if (this.isRepeat === 'one') {
        if (this.embedController) { this.embedController.seek(0); this.embedController.play() }
        return
      }
      if (this.isShuffled) {
        let next
        do { next = Math.floor(Math.random() * this.tracks.length) }
        while (next === this.activeTrack && this.tracks.length > 1)
        this.activeTrack = next
      } else {
        this.activeTrack = (this.activeTrack + 1) % this.tracks.length
      }
    },
    prevTrack() {
      if (this.currentPosition > 3 && this.embedController) {
        this.embedController.seek(0)
        return
      }
      if (this.isShuffled) {
        let prev
        do { prev = Math.floor(Math.random() * this.tracks.length) }
        while (prev === this.activeTrack && this.tracks.length > 1)
        this.activeTrack = prev
      } else {
        this.activeTrack = (this.activeTrack - 1 + this.tracks.length) % this.tracks.length
      }
    },
    toggleShuffle() {
      this.isShuffled = !this.isShuffled
    },
    toggleRepeat() {
      if (!this.isRepeat) this.isRepeat = 'all'
      else if (this.isRepeat === 'all') this.isRepeat = 'one'
      else this.isRepeat = false
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
