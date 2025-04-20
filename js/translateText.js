// Script para cambiar entre español e inglés usando data attributes
const languageToggleButton = document.querySelector('[data-language-toggle]');
const mobileLanguageToggleButton = document.querySelector('[data-mobile-language-toggle]');
const elementsToTranslate = document.querySelectorAll('[data-translate]');

// Objeto con las traducciones
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
    },
    // Proyecto 1 - E-commerce
    // Textos genéricos del modal
  'modal-description': {
    'es': 'Descripción',
    'en': 'Description'
  },
  'modal-technologies': {
    'es': 'Tecnologías',
    'en': 'Technologies'
  },
  'modal-features': {
    'es': 'Características',
    'en': 'Features'
  },
  'modal-duration': {
    'es': 'Duración',
    'en': 'Duration'
  },
  'modal-role': {
    'es': 'Rol',
    'en': 'Role'
  },

  // Proyecto 1 - E-commerce
  'project1-title': {
    'es': 'Plataforma E-commerce',
    'en': 'E-commerce Platform'
  },
  'project1-description': {
    'es': 'Una plataforma de comercio electrónico completa con gestión de productos, carrito de compras, pasarela de pagos y panel de administración.',
    'en': 'A complete e-commerce platform with product management, shopping cart, payment gateway and admin panel.'
  },
  'project1-role': {
    'es': 'Desarrollador Full Stack',
    'en': 'Full Stack Developer'
  },
  'project1-feature1': {
    'es': 'Catálogo de productos con filtros avanzados',
    'en': 'Product catalog with advanced filters'
  },
  'project1-feature2': {
    'es': 'Sistema de búsqueda en tiempo real',
    'en': 'Real-time search system'
  },
  'project1-feature3': {
    'es': 'Carrito de compras con persistencia',
    'en': 'Persistent shopping cart'
  },
  'project1-feature4': {
    'es': 'Pasarela de pagos segura',
    'en': 'Secure payment gateway'
  },
  'project1-feature5': {
    'es': 'Panel de administración para gestión de productos e inventario',
    'en': 'Admin panel for product and inventory management'
  },
  'project1-feature6': {
    'es': 'Sistema de reseñas y valoraciones',
    'en': 'Review and rating system'
  },
  'project1-duration': {
    'es': '8 meses',
    'en': '8 months'
  },
  // Proyecto 2 - Fitness App
  'project2-title': {
    'es': 'Aplicación de Fitness',
    'en': 'Fitness App'
  },
  'project2-description': {
    'es': 'Aplicación móvil para seguimiento de entrenamientos, nutrición y progreso físico con planes personalizados y análisis de datos.',
    'en': 'Mobile app for workout tracking, nutrition and physical progress with personalized plans and data analysis.'
  },
  'project2-role': {
    'es': 'Desarrollador Mobile',
    'en': 'Mobile Developer'
  },
  'project2-feature1': {
    'es': 'Seguimiento de entrenamientos diarios',
    'en': 'Daily workout tracking'
  },
  'project2-feature2': {
    'es': 'Planes de nutrición personalizados',
    'en': 'Personalized nutrition plans'
  },
  'project2-feature3': {
    'es': 'Análisis de progreso con gráficos',
    'en': 'Progress analysis with charts'
  },
  'project2-feature4': {
    'es': 'Integración con dispositivos wearables',
    'en': 'Integration with wearable devices'
  },
  'project2-feature5': {
    'es': 'Comunidad y desafíos entre usuarios',
    'en': 'Community and challenges between users'
  },
  'project2-feature6': {
    'es': 'Modo offline para entrenar sin conexión',
    'en': 'Offline mode for training without connection'
  },
  'project2-duration': {
    'es': '1 año',
    'en': '1 year'
  },
  // Proyecto 3 - Sistema de Gestión de APIs
  'project3-title': {
    'es': 'Sistema de Gestión de APIs',
    'en': 'API Management System'
  },
  'project3-description': {
    'es': 'Plataforma para gestionar, monitorizar y documentar APIs RESTful con análisis de rendimiento y seguridad.',
    'en': 'Platform to manage, monitor and document RESTful APIs with performance and security analysis.'
  },
  'project3-feature1': {
    'es': 'Dashboard de monitorización en tiempo real',
    'en': 'Real-time monitoring dashboard'
  },
  'project3-feature2': {
    'es': 'Documentación automática de APIs',
    'en': 'Automatic API documentation'
  },
  'project3-feature3': {
    'es': 'Sistema de autenticación y autorización',
    'en': 'Authentication and authorization system'
  },
  'project3-feature4': {
    'es': 'Análisis de rendimiento y cuellos de botella',
    'en': 'Performance analysis and bottleneck detection'
  },
  'project3-feature5': {
    'es': 'Gestión de versiones de API',
    'en': 'API version management'
  },
  'project3-feature6': {
    'es': 'Alertas y notificaciones configurables',
    'en': 'Configurable alerts and notifications'
  },
  'project3-duration': {
    'es': '9 meses',
    'en': '9 months'
  },
  'project3-role': {
    'es': 'Desarrollador Backend',
    'en': 'Backend Developer'
  },
  // Proyecto 4 - Plataforma Inmobiliaria
  'project4-title': {
    'es': 'Plataforma Inmobiliaria',
    'en': 'Real Estate Platform'
  },
  'project4-description': {
    'es': 'Portal web para búsqueda, listado y gestión de propiedades inmobiliarias con integración de mapas y filtros avanzados.',
    'en': 'Web portal for searching, listing, and managing real estate properties with map integration and advanced filters.'
  },
  'project4-feature1': {
    'es': 'Búsqueda avanzada con filtros personalizables',
    'en': 'Advanced search with customizable filters'
  },
  'project4-feature2': {
    'es': 'Integración de mapas interactivos',
    'en': 'Interactive map integration'
  },
  'project4-feature3': {
    'es': 'Sistema de favoritos y alertas',
    'en': 'Favorites and alerts system'
  },
  'project4-feature4': {
    'es': 'Calculadora de hipotecas',
    'en': 'Mortgage calculator'
  },
  'project4-feature5': {
    'es': 'Panel para agentes inmobiliarios',
    'en': 'Panel for real estate agents'
  },
  'project4-feature6': {
    'es': 'Tours virtuales de propiedades',
    'en': 'Virtual property tours'
  },
  'project4-duration': {
    'es': '2 años',
    'en': '2 year'
  },
  'project4-role': {
    'es': 'Desarrollador Frontend',
    'en': 'Frontend Developer'
  },
  // Proyecto 5 - App de Entrega de Comida
  'project5-title': {
    'es': 'App de Entrega de Comida',
    'en': 'Food Delivery App'
  },
  'project5-description': {
    'es': 'Aplicación móvil para pedidos y entregas de comida a domicilio con seguimiento en tiempo real y sistema de pagos integrado.',
    'en': 'Mobile app for food ordering and delivery with real-time tracking and integrated payment system.'
  },
  'project5-feature1': {
    'es': 'Catálogo de restaurantes con menús personalizables',
    'en': 'Restaurant catalog with customizable menus'
  },
  'project5-feature2': {
    'es': 'Sistema de pedidos y carrito',
    'en': 'Ordering and cart system'
  },
  'project5-feature3': {
    'es': 'Seguimiento de entrega en tiempo real',
    'en': 'Real-time delivery tracking'
  },
  'project5-feature4': {
    'es': 'Múltiples métodos de pago',
    'en': 'Multiple payment methods'
  },
  'project5-feature5': {
    'es': 'Sistema de reseñas y valoraciones',
    'en': 'Review and rating system'
  },
  'project5-feature6': {
    'es': 'Programa de fidelización con puntos',
    'en': 'Loyalty program with points'
  },
  'project5-duration': {
    'es': '8 meses',
    'en': '8 months'
  },
  'project5-role': {
    'es': 'Desarrollador Full Stack',
    'en': 'Full Stack Developer'
  },
  // Proyecto 6 - Sistema de Gestión de Contenidos
  'project6-title': {
    'es': 'Sistema de Gestión de Contenidos',
    'en': 'Content Management System'
  },
  'project6-description': {
    'es': 'CMS personalizado para la gestión de contenidos digitales con editor visual, gestión de medios y análisis de audiencia.',
    'en': 'Custom CMS for managing digital content with a visual editor, media management, and audience analytics.'
  },
  'project6-feature1': {
    'es': 'Editor de contenido visual WYSIWYG',
    'en': 'WYSIWYG visual content editor'
  },
  'project6-feature2': {
    'es': 'Gestión de usuarios y permisos',
    'en': 'User and permission management'
  },
  'project6-feature3': {
    'es': 'Biblioteca de medios con optimización automática',
    'en': 'Media library with automatic optimization'
  },
  'project6-feature4': {
    'es': 'Programación y publicación automática',
    'en': 'Scheduling and automatic publishing'
  },
  'project6-feature5': {
    'es': 'SEO integrado y análisis de contenido',
    'en': 'Integrated SEO and content analysis'
  },
  'project6-feature6': {
    'es': 'Multilenguaje y localización',
    'en': 'Multilingual support and localization'
  },
  'project6-duration': {
    'es': '1 año',
    'en': '1 year'
  },
  'project6-role': {
    'es': 'Desarrollador Backend',
    'en': 'Backend Developer'
  },
  // Proyecto 7 - Plataforma LMS
  'project7-title': {
    'es': 'Plataforma LMS',
    'en': 'LMS Platform'
  },
  'project7-description': {
    'es': 'Sistema de gestión de aprendizaje para cursos online con videoconferencias, evaluaciones y certificaciones.',
    'en': 'Learning management system for online courses with video conferencing, assessments, and certifications.'
  },
  'project7-feature1': {
    'es': 'Editor multimedia',
    'en': 'Multimedia editor'
  },
  'project7-feature2': {
    'es': 'Gestión de usuarios y permisos',
    'en': 'User and permission management'
  },
  'project7-feature3': {
    'es': 'Integraciones Api',
    'en': 'API integrations'
  },
  'project7-feature4': {
    'es': 'Programación y publicación automática',
    'en': 'Scheduling and automatic publishing'
  },
  'project7-feature5': {
    'es': 'SEO integrado y análisis de contenido',
    'en': 'Integrated SEO and content analysis'
  },
  'project7-feature6': {
    'es': 'Multilenguaje y localización',
    'en': 'Multilingual support and localization'
  },
  'project7-duration': {
    'es': '1 año y 4 meses',
    'en': '1 year and 4 months'
  },
  'project7-role': {
    'es': 'Desarrollador Full Stack',
    'en': 'Full Stack Developer'
  },
  // Formulario de contacto
  'sending': {
    'es': 'Enviando...',
    'en': 'Sending...'
  },
  'message-sent': {
    'es': '¡Mensaje Enviado!',
    'en': 'Message Sent!'
  },
  'thank-you-message': {
    'es': 'Gracias por contactarme. Te responderé lo antes posible.',
    'en': 'Thank you for contacting me. I will respond as soon as possible.'
  },
  // Botón "Cargar más"
  'loading': {
    'es': 'Cargando...',
    'en': 'Loading...'
  },
  'no-more-projects': {
    'es': 'No hay más proyectos',
    'en': 'No more projects'
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