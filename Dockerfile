FROM node:10
COPY ./ /workshop
VOLUME /workshop
EXPOSE 3000
WORKDIR /workshop
CMD yarn && yarn start
