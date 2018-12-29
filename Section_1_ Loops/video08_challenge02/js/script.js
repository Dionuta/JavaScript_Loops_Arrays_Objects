let html = '';
let rgbColor;

//RANDOM number
function randomRGB() {
 return Math.floor(Math.random() * 256 ); 
}
//creats random rgb colors
function randomColor() {
  let color = 'rgb(';
  color += randomRGB() + ',';
  color += randomRGB() + ',';
  color += randomRGB() + ')';
  return color;
}

function print(message) {
  document.write(message);
}
//creats 10 div that take the rgbColor function 
for (let i = 0; i < 10; i += 1) {
  rgbColor = randomColor();
  html += '<div style="background-color:' + rgbColor + '"></div>';
}

print(html);









