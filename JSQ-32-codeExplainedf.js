function myLog() {
    return {
        bar: 'bar',
        foo: 'foo',
        prop: function () { // Calling this function will lead to the following
            var self = this; // Here, 'this' points to the defined values inside 'return'
            console.log(self.bar); // Prints the value of 'bar': 'bar'
            console.log(this.foo); // Prints the value of 'foo': 'foo'
            (function () {
                console.log(self.bar); // Prints the value of 'bar': 'bar' because 'self' points to the defined values inside 'return'
                console.log(this.foo); // Prints 'undefined' because it's an IIFE and 'this' points to the global context, which is 'undefined'
            })();
        }
    };
}

var obj = myLog();
obj.prop();
