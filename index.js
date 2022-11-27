const operator = prompt('Введіть оператор: +, -, *, /');
const firstOperand = prompt('Ввведіть перше число');
const secondOperand = prompt('Ввведіть друге число');

let result = `${Number(firstOperand) operator Number(secondOperand)}`;

alert(`${firstOperand} ${operator} ${secondOperand} = ${result}`);


//`${firstOperand} ${operator} ${secondOperand}`

