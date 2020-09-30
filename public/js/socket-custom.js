var socket = io();

// escuchar sucesos
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor');
})

//Enviar información
socket.emit('enviarMensaje', {
    usuario: 'Pablo',
    mensaje: 'Hola Mundo'

}, function(resp) {
    console.log('Respuesta server: ', resp);
});

//Escuchar evento
socket.on('enviarMensaje', function(mensaje) {
        console.log('Info del servidor: ', mensaje);
    }

);