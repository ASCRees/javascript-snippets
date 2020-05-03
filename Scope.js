// In this case i is scoped at the global level and so it will output 6,6,6,6,6
// Why 6 - because the for loop will iterate up to and including i being 5. It will then come back round add 1 to it i++ and i will be 6
// The for loop will end. At this put i is scoped globally and equal to 6.
// The for loop is part of the call stack and so it executed until completion by the event loop.
// The call back function timer in the setTimeout is executed as part of the call back queue and so is executed after the call stack is
// complete. Therefore at this put i is 6 and so will execute 5 times, once for each time setTimeout was called and output
// 6 6 6 6 6
for (var i = 1; i <= 5; i++) {
	setTimeout(function timer() {
		console.log("Var is " + i);
	}, i * 1000);
}

// Now if we change var to let, i is block scoped and so the value of i used from the for loop.

for (let i = 1; i <= 5; i++) {
	setTimeout(function timer() {
		console.log("Let is " + i);
	}, i * 1000);
}

// Shows an example of hoisting. The variable is hosted into the function below. The value of 5 isn't as its not set
// until after the function is executed.
((passedInVal) => {
	console.log("My hoisted value should be undefined. Is it.... " + hoistedVal);
	console.log("My passed in hoisted value should be 6. Is it.... " + passedInVal);
})((passedInHoistedVal = 6)); // Set passedInHoistedVal to 6 and passit into the arrow function.

var hoistedVal = 5; // Now we set the value of hoistedval to 5.
var passedInHoistedVal = 7; // Now we set the value of passedInHoistedVal to 7.

// Var is function scoped and let is block scoped.

(() => {
	try {
		if (true) {
			var varVar = "This is a var";
			console.log("Var 'varVar' defined in block =" + varVar);
		}

		console.log("Check if our variables are available outside of the block in the function scope.");

		if (varVar != undefined) {
			// varVar is defined nd contains the value defined in the block above.
			console.log("Var 'varVar' defined in functionScope =" + varVar);
		}

		if (true) {
			let letVar = "This is a let";
			console.log("Let 'letVar' defined in block =" + letVar);
			if (true) {
				let letVarInner = "This is the inner let";
				console.log("Let 'letVarInner' defined in block =" + letVarInner);
				console.log("Let 'letVar' defined in outer block =" + letVar);
			}

			// If we try to reference letVarInner here it will error as letvarInner was defined insode of the aove if block.
		}

		if (letVar != undefined) {
			// This will throw an error as letVar is not defined so is out of scope.
			console.log("Let 'letVar' defined in blockScope =" + letVar);
		}
	} catch (e) {
		console.log("Error is " + e);
	}
})();
