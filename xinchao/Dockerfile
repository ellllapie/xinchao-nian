FROM node:20-alpine

WORKDIR /app
COPY package.json ./
COPY src ./src
COPY configs ./configs
RUN mkdir -p /app/state && chown -R node:node /app

# Railway volumes are mounted at runtime as root; fix ownership before dropping to node.
ENV NODE_ENV=production
EXPOSE 18110
CMD ["sh", "-c", "chown -R node:node /app/state && exec su-exec node node src/server.js"]
