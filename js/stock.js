const stock = '{"stock":[' +
    '{"id":1, "nombre":"Torta - Bodas","precioCompra":200.00, "stock":22,"inversion":4400.00},' +
    '{"id":2, "nombre":"Torta - Promociones","precioCompra":226.00, "stock":44,"inversion":9944.00},' +
    '{"id":3, "nombre":"Torta - Bautizo","precioCompra":345.00, "stock":17,"inversion":5865.00},' +
    '{"id":4, "nombre":"Torta - Cumpleaños","precioCompra":299.00, "stock":24,"inversion":7176.00},' +
    '{"id":5, "nombre":"Torta - Primera Coomunion","precioCompra":177.00, "stock":33,"inversion":5841.00},' +
    '{"id":6, "nombre":"Torta - Baby Shower","precioCompra":199.00, "stock":12,"inversion":2388.00}]}';
const obj = JSON.parse(stock);

function consultar() {
    let imprimir = document.querySelector('#output2');
    let out = '';
    for (i = 0; i < 6; i++) {
        out += `
            <tr>
                <td>${obj.stock[i].id}</td>
                <td>${obj.stock[i].nombre}</td>
                <td>S/ ${obj.stock[i].precioCompra}</td>
                <td>${obj.stock[i].stock}</td>
                <td>S/ ${obj.stock[i].inversion}</td>
            </tr>
    `;
    }
    imprimir.innerHTML = out;
}

function deberiaComprar() {
    // let i;
    let stockProducto = obj.stock;
    const cajaRpta = document.getElementById('productosComprar');


    // let imprimir = document.querySelector('#output2');
    // let out = '';
    const productos = stockProducto.filter(producto => producto.stock <= 20)
    cajaRpta.innerHTML = productos.map((producto) => (
        `

                <tr>
                    <td>${producto.id}</td>
                    <td>${producto.nombre}</td>
                    <td>${producto.precioCompra}</td>
                    <td>${producto.stock}</td>
                    <td>${producto.inversion}</td>
                </tr>


        `
    )).join('')

    // console.log('stock', productos);
    // for (i = 0; i < 4; i++) {
    //     console.log(productos[2]);
    // console.log(stockProducto)
    // if(productos === obj.stock[i].stock) {
    //     console.log(obj.stock[i].stock)
    // } else {
    //     console.log('no cumple')
    // }
    // console.log(stockProd.productos[i].stock)
    // }
    //     out += `
    //         <tr>
    //             <td>${obj.stock[i].id}</td>
    //             <td>${obj.stock[i].nombre}</td>
    //             <td>${obj.stock[i].precioCompra}</td>
    //             <td>${obj.stock[i].stock}</td>
    //             <td>${obj.stock[i].inversion}</td>
    //         </tr>
    // `;
    // imprimir.innerHTML = out;
};