// simpleIterator_for_of - This takes an array and uses the for ..of to loop through it.
function simpleIterator_for_of() {
    let shopping = ['carrots', 'peas', 'cauliflower', 'beans'];

    for (const item of shopping.sort()) {
        console.log(item);
    }
}
console.log("");
console.log("Simple Iterator Using for..of")
console.log("");
simpleIterator_for_of();
console.log("");
console.log("");

// simpleIterator_yield - This shows an example of generator that uses yield to return one item at a time.
// Note that the function must be prefixed with an asterix.
function* simpleIterator_yield() {
    let langs = ['java', 'c#', 'python', 'ruby'];

    for (const item of langs.sort()) {
        console.log("Yielding item -" + item);
        yield item;
    }
}

console.log("");
console.log("Simple Yield of Value from an Iterator - using Generator")
console.log("");

for (const item of simpleIterator_yield()) {
    console.log("Retrieved item -" + item);
}
console.log("");
console.log("");

// yield_next_from_an_array - This example yields one value at a time from an iterator such as an array. this requires the 
//2 asterix to define the generator and to tell the yield to return one value at a time from the yield as its not using a loop.

function* yield_next_from_an_array() {
    yield*['phone', 'tv', 'cd player', 'dvd player', 'ipod'];
}

function get_each_value_using_next() {
    var yieldnxt = yield_next_from_an_array(); // Call our function above.
    var nxtValue = yieldnxt.next(); // Get the first value/done pair // { value: "phone", done: false } // done tells us if this is the last value
    while (true) { // Loop until we break
        let val = nxtValue.value; // Read the value
        if (nxtValue.done) { // Check if we are done. The generator tells us if this is the last value.
            break;
        }
        console.log(val);
        nxtValue = yieldnxt.next(); // Go and get the next value.
    }
}
console.log("");
console.log("Example of using Yield of an array and using next to get each value")
console.log("");

get_each_value_using_next();
console.log("");
console.log("");


console.log("");
console.log("Example of using Yield get one value at a time using next and passing back a value in next function call")
console.log("");

function* yield_next_value_passing_back_value() {
    let loop = false;
    let cntr = 0;
    while (true) {

        loop = yield cntr;
        if (loop) {
            cntr = -1;
        }
        cntr++;
    }
}

const seq = yield_next_value_passing_back_value();
console.log("Val=" + seq.next().value); // 0
console.log("Val=" + seq.next().value); // 1
console.log("Val=" + seq.next().value); // 2
console.log("Val=" + seq.next().value); // 3
console.log("Val=" + seq.next(true).value + " // Notice we have reset the counter"); // 0 // Pass back the argument of true via the next function. This goes into loop and is used to reset the cntr.
console.log("Val=" + seq.next().value); // 0

console.log("");
console.log("");



((a) => {
    console.log("Run immediately -" + a);
})("Now")