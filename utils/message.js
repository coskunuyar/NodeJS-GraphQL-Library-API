const colors = require('colors');
const message = (message,type) => {
    console.log('------');
    if(type === 'success'){
        console.log(`${message}`.green);
    }else if(type === 'error'){
        console.log(`${message}`.red);        
    }else{
        console.log(message);
    }
    console.log('------');
}

module.exports = message;