function foo1() {
    var fn = function () {
        console.log(this.foo);
    };
    return { foo: 'bar' };
}

function foo2() {
    var fn = function () {
        console.log(this.foo);
    };
    return { foo: 'baz' };
}

console.log(foo1()); // This returns { foo: 'bar' } because the object { foo: 'bar' } is returned from foo1()
console.log(foo2()); // This returns { foo: 'baz' } because the object { foo: 'baz' } is returned from foo2()
