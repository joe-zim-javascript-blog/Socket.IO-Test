var io = require('socket.io').listen(8080);

io.sockets.on('connection', function(socket) {

	socket.on('get_server_list', function(){
		socket.emit('server_list', {});
	});

	socket.on('get_status', function(){
		socket.emit('status', {});
	});

	socket.on('start_server', function(name) {
		socket.emit('fail', 'start_server');
	});

	socket.on('command', function(cmd) {
		io.sockets.emit('console', "Player Command: " + cmd);
	});
});