
const keys = document.querySelector('.keys');
const res = document.getElementById('result');
let operators = document.querySelectorAll('.operator');
// let equals = document.querySelector('.equals');
let decimal = document.querySelector('.decimal');
let clearScreen = document.querySelector('.clear');
let backSpace = document.querySelector('.back');
res.value = "0"; 
var resultNum = "";
var waitingForSecondNum = "";
var previousNum = "";
var currentNum = "";
var operator = "";


keys.addEventListener('click', (e) => {
    const { target } = e;

    if (!target.matches('button')){
        return;
    }
    if (target.classList.contains('operator')){
        setOperator(target.value);
        return;
    }
    if (target.classList.contains('decimal')){
        setDec(target.value);
        return;
    }
    if (target.classList.contains('clear')){
        clearNum(target.value);
        return;
    }
    if (target.classList.contains('num')){
        setNum(target.value);
        return;
    }
    if (target.classList.contains('back')){
        deleteNum(target.value);
        return;
    }

})


function setNum(num) {
    if (waitingForSecondNum === true) {
        res.value = num;
        waitingForSecondNum =false;
        
    } else if (res.value === "0") {
        res.value = num;
        
    } else {
        res.value += num;
    }
}

function setDec(decimal) {
    if (!res.value.includes(decimal)) {
        res.value += decimal;
    }
    
}

function setOperator(operators) {
    const inputVal = parseFloat(res.value);

    if (currentNum === "" && !isNaN(inputVal)){
        currentNum = inputVal;
    }else if(operator){
        resultNum = calculate(currentNum, inputVal, operator)
        
        res.value = String(resultNum);
        currentNum = resultNum;

    }
    waitingForSecondNum = true;
    operator = operators;

}

function calculate(currentNum, previousNum, operator) {
    switch (operator) {
        case '+':
            return currentNum + previousNum;
            
        case '-':
            return currentNum - previousNum;
            
        case '*':
            return currentNum * previousNum;
            
        case '/':
            return currentNum / previousNum;
            
    
        default:
            return resultNum;         
    }
}


function deleteNum(backSpace) {
    if (res.value) {
        res.value = res.value.slice(0, -1);
    }
    else {
        res.value = "0";
        
    }

    
}

function clearNum(clear) {
    res.value = "0";
    currentNum = "";
    waitingForSecondNum = "";
    resultNum = "";
}
