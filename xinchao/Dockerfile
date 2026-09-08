FROM node:20-alpine

WORKDIR /app
COPY package.json ./
COPY src ./src
COPY configs ./configs
RUN mkdir -p /app/state

ENV NODE_ENV=production
EXPOSE 18110
CMD ["sh", "-c", "chown -R node:node /app/state && exec node src/server.js"]
