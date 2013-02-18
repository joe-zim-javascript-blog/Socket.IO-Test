var options = ['websocket', 'flashsocket', 'xhr-polling', 'jsonp-polling'];
var output = $('#output');
var total;

$('#connect-test').on('click', function(){
	total = 0;
	output.empty();
	runConnectionTest(options.length-1);
});

$('#message-test').on('click', function(){
	output.empty();
	runMessageTest();
});

function runConnectionTest(count) {
	var deferred = new $.Deferred();
	var promise = deferred.promise();
	var transport = options[count];
	var start, end, socket;

	$.when(promise).then(function(){
		if ( count > 0 ) {
			runConnectionTest(count - 1);
		}
		else {
			output.append('FINISHED WITH TOTAL TIME: ' + total + 'ms\n');
		}
	});

	start = new Date();
	socket = io.connect(":8080", {
		'force new connection': true,
		'auto connect': false,
		'transports': [transport]/**/
	});

	socket.on('connect', function() {
		socket.disconnect();
	});

	socket.on('disconnect', function() {
		end = new Date();
		var time = end - start;
		total += time;

		output.append('Transport: '+ transport +"; Time: "+ time +"ms\n");
		deferred.resolve();
	});

	socket.socket.connect();

}

function runMessageTest() {
	var start, end;
	var socket = io.connect(":8080", {
		'force new connection': true,
		'auto connect': false
	});

	socket.on('connect', function() {
		start = new Date();
		socket.emit('1', 1);
		console.log('connected. sent 1');
	});

	socket.on('2', function() {
		socket.emit('3', "1");
		console.log('received 2. sent 3');
	});

	socket.on('4', function() {
		socket.emit('5', {one:1});
		console.log('received 4. sent 5');
	});

	socket.on('6', function() {
		socket.emit('7', {one:1, two:'2'});
		console.log('received 6. sent 7');
	});

	socket.on('8', function() {
		end = new Date();
		socket.disconnect();
		console.log('received 8. disconnecting');
	});

	socket.on('disconnect', function() {
		console.log('disconnected 4. outputting');
		var time = end - start;
		output.append("Time to finish all messages: "+ time +"ms\n");
	});

	socket.socket.connect();
}