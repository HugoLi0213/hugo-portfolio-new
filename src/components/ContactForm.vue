<template>
  <div class="contact-form-container">
    <form @submit.prevent="submitForm" class="contact-form">
      <div class="form-group">
        <label for="name" class="form-label">Name *</label>
        <input
          type="text"
          id="name"
          v-model="form.name"
          :class="['form-control', { 'is-invalid': errors.name }]"
          placeholder="Your full name"
          @blur="validateField('name')"
        />
        <div v-if="errors.name" class="invalid-feedback">{{ errors.name }}</div>
      </div>

      <div class="form-group">
        <label for="email" class="form-label">Email *</label>
        <input
          type="email"
          id="email"
          v-model="form.email"
          :class="['form-control', { 'is-invalid': errors.email }]"
          placeholder="your.email@example.com"
          @blur="validateField('email')"
        />
        <div v-if="errors.email" class="invalid-feedback">{{ errors.email }}</div>
      </div>

      <div class="form-group">
        <label for="subject" class="form-label">Subject *</label>
        <input
          type="text"
          id="subject"
          v-model="form.subject"
          :class="['form-control', { 'is-invalid': errors.subject }]"
          placeholder="What's this about?"
          @blur="validateField('subject')"
        />
        <div v-if="errors.subject" class="invalid-feedback">{{ errors.subject }}</div>
      </div>

      <div class="form-group">
        <label for="message" class="form-label">Message *</label>
        <textarea
          id="message"
          v-model="form.message"
          :class="['form-control', { 'is-invalid': errors.message }]"
          rows="5"
          placeholder="Tell me about your project, question, or just say hello!"
          @blur="validateField('message')"
        ></textarea>
        <div v-if="errors.message" class="invalid-feedback">{{ errors.message }}</div>
      </div>

      <button 
        type="submit" 
        :disabled="isSubmitting || !isFormValid"
        class="btn btn-primary w-100"
      >
        <span v-if="isSubmitting">
          <i class="fas fa-spinner fa-spin me-2"></i>Sending...
        </span>
        <span v-else>
          <i class="fas fa-paper-plane me-2"></i>Send Message
        </span>
      </button>

      <div v-if="submitStatus" :class="['alert', 'mt-3', submitStatus.type === 'success' ? 'alert-success' : 'alert-danger']">
        {{ submitStatus.message }}
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const errors = ref({})
const isSubmitting = ref(false)
const submitStatus = ref(null)

const validateField = (field) => {
  errors.value[field] = ''
  
  switch (field) {
    case 'name':
      if (!form.value.name.trim()) {
        errors.value.name = 'Name is required'
      } else if (form.value.name.trim().length < 2) {
        errors.value.name = 'Name must be at least 2 characters'
      }
      break
    
    case 'email':
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!form.value.email.trim()) {
        errors.value.email = 'Email is required'
      } else if (!emailRegex.test(form.value.email)) {
        errors.value.email = 'Please enter a valid email address'
      }
      break
    
    case 'subject':
      if (!form.value.subject.trim()) {
        errors.value.subject = 'Subject is required'
      } else if (form.value.subject.trim().length < 5) {
        errors.value.subject = 'Subject must be at least 5 characters'
      }
      break
    
    case 'message':
      if (!form.value.message.trim()) {
        errors.value.message = 'Message is required'
      } else if (form.value.message.trim().length < 10) {
        errors.value.message = 'Message must be at least 10 characters'
      }
      break
  }
}

const validateForm = () => {
  Object.keys(form.value).forEach(validateField)
  return Object.keys(errors.value).every(key => !errors.value[key])
}

const isFormValid = computed(() => {
  return Object.values(form.value).every(value => value.trim()) &&
         Object.keys(errors.value).every(key => !errors.value[key])
})

const submitForm = async () => {
  if (!validateForm()) return
  
  isSubmitting.value = true
  submitStatus.value = null
  
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // In a real app, you'd send to your backend or email service
    console.log('Form submitted:', form.value)
    
    submitStatus.value = {
      type: 'success',
      message: 'Thank you! Your message has been sent successfully. I\'ll get back to you soon!'
    }
    
    // Reset form
    form.value = { name: '', email: '', subject: '', message: '' }
    errors.value = {}
    
  } catch (error) {
    submitStatus.value = {
      type: 'error',
      message: 'Sorry, there was an error sending your message. Please try again or contact me directly.'
    }
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
.contact-form-container {
  max-width: 600px;
  margin: 0 auto;
}

.contact-form {
  background: rgba(255, 255, 255, 0.05);
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-label {
  display: block;
  margin-bottom: 0.5rem;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 500;
  font-size: 0.95rem;
}

.form-control {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.05);
  color: #fff;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.form-control:focus {
  outline: none;
  border-color: #6366f1;
  box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.2);
  background: rgba(255, 255, 255, 0.08);
}

.form-control::placeholder {
  color: rgba(255, 255, 255, 0.5);
}

.form-control.is-invalid {
  border-color: #ef4444;
  box-shadow: 0 0 0 2px rgba(239, 68, 68, 0.2);
}

.invalid-feedback {
  color: #ef4444;
  font-size: 0.875rem;
  margin-top: 0.25rem;
}

.btn {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  cursor: pointer;
}

.btn-primary {
  background: linear-gradient(45deg, #6366f1, #8b5cf6);
  color: white;
}

.btn-primary:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(99, 102, 241, 0.3);
}

.btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
}

.alert {
  padding: 1rem;
  border-radius: 8px;
  font-weight: 500;
}

.alert-success {
  background: rgba(34, 197, 94, 0.1);
  color: #22c55e;
  border: 1px solid rgba(34, 197, 94, 0.2);
}

.alert-danger {
  background: rgba(239, 68, 68, 0.1);
  color: #ef4444;
  border: 1px solid rgba(239, 68, 68, 0.2);
}

.fa-spinner {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* Responsive */
@media (max-width: 768px) {
  .contact-form {
    padding: 1.5rem;
  }
  
  .form-control {
    padding: 0.65rem 0.85rem;
  }
}
</style>
