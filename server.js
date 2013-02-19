var io = require('socket.io').listen(8080);

io.sockets.on('connection', function(socket) {

	socket.on('1', function(){
		socket.emit('2', 1);
	});

	socket.on('3', function(){
		socket.emit('4', '1');
	});

	socket.on('5', function() {
		socket.emit('6', {one:1});
	});

	socket.on('7', function() {
		socket.emit('8', {one:1, two:'2'});
	});
});