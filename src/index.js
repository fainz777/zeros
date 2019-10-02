module.exports = function zeros(expression) {
	let zeros = 0;
	const zeroEndedRegex = /0+$/;
	const multipliers = expression.split('*');

	multipliers.forEach(multiplier => {
		const n = parseInt(multiplier);



		let evens = 0;

		if (multiplier.indexOf('!!') !== -1) {

		} else {
			if (n < 5) {
				return;
			}
			
			for (let i = 1; i <= n; i++ ) {
				const zeroEnded = i.toString().match(zeroEndedRegex);

				if (zeroEnded) {
					zeros += zeroEnded[0].length;
				} else {
					if (i % 2 === 0) {
						evens++;
					}

					if (i % 5 === 0 && evens != 0) {
						zeros++;
						evens = 0;
					}
				}
			}

			zeros += parseInt(n / 25);
		}
		

		
	});

	return zeros;
}

//const str = '9!!*10!!*7!!';

//console.log('must be 3: ', zeros(str));