var foo = (function () {
    // Private method (not accessible outside the module)
    function privateMethod() {
        console.log("This is a private method.");
    }

    // Public methods (accessible outside the module)
    function bar() {
        console.log("bar() method is public.");
    }

    function test() {
        console.log("test() method is public.");
        privateMethod(); // Call the private method from within the module
    }

    // Return the public methods as an object
    return {
        bar: bar,
        test: test,
    };
})();

foo.bar(); // Output: "bar() method is public."
foo.test(); // Output: "test() method is public."followed by "This is a private method."
foo.privateMethod(); // Output: Error - privateMethod is not a function
