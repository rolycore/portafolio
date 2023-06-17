document.addEventListener('DOMContentLoaded',function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
});
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
  const navToggle = document.querySelector('#myTopnav');
  const navMenu = document.querySelector('.menu');

  navToggle.addEventListener('click', function() {
    navMenu.classList.toggle('active');
  });

  // Función para cerrar el menú de navegación al hacer clic en un enlace en dispositivos móviles
  const navMenuLinks = document.querySelectorAll('.menu a');

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

