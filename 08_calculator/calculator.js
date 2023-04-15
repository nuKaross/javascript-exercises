const add = function(x,y) {
    return x + y;
};

const subtract = function(x,y) {
    return x - y;
};

const sum = function(array) {
   let sum = 0;
  array.forEach(element => {
      sum += element;
    });
    return sum;
};

const multiply = function(array) {
    let total = array[0];
    for(let i=1; i<array.length; i++){
      total *= array[i];
    }
    return total;
  };
  

const power = function(x,y) {
    return Math.pow(x,y);
};

const factorial = function(n) {
  if (n==0) return 1;
    let product = 1;
    for (let i = n; i>0;i--){
      product *= i;
    }
    return product;

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
