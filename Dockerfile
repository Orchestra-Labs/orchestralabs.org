FROM node:20.9.0
WORKDIR /usr/src/app

COPY . .

ENV PORT=4173
EXPOSE 4173

RUN yarn install --verbose
RUN yarn build
RUN yarn start
