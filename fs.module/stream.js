let fs = require('fs');

let readerStream = fs.createReadStream('./fs.js');

readerStream.setEncoding('UTF-8');

let data = '';

readerStream.on('data', function(chunk){
    data=data + chunk;
})

readerStream.on('end', function(){
    console.log('Reading Successfull');
    console.log(data);
})

readerStream.on('error', function(err){
    console.log(err);
})