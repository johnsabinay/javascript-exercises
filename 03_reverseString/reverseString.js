const reverseString = function(input) {
    let reverseWord="";
    for (let i = input.length; i >= 0; i--){
        reverseWord += input.charAt(i);
    }
    return reverseWord;
        

};

console.log(reverseString(""));

// Do not edit below this line
module.exports = reverseString;

