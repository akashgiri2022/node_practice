let data=require("./Mymodule")
console.log(data);


let {add,mul,sub}=data;

console.log(add(100,20));
console.log(mul(10,20));

console.log(sub(20,10));