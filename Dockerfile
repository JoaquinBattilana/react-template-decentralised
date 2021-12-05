FROM node:16.13.1-alpine
WORKDIR /app

COPY package.json ./
COPY yarn.lock ./
RUN yarn install

CMD ["yarn", "start"]