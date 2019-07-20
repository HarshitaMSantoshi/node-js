let fs = require('fs');

let readerStream = fs.createReadStream(__dirname+'/hello.txt');

let writeStream = fs.createWriteStream(__dirname+'/output.txt');

readerStream.pipe(writeStream);

console.log('Program Ends');
