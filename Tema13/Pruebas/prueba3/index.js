import * as fs from 'fs';
fs.rename('prueba1.txt', 'prueba2.txt', function (err) {
    if (err) throw err;
    console.log('Archivo renombrado!');
  });
  

  
