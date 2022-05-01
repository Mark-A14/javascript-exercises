const sumAll = function(int1 , int2) {
     let sum = 0;
     if (int1 > int2 && int1 > 0 && int2 > 0 && Number.isInteger(int1) && Number.isInteger(int2)) {
          while (int1 >= int2) {
               sum += int2;
               int2++;
          }
     } else if (int1 < int2 && int2 > 0 && int1 > 0 && Number.isInteger(int2) && Number.isInteger(int1)){
          while (int1 <= int2) {
               sum += int1;
               int1++;
          }
     } else {
          return 'ERROR';
     }
     return sum;
};

// Do not edit below this line
module.exports = sumAll;
