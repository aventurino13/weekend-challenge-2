

function calculation(object){
  var sum = 0;
  var type = object.type;
  var x = parseInt(object.x);
  var y = parseInt(object.y);

  switch(type) {
    case 'add':
      sum = x + y;
      break;
    case 'sub':
      sum = x - y;
      break;
    case 'mult':
      sum = x * y;
      break;
    case 'div':
      sum = x + y;
      break;
  }
  return sum;
}

module.exports = calculation;
