// Button animations
$(document).ready(function(){
  setDisplay(0);
  $('a').click(function(){
    $(this).addClass('active');
    $(this).one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(evt){
      $(this).removeClass('active') ;
    });
  });
});

// Calculator Functionality
let answer = 0;
let num1, num2;
let display = document.querySelector('input');
let bool = false;
let operator = '';

let setDisplay = function(num){
  if (bool === true){
    display.value = answer;
  }
  else {
    if (display.value === '0')
      display.value = num;
    else
      display.value += num;
  }
}

let clicked = document.querySelector('body');
clicked.addEventListener('click', evt => {
  let btnValue = parseInt(evt.target.innerHTML);
  console.log(operator);
  if (bool === true){
    display.value = '';
    bool = false;
  }
  if (Number.isInteger(btnValue)){
    setDisplay(btnValue);
  } else {
    setDisplay('');
    doIt(evt.target.innerHTML);
  }
});

let doIt = symbol => {
  switch (symbol){
    case 'C':
      clear();
      break;
    case '=':
      if (operator !== ''){
        num2 = display.value;
        calculate();
      }
      break;
    case '+':
    case 'x':
    case '-':
    case '/':
      if (operator === ''){
        num1 = display.value;
        operator = symbol;
        bool = true;
      } else {
        num2 = display.value;
        operator = symbol;
        calculate();
      }
      break;
    case '.':
      decimal();
      break;
    case '=':
      equals();
      break;
  }
};

let clear = () => {
  answer = 0;
  bool = false;
  operator = '';
  display.value = answer;
};

let add = () => {
  num1 = display.value;
  
};

let calculate = () => {
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);
  
  switch (operator){
    case '+':
      answer = num1 + num2;
      break;
    case '-':
      answer = num1 - num2;
      break;
    case 'x':
      answer = num1 * num2;
      break;
    case '/':
      answer = num1 / num2;
      break;
    case '=':
  }
  bool = true;
  setDisplay(answer);
  num1 = answer;
  num2 = undefined;
};

let decimal = () => {
  if (display.value.indexOf('.') === -1) setDisplay('.');
};