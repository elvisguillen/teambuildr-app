const express = require('express');
const path = require('path');
const http = require('http');

const app = express();

// Point to dist
app.use(express.static(path.join(__dirname, '..', 'dist')));

// Call Routes
const routes = require('./routes');
app.use('/', routes);

const port = process.env.PORT || '3000';
app.set('port', port);

//Run HTTP Server
const server = http.createServer(app);

server.listen(port, () => console.log(`Server running on port ${port}`));