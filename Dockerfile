FROM node:latest
RUN mkdir -p /src/app
WORKDIR /src/app
COPY . /src/app
RUN npm install -p && npm run build
EXPOSE 3030
CMD ["npm", "start"]
