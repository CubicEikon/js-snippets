console.log('Dom manipulation rest');

let input = document.getElementById('input01');
let button = document.getElementById('add');
let list = document.getElementById('list');

button.onclick = function() {
  console.log('clicked');

  if (input.value !== '') {
    let div = document.createElement('div');
    let text = document.createElement('span');
    let checkbox = document.createElement('input');
    checkbox.type ='checkbox';
    checkbox.onchange = function(){
      if (checkbox.checked){
        text.style.textDecoration = 'line-through';
      } else {
        text.style.textDecoration = '';
      }
  };
  
  text.appendChild(document.createTextNode(input.value));
  div.appendChild(checkbox);
  div.appendChild(text);
  list.appendChild(div);
  }
  
};