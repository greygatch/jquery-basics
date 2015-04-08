'use strict';

$(document).ready(function() {
  var numbers = [];
  var operator;
  var textLength = $('#numfield').text().length;
  var x;
  var result;

  $('.num').click(function(){
    var num = $(this).text();

    if (textLength < 8) {
      $('#numfield').text($('#numfield').text() + num);
      textLength++;
    }


  });

  $('.operator').click(function(){
    numbers.push($('#numfield').text());
    operator = $(this).text();
    $('#numfield').text($(this).text());
    textLength = 0;

  });

  $('#equal').click(function(){
    numbers.push($('#numfield').text());

    var numbers2 = numbers.map(function(e){return parseFloat(e)});
    console.log(numbers2, operator)

    if (operator === "+" || operator === "-"){
      operator === "+" ? result = numbers2.reduce(function(a,b){return (a + b)}) : result = numbers2.reduce(function(a,b){return a - b})
    }
    else if (operator === "*" || operator === "/") {
      operator === "*" ? result = numbers2.reduce(function(a,b){return (a * b)}) : result = numbers2.reduce(function(a,b){return a / b});

    }
    $('#numfield').text(result);
  });
});
