FROM node:10
RUN mkdir /workshop
ADD ./ /workshop
WORKDIR /workshop
EXPOSE 3000/tcp
RUN yarn
CMD yarn start
