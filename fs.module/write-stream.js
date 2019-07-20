let fs = require('fs');

let data = 'There is no gauranted ordereing when using asynchronous methods. So the following is prone to error because the fs.stat() operation may complete before the fs.rename() operation';

let writeStream = fs.createWriteStream(__dirname+'/hello.txt', {encoding:'utf-8'});

writeStream.write(data);

writeStream.on('finish', function(){
    console.log('Successfully written');
})

writeStream.on('error', function(){
    console.log(err)
})