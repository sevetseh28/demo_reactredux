FROM node:8.11.3

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install -qy

COPY . .

EXPOSE 8080

CMD ["npm", "start"]