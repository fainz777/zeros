module.exports = function zeros(expression) {
	let zeros = 0;
	//const zeroEndedRegex = /0+$/;
	const multipliers = expression.split('*');
	let fives = 0;
	let evens = 0;
	//let tens = 0;

	multipliers.forEach(multiplier => {
		let n = parseInt(multiplier);
		debugger;
		//let evens = 0;

		if (n % 2 === 0)  {
			evens++;
		}

		if (n % 5 === 0) {
			fives++;
		}

		if (n % 10 === 0) {
			zeros+= (+n.toString().length - 1);
		}
		

		if (multiplier.indexOf('!!') !== -1) {
			if (n % 5 === 0) {
				fives--;
			}

			if (n % 2 === 0) {
				n-=2;
				evens += parseInt(n / 2);
				fives += (parseInt(n / 50) - 1);
				zeros += parseInt(n / 10);
				//tens += n % 10 === 0 ? 1 : 0;
			} else {
				//console.log(n)
				fives += (parseInt(n / 5) - parseInt(n / 10));
				fives += parseInt(n / 25);
			}
		} else {
			if (n < 5) {
				return;
			}

			if (n % 10 === 0) {
				//zeros--;
			}

			let n25 = parseInt(n / 25)
			zeros += n25;

			n-=2;

			evens += parseInt(n / 2);
			fives += (parseInt(n / 5) - parseInt(n25 / 5));
		}
	});

	console.log('evens: ', evens);
	console.log('fives: ', fives);
	console.log('zeros: ', zeros);

	zeros += evens > fives ? fives : evens;

	//console.log('tens: ', tens);
	console.log('zeros finale: ', zeros);

	//zeros += tens > 0 ? (tens - 1) : tens;
	
debugger;
	return zeros;
}

//zeros('5!');