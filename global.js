//console.log(global);

//Current Directory I'm working on

console.log(__dirname);

//File name

console.log(__filename);

//changing title using process object

console.log(process.title);

//exit

process.on('exit', function(){
    console.log('exiting');
})

//change title
process.title="My Process"
console.log(process.title);

console.log(process.env);
//secret key used in different envs with express.js
process.env.mySecret = 'secretValue';
console.log(process.env.mySecret);

//current working dir

console.log(process.cwd());
//memory uses in bytes
console.log(process.memoryUsage());
console.log(process.cpuUsage());

//not a good way to handle exceptions
process.on('unCaughtException', function(err){
console.log(err);
})

