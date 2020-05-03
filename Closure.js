// Closure occurs when an outer function returns an inner function and the returned inner function 
// has access the variables inside the other function.

// In this example we pass in a secret and return back a property called getproperty 
// that contains a function that returns the value of the secret.
const getSecret = (secret) => {
    return {
        getproperty: () => secret
    };
};

// Call getSecret and hold the property returned.
var mysecret = getSecret("Dont tell the boss");

console.log(mysecret.getproperty()); // Call the function getproperty function from the returned property. We have the value of secret within the clousre.

// test('Closure for object privacy.', assert => {
//     const msg = '.get() should have access to the closure.';
//     const expected = 1;
//     const obj = getSecret(1);

//     const actual = obj.get();

//     try {
//         assert.ok(secret, 'This throws an error.');
//     } catch (e) {
//         assert.ok(true, `The secret var is only available
//       to privileged methods.`);
//     }

//     assert.equal(actual, expected, msg);
//     assert.end();
// });