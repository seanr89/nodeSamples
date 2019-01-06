'use strict';
//#!/usr/bin/env node

var amqp = require('amqplib/callback_api');

// we open a connection and a channel, and declare the queue from which we're going to consume
amqp.connect('amqp://localhost', function(err, conn) {
  conn.createChannel(function(err, ch) {
    var q = 'hello';

    // declare the queue here, as well incase we start the consumer before the publisher
    ch.assertQueue(q, {durable: false});

    console.log(' [*] Waiting for messages in %s. To exit press CTRL+C', q);
    // This is a callback to handle asynchronous message events
    ch.consume(q, function(msg) {
      console.log(' [x] Received %s', msg.content.toString());
    }, {noAck: true});
  });
});