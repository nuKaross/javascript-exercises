const findTheOldest = function(array) {
    return array.forEach(people => {
        if (people.yearOfDeath == 1){
            (people.yearOfDeath - people.yearOfBirth)
        }else{
        (new Date().getFullYear()  - people.yearOfBirth)
        }
   });
    
};

// Do not edit below this line
module.exports = findTheOldest;
