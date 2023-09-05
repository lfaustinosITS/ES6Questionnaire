var async = {
    getAll: function (urlArray, callback) {
        let promises = []; // Create an array to store all the promises for AJAX calls

        urlArray.forEach(function (url, index) {// Perform all AJAX calls and store the promises in the array
            let promise = new Promise(function (resolve, reject) {
                fetch(url)// Perform the AJAX call
                    .then(function (response) {
                        if (response.ok) {
                            return response.json();
                        } else {
                            throw new Error('Error in AJAX call');
                        }
                    })
                    .then(function (data) {
                        resolve({ [index + 1]: data }); // Resolve the promise with an object containing the result and the corresponding key
                    })
                    .catch(function (error) {
                        reject(error); // Reject the promise if an error occurs
                    });
            });

            promises.push(promise);
        });

        // Use Promise.all to wait for all promises to complete
        Promise.all(promises)
            .then(function (results) {
                let resultObject = {};// Create an object that contains the results in the expected format
                results.forEach(function (result) {
                    Object.assign(resultObject, result);
                });
                callback(resultObject);// Call the callback function with the result object as an argument
            })
            .catch(function (error) {
                console.error('Error:', error);
            });
    },
};


// Usage of async.getAll
async.getAll([axCall1, axCall2], function (context) {
    console.log("Expected context of callback:", context);
});
