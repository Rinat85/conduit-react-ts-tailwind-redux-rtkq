import cors from 'cors';
import * as jsonServer from 'json-server';

const server = jsonServer.create();
const router = jsonServer.router('./db.json');
const middlewares = jsonServer.defaults();

server.use(
  cors({
    origin: true,
    credentials: true,
    preflightContinue: false,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  })
);
server.options('*', cors());

server.use(middlewares);
server.use(router);
server.listen(3001, () => {
  console.log('JSON Server is running');
});
