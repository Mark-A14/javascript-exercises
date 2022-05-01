const removeFromArray = function(array, ...args) {
     args.forEach((arg) => {
     let location = array.indexOf(arg);
     if (location > -1){
          array.splice(location, 1);
     }      
     });
     return array;
};

// Do not edit below this line
module.exports = removeFromArray;
