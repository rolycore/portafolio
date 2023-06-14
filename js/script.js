document.addEventListener('DOMContentLoaded', function() {
  // Función para resaltar el elemento de navegación activo
  const navLinks = document.querySelectorAll('nav a');

  navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      navLinks.forEach(function(link) {
        link.classList.remove('active');
      });

      this.classList.add('active');
    });
  });

  // Función para mostrar/ocultar el menú de navegación en dispositivos móviles
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');

  navToggle.addEventListener('click', function() {
    navMenu.classList.toggle('active');
  });

  // Función para cerrar el menú de navegación al hacer clic en un enlace en dispositivos móviles
  const navMenuLinks = document.querySelectorAll('.nav-menu a');

  navMenuLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      navMenu.classList.remove('active');
    });
  });

  // Función para ocultar el menú de navegación al cambiar el tamaño de la ventana en dispositivos móviles
  window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
      navMenu.classList.remove('active');
    }
  });


});

