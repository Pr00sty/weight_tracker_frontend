'use strict';

const express = require('express');
const fetch = require('node-fetch');
const Chart = require('chart.js');

const redirectToHTTPS = require('express-http-to-https').redirectToHTTPS;

const BASE_URL = `localhost:8001`;


function startServer() {
  const app = express();

  // Redirect HTTP to HTTPS,
  app.use(redirectToHTTPS([/localhost:(\d{4})/], [], 301));

  // Logging for each request
  app.use((req, resp, next) => {
    const now = new Date();
    const time = `${now.toLocaleDateString()} - ${now.toLocaleTimeString()}`;
    const path = `"${req.method} ${req.path}"`;
    const m = `${req.ip} - ${time} - ${path}`;
    console.log(m);
    next();
  });

  // Handle requests for static files
  app.use(express.static('public'));

  return app.listen('8000', () => {
  console.log('Local DevServer Started on port 8000...');
  });
}

startServer();
