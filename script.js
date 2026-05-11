
// ===============================================
//   INTERNATIONALIZATION (i18n)
// ===============================================
const translations = {
  pt: {
    'nav.home': 'Início',
    'nav.about': 'Sobre',
    'nav.projects': 'Projetos',
    'nav.contact': 'Contato',
    'hero.title': 'Olá, eu sou Vitor Brito',
    'hero.subtitle': 'Desenvolvedor Full Stack',
    'about.title': 'Sobre Mim',
    'about.subtitle': 'Conheça um pouco mais sobre mim',
    'about.who': 'Quem sou eu',
    'about.bio1': 'Meu nome é Vitor Brito de Bastos, sou um desenvolvedor e estudante de tecnologia, que tem foco em criar aplicações. Meu interesse por programação começou quando percebi que mexer com computadores e programar é algo que eu realmente gosto.',
    'about.bio2': 'Ao longo da minha jornada, desenvolvi diversos projetos que abrangem desde aplicações de saúde mental até sistemas de monitoramento de redes e gerenciamento de hardware. Cada projeto me ensinou lições sobre desenvolvimento, trabalho em equipe e resolução de problemas.',
    'about.bio3': 'Estou constantemente buscando aprender e me atualizar com as mais recentes tecnologias e melhores práticas de desenvolvimento. Meu objetivo é criar aplicações robustas, escaláveis e com excelente experiência do usuário.',
    'about.profInfo': 'Informações Profissionais',
    'about.focus': 'Foco Atual',
    'about.focusDesc': 'Desenvolvimento usando Node.js com banco de dados, criando aplicações web modernas e eficientes.',
    'about.experience': 'Experiência',
    'about.exp1': 'Desenvolvimento de APIs RESTful',
    'about.exp2': 'Integração com bancos de dados (MySQL, PostgreSQL, SQLite)',
    'about.exp3': 'Desenvolvimento de interfaces de usuário modernas',
    'about.exp4': 'Sistemas de monitoramento e gerenciamento',
    'about.interests': 'Interesses',
    'about.interestsDesc': 'Além da programação, tenho interesse em inteligência artificial, design e sempre busco estudar e aprender novas tecnologias que possam melhorar a qualidade dos meus projetos.',
    'about.viewProjects': 'Ver Meus Projetos',
    'projects.title': 'Meus Projetos',
    'projects.subtitle': 'Confira os projetos que desenvolvi, cada um com seu propósito único e desafios técnicos',
    'projects.techUsed': 'Tecnologias Utilizadas',
    'projects.mainFeatures': 'Funcionalidades Principais',
    'projects.viewGithub': 'Ver no GitHub →',
    'projects.moreGithub': 'Ver Mais no GitHub',
    'projects.healthtalk.name': 'HealthTalk',
    'projects.healthtalk.desc': 'Uma aplicação inovadora criada para auxiliar pessoas que enfrentam dificuldades relacionadas à saúde mental, oferecendo um espaço seguro para conversar com uma Inteligência Artificial que fornece apoio inicial, escuta ativa e orientações básicas.',
    'projects.healthtalk.f1': 'Cadastro e autenticação de usuários',
    'projects.healthtalk.f2': 'Armazenamento seguro de dados no MySQL',
    'projects.healthtalk.f3': 'Chat integrado com Inteligência Artificial',
    'projects.healthtalk.f4': 'Interface intuitiva e organizada por menu',
    'projects.healthtalk.f5': 'Sistema de apoio emocional 24/7',
    'projects.netguardian.name': 'NetGuardian',
    'projects.netguardian.desc': 'Sistema completo de monitoramento de dispositivos de rede, oferecendo uma solução simples, segura e intuitiva para verificar conectividade, armazenar logs e gerenciar um inventário de dispositivos em um único lugar. Essencial para ambientes onde a estabilidade de rede é crítica.',
    'projects.netguardian.f1': 'Cadastro completo de dispositivos (nome, IP, localização)',
    'projects.netguardian.f2': 'Teste de conectividade via Ping em tempo real',
    'projects.netguardian.f3': 'Armazenamento e consulta de logs históricos',
    'projects.netguardian.f4': 'Inventário organizado de todos os dispositivos',
    'projects.netguardian.f5': 'Interface web simples e intuitiva',
    'projects.labhub.name': 'LabHub',
    'projects.labhub.desc': 'Sistema robusto de gerenciamento e monitoramento de hardware que facilita o controle eficiente do inventário e uso dos recursos. Desenvolvido com design intuitivo, permite gerenciar equipamentos, técnicos e receber notificações importantes sobre manutenção.',
    'projects.labhub.f1': 'Cadastro e gerenciamento de equipamentos',
    'projects.labhub.f2': 'Controle de disponibilidade e status',
    'projects.labhub.f3': 'Notificações de manutenção e vencimento de garantias',
    'projects.labhub.f4': 'Sistema de lotes para organização',
    'projects.labhub.f5': 'Criação e gerenciamento de usuários',
    'projects.labhub.f6': 'Gerenciamento completo de técnicos',
    'contact.title': 'Entre em Contato',
    'footer.rights': '© 2025 Vitor. Todos os direitos reservados.',
    'footer.made': 'Desenvolvido com dedicação',
  },
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'hero.title': 'Hi, I am Vitor Brito',
    'hero.subtitle': 'Full Stack Developer',
    'about.title': 'About Me',
    'about.subtitle': 'Get to know me a little better',
    'about.who': 'Who I am',
    'about.bio1': 'My name is Vitor Brito de Bastos, I am a developer and technology student focused on building applications. My interest in programming started when I realized that working with computers and coding is something I truly enjoy.',
    'about.bio2': 'Throughout my journey, I have developed several projects ranging from mental health applications to network monitoring systems and hardware management tools. Each project taught me valuable lessons about development, teamwork and problem-solving.',
    'about.bio3': 'I am constantly seeking to learn and keep up with the latest technologies and best development practices. My goal is to build robust, scalable applications with an excellent user experience.',
    'about.profInfo': 'Professional Information',
    'about.focus': 'Current Focus',
    'about.focusDesc': 'Development using Node.js with databases, building modern and efficient web applications.',
    'about.experience': 'Experience',
    'about.exp1': 'RESTful API Development',
    'about.exp2': 'Database Integration (MySQL, PostgreSQL, SQLite)',
    'about.exp3': 'Modern User Interface Development',
    'about.exp4': 'Monitoring and Management Systems',
    'about.interests': 'Interests',
    'about.interestsDesc': 'Besides programming, I have an interest in artificial intelligence, design, and I am always looking to study and learn new technologies that can improve the quality of my projects.',
    'about.viewProjects': 'View My Projects',
    'projects.title': 'My Projects',
    'projects.subtitle': 'Check out the projects I developed, each with its unique purpose and technical challenges',
    'projects.techUsed': 'Technologies Used',
    'projects.mainFeatures': 'Main Features',
    'projects.viewGithub': 'View on GitHub →',
    'projects.moreGithub': 'See More on GitHub',
    'projects.healthtalk.name': 'HealthTalk',
    'projects.healthtalk.desc': 'An innovative application created to help people facing difficulties related to mental health, offering a safe space to talk with an Artificial Intelligence that provides initial support, active listening and basic guidance.',
    'projects.healthtalk.f1': 'User registration and authentication',
    'projects.healthtalk.f2': 'Secure data storage in MySQL',
    'projects.healthtalk.f3': 'Chat integrated with Artificial Intelligence',
    'projects.healthtalk.f4': 'Intuitive menu-based interface',
    'projects.healthtalk.f5': '24/7 emotional support system',
    'projects.netguardian.name': 'NetGuardian',
    'projects.netguardian.desc': 'A complete network device monitoring system, offering a simple, secure and intuitive solution to check connectivity, store logs and manage a device inventory in one place. Essential for environments where network stability is critical.',
    'projects.netguardian.f1': 'Full device registration (name, IP, location)',
    'projects.netguardian.f2': 'Real-time connectivity test via Ping',
    'projects.netguardian.f3': 'Historical log storage and query',
    'projects.netguardian.f4': 'Organized inventory of all devices',
    'projects.netguardian.f5': 'Simple and intuitive web interface',
    'projects.labhub.name': 'LabHub',
    'projects.labhub.desc': 'A robust hardware management and monitoring system that facilitates efficient inventory control and resource usage. Developed with an intuitive design, it allows managing equipment, technicians and receiving important maintenance notifications.',
    'projects.labhub.f1': 'Equipment registration and management',
    'projects.labhub.f2': 'Availability and status control',
    'projects.labhub.f3': 'Maintenance and warranty expiration notifications',
    'projects.labhub.f4': 'Batch system for organization',
    'projects.labhub.f5': 'User creation and management',
    'projects.labhub.f6': 'Complete technician management',
    'contact.title': 'Get In Touch',
    'footer.rights': '© 2025 Vitor. All rights reserved.',
    'footer.made': 'Developed with dedication',
  }
};

