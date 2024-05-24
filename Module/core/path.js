let path=require('path');

let result=path.dirname('/core/path.js');
console.log(result);  //core


let result1=path.basename('/core/path.js');
console.log(result1); //path.js



let result2=path.extname('/core/path.js');
console.log(result2); //.js



let result3=path.sep
console.log(result3);   // separator operator  '\'


let result4=path.join('core','example.js');
console.log(result4);   //join the path for you                  