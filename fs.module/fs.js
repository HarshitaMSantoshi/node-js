//files used to read in api

const fs=require('fs');

//Asynchoronous way

console.log('Start');

//fs.readFile(__dirname+'./callback.js');
/*fs.readFile('./callback.js','utf-8', function(err, data){
    if(err){
        console.log('err',err);
    }else{
        console.log(data);
    }
})*/

//Synchronous way
/*var data=fs.readFileSync('./callback.js','utf-8')
console.log(data);
console.log('Stop');*/

fs.writeFile('./hello.txt','This is hello text', function(err,d){
    if(err){
        console.log(err)
    }else{
        console.log('Successfully written');
    }
})
//asynch
fs.readdir(__dirname, function(err,data){
    if(err){
            console.log(err);
    }else{
            console.log(data);
    }
})

//appendFile() to avoid the text in hello.txt overwritten