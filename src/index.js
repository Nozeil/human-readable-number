module.exports = function toReadable(number) {
	let result = '';
	let firstNum = String(number)[0];
	let secondNum = String(number)[1];
	let thirdNum = String(number)[2];

	function getStrNullNine(num) {
		switch (num) {
			case '0':
				return 'zero';
			case '1':
				return 'one';
			case '2':
				return 'two';
			case '3':
				return 'three';
			case '4':
				return 'four';
			case '5':
				return 'five';
			case '6':
				return 'six';
			case '7':
				return 'seven';
			case '8':
				return 'eight';
			case '9':
				return 'nine';
		}
	}

	function getStrTenNineteen(num) {
		switch (num) {
			case '0':
				return 'ten';
			case '1':
				return 'eleven';
			case '2':
				return 'twelve';
			case '3':
				return 'thirteen';
			case '4':
				return 'fourteen';
			case '5':
				return 'fifteen';
			case '6':
				return 'sixteen';
			case '7':
				return 'seventeen';
			case '8':
				return 'eighteen';
			case '9':
				return 'nineteen';
		}
	}

	function getStrTwentyNinety(num) {
		switch (num) {
			case '2':
				return 'twenty';
			case '3':
				return 'thirty';
			case '4':
				return 'forty';
			case '5':
				return 'fifty';
			case '6':
				return 'sixty';
			case '7':
				return 'seventy';
			case '8':
				return 'eighty';
			case '9':
				return 'ninety';
		}
	}

	if (firstNum && secondNum === undefined && thirdNum === undefined) {
		return result += getStrNullNine(firstNum);
	}

	if (firstNum === '1' && secondNum >= '0' && thirdNum === undefined) {
		return result += getStrTenNineteen(secondNum);
	}

	if (firstNum >= '2' && secondNum === '0' && thirdNum === undefined) {
		return result += getStrTwentyNinety(firstNum);
	}

	if (firstNum >= '2' && secondNum > '0' && thirdNum === undefined) {
		return result += getStrTwentyNinety(firstNum) + ' ' + getStrNullNine(secondNum);
	}

	if (firstNum >= '1' && secondNum === '0' && thirdNum === '0') {
		return result += getStrNullNine(firstNum) + ' hundred'
	}

	if (firstNum >= '1' && secondNum === '0' && thirdNum >= '0') {
		return result += getStrNullNine(firstNum) + ' hundred ' + getStrNullNine(thirdNum);
	}

	if (firstNum >= '1' && secondNum === '1' && thirdNum >= '0') {
		return result += getStrNullNine(firstNum) + ' hundred ' + getStrTenNineteen(thirdNum);
	}

	if (firstNum >= '1' && secondNum > '1' && thirdNum === '0') {
		return result += getStrNullNine(firstNum) + ' hundred ' + getStrTwentyNinety(secondNum);
	}

	if (firstNum >= '1' && secondNum > '1' && thirdNum > '0') {
		return result += getStrNullNine(firstNum) + ' hundred ' + getStrTwentyNinety(secondNum) + ' ' + getStrNullNine(thirdNum);
	}

	return result;
}
