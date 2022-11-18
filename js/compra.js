//! COMPRA
const compra = new Carrito();
const listaCompra = document.querySelector('#lista-compra tbody');
const carrito = document.getElementById('carrito');
const procesarCompraBtn = document.getElementById('procesar-compra');
const cliente = document.getElementById('cliente');
const correo = document.getElementById('correo');
const dni = document.getElementById('txtdni');

cargarEventosCompra();
function cargarEventosCompra() {
    document.addEventListener('DOMContentLoaded', compra.leerLocalStorageCompra());
    carrito.addEventListener('click',(e)=>{compra.eliminarProducto(e)});
    compra.calcularTotal();
    procesarCompraBtn.addEventListener('click', procesarCompra);
}

function procesarCompra(e) {
    e.preventDefault();

    if(compra.obtenerProductosLocalStorage().length === 0) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No hay productos, seleciona alguno',
            timer: 2000,
            showConfirmButton: false
        }).then(function(){
            window.location = "pasteles.html";
        })
    } else if (cliente.value === '' || correo === '' || dni === ''){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ingresa todos los campos requeridos',
            timer: 2000,
            showConfirmButton: false
        })
    } else {
        const cargandoGif = document.querySelector('#cargando');
        cargandoGif.style.display = 'block';

        const enviado = document.createElement('img');
        enviado.src = 'img/mail.gif';
        enviado.style.display = 'block';
        setTimeout(() => {
            cargandoGif.style.display = 'none';
            document.querySelector('#loaders').appendChild(enviado);
            Swal.fire({
                icon: 'success',
                title: 'Compra realizada',
                text: 'Seras redirigido a la pagina principal',
                timer: 4000,
                showConfirmButton: false
            })
            setTimeout(() => {
                enviado.remove();
                compra.vaciarLocalStorage();
                window.location = 'index.html';
            }, 4000);
        }, 3000);
    }
}


//! Funciones para validar que se ingresen los campos correctos en cada campo
function sololetras(evt) {
    var code = (evt.which) ? evt.which : evt.keyCode;
    if (code == 32) { //barra espaciadora
        return true;
    } else if (code >= 65 && code <= 90 || code >= 97 && code <= 122) { // son letras de a-z, A-Z
        return true;
    } else { //otra tecla
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Solo se permite ingresar letras!',
        })
        return false;
    }
}

function solonumeros(evt, id, cantidad) {
    xlongitud = document.getElementById(id).value.length;
    var code = (evt.which) ? evt.which : evt.keyCode;
    //const x=5;
    //(x=1) ? alert("corecto"):alert("Incorecto");
    if ((code >= 48 && code <= 57) && xlongitud < cantidad) { // es un número
        return true;
    } else { // otra tecla
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Solo se permite ingresar numeros!',
        })
        return false;
    }
}
function validarEmail() {
    var texto = document.getElementById('correo').value;
    var regex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (texto == 0) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Falta Ingresar el CORREO!',
        })
        return false;
    } else if (!regex.test(texto)) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Direccion de CORREO invalido!',
        })
        return false;
    } else {
        return true;
    }
}