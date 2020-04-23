//let val=0;
console.log("Start of Call Stack");

// Create a promise wrapped around a function
// The value of val is passed into the promise.
let promise1 = function (val) {
    return new Promise(function (resolve, reject) {
        console.log("promise1");
        if (val == 1) {
            setTimeout(() => resolve('Promise Accepted -' + val), 5000);
            //resolve('Promise Accepted -'+val) 
        } else {
            reject('Promise Rejected -' + val)
        }
    })
};

function callPromise(val) {
    //   val++;

    // Execute the promise. Pass in val.
    console.log("Start");
    promise1(val)
        .then(function (successMessage) {
            console.log(successMessage);
            return "Hey Dude"; // Return value from this function is the input for the next .then function below. This allows chaining.
        })
        .then(function (a) {
            console.log(a + " Done the 2nd part")
        })
        .catch(function (errorMessage) {
            //error handler function is invoked 
            console.log("Catch - " + errorMessage);
        });
    console.log("End");
}

callPromise(1);

let promisefunc = function () {
    return new Promise(function (resolve, reject) {
        // the function is executed automatically when the promise is constructed
        console.log("promisefunc");
        // after 1 second signal that the job is done with the result "done"
        setTimeout(() => resolve(console.log("Done callback")), 5000);
    })
};

promisefunc()
    .then(function () {
        console.log("Promisefunc ended");
    });


// Lets have a loop that takes a while so we simultate the call stack running for a while.
((a) => {
    console.log("Starting Loop");
    for (let index = 0; index < a; index++) {
        // Do Nothing

    }
    console.log("Ending Loop");

})(10000000000);

console.log("End of Call Stack"); // Call back wont occur until after the Call Stack has completed