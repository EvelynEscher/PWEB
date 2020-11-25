const fs = require('fs');
const data = fs.readFileSync('arquivo.txt');
// a execução é bloqueada aqui até o arquivo ser lido
console.log(data.toString()); 