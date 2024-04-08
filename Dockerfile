FROM node:20.9.0
WORKDIR /usr/src/app

COPY . .

ENV PORT=4173
EXPOSE 4173

RUN yarn install
RUN yarn build

CMD ["yarn", "start"]
