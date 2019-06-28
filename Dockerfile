FROM node:12.4-alpine as base

ENV PORT 8000

WORKDIR /opt/app
ADD package.* ./

RUN npm install

ADD . ./

EXPOSE $PORT
ENTRYPOINT ["npm"]
CMD ["start"]