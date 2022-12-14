'use strict';

require('dotenv').config();

const FastBootAppServer = require('fastboot-app-server');
const config = require('./config/environment')(process.env.NODE_ENV);

let server = new FastBootAppServer({
  distPath: 'dist',
  ...config,
});

server.start();
