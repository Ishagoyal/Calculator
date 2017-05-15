

window.onload = function () {
var answer=0;
var num1,num2;
var display = document.querySelector('input');
//console.log(display);
var isCalculating = false;
var operator = '';

function setDisplay(num){
  if(isCalculating === true){
    display.value = answer;
  }
  else{ 
    if(display.value === '0'){
      display.value = num;
    }
    else{
      display.value += num;
    }
     
  }
}
$(document).ready(function(){
  setDisplay(0);
  $('a').click(function(){
    $(this).addClass('active');
    $(this).one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(evt){
      $(this).removeClass('active') ;
    });
  });
});


var clicked = document.querySelector('body');
//console.log(clicked);
clicked.addEventListener('click', evt => {
  var btnValue = parseInt(evt.target.innerHTML);
  if(isCalculating === true){
    display.value = '';
    isCalculating = false;
  }
  if(Number.isInteger(btnValue)){
    setDisplay(btnValue);
  }
  else{
    setDisplay('');
    doIt(evt.target.innerHTML)
  }
});

var doIt = symbol => {
  switch (symbol){
    case 'C': clear();
              break;
      
    case '=': if(operator !== ''){
      num2 = display.value;
      calculate();
    }
      break;
      
     case '+':
     case 'x':
     case '-':
     case '/':
      if(operator === ''){
        num1 = display.value;
        operator = symbol;
        isCalculating = true;;
      }
      else {
        num2 = display.value;
        operator = symbol;
        calculate();
      }
      break;
      
      case '.':
      decimal();
      break;
     }
};

let clear = () => {
  answer = 0;
  isCalculating = false;
  operator = '';
  display.value = answer;
};

let decimal = () => {
  if (display.value.indexOf('.') === -1) setDisplay('.');
};


var calculate = function(){
  num1=parseFloat(num1);
  num2=parseFloat(num2);
  
  switch (operator){
      
      case '+': 
      answer = num1 + num2;
      break;
      
      case 'x': 
      answer = num1 * num2;
      break;
      
      case '-': 
      answer = num1 - num2;
      break;
      
      case '/': 
      answer = num1 / num2;
      break;
      
      case '=':
                 }
  isCalculating = true;
  setDisplay(answer);
  num1 = answer;
  num2 = undefined;
};
}



  