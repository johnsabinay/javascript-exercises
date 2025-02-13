// const repeatString = function (string,num) {
//    let word ="";
//  for (let i = 0; i < num; i++){
//    word += string;
//  }
//  return string;
// }

// console.log(repeatString("hey",3))
// // Do not edit below this line
// module.exports = repeatString;

const repeatString = function (string, int) {
   let word="";
   if (int < 0) return "ERROR";
   for (let i = 0; i < int; i++) {
      word += string;
   }
   return word;
 };

 console.log(repeatString("bye",111));
 
 module.exports = repeatString;
 