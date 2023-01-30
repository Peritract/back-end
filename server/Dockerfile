FROM node

WORKDIR /api
COPY . ./
RUN npm install

ENV PORT=5000
EXPOSE 5000

CMD ["npm", "run", "start"]