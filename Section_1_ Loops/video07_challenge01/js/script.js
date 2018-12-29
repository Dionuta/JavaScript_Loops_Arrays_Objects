let html = ' ';

//creats a random  rgb colored div with a for loop
for (let i = 0; i <= 10; i += 1) {
  let red = Math.floor(Math.random() * 256 );
  let blue = Math.floor(Math.random() * 256 );
  let green = Math.floor(Math.random() * 256 );
  let rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
  html += '<div style="background-color:' + rgbColor + '"></div>';
  i;
}


document.write(html);