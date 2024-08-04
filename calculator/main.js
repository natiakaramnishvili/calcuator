
const numbers = document.querySelectorAll('.number')
const operationButtons = document.querySelectorAll('.operationChars')
const clearBtn = document.querySelector('.Clear')
const deleteBtn = document.querySelector('.delete')
const equalsBtn = document.querySelector('.twice-size-button')
const currentValues = document.querySelector(".current-values")
const storedNumbers = document.querySelector('.stored-numbers')
const percentBtn = document.querySelector('.percent')



const deleteLastChar = () => {
    currentValues.value = currentValues.value.toString().slice(0, -1)
}

const clear = () =>{
currentValues.value = ''
storedNumbers.value = ''
operation = undefined
}
function notNumber(){
if(storedNumbers.value ='0÷'|| storedNumbers.value === '.%' ){
clear()
}}

const displayOnScreen = (clickedValue) =>{
    if(clickedValue === '.' && currentValues.value.includes('.')) return;
    currentValues.value = currentValues.value.toString() + clickedValue   
}
// function updateDisplay(){
//     currentValues.value = currentValues.value
//     storedNumbers.value = storedNumbers.value 
// }

const ScreenOperation = (operation) =>{
    if(currentValues.value === '') return;
    if(storedNumbers !== ''){
        calculate
    }
    this.operation = operation
    currentValues.value = currentValues.value.toString() + operation
    storedNumbers.value = currentValues.value 
    currentValues.value = ''
    
}


const calculate = () =>{
    let calculating
    const stored = parseFloat(storedNumbers.value)
    const current = parseFloat(currentValues.value)
    if(isNaN(stored) || isNaN(current)) return;
    if(currentValues.value === ''){
        clear()
    }
    switch(this.operation){
        case '+':
            calculating = parseFloat(storedNumbers.value) + parseFloat(currentValues.value)
            break
        case '-':
            calculating = parseFloat(storedNumbers.value) - parseFloat(currentValues.value)
            break
        case '×':
         calculating = parseFloat(storedNumbers.value) * parseFloat(currentValues.value)
            break   
        case '÷':
            calculating = parseFloat(storedNumbers.value) / parseFloat(currentValues.value)
            break 
        default:
            return
    }
    currentValues.value = calculating
    operation = undefined
    storedNumbers.value = ''
}
function calculatePercentage(){
    let hundred = 100
    calculating = parseFloat(storedNumbers.value) / hundred
    currentValues.value = calculating
    operation = undefined
     storedNumbers.value = ''
}
function notAllowed(){
    if(currentValues.value != '' && storedNumbers.value != ''){
    clear()
    }
}



numbers.forEach((number) =>{
    number.addEventListener('click', (e) => {displayOnScreen(e.target.dataset.value)
    // updateDisplay()
})})

operationButtons.forEach((button) =>{
    button.addEventListener('click', (e) => {ScreenOperation(e.target.dataset.value)  
    // updateDisplay()
})})  

equalsBtn.addEventListener('click', button =>{
calculate()
// updateDisplay()
notAllowed()
})

percentBtn.addEventListener('click', button =>{
    calculatePercentage()
})

clearBtn.addEventListener('click', button =>{
clear()
// updateDisplay()
})

deleteBtn.addEventListener('click', button =>{
    deleteLastChar()
    // updateDisplay() 
    })








