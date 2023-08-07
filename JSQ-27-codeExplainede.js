//Explain the result of the following operations
console.log([] + []); //''
console.log({} + []);//'[object Object]'
console.log([] + {});//'[object Object]'
console.log({} + {});//'[object Object][object Object]'
//In each case, the overloaded operator '+' will interpret '{}' as a empty string and '[]' as the string '[object Object]'