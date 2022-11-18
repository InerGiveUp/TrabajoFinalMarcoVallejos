class Carrito {
    //* Anadir el producto al carrito
    comprarProducto(e) {
        e.preventDefault();
        const mensajeAgregado = document.querySelector('.mensaje-agregado');
        if (e.target.classList.contains('agregar-carrito')) {
            const producto = e.target.parentElement.parentElement;
            this.leerDatosProducto(producto);
            console.log(producto);
            setTimeout(() => {
                mensajeAgregado.innerHTML = `
                <div class="espacio50px"></div>
                <div class="alert alert-primary" role="alert">
                    Producto agregado correctamente
                </div>
                `;
                setTimeout(() => {
                    mensajeAgregado.innerHTML = ` `
                }, 3000);
            }, 500);
        }
    }

    leerDatosProducto(producto) {
        const infoProducto = {
            // imagen : producto.querySelector('img').src;
            titulo: producto.querySelector('.titulo-producto').textContent,
            precio: producto.querySelector('.precio span').textContent,
            id: producto.querySelector('a').getAttribute('data-id'),
            cantidad: producto.querySelector('#cantidadtxt').value
            // cantidad: 1
        }
        let productosLS;
        productosLS = this.obtenerProductosLocalStorage();
        productosLS.forEach(function (productoLS) {
            if (productoLS.id === infoProducto.id) {
                productosLS = productoLS.id;
            }
        });
        if (productosLS === infoProducto.id) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'EL producto ya esta agregado!',
                timer: 1500,
                showConfirmButton: false
            })
        } else {
            this.insertarCarrito(infoProducto);
        }
    }
    insertarCarrito(producto) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${producto.titulo}</td>
            <td>${producto.precio}</td>
            <td>${producto.cantidad}</td>
            <td>
                <a href="#" class="borrar-producto bi bi-x-circle-fill" data-id="${producto.id}"></a>
            </td>
        `;
        listaProductos.appendChild(row);
        this.guardarProductosLocalStorage(producto);
    }
    eliminarProducto(e) {
        e.preventDefault();
        let producto, productoID;
        if (e.target.classList.contains('borrar-producto')) {
            e.target.parentElement.parentElement.remove();
            producto = e.target.parentElement.parentElement;
            productoID = producto.querySelector('a').getAttribute('data-id');
        }
        this.eliminarProductoLocalStorage(productoID);
        this.calcularTotal();
    }
    vaciarCarrito(e) {
        e.preventDefault();
        while (listaProductos.firstChild) {
            listaProductos.removeChild(listaProductos.firstChild);
        }
        this.vaciarLocalStorage();
        return false
    }
    guardarProductosLocalStorage(producto) {
        let productos;
        productos = this.obtenerProductosLocalStorage();
        productos.push(producto);
        localStorage.setItem('productos', JSON.stringify(productos));
    }
    obtenerProductosLocalStorage() {
        let productoLS;
        if (localStorage.getItem('productos') === null) {
            productoLS = [];
        } else {
            productoLS = JSON.parse(localStorage.getItem('productos'));
        }
        return productoLS;
    }
    eliminarProductoLocalStorage(productoID) {
        let productosLS;
        productosLS = this.obtenerProductosLocalStorage();
        productosLS.forEach(function (productoLS, index) {
            if (productoLS.id === productoID) {
                productosLS.splice(index, 1);
            }
        });
        localStorage.setItem('productos', JSON.stringify(productosLS));
    }
    leerLocalStorage() {
        let productosLS;
        productosLS = this.obtenerProductosLocalStorage();
        productosLS.forEach(function (producto) {
            const row = document.createElement('tr');
            row.innerHTML = `
            <td>${producto.titulo}</td>
            <td>${producto.precio}</td>
            <td>
                <a href="#" class="borrar-producto bi bi-x-circle-fill" data-id="${producto.id}"></a>
            </td>
            `;
            listaProductos.appendChild(row);
        });
    }
    leerLocalStorageCompra() {
        let productosLS;
        productosLS = this.obtenerProductosLocalStorage();
        productosLS.forEach(function (producto) {
            const row = document.createElement('tr');
            row.innerHTML = `
            <td>${producto.titulo}</td>
            <td class="text-center">S/. ${producto.precio}</td>
            <td class="text-center">${producto.cantidad}</td>
            <td class="text-center">S/. ${producto.precio * producto.cantidad}</td>
            <td class="text-center">
                <a href="#" class="borrar-producto bi bi-x-circle-fill" style="font-size:30px" data-id="${producto.id}"></a>
            </td>
            `;
            listaCompra.appendChild(row);
        });
    }
    vaciarLocalStorage() {
        localStorage.clear();
    }
    procesarPedidoBtn(e) {
        e.preventDefault();
        if (this.obtenerProductosLocalStorage().length === 0) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Carrito esta vacio, agregar algun producto!',
                timer: 2000,
                showConfirmButton: false
            })
        } else {
            location.href = 'compra.html';
        }
    }
    calcularTotal() {
        let productoLS;
        let total = 0, subtotal = 0, igv = 0;
        productoLS = this.obtenerProductosLocalStorage();
        for (let i = 0; i < productoLS.length; i++) {
            let element = Number(productoLS[i].precio * productoLS[i].cantidad);
            total = total + element;
        }
        igv = parseFloat(total * 0.18).toFixed(2);
        subtotal = parseFloat(total - igv).toFixed(2);
        document.getElementById('subtotal').innerHTML = 'S/. ' + subtotal;
        document.getElementById('igv').innerHTML = 'S/. ' + igv;
        document.getElementById('total').innerHTML = 'S/. ' + total;
    }
}