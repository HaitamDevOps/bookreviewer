FROM node:22.6.0

# Set the working directory inside the container
WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

<<<<<<< HEAD
RUN npm run build

CMD npm run start
=======
CMD ["npm", "run", "dev"]
>>>>>>> 12971cd636769c866bdeaeb63b1051245616a5af
