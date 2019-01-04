'use strict';

const amqp = require('amqplib/callback_api');

// connect to RabbitMQ server
amqp.connect('amqp://localhost', (err, conn) => {
  conn.createChannel((chanErr, ch) => {
    let q = 'hello';

    ch.assertQueue(q, {durable: false});
    // Note: on Node 6 Buffer.from(msg) should be used
    ch.sendToQueue(q, new Buffer('Hello World!'));
    console.log(' [x] Sent \'Hello World!\'');
    });
});
