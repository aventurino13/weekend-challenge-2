

function calculation(object){
  var sum = 0;
  var type = object.type;
  switch(type) {
    case add:
      sum = object.x + object.y;
      break;
    case sub:
      sum = object.x - object.y;
      break;
    case mult:
      sum = object.x * object.y;
      break;
    case add:
      sum = object.x + object.y;
      break;
  }
  return sum;
}

module.exports = calculation;
