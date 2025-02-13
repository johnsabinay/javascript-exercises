const removeFromArray = function(array,item) {
// let remove;
arrayVar=array;

for (const value of array) {
    if(value === item) {
        let indexNo= array.indexOf(value);
        array.splice(indexNo ,1);
        return arrayVar;
    }
    else {
        array
    }
    
}




};

console.log(removeFromArray([1,2,3,4],2,1));

// Do not edit below this line
module.exports = removeFromArray;
