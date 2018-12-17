// ====== HTTP module approach ======
// const http = require('http');

// const server = http.createServer(function(req, res) {
//   res.end('Hello world');
// });

// server.listen(3000, function() {
//   console.log('Listening to requests on port 3000...');
// });


// ====== EXPRESS approach ======
const express = require('express');

const app = express();


const router = require('./app/routes');
app.use('/', router);

app.use(express.static(__dirname + '/public'));

app.listen(3000, function(){
  console.log('Listeting on port 3000...');
});
