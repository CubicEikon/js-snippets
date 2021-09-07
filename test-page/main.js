//enabling strictmode for ES6 compliance
"use strict";

//Testing log ouput
console.log('Dom manipulation test');

//declaring container variables for DOM elements we want to access and manipulate
let input = document.getElementById('input');
let add = document.getElementById('add');
let list = document.getElementById('list');

//declaring a function for the alert modal window test
function myAlert(){
  alert("this is javascript!");
}

//testing anonimous functions called on events
add.onclick = function() {
  //sends message to console
  console.log('clicked');
  //if input box is empty, do nothing
  if (input.value !== '') {
    //create elments that we need to append our values and check boxes to
    let div = document.createElement('div');
    let text = document.createElement('span');
    let checkbox = document.createElement('input');
    //gotta declare that our checkbox is indeed one, by setting the "type" property
    checkbox.type ='checkbox';
    //when checkboxes are selected, strike out the text adn return them to normal when they aren't
    checkbox.onchange = function(){
      if (checkbox.checked){
        text.style.textDecoration = 'line-through';
      } else {
        text.style.textDecoration = '';
      }
  };
  //finally appending everything in order
  //here we call the "value" property of our input box and add it to text(our span block)
  //then we append both the check box and the span to a div and then that div to the parent div that we called list
  text.appendChild(document.createTextNode(input.value));
  div.appendChild(checkbox);
  div.appendChild(text);
  list.appendChild(div);
  }
};

//giving fizzbuzz a go
//also made it a tad bit fancier and able to clean up after it's done
function fizzbuzz(){
  let outPutList = document.getElementById("list2");
  let flagDone = 0;
  //If outPutLists has child ndoes, that means the funciton has been run, clean up
  //If the function hasn't been run, run it
  if(outPutList.hasChildNodes()){
    //here we delete the first child of our list div as long as we have a "first child" node
    while(outPutList.firstChild){
      outPutList.removeChild(outPutList.firstChild);
    }
  } else {
    //get the input of the number box next to the button
    let totalFizBuz = document.getElementById("fizzyInput");
    //an example of inline variable declaration, thanks to let "i" only exists within the loop
    //additionally we also reference the "value" property of the fizzy input element so we can compare it to "i"
    for( let i = 1; i <= totalFizBuz.value; i++ ){
      //for every step of the loop we create a new div
      let span = document.createElement('span');
      let div = document.createElement('div');
      //we initiate result as an empty string, that way we can do simple ifs to append text whenever the 
      //conditions are true in that way we reduce verbosity and we avoid having ugly nested conditionals
      let result = "";
      if(i % 3 == 0){result += "Fizz"};
      if(i % 5 == 0){result += "Buzz"};
      if(result == ""){result = i};
      //finally we append our resulting string to a span, div and our list in that order
      span.appendChild(document.createTextNode(result));
      div.appendChild(span);
      outPutList.appendChild(div);
    };
  }
};