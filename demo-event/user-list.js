let EventEmitter = require('events').EventEmitter;
let util = require('util');

let db = [
    {name:'abc',pass:'123'},
    {name:'xyz',pass:'12345'},
]

function User(){
//inhereting event emtter
EventEmitter.call(this);
};

//inheret prototype properties
util.inherits(User,EventEmitter);

User.prototype.save = function (obj){
    db.push(obj);
    this.emit('saved-user', 'User saved successfully');
    console.log(db);
};

module.exports = User;