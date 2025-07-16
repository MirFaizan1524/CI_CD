
FROM node:18

WORKDIR /app
COPY app.js .
COPY test.js .
COPY package.json .

RUN npm install
EXPOSE 3000
CMD ["node","app.js"]