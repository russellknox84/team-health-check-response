FROM quay.io/ukhomeofficedigital/nodejs-base:v6.9.1

RUN npm install webpack -g

WORKDIR /app

COPY . /app

RUN npm install
RUN npm rebuild node-sass
RUN npm run build

EXPOSE 3000

CMD ["node", "app.js"]