var foo = "hello";

(function () {
    var bar = "World";
    alert(foo + bar);
})(); // This is an IIFE that prints out 'hello World'
alert(foo + bar); // This alert only displays 'hello' because bar is only defined inside the IIFE function

if ([]) console.log("array is true"); // [] is an empty array and returns true (truthy value), so 'array is true' will be printed
if ([] == true) console.log("array == true"); // The comparison of [] and true is false because [] is an array and true is boolean, so 'array == true' will not be printed

for (let i = 0; i < 5; ++i) {
    setTimeout(function () { // This setTimeout will pause the console.log but not the for loop, resulting in all values of 'i' being printed after a 100ms delay.
        console.log("counter:", i);
    }, 100);
}

var obj = {
    prop: {}
};

delete obj.prop;
console.log(obj.prop); // Deleting 'prop' will make 'obj.prop' undefined
