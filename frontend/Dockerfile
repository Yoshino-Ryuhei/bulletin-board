# node:v20.18.0
# npm:10.9.2
# nest:10.4.9

FROM node:20.18.0

RUN apt update
RUN apt install -y curl git

# RUN npm install -g npm@10.9.2
# RUN npm i -g @nestjs/cli@10.4.9

# COPY frontend/. .

ENV PORT=3000

WORKDIR /frontend
COPY frontend/package*.json ./
RUN npm install
CMD ["npm","run","start"]