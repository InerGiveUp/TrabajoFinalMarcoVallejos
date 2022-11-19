$(function () {
    $('.click-aqui').click(function () {
        var img = $('<img />',
            {
                id: 'formaPago',
                src: 'img/yape.jpg',
                alt: 'Pago en Yape',
                width: '300',
                transition: '5s'
            })
            .appendTo($('#formaPago'));

        $("#pagoYape").removeAttr("disabled");
    })
})
$("#habilitarr").on("click", function () {
    $("#procesar-compra").removeAttr("disabled");
});

$('#pagoYape').click(function () {
    event.preventDefault();
    setTimeout(() => {
        Swal.fire({
            icon: 'success',
            title: 'Pago Realizado',
            text: 'Enviar captura de pantalla al correo mechita@gmail.com',
            timer: 4000,
            showConfirmButton: false
        })
        setTimeout(() => {
            let informacion = $(`
            <div>
                <p class='text-center fw-bolder'>CONSIDERACIONES</p>
                <p id='justificado' class='lh-base'>Para que el pago sea procesado correctamente primero tiene que cumpplir con los siguientes puntos: </p>
                <p id='justificado' class='lh-base'><b>Enviar captura de pantalla al correo:</b> mechita@gmail.</p>
                <p id='justificado' class='lh-base'><b>Asunto del Correo:</b> DNI + Nombre completo + Fecha de compra.</p>
                <p id='justificado' class='lh-base'><b>Enviar captura de pantalla al siguiente numero de WhatsApp:</b> <a id='justificado' class='text-decoration-none' href='https://api.whatsapp.com/send?phone=51997857951' target='_blank'>+51 997 857 951</a></p><br>
                <p id='justificado' class='lh-base'>Una vez hayamos validado toda la informacion enviada, le responderemos via correo electronico en un plazo no mayor a 72 horas.</p>
            </div>
            `).appendTo($('#informacionAdicional'));
            $("#procesar-compra").removeAttr("disabled");
        }, 3000);
    }, 1000);
});

$('#pagoTransferencia').click(function () {
    event.preventDefault();
    setTimeout(() => {
        Swal.fire({
            icon: 'success',
            title: 'Pago Realizado',
            text: 'Enviar captura de pantalla al correo mechita@gmail.com',
            timer: 4000,
            showConfirmButton: false
        })
        setTimeout(() => {
            let informacion2 = $(`
            <div class='p-4'>
                <p class='text-center fw-bolder'>CONSIDERACIONES</p>
                <p id='justificado' class='lh-base'>Para que el pago sea procesado correctamente primero tiene que cumpplir con los siguientes puntos: </p>
                <p id='justificado' class='lh-base'><b>Enviar captura de pantalla al correo:</b> mechita@gmail.</p>
                <p id='justificado' class='lh-base'><b>Asunto del Correo:</b> DNI + Nombre completo + Fecha de compra.</p>
                <p id='justificado' class='lh-base'><b>Enviar captura de pantalla al siguiente numero de WhatsApp:</b> <a id='justificado' class='text-decoration-none' href='https://api.whatsapp.com/send?phone=51997857951' target='_blank'>+51 997 857 951</a></p><br>
                <p id='justificado' class='lh-base'>Una vez hayamos validado toda la informacion enviada, le responderemos via correo electronico en un plazo no mayor a 72 horas.</p>
            </div>
            `).appendTo($('#informacionAdicional2'));
            $("#procesar-compra").removeAttr("disabled");
        }, 3000);
    }, 1000);
});
