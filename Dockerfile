FROM node:lts-alpine as build-stage

#set working directory
RUN mkdir usr/app

# Copy all files from current directory to docker image
COPY . usr/app

WORKDIR /usr/app

#install all cache app dependencies
RUN npm install
RUN npm install react-scripts -g --silent
# add 'usr/src/app/node_modules/.bin' to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

RUN npm run build

# Stage 2
#Copy the react app build above in nginx
FROM nginx:alpine

# Set WORKDIR to nginx asses directory
WORKDIR /usr/share/nginx/html

# Remove default nginx static assets
RUN rm -rf ./*
RUN mkdir -p /usr/share/nginx/html/todo-app
    # RUN mkdir -p /etc/nginx/ssl_certs



# Copy static assets from builder stage
COPY --from=build-stage /usr/app/build /usr/share/nginx/html/todo-app
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
    # COPY ./config/ssl/* /etc/nginx/ssl_certs/

# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx","-g","daemon off;"]
