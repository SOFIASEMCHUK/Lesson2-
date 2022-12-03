const operator = prompt('Введіть оператор: +, -, *, /');
const firstOperand = +prompt('Ввведіть перше число');
const secondOperand = +prompt('Ввведіть друге число');

function calc(operator, firstOperand, secondOperand); { 
    if (operator === '+'){
        alert(`${firstOperand} ${operator} ${secondOperand} = ${firstOperand + secondOperand}`);
    } 
    // else if (operator === '-'){
    //     alert(`${firstOperand} - ${secondOperand} = ${firstOperand - secondOperand}`); 
    // } else if (operator === '*'){
    //     alert(`${firstOperand} * ${secondOperand} = ${firstOperand * secondOperand}`); 
    // } else (operator === '/');{
    //     alert(`${firstOperand} / ${secondOperand} = ${firstOperand / secondOperand}`); 
    // }
}

// let result = `${Number(firstOperand) operator Number(secondOperand)}`;

// alert(`${firstOperand} ${operator} ${secondOperand} = ${result}`);


//`${firstOperand} ${operator} ${secondOperand}`

