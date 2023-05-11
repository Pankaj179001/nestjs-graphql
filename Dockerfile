FROM node:18
# Create app directory
WORKDIR /usr/src/app
#install app dependencies
COPY package*.json ./
RUN npm install
# If building your code for production
# RUN npm ci --omit=dev
# Bundle app source
COPY . .

RUN  npm run build

EXPOSE 8080
CMD [ "node", "dist/main" ]
#run docker image with
#docker run -p 8080:3004 pankaj/nestjs/graphql
