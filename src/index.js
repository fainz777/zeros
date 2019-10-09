function isDoubleFactorial(multiplier) {
	return multiplier.indexOf('!!') !== -1;
}

function getDecimalLevel(n) {
	return n.toString().length - 1;
}

function getQuantityOfSequenceMembers(a1, an, d) {
	return a1 > an ? 0 : Math.floor((an - a1) / d + 1);
}

function getFifties(n) {
	return getQuantityOfSequenceMembers(50, n, 100);
}

function getTwentyFives(n) {
	return getQuantityOfSequenceMembers(25, n, 50);
}

function getTens(n) {
	return getQuantityOfSequenceMembers(10, n, 10);
}

function getFives(n) {
	return getQuantityOfSequenceMembers(5, n, 10);
}

function getEvens(n) {
	return getQuantityOfSequenceMembers(2, n, 2);
}

module.exports = function zeros(expression) {
	const multipliers = expression.split('*');
	let zeros = 0;
	let fives = 0;
	let evens = 0;

	multipliers.forEach(multiplier => {
		let n = parseInt(multiplier);
		const decimalLevel = getDecimalLevel(n); // Разряд числа
		let hundrieds = 0;

		if (decimalLevel > 1) {
			hundrieds =  parseInt(n / Math.pow(10, decimalLevel));
		}

		let tens = getTens(n);

		if (n >= 100) {
			tens += hundrieds;
		}

		if (isDoubleFactorial(multiplier)) {
			if (n % 2 === 0) {
				fives += getFifties(n);
				evens += getEvens(n);
				zeros += tens;
			} else {
				fives += getFives(n);
				fives += getTwentyFives(n);
			}

		} else {
			fives += getFives(n);
			fives += getFifties(n);
			fives += getTwentyFives(n);
			evens += getEvens(n);
			zeros += tens;
		}
	});

	if (fives) {
		if (evens) {
			let tens = fives > evens ? evens : fives;
			zeros += tens;
		}
	}

	return zeros;
}

