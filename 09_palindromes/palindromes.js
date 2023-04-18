const palindromes = function (string) {
    let reversed = string.toLowerCase().replace(/[^a-z]/g, "");
     return reversed.split('').reverse().join('') == reversed;

};
// Do not edit below this line
module.exports = palindromes;
