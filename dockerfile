FROM node:10.16.3
WORKDIR /www/app/opendesk
COPY package.json ./
RUN npm install
COPY . ./
EXPOSE 3000