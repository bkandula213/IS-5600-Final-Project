FROM node:16-alpine AS js
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --production
COPY . ./
ARG REACT_APP_BASE_URL
ENV REACT_APP_BASE_URL=$REACT_APP_BASE_URL
RUN yarn build
FROM nginx
COPY --from=js /app/build /usr/share/nginx/html
