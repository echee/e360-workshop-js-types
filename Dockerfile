FROM node:10
RUN mkdir /workshop
COPY ./ /workshop
WORKDIR /workshop
EXPOSE 3000/tcp
RUN yarn
CMD yarn start
