const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  routes.forEach((route) => {
    server.route(route);
  }
  );
  await server.start();
  console.log(`Server running on ${server.info.uri}`);
};

init();