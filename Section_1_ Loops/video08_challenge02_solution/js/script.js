var html = '';
var rgbColor;

// makes random numbers
function randomRGB() {
 return Math.floor(Math.random() * 256 ); 
}

//random color
function randomColor() {
  var color = 'rgb(';
  color += randomRGB() + ',';
  color += randomRGB() + ',';
  color += randomRGB() + ')';
  return color;
}

//prints to screen
function print(message) {
  document.write(message);
}

//the for loop that pull everything togther
for (var i = 0; i < 100; i += 1) {
  rgbColor = randomColor();
  html += '<div style="background-color:' + rgbColor + '"></div>';
}

//activates print function with html 
print(html);









