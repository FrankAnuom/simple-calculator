let display = document.getElementById('display');
let currentInput ='';
let currentOperator = '';
let preVlaue ='';
function appendToDisplay(value) {
   currentInput += value;
   display.innerText = currentInput;
}
function clearDisplay() {
    currentInput +='';
    currentOperator = '';
    preVlaue = 0;
    display.innerText='0';
}
function calculateResult() {
    if (currentInput === '') 
    return;
const currentValue = parseFloat(currentValue);
switch (currentOperator) {
    case '+':
        preVlaue += currentValue;
        break;
        case'-':
        preVlaue += currentValue;
        break;
        case '*':
            preVlaue -= currentValue;
            break;
            case'/':
            if (currentValue !==0){
                preVlaue /=currentValue;
                
            }else{
                alert('Error: Division by zero');
                clearDisplay();
                return;
            }
            break;
}
display.innerText = preVlaue;
currentInput='';
currentOperator='';

}
clearDisplay();

