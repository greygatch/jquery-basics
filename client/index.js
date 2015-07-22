'use strict';

var firstNumber = 0;
var operator = '';
var recentCalc = false;

$(document).ready(init);

function init(){
  $('.number').click(clickNumber);
  $('#decimal').click(clickDecimal);
  $('#clear').click(clear);
  $('.operator').click(compound);
  $('#equal').click(calculation);
  $('#square').click(calculation);
  $('#root').click(calculation);
  $('#facorial').click(calculation);
}

function clickNumber(){
  if (recentCalc){
    $('#display').text('0');
    recentCalc = false;
  }
  var num = $(this).text();
  var display = $('#display').text();
  var output = (display === '0') ? num : display + num;
  $('#display').text(output);
}


function clickDecimal(){
  var display = $('#display').text();
  var output = display.indexOf('.') !== -1 ? display : display += '.';
  $('#display').text(output.toString());
}

function clear(){
  $('#display').text('0');
}

function compound(){
  firstNumber = parseFloat($('#display').text());
  operator = $(this).text();
  clear();
}


function factorial (n) {
  var firstNumber = parseFloat($('#display').text());
  operator = $(this).text();
  if(n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

function square(){
  var firstNumber = parseFloat($('#display').text());
  operator = $(this).text();
  return firstNumber * firstNumber;
}

function root(){
  var firstNumber = parseFloat($('#display').text());
  operator = $(this).text();
  return Math.sqrt(firstNumber);
}

function calculation(){
  var result;
  var secondNumber = parseFloat($('#display').text());

  switch(operator){
    case ('+'):
      result = firstNumber + secondNumber;
      break;
    case ('-'):
      result = firstNumber - secondNumber;
      break;
    case ('*'):
      result = firstNumber * secondNumber;
      break;
    case ('/'):
      result = firstNumber / secondNumber;
      break;
    case ('SQ'):
      result = firstNumber * firstNumber;
      break;
    case ('ROOT'):
      result = Math.sqrt(firstNumber);
      break;
    case ('n!'):
      result = factorial(firstNumber);
      console.log(result);
      break;
  }

  $('#display').text(result);
  firstNumber = 0;
  recentCalc = true;
  // if (result = 'Infinity'){$('#display').text("HOLY SHIT");}
}
