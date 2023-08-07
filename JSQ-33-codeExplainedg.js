//Explain the difference, if any, between the following two functions. Will the returned value be the same if compared?

function func1() { return { prop: "foo" }; }
function func2() { return { prop: 'foo' }; }
//Although both functions are defined equivalently and return identical values, as functions are objects in JavaScript, and since objects occupy different memory locations, for this reason, the operators '==' and '===' consider them different.
console.log(func1 === func2);//false
console.log(func1 == func2);//false