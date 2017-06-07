function getElementsLessThan100AtProperty(obj, key) {
  var output = [];
  for (var k in obj){
    if (k === key){
      for (var i = 0; i < obj[key].length; i++){
        if (obj[k][i] < 100){
          output.push(obj[k][i])
        }
      }
    }
  }
  return output;
}