// ===== MAIN JAVASCRIPT FILE =====
// Acme Tech Website - Interactive Features v2.0

class AcmeTech {
  constructor() {
    this.currentTestimonial = 0;
    this.testimonials = [];
    this.isLoading = true;
    this.init();
  }

  init() {
    this.hideLoader();
    this.setupEventListeners();
    this.initializeComponents();
    this.setupAnimations();
    this.setupParticles();
  }

  hideLoader() {
    const loader = document.getElementById('loading-screen');
    if (loader) {
      setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => {
          loader.style.display = 'none';
          this.isLoading = false;
        }, 500);
      }, 1500);
    }
  }

  setupEventListeners() {
    // Mobile navigation toggle
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    if (navToggle && navMenu) {
      navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.classList.toggle('nav-open');
      });

      // Close mobile menu when clicking on a link
      const navLinks = document.querySelectorAll('.nav-link');
      navLinks.forEach(link => {
        link.addEventListener('click', () => {
          navToggle.classList.remove('active');
          navMenu.classList.remove('active');
          document.body.classList.remove('nav-open');
        });
      });
    }

    // Scroll effects with throttling
    window.addEventListener('scroll', this.throttle(() => {
      this.handleScroll();
    }, 16));

    // Scroll to top button
    const scrollTopBtn = document.getElementById('scroll-top');
    if (scrollTopBtn) {
      scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });

    // Form handling
    this.setupFormHandling();

    // Lazy loading for images
    this.setupLazyLoading();

    // Intersection Observer for animations
    this.setupIntersectionObserver();

    // FAQ functionality
    this.setupFAQ();

    // Testimonials slider
    this.setupTestimonialsSlider();

    // Newsletter form
    this.setupNewsletterForm();

    // Keyboard navigation
    this.setupKeyboardNavigation();

    // Performance monitoring
    this.setupPerformanceMonitoring();
  }

  initializeComponents() {
    // Initialize statistics counter
    this.initStatsCounter();
    
    // Initialize tooltips
    this.initTooltips();
    
    // Initialize loading states
    this.initLoadingStates();

    // Initialize typewriter effect
    this.initTypewriterEffect();

    // Initialize scroll animations
    this.initScrollAnimations();
  }

  handleScroll() {
    const navbar = document.getElementById('navbar');
    const scrollTopBtn = document.getElementById('scroll-top');
    
    if (window.scrollY > 100) {
      navbar?.classList.add('scrolled');
      scrollTopBtn?.classList.add('visible');
    } else {
      navbar?.classList.remove('scrolled');
      scrollTopBtn?.classList.remove('visible');
    }

    // Parallax effect for hero section
    this.handleParallax();

    // Update active navigation link
    this.updateActiveNavLink();
  }

  handleParallax() {
    const heroImage = document.querySelector('.hero-image');
    if (heroImage && !this.isLoading) {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.5;
      heroImage.style.transform = `translateY(${rate}px)`;
    }
  }

  updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= (sectionTop - 200)) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}` || 
          (current === '' && link.getAttribute('href') === 'index.html')) {
        link.classList.add('active');
      }
    });
  }

  initStatsCounter() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const animateCounter = (element, target) => {
      let current = 0;
      const increment = target / 100;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        element.textContent = Math.floor(current);
      }, 20);
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = parseInt(entry.target.dataset.target);
          animateCounter(entry.target, target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    statNumbers.forEach(stat => {
      observer.observe(stat);
    });
  }

  initTypewriterEffect() {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
      const text = heroTitle.textContent;
      heroTitle.innerHTML = '';
      
      let i = 0;
      const typeWriter = () => {
        if (i < text.length) {
          heroTitle.innerHTML += text.charAt(i);
          i++;
          setTimeout(typeWriter, 100);
        }
      };
      
      setTimeout(typeWriter, 1000);
    }
  }

  setupParticles() {
    const particlesContainer = document.getElementById('hero-particles');
    if (!particlesContainer) return;

    const particleCount = 50;
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.animationDelay = Math.random() * 20 + 's';
      particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
      particlesContainer.appendChild(particle);
      particles.push(particle);
    }
  }

  setupTestimonialsSlider() {
    const testimonialItems = document.querySelectorAll('.testimonial-item');
    const prevBtn = document.getElementById('prev-testimonial');
    const nextBtn = document.getElementById('next-testimonial');
    const dots = document.querySelectorAll('.testimonial-dots .dot');

    this.testimonials = Array.from(testimonialItems);

    const showTestimonial = (index) => {
      testimonialItems.forEach((item, i) => {
        item.classList.toggle('active', i === index);
      });
      
      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
      });
      
      this.currentTestimonial = index;
    };

    const nextTestimonial = () => {
      const next = (this.currentTestimonial + 1) % this.testimonials.length;
      showTestimonial(next);
    };

    const prevTestimonial = () => {
      const prev = (this.currentTestimonial - 1 + this.testimonials.length) % this.testimonials.length;
      showTestimonial(prev);
    };

    if (prevBtn) prevBtn.addEventListener('click', prevTestimonial);
    if (nextBtn) nextBtn.addEventListener('click', nextTestimonial);

    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => showTestimonial(index));
    });

    // Auto-advance testimonials
    setInterval(nextTestimonial, 5000);
  }

  setupNewsletterForm() {
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
      newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('newsletter-email').value;
        const privacy = document.getElementById('newsletter-privacy').checked;

        if (!privacy) {
          this.showNotification('Debes aceptar recibir comunicaciones', 'error');
          return;
        }

        // Simulate form submission
        this.showNotification('¡Gracias por suscribirte! Te mantendremos informado.', 'success');
        newsletterForm.reset();
      });
    }
  }

  setupKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
      // ESC key to close mobile menu
      if (e.key === 'Escape') {
        const navToggle = document.getElementById('nav-toggle');
        const navMenu = document.getElementById('nav-menu');
        if (navMenu?.classList.contains('active')) {
          navToggle?.classList.remove('active');
          navMenu?.classList.remove('active');
          document.body.classList.remove('nav-open');
        }
      }

      // Arrow keys for testimonials
      if (e.key === 'ArrowLeft') {
        document.getElementById('prev-testimonial')?.click();
      }
      if (e.key === 'ArrowRight') {
        document.getElementById('next-testimonial')?.click();
      }
    });
  }

  setupPerformanceMonitoring() {
    // Monitor Core Web Vitals
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          console.log(`${entry.name}: ${entry.value}`);
        }
      });
      
      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
    }
  }

  setupAnimations() {
    // Add CSS animations to elements
    const animatedElements = document.querySelectorAll('[data-aos]');
    
    animatedElements.forEach(element => {
      element.style.opacity = '0';
      element.style.transform = 'translateY(30px)';
    });
  }

  setupIntersectionObserver() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('aos-animate');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    const animatedElements = document.querySelectorAll('[data-aos]');
    animatedElements.forEach(element => {
      observer.observe(element);
    });
  }

  initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.feature-card, .stat-item, .tech-item').forEach(el => {
      observer.observe(el);
    });
  }

  setupFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
      const question = item.querySelector('.faq-question');
      
      question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        
        // Close all other FAQ items
        faqItems.forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.classList.remove('active');
          }
        });
        
        // Toggle current item
        if (isActive) {
          item.classList.remove('active');
        } else {
          item.classList.add('active');
        }
      });
    });
  }

  setupFormHandling() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        this.handleFormSubmit(form);
      });

      // Real-time validation
      const inputs = form.querySelectorAll('input, textarea, select');
      inputs.forEach(input => {
        input.addEventListener('blur', () => {
          this.validateField(input);
        });
        
        input.addEventListener('input', () => {
          if (input.classList.contains('error')) {
            this.validateField(input);
          }
        });
      });
    });
  }

  validateField(field) {
    const value = field.value.trim();
    let isValid = true;
    let errorMessage = '';

    // Remove existing error styling
    field.classList.remove('error');
    const existingError = field.parentNode.querySelector('.error-message');
    if (existingError) {
      existingError.remove();
    }

    // Validation rules
    if (field.hasAttribute('required') && !value) {
      isValid = false;
      errorMessage = 'Este campo es obligatorio';
    } else if (field.type === 'email' && value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        isValid = false;
        errorMessage = 'Por favor ingresa un email válido';
      }
    } else if (field.type === 'tel' && value) {
      const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/;
      if (!phoneRegex.test(value)) {
        isValid = false;
        errorMessage = 'Por favor ingresa un teléfono válido';
      }
    }

    // Apply validation result
    if (!isValid) {
      field.classList.add('error');
      const errorElement = document.createElement('div');
      errorElement.className = 'error-message';
      errorElement.textContent = errorMessage;
      field.parentNode.appendChild(errorElement);
    }

    return isValid;
  }

  handleFormSubmit(form) {
    const formData = new FormData(form);
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;

    // Show loading state
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';

    // Simulate form submission
    setTimeout(() => {
      this.showNotification('¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.', 'success');
      form.reset();
      
      // Reset button
      submitBtn.disabled = false;
      submitBtn.textContent = originalText;
    }, 2000);
  }

  setupLazyLoading() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src || img.src;
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
          }
        });
      });

      images.forEach(img => imageObserver.observe(img));
    }
  }

  initTooltips() {
    const tooltipElements = document.querySelectorAll('[data-tooltip]');
    
    tooltipElements.forEach(element => {
      element.addEventListener('mouseenter', (e) => {
        this.showTooltip(element, element.dataset.tooltip);
      });
      
      element.addEventListener('mouseleave', () => {
        this.hideTooltip();
      });
    });
  }

  showTooltip(element, text) {
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.textContent = text;
    document.body.appendChild(tooltip);

    const rect = element.getBoundingClientRect();
    tooltip.style.left = rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2) + 'px';
    tooltip.style.top = rect.top - tooltip.offsetHeight - 10 + 'px';
  }

  hideTooltip() {
    const tooltip = document.querySelector('.tooltip');
    if (tooltip) {
      tooltip.remove();
    }
  }

  initLoadingStates() {
    // Add loading states to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
      button.addEventListener('click', (e) => {
        if (button.classList.contains('btn-loading')) {
          e.preventDefault();
          return;
        }
        
        // Add loading state for certain buttons
        if (button.textContent.includes('Enviar') || button.textContent.includes('Solicitar')) {
          button.classList.add('btn-loading');
          button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Procesando...';
          
          setTimeout(() => {
            button.classList.remove('btn-loading');
            button.innerHTML = button.dataset.originalText || button.textContent;
          }, 3000);
        }
      });
    });
  }

  showNotification(message, type = 'info') {
    const container = document.getElementById('notification-container');
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    
    const icon = type === 'success' ? 'check-circle' : 
                 type === 'error' ? 'exclamation-circle' : 
                 type === 'warning' ? 'exclamation-triangle' : 'info-circle';
    
    notification.innerHTML = `
      <i class="fas fa-${icon}"></i>
      <span>${message}</span>
      <button class="notification-close">
        <i class="fas fa-times"></i>
      </button>
    `;
    
    container.appendChild(notification);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
      notification.classList.add('fade-out');
      setTimeout(() => {
        if (notification.parentNode) {
          notification.remove();
        }
      }, 300);
    }, 5000);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
      notification.classList.add('fade-out');
      setTimeout(() => {
        if (notification.parentNode) {
          notification.remove();
        }
      }, 300);
    });
  }

  // Utility functions
  debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  throttle(func, limit) {
    let inThrottle;
    return function() {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }
}

// Utility functions
function formatNumber(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function scrollToElement(element, offset = 0) {
  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - offset;
  
  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
}

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function addDynamicStyles() {
  const style = document.createElement('style');
  style.textContent = `
    .particle {
      position: absolute;
      width: 2px;
      height: 2px;
      background: rgba(255, 255, 255, 0.5);
      border-radius: 50%;
      animation: float 20s infinite linear;
    }
    
    @keyframes float {
      0% {
        transform: translateY(100vh) rotate(0deg);
        opacity: 0;
      }
      10% {
        opacity: 1;
      }
      90% {
        opacity: 1;
      }
      100% {
        transform: translateY(-100px) rotate(360deg);
        opacity: 0;
      }
    }
    
    .notification {
      position: fixed;
      top: 20px;
      right: 20px;
      background: white;
      border-radius: 8px;
      padding: 16px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      display: flex;
      align-items: center;
      gap: 12px;
      z-index: 1000;
      animation: slideIn 0.3s ease-out;
      max-width: 400px;
    }
    
    .notification-success {
      border-left: 4px solid #10b981;
    }
    
    .notification-error {
      border-left: 4px solid #ef4444;
    }
    
    .notification-warning {
      border-left: 4px solid #f59e0b;
    }
    
    .notification-info {
      border-left: 4px solid #3b82f6;
    }
    
    .notification-close {
      background: none;
      border: none;
      cursor: pointer;
      color: #6b7280;
      padding: 4px;
    }
    
    .notification-close:hover {
      color: #374151;
    }
    
    @keyframes slideIn {
      from {
        transform: translateX(100%);
        opacity: 0;
      }
      to {
        transform: translateX(0);
        opacity: 1;
      }
    }
    
    .fade-out {
      animation: fadeOut 0.3s ease-out forwards;
    }
    
    @keyframes fadeOut {
      to {
        opacity: 0;
        transform: translateX(100%);
      }
    }
    
    .btn-loading {
      pointer-events: none;
      opacity: 0.7;
    }
    
    .error {
      border-color: #ef4444 !important;
    }
    
    .error-message {
      color: #ef4444;
      font-size: 0.875rem;
      margin-top: 4px;
    }
    
    .animate-in {
      animation: slideInUp 0.6s ease-out forwards;
    }
    
    @keyframes slideInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `;
  document.head.appendChild(style);
}

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
  addDynamicStyles();
  new AcmeTech();
});

// Service Worker registration for PWA capabilities
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('SW registered: ', registration);
      })
      .catch(registrationError => {
        console.log('SW registration failed: ', registrationError);
      });
  });
} 