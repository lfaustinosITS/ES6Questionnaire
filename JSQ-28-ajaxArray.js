var async = {
    getAll: function (urlArray, callback) {
        const promises = urlArray.map((axCall, index) => {
            return axCall().then(result => ({ [index + 1]: result }));
        });

        Promise.all(promises)
            .then(results => {
                const context = results.reduce((acc, result) => Object.assign(acc, result), {});
                callback(context);
            })
            .catch(error => {
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
async.getAll([axCall1, axCall2], function(context) {
    console.log("Expected context of callback:", context);
});
