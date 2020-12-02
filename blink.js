links = document.getElementsByTagName('a');
buttons = document.getElementsByTagName('button');
inputs = document.getElementsByTagName('input');

for ( let link of links ) {
  link.classList.add('blink');
}

for ( let button of buttons ) {
  button.classList.add('blink');
}

for ( let input of inputs ) {
  input.classList.add('blink');
}
