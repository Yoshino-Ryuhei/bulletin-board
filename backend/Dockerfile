# node:v20.18.0
# npm:10.9.2
# nest:10.4.9

FROM node:20.18.0

RUN apt update
RUN apt install -y curl git

# RUN npm install -g npm@10.9.2
# RUN npm i -g @nestjs/cli@10.4.9

# COPY backend/. .

ENV PORT=8000

WORKDIR /backend
COPY backend/package*.json ./
COPY backend/.env ./
RUN npm install #--only=development
CMD ["npm","run","start:dev"]