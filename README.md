Socket.IO Speed Test
====================

Testing the speed of Socket.IO connections

##Getting Started

1. Clone this repository onto your computer using `git clone git://github.com/joe-zim-javascript-blog/Socket.IO-Test.git`
2. Navigate into that repo and type `npm install`
3. Start the Socket.IO server: `node server`
4. In a different console window, Start the file server via Polpetta: `./node_modules/.bin/polpetta`
5. Navigate your browser to `http://localhost:1337` and open your browser's console.

The script in the `index.html` file will loop through several transports provided by Socket.IO and will try to 
connect to and then immediately disconnect from the Socket.IO server using each of those transports. The results are
recorded in the console, showing the times for each individual transport and the total for all transports combined.

This test was used to figure out some speed issues with Chrome and Socket.IO. Read more about it and find out my
results [on my blog](http://www.joezimjs.com/javascript/are-websockets-slow-on-chrome/).