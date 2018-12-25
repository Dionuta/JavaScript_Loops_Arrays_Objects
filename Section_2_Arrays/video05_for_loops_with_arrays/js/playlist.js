var playList = [
  'I Did It My Way',
  'Respect',
  'Imagine',
  'Born to Run',
  'Louie Louie',
  'Maybellene'
];


function print(message) {
  document.write(message);
}

// Make a list from array that is passed
function printList (list) {
   var listHTML = '<ol>';
  for ( var i = 0; i < list.length; i += 1) {
     listHTML += '<li>' + list[i] +  '</li>';
     }
   
    listHTML += '</ol>';
     print(listHTML);
}

playList.push('Money');

printList(playList);



