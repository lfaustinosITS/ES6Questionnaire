var async = {
    getAll: function (urlArray, callback) {
        // Create an array to store the promises returned by each AJAX call
        const promises = urlArray.map(function (url, index) {
            return fetch(url)
                .then(function (response) {
                    if (!response.ok) {
                        throw new Error("Network response was not ok");
                    }
                    return response.json();
                })
                .then(function (data) {
                    return { [index + 1]: data }; // Resolve the promise with the AJAX result and the corresponding index
                })
                .catch(function (error) {
                    console.error("Error occurred during AJAX call:", error);
                });
        });

        // Execute all AJAX calls and wait for all promises to resolve
        Promise.all(promises)
            .then(function (results) {
                // Combine the results into a single object
                const context = results.reduce(function (acc, result) {
                    return Object.assign(acc, result);
                }, {});

                // Call the callback function with the context as an argument
                callback(context);
            })
            .catch(function (error) {
                console.error("Error occurred during AJAX calls:", error);
            });
    }
};

// Sample AJAX calls
function axCall1() {
    return fetch('url1').then(response => response.json());
}

function axCall2() {
    return fetch('url2').then(response => response.json());
}

// Usage of async.getAll
async.getAll([axCall1(), axCall2()], function (context) {
    console.log("Expected context of callback:", context);
});  