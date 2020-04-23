// A higher order function is one that accepts a function as an argument.
// When a function also returns a function its called a higher order function
// Example is .map, .filter and .reduce

// Sample interview question using a higher order function
// given either of the folloiwng function calls return the product of the two numbers passed as parameters.
//
// product (4,5)
// product (4),(5)

// Several ways to solve it.
//
// counting arguments

console.log("Counting Arguments");

function product1(a) {
    if (arguments.length==2)
    {
        return arguments[0]*arguments[1];
    }
    else
    {
        return function (b){
            return a*b;
        }
    }
}

console.log(product1(4,5));
console.log(product1(4)(5));

console.log("");

console.log("Check if the 2nd argument exists");

function product2(a,b) {

    if (b ||b===0)
    {
        return a*b;
    }
    else
    {
        return function (b){
            return a*b;
        }
    }
}

console.log(product2(4,5));
console.log(product2(4)(5));



