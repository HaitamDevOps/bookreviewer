# build stage
FROM node:18-alpine as build

WORKDIR /app

COPY package*.json .
RUN npm install
# RUN npm install -g serve
COPY . .
# ENV REACT_APP_API_URL $REACT_APP_API_URL
# EXPOSE 80
RUN npm run build
# CMD [ "serve", "-l", "3030", "-s", "dist" ]

# deploy stage
FROM nginx:alpine
WORKDIR /usr/share/nginx/html
COPY --from=build /app/dist .
# Expose the port the app runs on
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]