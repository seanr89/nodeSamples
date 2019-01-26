#!/bin/bash
set -e 

# Navigate back a directory to app
cd ../

# Initially enable local RabbitMQ Server!! (detached added to ensure other steps run)
sudo rabbitmq-server -detached
# sleep added to ensure the server can call
sleep 3
echo "server sleep"

# Step 1. open the sender application
node server.js
echo "server started"

# Step 2. Delay the receiver app by 5/X Seconds
sleep 5

# Step 3. Now open the receiver app
node receiver.js
echo "receiver started"

sleep 2

# stop the rabbitmq service
sudo rabbitmqctl stop

exit