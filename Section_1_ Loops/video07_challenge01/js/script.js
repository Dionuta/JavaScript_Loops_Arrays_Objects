var html = ' ';


for (var i = 0; i <= 10; i += 1) {
  var red = Math.floor(Math.random() * 256 );
  var blue = Math.floor(Math.random() * 256 );
  var green = Math.floor(Math.random() * 256 );
  var rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
  html += '<div style="background-color:' + rgbColor + '"></div>';
  i;
}


document.write(html);