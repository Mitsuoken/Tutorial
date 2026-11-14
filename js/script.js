// Script del Tutorial de Desarrollo Móvil

document.addEventListener("DOMContentLoaded", function () {
  // Menú para celular
  var botonMenu = document.getElementById("btn-menu");
  var listaMenu = document.getElementById("menu");

  if (botonMenu && listaMenu) {
    botonMenu.addEventListener("click", function () {
      listaMenu.classList.toggle("abierto");
    });
  }

  // Marcar el enlace de la página actual
  var paginaActual = window.location.pathname.split("/").pop() || "index.html";
  var enlaces = document.querySelectorAll("nav a");
  enlaces.forEach(function (enlace) {
    if (enlace.getAttribute("href") === paginaActual) {
      enlace.classList.add("activo");
    }
  });

  // Botón para volver arriba
  var botonSubir = document.getElementById("btn-subir");
  if (botonSubir) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 300) {
        botonSubir.style.display = "block";
      } else {
        botonSubir.style.display = "none";
      }
    });

    botonSubir.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Año en el pie de página
  var anio = document.getElementById("anio");
  if (anio) {
    anio.textContent = new Date().getFullYear();
  }
});
