Socket.IO Speed Test
====================

Testing the speed of Socket.IO connections

##Getting Started

1. Clone this repository onto your computer using `git clone git://github.com/joe-zim-javascript-blog/Socket.IO-Test.git`
2. Navigate into that repo and type `npm start` (Will auto-install dependencies before running)
5. Navigate your browser to `http://localhost`.

On this page is two buttons and a `textarea` where the output is placed. The "Test Connection Speeds" button will
loop through several transports provided by Socket.IO and will try to connect to and then immediately disconnect
from the Socket.IO server using each of those transports. The results are recorded in the `textarea`, showing the
times for each individual transport and the total for all transports combined.

The "Test Messaging Speeds" button will emit several messages to the server and receive several messages from the
server in response. The total time for all of the messages to be sent and received are recorded in the `textarea`.

The connection speed test was used to figure out some speed issues with Chrome and Socket.IO. Read more about it and
find out my results [on my blog](http://www.joezimjs.com/javascript/are-websockets-slow-on-chrome/). The other test
was added later for curiosity's sake and may have a post relating the results found from there too.
