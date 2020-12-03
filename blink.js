links = Array.from(document.getElementsByTagName('a'));
buttons = Array.from(document.getElementsByTagName('button'));
inputs = Array.from(document.getElementsByTagName('input'));

blinks = links.concat( buttons, inputs );

for ( var i = 0; i < blinks.length; i += 1 ) {
  blinks[i].style.animation = 'blinking ' + i + 'ms infinite both';
}
