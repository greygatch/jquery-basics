'use strict';

var firstNumber = 0;
var operator = '';
var recentCalc = false;

$(document).ready(init);

function init(){
  $('.number').click(clickNumber);
  $('#decimal').click(clickDecimal);
  $('#clear').click(clear);
  // rename compound
  $('.operator').click(compound);
  $('#equal').click(calculation);
  $('#square').click(calculation)
  $('#root').click(calculation);
  $('#facorial').click(calculation);
}

function clickNumber(){
  if (recentCalc){
    $('#display').text("0");
    recentCalc = false;
  }
  var num = $(this).text();
  var display = $('#display').text();
  var output = (display === '0') ? num : display + num;
  $('#display').text(output);
}


function clickDecimal(){
  console.log("b");
  var display = $('#display').text();
  console.log(display)
  var output = display.indexOf('.') !== -1 ? display : display += '.';
  $('#display').text(output.toString());
  console.log(output);


}

function clear(){
  $('#display').text('0');clear
}

function compound(){
  console.log("comp")
  firstNumber = parseFloat($('#display').text());
  operator = $(this).text();
  clear();
}

//recursive=
var factorial = function(n) {
  var firstNumber = parseFloat($('#display').text());
  operator = $(this).text();
  if(n <= 1) {
      return 1;
  } else {
      return n * factorial(n - 1);
  }

}

function square(){
  var firstNumber = parseFloat($('#display').text());
  operator = $(this).text();
  return firstNumber * firstNumber;
}

function root(){
  var firstNumber = parseFloat($('#display').text());
  operator = $(this).text();
  return firstNumber * firstNumber;
}

function toUTF16(codePoint) {
    var TEN_BITS = parseInt('1111111111', 2);
    function u(codeUnit) {
        return '\\u'+codeUnit.toString(16).toUpperCase();
    }

    if (codePoint <= 0xFFFF) {
        return u(codePoint);
    }
    codePoint -= 0x10000;

    // Shift right to get to most significant 10 bits
    var leadSurrogate = 0xD800 + (codePoint >> 10);

    // Mask to get least significant 10 bits
    var tailSurrogate = 0xDC00 + (codePoint & TEN_BITS);

    return u(leadSurrogate) + u(tailSurrogate);
}

function calculation(){
  var result;
  var secondNumber = parseFloat($('#display').text());
  switch(operator){
    case ("+"):
      result = firstNumber + secondNumber;square
      break;
    case ("-"):
      result = firstNumber - secondNumber;
      break;
    case ("*"):
      result = firstNumber * secondNumber;
      break;
    case ("/"):
      result = firstNumber / secondNumber;
      break;
    case ('x²'):
      result = firstNumber * firstNumber;
      break;
    case ('√'):
      result = root(firstNumber);
      break;
    case ("n!"):
      result = factorial(firstNumber);
  }

  $('#display').text(result)
  firstNumber = 0;
  recentCalc = true;
}
