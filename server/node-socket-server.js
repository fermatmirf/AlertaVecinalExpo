var express = require('express');
var app = express();
var server = require('http').Server(app);


var io = require('socket.io')(server);
var alertas = [{
    nombre: "Jose",
    latitud: "23.302",
    longitud: "04.032"
},{
    nombre: "Juanito",
    latitud: "17.302",
    longitud: "31.032"
},{
    nombre: "Pedrito",
    latitud: "13.302",
    longitud: "22.032"
}];

io.on('connection', function(socket) {
    console.log('Alguien se ha conectado con Sockets');
    socket.emit('alertas', alertas);
    console.log(alertas);

    socket.on('new-alerta', function(data) {
      alertas.push(data);
        
      io.sockets.emit('alertas', alertas);
    });
  });
  server.listen(8080, function() {
	console.log('Servidor corriendo en http://localhost:8080');
});