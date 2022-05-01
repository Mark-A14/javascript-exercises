const repeatString = function(word, num) {
     let output = '';
     let i = 0;
     if (num >= 0) {
          while (i < num){
               output = output + word;
               i++
          }
          return output;
     } else {
          return output = 'ERROR';
     }
};

// Do not edit below this line
module.exports = repeatString;
