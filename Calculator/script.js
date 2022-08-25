
const calculator = document.querySelector('.container');
const keys = calculator.querySelectorAll('.num');
const res = document.getElementById('result');
let operators = document.querySelectorAll('.operator');
res.value = "";



keys.forEach(key => {
        key.addEventListener('click', () => {
        res.value += key.value;
        firstNumber = parseInt(res.value);
        })
})

res.value = "";

operators.forEach(operator => {
    operator.addEventListener('click', () => {
        res.value += operator.value;

        switch (operators) {
            case '+':
                return firstNumber + secondNumber
                
            case '-':
                res.value += firstNumber - secondNumber
                break;
            case '*':
                res.value += firstNumber * secondNumber
                break;
            case '/':
                res.value += firstNumber / secondNumber
                break;
            case '=':
                res.value;

        }
    })
}) 





// function operation(firstNumber, operator, secondNumber) {
//     keys.forEach(key => {
//         // first number
//         let firstNumber = key.addEventListener('click', () => {
//            res.value += key.value;
//         });
//     })
//     // operator
//     keys.forEach(key => {
//     let firstNumber = key.addEventListener('click', () => {
//        res.value += key.value;
//     });
// })


//     // second number

    
// }

// function operation(firstNumber, operator, secondNumber) {


            
        
//     })


//         secondNumber = key.addEventListener('click', () => {
//             res.value += key.value;
            

//         })
//     }
//     )}

