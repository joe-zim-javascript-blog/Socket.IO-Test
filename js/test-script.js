var output = $('#output');

$('#connect-test').on('click', function () {
	output.empty();
	runConnectionTest();
});

$('#message-test').on('click', function () {
	output.empty();
	runMessageTest();
});

function runConnectionTest() {
	var start, midpoint, end, socket;

	start = new Date();
	socket = io.connect(":80", {
		'force new connection': true,
		'auto connect': false
	});

	socket.on('connect', function () {
		midpoint = new Date();
		output.append("Connected after " + (midpoint - start) + "ms\n" );
		socket.disconnect();
	});

	socket.on('disconnect', function () {
		end = new Date();
		output.append("Disconnected after " + (end - midpoint) + "ms\n" );
		output.append("Total Time: "+ (end - start) +"ms\n");
	});

	socket.connect();

}

function runMessageTest() {
	var start, end, socket;

	socket = io.connect(":80", {
		'force new connection': true,
		'auto connect': false
	});

	socket.on('connect', function () {
		start = new Date();
		socket.emit('1', 1);
	});

	socket.on('2', function () {
		socket.emit('3', "1");
	});

	socket.on('4', function () {
		socket.emit('5', {one:1});
	});

	socket.on('6', function () {
		socket.emit('7', {one:1, two:'2'});
	});

	socket.on('8', function () {
		end = new Date();
		socket.disconnect();
	});

	socket.on('disconnect', function () {
		var time = end - start;
		output.append("Time For 8 Messages: "+ time +"ms\n");
	});

	socket.connect();
}