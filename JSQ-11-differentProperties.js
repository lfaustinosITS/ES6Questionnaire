function getDifferentProperties(obj1, obj2) {
    const result = {};

    for (const key in obj1) {
        if (obj1.hasOwnProperty(key) && obj2.hasOwnProperty(key)) {//Check if properties of obj1 are in obj2
            if (obj1[key] !== obj2[key]) {
                result[key] = [obj1[key], obj2[key]];
            }
        } else {
            result[key] = [obj1[key], undefined];
        }
    }

    for (const key in obj2) {
        if (obj2.hasOwnProperty(key) && !obj1.hasOwnProperty(key)) {//Check if there are propeties of obj2 that are not in obj1
            result[key] = [undefined, obj2[key]];
        }
    }

    return result;
}

// Example:
const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { b: 2, c: 4, d: 5 };
const differences = getDifferentProperties(obj1, obj2);
console.log(differences); // Output: { a: [1, undefined], c: [3, 4], d: [undefined, 5] }
