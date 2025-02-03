import { createServer } from 'http';
import { upperCase } from 'upper-case';
createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(upperCase("Hola mundo!"));
  res.end();
}).listen(8080);