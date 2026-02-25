<template>
  <div class="guestbook">
    <!-- Comment Form -->
    <form @submit.prevent="submitComment" class="guestbook-form">
      <h3 style="margin-bottom: 1.5rem; text-align: center;">Leave a Message</h3>
      
      <!-- Success/Error Messages -->
      <div v-if="successMessage" class="message success">
        {{ successMessage }}
      </div>
      <div v-if="errorMessage" class="message error">
        {{ errorMessage }}
      </div>

      <div class="form-group">
        <label for="name">Name *</label>
        <input
          type="text"
          id="name"
          v-model="formData.name"
          required
          placeholder="Enter your name"
          maxlength="100"
        />
      </div>

      <div class="form-group">
        <label for="email">Email *</label>
        <input
          type="email"
          id="email"
          v-model="formData.email"
          required
          placeholder="your.email@example.com"
          maxlength="100"
        />
      </div>

      <div class="form-group">
        <label for="message">Message *</label>
        <textarea
          id="message"
          v-model="formData.message"
          required
          placeholder="Write your message here..."
          maxlength="500"
        ></textarea>
        <small style="color: var(--text-light);">
          {{ formData.message.length }}/500 characters
        </small>
      </div>

      <button type="submit" class="btn" :disabled="isSubmitting">
        {{ isSubmitting ? 'Submitting...' : 'Submit Comment' }}
      </button>
    </form>

    <!-- Comments List -->
    <div class="comments-section">
      <h3 style="text-align: center; margin-bottom: 2rem;">Recent Comments</h3>
      
      <div v-if="isLoading" class="loading">
        Loading comments...
      </div>

      <div v-else-if="comments.length === 0" class="loading">
        No comments yet. Be the first to leave a message!
      </div>

      <div v-else class="comments-list">
        <div v-for="comment in comments" :key="comment.id" class="comment-card">
          <div class="comment-header">
            <span class="comment-author">{{ comment.name }}</span>
            <span class="comment-date">{{ formatDate(comment.created_at) }}</span>
          </div>
          <p class="comment-message">{{ comment.message }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Guestbook',
  data() {
    return {
      // Form data
      formData: {
        name: '',
        email: '',
        message: ''
      },
      // Comments list
      comments: [],
      // Loading states
      isLoading: false,
      isSubmitting: false,
      // Messages
      successMessage: '',
      errorMessage: ''
    }
  },
  mounted() {
    // Load comments when component is mounted
    this.fetchComments()
  },
  methods: {
    /**
     * Fetch all comments from the API
     */
    async fetchComments() {
      this.isLoading = true
      this.errorMessage = ''
      
      try {
        // Get API URL from environment variable or use default for development
        const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3001'
        
        const response = await axios.get(`${apiUrl}/api/comments`)
        this.comments = response.data
      } catch (error) {
        console.error('Error fetching comments:', error)
        this.errorMessage = 'Failed to load comments. Please try again later.'
      } finally {
        this.isLoading = false
      }
    },

    /**
     * Submit a new comment to the API
     */
    async submitComment() {
      // Clear previous messages
      this.successMessage = ''
      this.errorMessage = ''
      
      // Basic validation
      if (!this.formData.name || !this.formData.email || !this.formData.message) {
        this.errorMessage = 'All fields are required.'
        return
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(this.formData.email)) {
        this.errorMessage = 'Please enter a valid email address.'
        return
      }

      this.isSubmitting = true

      try {
        // Get API URL from environment variable or use default for development
        const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3001'
        
        await axios.post(`${apiUrl}/api/comments`, {
          name: this.formData.name.trim(),
          email: this.formData.email.trim(),
          message: this.formData.message.trim()
        })

        // Show success message
        this.successMessage = 'Comment submitted successfully!'
        
        // Reset form
        this.formData = {
          name: '',
          email: '',
          message: ''
        }

        // Refresh comments list
        await this.fetchComments()

        // Clear success message after 5 seconds
        setTimeout(() => {
          this.successMessage = ''
        }, 5000)
        
      } catch (error) {
        console.error('Error submitting comment:', error)
        
        // Show error message from server or generic message
        if (error.response && error.response.data && error.response.data.message) {
          this.errorMessage = error.response.data.message
        } else {
          this.errorMessage = 'Failed to submit comment. Please try again.'
        }
      } finally {
        this.isSubmitting = false
      }
    },

    /**
     * Format date to readable format
     */
    formatDate(dateString) {
      if (!dateString) {
        return 'Just now'
      }
      
      const date = new Date(dateString)
      
      // Check if date is valid
      if (isNaN(date.getTime())) {
        return 'Just now'
      }
      
      const options = { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }
      return date.toLocaleDateString('en-US', options)
    }
  }
}
</script>
