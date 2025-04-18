document.addEventListener('DOMContentLoaded', function() {
    // Initialize loader
    const loader = document.querySelector('.loader');
    setTimeout(() => {
        loader.classList.add('hidden');
    }, 1500);
    
    // Initialize particles
    const particlesContainer = document.getElementById('particles');
    for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.width = Math.random() * 40 + 10 + 'px';
        particle.style.height = particle.style.width;
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 10 + 10 +'s';
        particlesContainer.appendChild(particle);
    }
    
    // Custom cursor
    const cursor = document.querySelector('.custom-cursor');
    document.addEventListener('mousemove', (e) => {
        cursor.style.display = 'block';
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });
    
    document.addEventListener('mouseout', () => {
        cursor.style.display = 'none';
    });
    
    // Scroll to top button
    const scrollTopBtn = document.querySelector('.scroll-top');
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });
    
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Mobile menu toggle
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    
    menuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
    
    // Theme toggle
    const themeToggle = document.getElementById('theme-toggle');
    const mobileThemeToggle = document.getElementById('mobile-theme-toggle');
    
    function toggleDarkMode() {
        document.body.classList.toggle('dark-mode');
    }
    
    themeToggle.addEventListener('change', toggleDarkMode);
    mobileThemeToggle.addEventListener('change', toggleDarkMode);
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                mobileMenu.classList.add('hidden');
            }
        });
    });
    
    // Initialize skill progress bars
    const progressBars = document.querySelectorAll('.progress-bar');
    
    function animateProgressBars() {
        progressBars.forEach(bar => {
            const width = bar.getAttribute('data-width');
            bar.style.width = width;
        });
    }
    
    // Initialize skills chart
    const skillsChart = echarts.init(document.getElementById('skills-chart'));
    
    const skillsOption = {
        animation: false,
        tooltip: {
            trigger: 'axis',
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            textStyle: {
                color: '#1f2937'
            }
        },
        radar: {
            indicator: [
                { name: 'JavaScript', max: 100 },
                { name: 'Vue.js', max: 100 },
                { name: 'Node.js', max: 100 },
                { name: 'Laravel', max: 100 },
                { name: 'Ionic', max: 100 },
                { name: 'Databases', max: 100 }
            ],
            radius: '65%',
            splitNumber: 4,
            axisName: {
                color: '#1f2937'
            }
        },
        series: [{
            name: 'Habilidades',
            type: 'radar',
            data: [
                {
                    value: [90, 85, 85, 80, 85, 85],
                    name: 'Nivel de Competencia',
                    areaStyle: {
                        color: 'rgba(87, 181, 231, 0.1)'
                    },
                    lineStyle: {
                        color: 'rgba(87, 181, 231, 1)'
                    },
                    itemStyle: {
                        color: 'rgba(87, 181, 231, 1)'
                    }
                }
            ]
        }]
    };
    
    skillsChart.setOption(skillsOption);
    
    // Project filters
    const filterButtons = document.querySelectorAll('.filter-button');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            const filter = button.getAttribute('data-filter');
            
            projectCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
    
    // Project modal
    const modal = document.getElementById('project-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalContent = document.getElementById('modal-content');
    const closeModal = document.getElementById('close-modal');
    const projectDetailsBtns = document.querySelectorAll('.project-details-btn');
    
    const projectDetails = {
        project1: {
            title: 'Plataforma E-commerce',
            description: 'Una plataforma de comercio electrónico completa con gestión de productos, carrito de compras, pasarela de pagos y panel de administración.',
            technologies: ['Vue.js', 'Node.js', 'MongoDB', 'Express', 'Stripe API'],
            features: [
                'Catálogo de productos con filtros avanzados',
                'Sistema de búsqueda en tiempo real',
                'Carrito de compras con persistencia',
                'Pasarela de pagos segura',
                'Panel de administración para gestión de productos e inventario',
                'Sistema de reseñas y valoraciones'
            ],
            duration: '8 meses',
            role: 'Desarrollador Full Stack',
            image: './img/e-commerce/6cd6ecac30877cf5afd2bef3b842da9f.jpg'
        },
        project2: {
            title: 'Aplicación de Fitness',
            description: 'Aplicación móvil para seguimiento de entrenamientos, nutrición y progreso físico con planes personalizados y análisis de datos.',
            technologies: ['Ionic', 'Angular', 'Firebase', 'Chart.js', 'HealthKit API'],
            features: [
                'Seguimiento de entrenamientos diarios',
                'Planes de nutrición personalizados',
                'Análisis de progreso con gráficos',
                'Integración con dispositivos wearables',
                'Comunidad y desafíos entre usuarios',
                'Modo offline para entrenar sin conexión'
            ],
            duration: '1 año',
            role: 'Desarrollador Mobile',
            image: './img/fitness/cc11c0ddd0191c3d4384bdb40fc0e112.jpg'
        },
        project3: {
            title: 'Sistema de Gestión de APIs',
            description: 'Plataforma para gestionar, monitorizar y documentar APIs RESTful con análisis de rendimiento y seguridad.',
            technologies: ['Laravel', 'PostgreSQL', 'Redis', 'Docker', 'Swagger'],
            features: [
                'Dashboard de monitorización en tiempo real',
                'Documentación automática de APIs',
                'Sistema de autenticación y autorización',
                'Análisis de rendimiento y cuellos de botella',
                'Gestión de versiones de API',
                'Alertas y notificaciones configurables'
            ],
            duration: '9 meses',
            role: 'Desarrollador Backend',
            image: './img/sistema_de _gestión_de_apis/ba62258b2178cb79889f2b87713df6ef.jpg'
        },
        project4: {
            title: 'Plataforma Inmobiliaria',
            description: 'Portal web para búsqueda, listado y gestión de propiedades inmobiliarias con integración de mapas y filtros avanzados.',
            technologies: ['Vue.js', 'TailwindCSS', 'Node.js', 'MongoDB', 'Google Maps API'],
            features: [
                'Búsqueda avanzada con filtros personalizables',
                'Integración de mapas interactivos',
                'Sistema de favoritos y alertas',
                'Calculadora de hipotecas',
                'Panel para agentes inmobiliarios',
                'Tours virtuales de propiedades'
            ],
            duration: '3 meses',
            role: 'Desarrollador Frontend',
            image: './img/plataforma_inmobiliaria/c7a03a62f65b50a004d701aea68ccd3a.jpg'
        },
        project5: {
            title: 'App de Entrega de Comida',
            description: 'Aplicación móvil para pedidos y entregas de comida a domicilio con seguimiento en tiempo real y sistema de pagos integrado.',
            technologies: ['Ionic', 'Vue.js', 'Firebase', 'Google Maps API', 'Stripe'],
            features: [
                'Catálogo de restaurantes con menús personalizables',
                'Sistema de pedidos y carrito',
                'Seguimiento de entrega en tiempo real',
                'Múltiples métodos de pago',
                'Sistema de reseñas y valoraciones',
                'Programa de fidelización con puntos'
            ],
            duration: '8 meses',
            role: 'Desarrollador Full Stack',
            image: './img/app_de_entrega_de_comida/64806e6311878e662d2ff925c833edca.jpg'
        },
        project6: {
            title: 'Sistema de Gestión de Contenidos',
            description: 'CMS personalizado para la gestión de contenidos digitales con editor visual, gestión de medios y análisis de audiencia.',
            technologies: ['Laravel', 'MySQL', 'Bootstrap', 'jQuery', 'AWS S3'],
            features: [
                'Editor de contenido visual WYSIWYG',
                'Gestión de usuarios y permisos',
                'Biblioteca de medios con optimización automática',
                'Programación y publicación automática',
                'SEO integrado y análisis de contenido',
                'Multilenguaje y localización'
            ],
            duration: '5 meses',
            role: 'Desarrollador Backend',
            image: './img/sistema_de_gestión_de_contenidos/609a63cc2250e69e1a9067c27c6e27d8.jpg'
        },
        project7: {
            title: 'Plataforma LMS',
            description: 'Sistema de gestión de aprendizaje para cursos online con videoconferencias, evaluaciones y certificaciones.',
            technologies: ['Node', 'Vue', 'PosgreSql', 'AWS S3'],
            features: [
                'Editor multimedia',
                'Gestión de usuarios y permisos',
                'Integraciones Api',
                'Programación y publicación automática',
                'SEO integrado y análisis de contenido',
                'Multilenguaje y localización'
            ],
            duration: '1 año y 4 meses',
            role: 'Desarrollador Full Stack',
            image: './img/plataforma_lms/0d6bf3baf2d4bc9e39a2756dff8341f5.jpg'
        }
    };
    
    projectDetailsBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const projectId = btn.getAttribute('data-project');
            const project = projectDetails[projectId];
            
            if (project) {
                modalTitle.textContent = project.title;
                
                let content = `
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div>
                            <img src="${project.image}" alt="${project.title}" class="w-full h-auto rounded-lg">
                        </div>
                        
                        <div>
                            <h4 class="text-xl font-bold mb-4">Descripción</h4>
                            <p class="text-gray-700 mb-6">${project.description}</p>
                            
                            <div class="mb-6">
                                <h4 class="text-xl font-bold mb-4">Tecnologías</h4>
                                <div class="flex flex-wrap gap-2">
                                    ${project.technologies.map(tech => `<span class="px-3 py-1 bg-primary bg-opacity-10 text-primary rounded-full text-sm font-medium">${tech}</span>`).join('')}
                                </div>
                            </div>
                            
                            <div class="mb-6">
                                <h4 class="text-xl font-bold mb-4">Características</h4>
                                <ul class="space-y-2">
                                    ${project.features.map(feature => `<li class="flex items-start"><i class="ri-check-line text-primary mr-2 mt-1"></i> ${feature}</li>`).join('')}
                                </ul>
                            </div>
                            
                            <div class="grid grid-cols-2 gap-4">
                                <div>
                                    <h5 class="font-medium mb-1">Duración</h5>
                                    <p class="text-gray-700">${project.duration}</p>
                                </div>
                                <div>
                                    <h5 class="font-medium mb-1">Rol</h5>
                                    <p class="text-gray-700">${project.role}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                
                modalContent.innerHTML = content;
                modal.classList.add('visible');
                document.body.style.overflow = 'hidden';
            }
        });
    });
    
    closeModal.addEventListener('click', () => {
        modal.classList.remove('visible');
        document.body.style.overflow = 'auto';
    });
    
    // Close modal when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('visible');
            document.body.style.overflow = 'auto';
        }
    });
    
    // Contact form submission
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Simulate form submission
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        
        submitButton.textContent = 'Enviando...';
        submitButton.disabled = true;
        
        setTimeout(() => {
            // Show success message
            contactForm.innerHTML = `
                <div class="text-center py-8">
                    <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="ri-check-line text-green-600 ri-2x"></i>
                    </div>
                    <h4 class="text-xl font-bold mb-2">¡Mensaje Enviado!</h4>
                    <p class="text-gray-700">Gracias por contactarme. Te responderé lo antes posible.</p>
                </div>
            `;
        }, 1500);
    });
    
    // Load more projects button
    const loadMoreBtn = document.getElementById('load-more-btn');
    
    loadMoreBtn.addEventListener('click', () => {
        loadMoreBtn.textContent = 'Cargando...';
        
        setTimeout(() => {
            loadMoreBtn.textContent = 'No hay más proyectos';
            loadMoreBtn.disabled = true;
        }, 1500);
    });
    
    // Fade in elements on scroll
    const fadeElements = document.querySelectorAll('.fade-in');
    
    function checkFade() {
        fadeElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 100) {
                element.classList.add('visible');
            }
        });
        
        // Also animate progress bars when they come into view
        if (document.querySelector('#habilidades').getBoundingClientRect().top < window.innerHeight) {
            animateProgressBars();
        }
    }
    
    // Initial check
    checkFade();
    
    // Check on scroll
    window.addEventListener('scroll', checkFade);
    
    // Resize chart on window resize
    window.addEventListener('resize', () => {
        skillsChart.resize();
    });
});