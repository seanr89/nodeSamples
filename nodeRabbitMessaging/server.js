'use strict';

var amqp = require('amqplib/callback_api');

// connect to RabbitMQ server
amqp.connect('amqp://localhost', function(err, conn) {
  conn.createChannel(function(err, ch) {
    let q = 'hello';

    // Declaring a queue is idempotent - it will only be created if it doesn't exist already. 
    // The message content is a byte array, so you can encode whatever you like there.
    ch.assertQueue(q, {durable: false});
    // Note: on Node 6 Buffer.from(msg) should be used
    ch.sendToQueue(q, new Buffer('Hello World!'));
    console.log(' [x] Sent \'Hello World!\'');
    });
    // we close the connection and exit;
    setTimeout(function() { conn.close(); process.exit(0) }, 500);
});
