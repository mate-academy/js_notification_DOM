function calcString(calculation) {
  let string = calculation;

  while (string.includes('plus')) {
    string = string.replace('plus', '+');
  }

  while (string.includes('minus')) {
    string = string.replace('minus', '-');
  }

  const parts = string.split(/(\+|-)/);

  let result = parseInt(parts[0], 10);

  for (let i = 1; i < parts.length; i += 2) {
    const operator = parts[i];
    const number = parseInt(parts[i + 1], 10);

    if (operator === '+') {
      result += number;
    } else if (operator === '-') {
      result -= number;
    }
  }

  return result.toString();
};


console.log(calcString('minus8plus5'))