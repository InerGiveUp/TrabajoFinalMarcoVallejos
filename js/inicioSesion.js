function iniciarSesion() {
    const Empleado = '{"empleado":[' +
        '{"id":1, "nombre":"Marco","apellidos":"Vallejos", "correo":"marko1-6@hotmail.com", "contrasena":"123456"},' +
        '{"id":2, "nombre":"Italo","apellidos":"Yaranga", "correo":"italo1-7@hotmail.com", "contrasena":"1234567"},' +
        '{"id":3, "nombre":"Remi","apellidos":"Vallejos", "correo":"remi1-5@hotmail.com", "contrasena":"12345"}]}';
    correo = document.querySelector('#correoElectronico').value;
    pass = document.querySelector('#contrasena').value;
    // console.log(correo);
    // console.log(pass);

    const obj = JSON.parse(Empleado);
    // const obj = JSON.parse(datos);

    for(let i = 0; i< 3; i++) {
        if(correo === obj.empleado[i].correo && pass === obj.empleado[i].contrasena) {
            console.log('ambos correos y contrasenas son iguales');
            nombreEmpleado = obj.empleado[i].nombre;
            apellidoEmpleado = obj.empleado[i].apellidos;
            nombreCompleto = nombreEmpleado + ' ' + apellidoEmpleado;
            console.log(`bienvenido: ${nombreEmpleado} ${apellidoEmpleado}`);
            console.log(nombreCompleto);

            setTimeout(() => {
                Swal.fire({
                    icon: 'success',
                    title: 'Bienvenido ' + nombreCompleto,
                    text: 'Que tengas una grandioso dia',
                    timer: 3000,
                    showConfirmButton: false
                })
                setTimeout(() => {
                    window.location = "administrador.html";
                }, 3000);
            }, 1000);

            break
        }
        // } else if(correo === obj.empleado[i].correo && pass != obj.empleado[i].contrasena) {
        //     console.log('contrasenas diferentes')
        //     break
        // } else if(correo != obj.empleado[i].correo && pass === obj.empleado[i].contrasena) {
        //     console.log('correos diferentes')
        //     break
        // } 
        else  {
            Swal.fire({
                icon: 'error',
                title: 'Datos incorrectos',
                text: 'Vuelve a Ingresar',
                timer: 3000,
                showConfirmButton: false
            })
            console.log('correos y contrasenas diferentes')
            continue

        }
        // break
        // if(correo != obj.empleado[i].correo && pass != obj.empleado[i].contrasena)
    }
    return nombreCompleto;
}

$('#cerrarSesion').click(function () {
    setTimeout(() => {
        Swal.fire({
            icon: 'info',
            title: ' Esperamos verte de nuevo!',
            text: 'Hasta la proxima',
            timer: 3000,
            showConfirmButton: false
        })
        setTimeout(() => {
            window.location = "index.html";
        }, 3000);
    }, 1000);
});