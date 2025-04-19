// Script para cambiar entre español e inglés usando data attributes
const languageToggleButton = document.querySelector('[data-language-toggle]');
const mobileLanguageToggleButton = document.querySelector('[data-mobile-language-toggle]');
const elementsToTranslate = document.querySelectorAll('[data-translate]');

// Objeto con las traducciones
const translations = {
  'nav-home': {
    'es': 'Inicio',
    'en': 'Home'
  },
  'nav-about': {
    'es': 'Sobre Mí',
    'en': 'About'
  },
  'nav-services': {
    'es': 'Habilidades',
    'en': 'Skills'
  },
  'nav-proyectos': {
    'es': 'Proyectos',
    'en': 'Projects'
  },
  'nav-contact': {
    'es': 'Contacto',
    'en': 'Contact'
  },
  'nav-theme': {
    'es': 'Cambiar tema',
    'en': 'theme'
  },
  'nav-change-language': {
    'es': 'Cambiar idioma',
    'en': 'change language'
  },
  'bio-description': {
    'es': 'Especialista en desarrollo web y móvil con más de 7 años de experiencia creando soluciones digitales innovadoras y de alto rendimiento.',
    'en': 'Web and mobile development specialist with over 7 years of experience creating innovative and high-performance digital solutions.'
  },
  'contact-button': {
    'es': 'Contáctame',
    'en': 'Contact'
  },
  'projects-button': {
    'es': 'Ver Proyectos',
    'en': 'View Projects'
  },
  // Traducciones para la sección "Sobre Mí"
  'about-me-title': {
    'es': 'Sobre Mí',
    'en': 'About Me'
  },
  'who-am-i': {
    'es': '¿Quién soy?',
    'en': 'Who am I?'
  },
  'about-me-p1': {
    'es': 'Soy un desarrollador full stack apasionado por crear experiencias digitales excepcionales. Me especializo en el desarrollo de aplicaciones web y móviles utilizando tecnologías modernas.',
    'en': 'I am a full stack developer passionate about creating exceptional digital experiences. I specialize in developing web and mobile applications using modern technologies.'
  },
  'about-me-p2': {
    'es': 'Con experiencia en startups y empresas establecidas, he contribuido al desarrollo de productos utilizados por miles de usuarios. Me encanta resolver problemas complejos y convertir ideas en realidad.',
    'en': 'With experience in startups and established companies, I have contributed to the development of products used by thousands of users. I love solving complex problems and turning ideas into reality.'
  },
  'label-name': {
    'es': 'Nombre:',
    'en': 'Name:'
  },
  'label-email': {
    'es': 'Email:',
    'en': 'Email:'
  },
  'label-location': {
    'es': 'Ubicación:',
    'en': 'Location:'
  },
  'value-location': {
    'es': 'Colombia, Norte de Santander',
    'en': 'Colombia, Norte de Santander'
  },
  'label-availability': {
    'es': 'Disponibilidad:',
    'en': 'Availability:'
  },
  'value-availability': {
    'es': 'Freelance / Contrato',
    'en': 'Freelance / Contract'
  },
    // traducciones skills
    'skills-title': {
      'es': 'Mis Habilidades',
      'en': 'My Skills'
    },
    'skills-description': {
      'es': 'Domino diversas tecnologías para el desarrollo web y móvil, siempre manteniéndome actualizado con las últimas tendencias.',
      'en': 'I master various technologies for web and mobile development, always keeping up with the latest trends.'
    },
    'skills-frontend': {
      'es': 'Frontend',
      'en': 'Frontend'
    },
    'skills-backend': {
      'es': 'Backend',
      'en': 'Backend'
    },
    'skills-mobile': {
      'es': 'Desarrollo Móvil',
      'en': 'Mobile Development'
    },
    'skills-chart-title': {
      'es': 'Comparativa de Habilidades',
      'en': 'Skills Comparison'
    },
    // traducciones mis proyectos
    'projects-title': {
    'es': 'Mis Proyectos',
    'en': 'My Projects'
    },
    'projects-description': {
      'es': 'Una selección de los proyectos más destacados en los que he trabajado recientemente.',
      'en': 'A selection of the most outstanding projects I have recently worked on.'
    },
    'filter-all': {
      'es': 'Todos',
      'en': 'All'
    },
    'filter-web': {
      'es': 'Web',
      'en': 'Web'
    },
    'filter-mobile': {
      'es': 'Móvil',
      'en': 'Mobile'
    },
    'filter-backend': {
      'es': 'Backend',
      'en': 'Backend'
    },
    'view-details': {
      'es': 'Ver Detalles',
      'en': 'View Details'
    },
    'load-more-projects': {
      'es': 'Cargar Más Proyectos',
      'en': 'Load More Projects'
    },
    // Traducciones para títulos de proyectos
    'project1-title': {
      'es': 'Plataforma E-commerce',
      'en': 'E-commerce Platform'
    },
    'project1-description': {
      'es': 'Tienda online completa con pasarela de pagos y gestión de inventario.',
      'en': 'Complete online store with payment gateway and inventory management.'
    },
    'project2-title': {
      'es': 'Aplicación de Fitness',
      'en': 'Fitness App'
    },
    'project2-description': {
      'es': 'App móvil para seguimiento de entrenamientos y nutrición.',
      'en': 'Mobile app for workout tracking and nutrition.'
    },
    'project3-title': {
      'es': 'Sistema de Gestión de APIs',
      'en': 'API Management System'
    },
    'project3-description': {
      'es': 'Plataforma para gestionar y monitorizar APIs RESTful.',
      'en': 'Platform to manage and monitor RESTful APIs.'
    },
    'project4-title': {
      'es': 'Plataforma Inmobiliaria',
      'en': 'Real Estate Platform'
    },
    'project4-description': {
      'es': 'Portal web para búsqueda y gestión de propiedades inmobiliarias.',
      'en': 'Web portal for property search and management.'
    },
    'project5-title': {
      'es': 'App de Entrega de Comida',
      'en': 'Food Delivery App'
    },
    'project5-description': {
      'es': 'Aplicación móvil para pedidos y entregas de comida a domicilio.',
      'en': 'Mobile app for food ordering and home delivery.'
    },
    'project6-title': {
      'es': 'Sistema de Gestión de Contenidos',
      'en': 'Content Management System'
    },
    'project6-description': {
      'es': 'CMS personalizado para la gestión de contenidos digitales.',
      'en': 'Custom CMS for digital content management.'
    },
    'project7-title': {
      'es': 'Plataforma LMS',
      'en': 'LMS Platform'
    },
    'project7-description': {
      'es': 'Sistema de gestión de aprendizaje para cursos online con videoconferencias, evaluaciones y certificaciones.',
      'en': 'Learning management system for online courses with video conferencing, assessments and certifications.'
    },

     //traducciones formulario de contactos
    'contact-title': {
      'es': 'Contáctame',
      'en': 'Contact Me'
    },
    'contact-description': {
      'es': '¿Tienes un proyecto en mente? ¡Hablemos! Estoy disponible para trabajos freelance y oportunidades a tiempo completo.',
      'en': 'Have a project in mind? Let\'s talk! I\'m available for freelance work and full-time opportunities.'
    },
    'contact-info-title': {
      'es': 'Información de Contacto',
      'en': 'Contact Information'
    },
    'label-contact-location': {
      'es': 'Ubicación',
      'en': 'Location'
    },
    'label-contact-email': {
      'es': 'Correo',
      'en': 'Email'
    },
    'label-contact-phone': {
      'es': 'Teléfono',
      'en': 'Phone'
    },
    'label-contact-schedule': {
      'es': 'Horario de Trabajo',
      'en': 'Working Hours'
    },
    'label-contact-follow': {
      'es': 'Sígueme en',
      'en': 'Follow Me'
    },
    'form-contact-title': {
      'es': 'Envíame un Mensaje',
      'en': 'Send Me a Message'
    },
    'label-contact-name': {
      'es': 'Nombre',
      'en': 'Name'
    },
    'label-contact-subject': {
      'es': 'Asunto',
      'en': 'Subject'
    },
    'label-contact-message': {
      'es': 'Mensaje',
      'en': 'Message'
    },
    'button-contact-send': {
      'es': 'Enviar Mensaje',
      'en': 'Send Message'
    },
    'placeholder-contact-name': {
      'es': 'Tu nombre',
      'en': 'Your name'
    },
    'placeholder-contact-email': {
      'es': 'Tu email',
      'en': 'Your email'
    },
    'placeholder-contact-subject': {
      'es': 'Asunto del mensaje',
      'en': 'Message subject'
    },
    'placeholder-contact-message': {
      'es': 'Tu mensaje',
      'en': 'Your message'
    },
     // Footer
    'footer-description': {
      'es': 'Desarrollador full stack especializado en crear experiencias digitales excepcionales y soluciones tecnológicas innovadoras.',
      'en': 'Full stack developer specialized in creating exceptional digital experiences and innovative technological solutions.'
    },
    'footer-quick-links': {
      'es': 'Enlaces Rápidos',
      'en': 'Quick Links'
    },
    'footer-link-home': {
      'es': 'Inicio',
      'en': 'Home'
    },
    'footer-link-about': {
      'es': 'Sobre Mí',
      'en': 'About Me'
    },
    'footer-link-skills': {
      'es': 'Habilidades',
      'en': 'Skills'
    },
    'footer-link-projects': {
      'es': 'Proyectos',
      'en': 'Projects'
    },
    'footer-link-contact': {
      'es': 'Contacto',
      'en': 'Contact'
    },
    'footer-follow': {
      'es': 'Sígueme',
      'en': 'Follow Me'
    },
    'footer-copyright': {
      'es': '&copy; 2025 Jesus Manuel Parada L. Todos los derechos reservados.',
      'en': '&copy; 2025 Jesus Manuel Parada L. All rights reserved.'
    },
    'footer-privacy-policy': {
      'es': 'Política de Privacidad',
      'en': 'Privacy Policy'
    },
    'footer-terms': {
      'es': 'Términos de Servicio',
      'en': 'Terms of Service'
    },

    // Modal
    'modal-title': {
      'es': 'Detalles del Proyecto',
      'en': 'Project Details'
    },
    'modal-close': {
      'es': 'Cerrar',
      'en': 'Close'
    }
};

