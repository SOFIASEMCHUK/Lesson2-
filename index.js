const operator = prompt('Введіть оператор: +, -, *, /');
const firstOperand = +prompt('Ввведіть перше число');
const secondOperand = +prompt('Ввведіть друге число');

if(operator === '+'){
    alert(`${firstOperand} ${operator} ${secondOperand} = ${firstOperand + secondOperand}`);
}else if(operator === '-'){
    alert(`${firstOperand} ${operator} ${secondOperand} = ${firstOperand - secondOperand}`); 
}else if(operator === '*'){
    alert(`${firstOperand} ${operator} ${secondOperand} = ${firstOperand * secondOperand}`); 
}else if(operator === '/'){
    alert(`${firstOperand} ${operator} ${secondOperand} = ${firstOperand / secondOperand}`); 
}else{
    alert('Спробуй ще');
}   