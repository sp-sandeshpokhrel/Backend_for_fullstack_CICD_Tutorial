# Install dependencies only when needed
FROM node:18-alpine3.17 AS build
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn install
COPY . .
RUN yarn prisma generate
RUN yarn build

FROM node:18-alpine3.17 AS prod
WORKDIR /usr/src/app
COPY --from=build /usr/src/app/node_modules ./node_modules
COPY --from=build /usr/src/app/dist ./dist
CMD ["node", "dist/main.js"]


