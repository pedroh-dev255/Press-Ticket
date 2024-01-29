#!/bin/bash
echo ""
echo "██████╗ ██████╗ ███████╗███████╗███████╗    ████████╗██╗ ██████╗██╗  ██╗███████╗████████╗"
echo "██╔══██╗██╔══██╗██╔════╝██╔════╝██╔════╝    ╚══██╔══╝██║██╔════╝██║ ██╔╝██╔════╝╚══██╔══╝"
echo "██████╔╝██████╔╝█████╗  ███████╗███████╗       ██║   ██║██║     █████╔╝ █████╗     ██║   "
echo "██╔═══╝ ██╔══██╗██╔══╝  ╚════██║╚════██║       ██║   ██║██║     ██╔═██╗ ██╔══╝     ██║   "
echo "██║     ██║  ██║███████╗███████║███████║       ██║   ██║╚██████╗██║  ██╗███████╗   ██║   "
echo "╚═╝     ╚═╝  ╚═╝╚══════╝╚══════╝╚══════╝       ╚═╝   ╚═╝ ╚═════╝╚═╝  ╚═╝╚══════╝   ╚═╝   "
echo " "
echo "Atualizando Sistema..."
echo " "
sleep 2
apt-get update

apt-get upgrade -y

echo "Configurar TimeZone..."
echo " "

sleep 2
dpkg-reconfigure tzdata


echo "Instalando dependencias..."
echo " "

sleep 2

apt-get install -y curl libxshmfence-dev libgbm-dev wget unzip fontconfig locales gconf-service libasound2 libatk1.0-0 libc6 libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 ca-certificates fonts-liberation libappindicator1 libnss3 lsb-release xdg-utils
 
curl -s https://deb.nodesource.com/setup_16.x | sudo bash

apt-get install nodejs -y

npm i pm2 -g

echo "ATUALIZANDO PARA A VERSÃO MAIS RECENTE..."
echo " "

sleep 2

echo " "
echo "BAIXANDO AS ATUALIZAÇÕES"
echo " "

sleep 2

git reset --hard
git pull

echo " "
echo "ACESSANDO O BACKEND"
echo " "

sleep 2

cd backend

echo " "
echo "ATUALIZANDO OS ARQUIVOS DO BACKEND"
echo " "

sleep 2

sudo rm -rf node_modules
npm install
sudo rm -rf dist

cp .env.example .env

nano .env

npm run build

echo " "
echo "EXECUTANDO O DB:MIGRATE"
echo " "

sleep 2

npx sequelize db:migrate

echo " "
echo "EXECUTANDO O DB:SEED:ALL"
echo " "

sleep 2

npx sequelize db:seed:all

echo " "
echo "ACESSANDO O FRONTEND"
echo " "

sleep 2

cd ../frontend

sleep 2

echo " "
echo "VERIFICANDO O CONFIG.JSON"
echo " "

sleep 2

if [ ! -e src/config.json ]; then
  echo "Criando o arquivo config.json"
  cp src/config.json.example src/config.json
  else
  echo "O arquivo config.json já existe"
fi


sleep 2

echo " "
echo "ATUALIZANDO OS ARQUIVOS DO FRONTEND"
echo " "

sleep 2


npm install
cp .env.example .env
nano .env

rm -rf build
npm run build


echo " "
echo "Criando usuario 'press' "
echo " "

sleep 2


adduser press

usermod -aG sudo press

su - press