let currentLang = localStorage.getItem('lang') || 'pt';

function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);

  const dict = translations[lang];

  // Update all data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) {
      el.textContent = dict[key];
    }
  });

  // Update lang toggle button labels and flags
  const isEN = lang === 'en';
  document.querySelectorAll('.lang-label').forEach(el => {
    el.textContent = isEN ? 'PT' : 'EN';
  });
  document.querySelectorAll('.lang-flag').forEach(el => {
    el.textContent = isEN ? '🇺🇸' : '🇧🇷';
  });

  // Update html lang attribute
  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
}

function toggleLanguage() {
  applyLanguage(currentLang === 'pt' ? 'en' : 'pt');
}

// Apply saved language on page load
document.addEventListener('DOMContentLoaded', () => {
  applyLanguage(currentLang);
});

// ===============================================
//   NAVIGATION
// ===============================================
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

  if (navbar) {
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
  }
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

    const errName = currentLang === 'en' ? 'Please enter your name' : 'Por favor, insira seu nome';
    const errEmail = currentLang === 'en' ? 'Please enter a valid email' : 'Por favor, insira um email válido';
    const errMsg = currentLang === 'en' ? 'Please enter a message' : 'Por favor, insira uma mensagem';

    if (!name.value.trim()) {
      showError(name, errName);
      isValid = false;
    } else {
      removeError(name);
    }

    if (!email.value.trim() || !isValidEmail(email.value)) {
      showError(email, errEmail);
      isValid = false;
    } else {
      removeError(email);
    }

    if (!message.value.trim()) {
      showError(message, errMsg);
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
  const msg = currentLang === 'en' ? 'Message sent successfully!' : 'Mensagem enviada com sucesso!';
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
  successDiv.textContent = msg;

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

