FROM node:16

WORKDIR /csv-table-app

COPY package*.json ./

RUN npm install

COPY . .


EXPOSE 3000 

CMD ["npm", "run", "dev"] 