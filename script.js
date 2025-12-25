
document.addEventListener('DOMContentLoaded', () => {

  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
    });


    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });
  }

  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const linkPage = link.getAttribute('href');
    if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
      link.classList.add('active');
    }
  });

  const navbar = document.querySelector('.navbar');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
      navbar.style.background = 'rgba(10, 10, 15, 0.95)';
      navbar.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.3)';
    } else {
      navbar.style.background = 'rgba(10, 10, 15, 0.8)';
      navbar.style.boxShadow = 'none';
    }

    lastScroll = currentScroll;
  });
});


const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
  });
});


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

function animateSkillBars() {
  const skillBars = document.querySelectorAll('.skill-progress');

  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const width = entry.target.getAttribute('data-width');
        entry.target.style.width = width;
        skillObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  skillBars.forEach(bar => {
    const width = bar.style.width;
    bar.setAttribute('data-width', width);
    bar.style.width = '0%';
    skillObserver.observe(bar);
  });
}


document.addEventListener('DOMContentLoaded', () => {
  if (document.querySelectorAll('.skill-progress').length > 0) {
    animateSkillBars();
  }
});

const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    let isValid = true;

    if (!name.value.trim()) {
      showError(name, 'Por favor, insira seu nome');
      isValid = false;
    } else {
      removeError(name);
    }

    if (!email.value.trim() || !isValidEmail(email.value)) {
      showError(email, 'Por favor, insira um email válido');
      isValid = false;
    } else {
      removeError(email);
    }

    if (!message.value.trim()) {
      showError(message, 'Por favor, insira uma mensagem');
      isValid = false;
    } else {
      removeError(message);
    }

    if (isValid) {
      showSuccessMessage();
      contactForm.reset();
    }
  });
}

function isValidEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

function showError(input, message) {
  const formGroup = input.parentElement;
  const existingError = formGroup.querySelector('.error-message');

  if (!existingError) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.style.color = '#ef4444';
    errorDiv.style.fontSize = '0.875rem';
    errorDiv.style.marginTop = '0.5rem';
    errorDiv.textContent = message;
    formGroup.appendChild(errorDiv);
  }

  input.style.borderColor = '#ef4444';
}

function removeError(input) {
  const formGroup = input.parentElement;
  const errorDiv = formGroup.querySelector('.error-message');

  if (errorDiv) {
    errorDiv.remove();
  }

  input.style.borderColor = 'rgba(255, 255, 255, 0.1)';
}

function showSuccessMessage() {
  const successDiv = document.createElement('div');
  successDiv.className = 'success-message';
  successDiv.style.cssText = `
    position: fixed;
    top: 100px;
    right: 20px;
    background: linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%);
    color: white;
    padding: 1rem 1.5rem;
    border-radius: 0.5rem;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
    z-index: 10000;
    animation: slideIn 0.3s ease;
  `;
  successDiv.textContent = 'Mensagem enviada com sucesso!';

  document.body.appendChild(successDiv);

  setTimeout(() => {
    successDiv.style.animation = 'slideOut 0.3s ease';
    setTimeout(() => successDiv.remove(), 300);
  }, 3000);
}


function typeWriter(element, text, speed = 100) {
  let i = 0;
  element.textContent = '';

  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }

  type();
}

document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.project-card, .card');

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
  });
});

function createParticles() {
  const particlesContainer = document.createElement('div');
  particlesContainer.className = 'particles';
  particlesContainer.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 0;
  `;

  for (let i = 0; i < 50; i++) {
    const particle = document.createElement('div');
    particle.style.cssText = `
      position: absolute;
      width: 2px;
      height: 2px;
      background: rgba(139, 92, 246, 0.5);
      border-radius: 50%;
      top: ${Math.random() * 100}%;
      left: ${Math.random() * 100}%;
      animation: float ${10 + Math.random() * 20}s infinite ease-in-out;
      animation-delay: ${Math.random() * 5}s;
    `;
    particlesContainer.appendChild(particle);
  }

  document.body.prepend(particlesContainer);
}

const style = document.createElement('style');
style.textContent = `
  @keyframes float {
    0%, 100% {
      transform: translateY(0) translateX(0);
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    90% {
      opacity: 1;
    }
    50% {
      transform: translateY(-100px) translateX(50px);
    }
  }
  
  @keyframes slideIn {
    from {
      transform: translateX(400px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  @keyframes slideOut {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(400px);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);

