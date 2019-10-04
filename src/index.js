function isDoubleFactorial(multiplier) {
	return multiplier.indexOf('!!') !== -1;
}

function getDecimalLevel(n) {
	return n.toString().length - 1;
}



module.exports = function zeros(expression) {
	const multipliers = expression.split('*');
	let zeros = 0;
	let totalTwenties = 0;
	let totalFives = 0;
	let evens = 0;

	multipliers.forEach(multiplier => {
		console.log('---------------------');
		console.log('multiplier: ', multiplier)
		let n = parseInt(multiplier);
		const decimalLevel = getDecimalLevel(n); // Разряд числа
		let hundrieds = 0;

		if (decimalLevel > 1) {
			hundrieds =  parseInt(n / Math.pow(10, decimalLevel));
		}
		
		console.log('n: ', n);
		console.log('Math.pow(10, decimalLevel): ', Math.pow(10, decimalLevel));
		console.log('decimalLevel: ', decimalLevel);
		console.log('hundrieds: ', hundrieds);
		let tens = parseInt(n / 10);

		console.log('n: ', n);
		console.log('tens: ', tens);

		if (n >= 100) {
			tens += hundrieds;
		}

		console.log('tens: ', tens);
		
		if (isDoubleFactorial(multiplier)) {
			if (n % 2 === 0) {
				
				let twenties = parseInt(n / 20) - hundrieds;
				let fifties = 0;

				if (n >=50) {
					fifties = parseInt(n / 50) - hundrieds;
				}
				
				evens += parseInt(n / 2);
				totalTwenties += twenties;
				zeros += tens;
				totalFives += fifties;

				console.log('totalFives 01: ', totalFives);
			} else {
				let fives = parseInt(n / 5) - tens;
				console.log('fives: ', fives);
				console.log('totalFives 1: ', totalFives);
				totalFives += fives;
				console.log('totalFives 2: ', totalFives);
			}

		} else {
			let fives = parseInt(n / 5) - tens;
			console.log('fives: ', fives);
			let twenties = parseInt(n / 20) - hundrieds;
			console.log('twenties: ', twenties);
			let fifties = 0;

			if (n >=50) {
				fifties = parseInt(n / 50) - hundrieds;
			}
			evens += parseInt(n / 2);
			totalTwenties += twenties;
			totalFives += fives;
			zeros += tens;
			totalFives += fifties;
		}

		console.log('zeros loop end: ', zeros);
	});
console.log('**********************');
	console.log('evens: ', evens);
	console.log('totalFives: ', totalFives);
	console.log('totalTwenties: ', totalTwenties);
	console.log('zeros: ', zeros);

	zeros += evens > totalFives ? totalFives : evens;

totalTwenties = totalTwenties ? totalFives : 0;
//zeros -= totalTwenties;

	zeros += totalTwenties;

	//console.log('tens: ', tens);
	console.log('zeros finale: ', zeros);

	//zeros += tens > 0 ? (tens - 1) : tens;
	
debugger;
	return zeros;
}

//zeros('5!');