// Función para cambiar el idioma
function toggleLanguage() {
  const currentLang = document.documentElement.lang;
  const newLang = currentLang === 'es' ? 'en' : 'es';
  
  // Cambiar el atributo lang del documento
  document.documentElement.lang = newLang;
  
  // Actualizar el texto de los botones de idioma
  document.querySelectorAll('[data-language-text]').forEach(el => {
    el.textContent = newLang.toUpperCase();
  });
  
  // Traducir todos los elementos con el atributo data-translate
  elementsToTranslate.forEach(element => {
    const key = element.getAttribute('data-translate');
    if (translations[key] && translations[key][newLang]) {
      element.textContent = translations[key][newLang];
    }
  });
  
  // Guardar preferencia en localStorage
  localStorage.setItem('language', newLang);
}

// Agregar event listeners para los botones de idioma
if (languageToggleButton) {
  languageToggleButton.addEventListener('click', toggleLanguage);
}

if (mobileLanguageToggleButton) {
  mobileLanguageToggleButton.addEventListener('click', toggleLanguage);
}

// Inicializar idioma al cargar la página
function initializeLanguage() {
  // Comprobar la configuración de idioma guardada
  const savedLanguage = localStorage.getItem('language');
  
  // Determinar el idioma a usar
  let currentLang;
  
  if (savedLanguage) {
    // Usar el idioma guardado
    currentLang = savedLanguage;
  } else {
    // Usar el idioma del navegador o español por defecto
    const browserLang = navigator.language.split('-')[0];
    currentLang = (browserLang === 'en') ? 'en' : 'es';
  }
  
  // Establecer el idioma en el documento
  document.documentElement.lang = currentLang;
  
  // Actualizar el texto de los botones de idioma
  document.querySelectorAll('[data-language-text]').forEach(el => {
    el.textContent = currentLang.toUpperCase();
  });
  
  // Traducir todos los elementos
  elementsToTranslate.forEach(element => {
    const key = element.getAttribute('data-translate');
    if (translations[key] && translations[key][currentLang]) {
      element.textContent = translations[key][currentLang];
    }
  });
}

// Inicializar idioma cuando se carga la página
document.addEventListener('DOMContentLoaded', initializeLanguage);