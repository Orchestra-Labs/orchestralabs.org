# Use the official Node.js 20 image.
FROM node:20.9.0
WORKDIR /usr/src/app

COPY package.json .

RUN yarn install

COPY . .

RUN yarn build

EXPOSE 4173

CMD ["yarn", "start"]
