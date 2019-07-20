console.log(module);

//exporting fns to use it in other files
module.exports.temperature = 32;
//console.log(module);

module.exports.description = function(){
    console.log('Exported description from module page');
}