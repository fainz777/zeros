function isDoubleFactorial(multiplier) {
	return multiplier.indexOf('!!') !== -1;
}

function getDecimalLevel(n) {
	return n.toString().length - 1;
}

function getN(a1, an, d) {
	// console.log('Math.floor((an - a1) / d + 1): ', Math.floor((an - a1) / d + 1));
	return a1 > an ? 0 : Math.floor((an - a1) / d + 1);
}

function getFifties(n) {
	return getN(50, n, 100);
}

function getTwenties(n) {
	return (getN(20, n, 20) - parseInt(n / 100));
}

function getTens(n) {
	return getN(10, n, 10);
}

function getFives(n) {
	return getN(5, n, 10);
}

function getEvens(n) {
	return getN(2, n, 2);
}

module.exports = function zeros(expression) {
	const multipliers = expression.split('*');
	let zeros = 0;
	let fifties = 0;
	let twenties = 0;
	let fives = 0;
	let evens = 0;

	multipliers.forEach(multiplier => {
		// console.log('---------------------');
		// console.log('multiplier: ', multiplier)
		let n = parseInt(multiplier);
		const decimalLevel = getDecimalLevel(n); // Разряд числа
		let hundrieds = 0;

		if (decimalLevel > 1) {
			hundrieds =  parseInt(n / Math.pow(10, decimalLevel));
		}
		
		// console.log('n: ', n);
		// console.log('Math.pow(10, decimalLevel): ', Math.pow(10, decimalLevel));
		// console.log('decimalLevel: ', decimalLevel);
		// console.log('hundrieds: ', hundrieds);
		let tens = getTens(n);

		// console.log('n: ', n);
		// console.log('tens: ', tens);

		if (n >= 100) {
			tens += hundrieds;
		}

		// console.log('tens: ', tens);
		
		if (isDoubleFactorial(multiplier)) {
			if (n % 2 === 0) {
				twenties += getTwenties(n);
				fifties += getFifties(n);
				evens += getEvens(n);
				zeros += tens;
				//totalFives += fifties;

				// console.log('totalFives 01: ', totalFives);
			} else {
				fives += getFives(n);
			}

		} else {
			fives += getFives(n);
			// console.log('fives: ', fives);
			twenties += getTwenties(n);
			// console.log('twenties: ', twenties);
			fifties += getFifties(n);


			evens += getEvens(n);
			zeros += tens;
		}

		// console.log('zeros loop end: ', zeros);
	});
console.log('**********************');
	console.log('evens: ', evens);
	console.log('fives: ', fives);
	console.log('twenties: ', twenties);
	console.log('fifties: ', fifties);
	console.log('zeros: ', zeros);

	if (fifties) {
		if (twenties) {
			let tens = fifties > twenties ? twenties : fifties;
			zeros += tens;
			fifties -= tens;
			twenties -= tens;
		}

		if (evens) {
			let tens = fifties > evens ? evens : fifties;
			zeros += tens;
			fifties -= tens;
			evens -= tens;
		}
	}

	if (twenties) {
		if (fives) {
			let tens = twenties > fives ? fives : twenties;
			zeros += tens;
			twenties -= tens;
			fives -= tens;
		}
	}

	if (fives) {
		if (evens) {
			let tens = fives > evens ? evens : fives;
			zeros += tens;
			fives -= tens;
			evens -= tens;
		}
	}




	//zeros += evens > totalFives ? totalFives : evens;

//totalTwenties = fifties ? fifties : totalTwenties;
//zeros -= totalTwenties;

	//zeros += totalTwenties;

	//console.log('tens: ', tens);
	console.log('zeros finale: ', zeros);

	//zeros += tens > 0 ? (tens - 1) : tens;
	
debugger;
	return zeros;
}

//zeros('5!');