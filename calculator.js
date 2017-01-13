$(document).ready(function(){
  setDisplay(0);
  $('a').click(function(){
    $(this).addClass('active');
    $(this).one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(evt){
      $(this).removeClass('active') ;
    });
  });
});

var answer=0;
var num1,num2;
var display = document.querySelector('input');
var bool = false;
var operator = '';

var setDisplay = function(num){
  if(bool === true){
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

var clicked = document.querySelector('body');
clicked.addEventListener('click', evt => {
  var btnValue = parseInt(evt.target.innerHTML);
  console.log(operator);
  if(bool === true){
    display.value = '';
    bool = false;
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
        bool = true;;
      }
      else {
        num2 = display.value;
        operator = symbol;
        calculate();
      }
      break;
     }
};


var calculate = function(){
  num1=parseFloat(num1);
  num2=parseFloat(num2);
  
  switch (operator){
      
    case '+': 
      answer = num1 + num2;
      break;
                 }
  bool = true;
  setDisplay(answer);
  num1 = answer;
  num2 = undefined;
};


  