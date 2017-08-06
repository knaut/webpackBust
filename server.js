// BABEL
require('babel-register')({
  presets: ['es2015', 'react']
});

// IMPORT
const Hapi = require('hapi');
const dateFormat = require('dateformat');

// SETUP
const format = "dd mmm HH:MM:ss";
const server = new Hapi.Server();
server.connection({
  host: 'localhost',
  port: 8000
});

// HAPI ENTRANCE
server.register([
  // PLUGINS
  {
    register: require('inert')
  },
  {
    register: require('vision')
  }
], function(err) {
  if (err) {
    return console.error(err);
  }

  // VIEW ENGINE
  server.views({
    engines: {
      jsx: require('hapi-react-views')
    },
    relativeTo: __dirname,
    path: 'src/components'
  });

  // STATIC ASSETS
  server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
      directory: {
        path: 'dist',
        index: ['index.html']
      }
    }
  });

  server.route({
    method: 'GET',
    path: '/css/{param*}',
    handler: {
      directory: {
        path: 'dist',
        index: ['index.html']
      }
    }
  });

  // APP ROUTES
  server.route({
    method: 'GET',
    path: '/',
    handler: function(request, reply) {
      reply.file('./dist/index.html');
    }
  });

  server.start(function() {
    console.log(dateFormat(new Date(), format) + ' - server started: ' + server.info.uri);
  });

});
