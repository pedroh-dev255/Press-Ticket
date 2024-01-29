#!/bin/bash

echo "PM2"

sleep 2
cd ..
sudo chown -R press:press Press-Ticket Press-Ticket/*

cd Press-Ticket

cd backend

pm2 start dist/server.js --name whaticket-backend

cd ../frontend

pm2 start server.js --name whaticket-frontend

pm2 save

pm2 startup ubuntu -u `press`