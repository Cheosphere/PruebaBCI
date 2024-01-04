const navBar = document.getElementById('navbar')
const menuMobile = document.getElementById('menu_mobile')

// Función para menú mobile
menuMobile.addEventListener('click', () => {
    menuMobile.classList.toggle('close_menu')
    navBar.classList.toggle('show_menu')
})

// Ajustes de Carrusel Swiper
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

// Función para cambiar la clase activa en el menú desktop
function cambiarClase(elementoClickeado) {

    let enlaces = document.querySelectorAll('.nav-menu-item-link')

    // Remover la clase activa de todos los enlaces
    enlaces.forEach(function (enlace) {
        enlace.classList.remove('nav-menu-item-active')
    })

    // Agregar la clase activa al enlace clickeado
    elementoClickeado.classList.add('nav-menu-item-active')
}