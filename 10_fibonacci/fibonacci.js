const fibonacci = function(n) {
    let array = [0];
    for (let i = 0; i >= n; i++){
        let temp = 0;
        array.push(array[i] + array[i+1]);

    }
};

// Do not edit below this line
module.exports = fibonacci;
