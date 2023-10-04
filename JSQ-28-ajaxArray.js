var async = {
    getAll: function (urlArray, callback) {
        let results = {}; // Create an object to store all the results for AJAX calls

        let promises = urlArray.map(function (url, index) {// Perform all AJAX calls and store the results in the promises array
            
                return fetch(url)// Perform the AJAX call
                    .then(function (response) {
                        if (response.ok) {
                            return response.json();
                        } else {
                            throw new Error('Error in AJAX call');
                        }
                    })
                    .then(function (data) {
                        results[index + 1]= data; // Resolve the promise with an object containing the result and the corresponding key
                    })
                    .catch(function (error) {
                        results[index + 1]= error.message; // Store the error message as a result
                    });
            });

        // Use Promise.all to wait for all promises to complete
        Promise.all(promises)
            .then(function () {
                
                callback(results);// Call the callback function with the result object as an argument
            })
            .catch(function (error) {
                throw new Error('Error in promise resolution');
            });
    },
};


// Usage of async.getAll
async.getAll([axCall1, axCall2], function (context) {
    console.log("Expected context of callback:", context);
});
