FROM node:10
COPY ./ /workshop
VOLUME /workshop
EXPOSE 3000/tcp
WORKDIR /workshop
RUN yarn
CMD yarn start
