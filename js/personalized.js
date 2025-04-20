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
    
    
    const getChartOptions = (isDark) => ({
        animation: false,
        tooltip: {
            trigger: 'axis',
            backgroundColor: isDark ? 'rgba(50, 50, 50, 0.9)' : 'rgba(255, 255, 255, 0.9)',
            textStyle: { color: isDark ? '#fff' : '#1f2937' }
        },
        radar: {
            indicator: [
                { name: 'JavaScript', max: 100 },
                { name: 'Vue.js', max: 100 },
                { name: 'Node.js', max: 100 },
                { name: 'Laravel', max: 100 },
                { name: 'Ionic-Vue', max: 100 },
                { name: 'Tailwind CSS', max: 100 },
                { name: 'Bootstrap', max: 100 },
                { name: 'Angular', max: 100 },
                { name: 'Nginx', max: 100 },
                { name: 'PostgreSQL', max: 100 },
                { name: 'MySQL', max: 100 },
                { name: 'PHP', max: 100 },
                { name: 'Databases', max: 100 }
            ],
            radius: '65%',
            splitNumber: 4,
            axisName: { 
                color: isDark ? '#fff' : '#1f2937',
                fontSize: 12  // Reducir tamaño para mejor ajuste
            },
            splitLine: { lineStyle: { color: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)' } },
            splitArea: {
                areaStyle: {
                    color: isDark 
                        ? ['rgba(50, 50, 50, 0.3)', 'rgba(70, 70, 70, 0.3)'] 
                        : ['rgba(250, 250, 250, 0.3)', 'rgba(200, 200, 200, 0.3)']
                }
            }
        },
        series: [{
            name: 'Habilidades',
            type: 'radar',
            data: [{
                value: [90, 85, 85, 80, 85, 95, 90, 80, 75, 85, 83, 85, 85],
                name: 'Nivel de Competencia',
                areaStyle: { color: isDark ? 'rgba(99, 102, 241, 0.2)' : 'rgba(87, 181, 231, 0.1)' },
                lineStyle: { color: isDark ? '#8b5cf6' : 'rgba(87, 181, 231, 1)' },
                itemStyle: { color: isDark ? '#8b5cf6' : 'rgba(87, 181, 231, 1)' }
            }]
        }]
    });

    // Chart initialization
    const isDarkMode = localStorage.getItem('theme') === 'dark' || 
                      (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    if (isDarkMode) document.documentElement.classList.add('dark');
    skillsChart.setOption(getChartOptions(isDarkMode));

    // Theme observer
    new MutationObserver(mutations => {
        mutations.forEach(mutation => {
            if (mutation.attributeName === 'class') {
                skillsChart.setOption(getChartOptions(document.documentElement.classList.contains('dark')));
                skillsChart.resize();
            }
        });
    }).observe(document.documentElement, { attributes: true });
    
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
            titleKey: 'project1-title',
            descriptionKey: 'project1-description',
            technologies: ['Vue.js', 'Node.js', 'MongoDB', 'Express', 'Stripe API'],
            featureKeys: [
                'project1-feature1',
                'project1-feature2',
                'project1-feature3',
                'project1-feature4',
                'project1-feature5',
                'project1-feature6'
            ],
            durationKey: 'project1-duration',
            roleKey: 'project1-role',
            image: './img/e-commerce/6cd6ecac30877cf5afd2bef3b842da9f.jpg'
        },
        project2: {
            titleKey: 'project2-title',
            descriptionKey: 'project2-description',
            technologies: ['Ionic', 'Angular', 'Firebase', 'Chart.js', 'HealthKit API'],
            featureKeys: [
                'project2-feature1',
                'project2-feature2',
                'project2-feature3',
                'project2-feature4',
                'project2-feature5',
                'project2-feature6'
            ],
            durationKey: 'project2-duration',
            roleKey: 'project2-role',
            image: './img/fitness/343c3b87d2d4725fd5f64e385543af6a.jpg'
        },
        project3: {
            titleKey: 'project3-title',
            descriptionKey: 'project3-description',
            technologies: ['Laravel', 'PostgreSQL', 'Redis', 'Docker', 'Swagger'],
            featureKeys: [ 
                'project3-feature1',
                'project3-feature2',
                'project3-feature3',
                'project3-feature4',
                'project3-feature5',
                'project3-feature6'
            ],
            durationKey: 'project3-duration',
            roleKey: 'project3-role',
            image: './img/sistema_de _gestión_de_apis/151d436c4b325d3a82585487bd81ee16.jpg'
        },
        project4: {
            titleKey: 'project4-title',
            descriptionKey: 'project4-description',
            technologies: ['Vue.js', 'TailwindCSS', 'Node.js', 'MongoDB', 'Google Maps API'],
            featureKeys: [ 
                'project4-feature1',
                'project4-feature2',
                'project4-feature3',
                'project4-feature4',
                'project4-feature5',
                'project4-feature6'
            ],
            durationKey: 'project4-duration', 
            roleKey: 'project4-role',
            image: './img/plataforma_inmobiliaria/c7a03a62f65b50a004d701aea68ccd3a.jpg'
        },
        project5: {
            titleKey: 'project5-title', 
            descriptionKey: 'project5-description', 
            technologies: ['Ionic', 'Vue.js', 'Firebase', 'Google Maps API', 'Stripe'],
            featureKeys: [ 
                'project5-feature1',
                'project5-feature2',
                'project5-feature3',
                'project5-feature4',
                'project5-feature5',
                'project5-feature6'
            ],
            durationKey: 'project5-duration', 
            roleKey: 'project5-role', 
            image: './img/entrega_comidas_rapidas/64806e6311878e662d2ff925c833edca.jpg'
        },
        project6: {
            titleKey: 'project6-title', 
            descriptionKey: 'project6-description', 
            technologies: ['Laravel', 'MySQL', 'Bootstrap', 'jQuery', 'AWS S3'],
            featureKeys: [ 
                'project6-feature1',
                'project6-feature2',
                'project6-feature3',
                'project6-feature4',
                'project6-feature5',
                'project6-feature6'
            ],
            durationKey: 'project6-duration', 
            roleKey: 'project6-role', 
            image: './img/sistema_de_gestión_de_contenidos/609a63cc2250e69e1a9067c27c6e27d8.jpg'
        },
        project7: {
            titleKey: 'project7-title', 
            descriptionKey: 'project7-description', 
            technologies: ['Node', 'Vue', 'PostgreSQL', 'AWS S3'],
            featureKeys: [ 
                'project7-feature1',
                'project7-feature2',
                'project7-feature3',
                'project7-feature4',
                'project7-feature5',
                'project7-feature6'
            ],
            durationKey: 'project7-duration', 
            roleKey: 'project7-role', 
            image: './img/plataforma_lms/0d6bf3baf2d4bc9e39a2756dff8341f5.jpg'
        }
    };

    // Función auxiliar para obtener traducciones
    function getTranslation(key, lang = document.documentElement.lang || 'es') {
        const translation = translations[key]?.[lang];
        return translation !== undefined ? translation : `[${key}]`;
    }

    // Función auxiliar para obtener traducciones
    projectDetailsBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const projectId = btn.getAttribute('data-project');
            const project = projectDetails[projectId];
            const currentLang = document.documentElement.lang || 'es';
            
            if (project) {
                modalTitle.textContent = project.title;
                
                const modalHTML = `
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div>
                            <img src="${project.image}" alt="${getTranslation(project.titleKey)}" class="w-full h-auto rounded-lg">
                        </div>
                        
                        <div>
                            <h4 class="text-xl font-bold mb-4">${getTranslation('modal-description')}</h4>
                            <p class="text-gray-700 dark:text-gray-300 mb-6">${getTranslation(project.descriptionKey)}</p>
                            
                            <div class="mb-6">
                                <h4 class="text-xl font-bold mb-4">${getTranslation('modal-technologies')}</h4>
                                <div class="flex flex-wrap gap-2">
                                    ${project.technologies.map(tech => `<span class="px-3 py-1 bg-primary bg-opacity-10 text-primary rounded-full text-sm font-medium">${tech}</span>`).join('')}
                                </div>
                            </div>
                            
                            <div class="mb-6">
                                <h4 class="text-xl font-bold mb-4">${getTranslation('modal-features')}</h4>
                                <ul class="space-y-2">
                                 ${project.featureKeys.map(featureKey => {
                                    const featureText = translations[featureKey][currentLang];
                                    return `<li class="flex items-start">
                                                <i class="ri-check-line text-primary mr-2 mt-1"></i> 
                                                ${featureText}
                                            </li>`;
                                }).join('')}
                                </ul>
                            </div>
                            
                            <div class="grid grid-cols-2 gap-4">
                                <div>
                                    <h5 class="font-medium mb-1">${getTranslation('modal-duration')}</h5>
                                    <p class="text-gray-700 dark:text-gray-300">${getTranslation(project.durationKey)}</p>
                                </div>
                                <div>
                                    <h5 class="font-medium mb-1">${getTranslation('modal-role')}</h5>
                                    <p class="text-gray-700 dark:text-gray-300">${getTranslation(project.roleKey)}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                
                document.getElementById('modal-title').textContent = getTranslation(project.titleKey);
                document.getElementById('modal-content').innerHTML = modalHTML;
                document.getElementById('project-modal').classList.add('visible');
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
        
        submitButton.textContent = getTranslation('sending');
        submitButton.disabled = true;
        
        setTimeout(() => {
            // Mostrar mensaje de éxito con traducciones
            const successTitle = getTranslation('message-sent');
            const successMessage = getTranslation('thank-you-message');

            // Show success message
            contactForm.innerHTML = `
                <div class="text-center py-8">
                    <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="ri-check-line text-green-600 ri-2x"></i>
                    </div>
                    <h4 class="text-xl font-bold mb-2">${successTitle}</h4>
                    <p class="text-gray-700">${successMessage}</p>
                </div>
            `;
        }, 1500);
    });
    
    // Load more projects button
    const loadMoreBtn = document.getElementById('load-more-btn');

    loadMoreBtn.addEventListener('click', () => {
        // Cambiar el texto del botón a "Cargando..." según el idioma actual
        loadMoreBtn.textContent = getTranslation('loading');
        
        setTimeout(() => {
            // Cambiar el texto del botón a "No hay más proyectos" según el idioma actual
            loadMoreBtn.textContent = getTranslation('no-more-projects');
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
        skillsChart.setOption(getChartOptions(document.documentElement.classList.contains('dark')));
    });
    
});