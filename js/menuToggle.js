function initThemeAndMenu() {
  // Configuración del menú móvil
  const menuToggle = document.querySelector('[data-menu-toggle]');
  const mobileMenu = document.querySelector('[data-mobile-menu]');
  
  menuToggle?.addEventListener('click', () => {
    mobileMenu?.classList.toggle('hidden');
  });

  // Configuración del tema
  const themeToggles = document.querySelectorAll('[data-theme-toggle]');
  
  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', 
      document.documentElement.classList.contains('dark') ? 'dark' : 'light'
    );
  };

  themeToggles.forEach(toggle => {
    toggle.addEventListener('click', toggleTheme);
  });

  // Configuración inicial del tema
  const savedTheme = localStorage.getItem('theme');
  const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if ((savedTheme === 'dark') || (!savedTheme && systemDark)) {
    document.documentElement.classList.add('dark');
  }
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', initThemeAndMenu);