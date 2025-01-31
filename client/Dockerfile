FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm install --omit=dev

COPY . .

# RUN npm run build

EXPOSE 3000

CMD [ "npm", "run", "start" ]





# docker build .
# docker images
# ladariha should be yourdockerhubusername
# docker build . -t ladariha/frontend
# docker run -d -p80:3000 ladariha/frontend
# docker ps
# docker logs eloquent_bohr
# docker stop confident_ride


# docker tag yourdockerhubusername/frontend yourdockerhubusername/frontend:v1
# docker login
# docker push yourdockerhubusername/frontend:v1
