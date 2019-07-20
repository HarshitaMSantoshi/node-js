function square(err,n){
    if(err){
        return 'Not Possible'
        //return err
    }
    return n*n
}

function add(num1, num2, cb){
    if(typeof num1!='number'){
        return cb('Square not possible',null)
    }else{
        let total = num1+num2;
        let square = cb(null,total);
        return square
    }
    }
    
console.log(add(2,2,square));
//console.log(add('a',2,square));
//error first data next hence the name error first callback
//error first as mutiple packages are used, where callback functions are used to keep it uniform error first.