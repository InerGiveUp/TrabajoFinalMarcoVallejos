//! evento para mantener la barra de navegacion siempre arriba
window.addEventListener('scroll', function () {
    let header = document.querySelector('header');
    header.classList.toggle('abajo', window.scrollY > 0);
});

//! CARRITO DE COMPRA
const openModal = document.querySelector('#carritoCompra');
const modal = document.querySelector('.modals');
const closeModal = document.querySelector('#cerrarCarrito')

openModal.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.add('modals--show')
});
closeModal.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.remove('modals--show')
});