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

apt-get install curl -y

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

sudo rm -rf node_modules
npm install
rm -rf build
npm run build

echo " "
echo "RESTART PM2"
echo " "

sleep 2

pm2 restart all

echo " "
echo "PRESS TICKET ATUALIZADO COM SUCESSO!!!"
echo " "
