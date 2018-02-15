function addition(a, b){
  return a + b;
}

function sub(a, b){
  return a - b;
}

function divide(a, b){
  return a / b;
}

function multiply(a, b){
  return a * b;
}

function maximum(a, b){
  if (a > b){
    return a;
  }
  else{
    return b;
  }
}

function minimum(a, b){
  if ( a < b ){
    return a;
  }
  else{
    return b;
  }
}

function length(a){
  let count = 0;
  for (let i = 0; i < a.length; i++){
    count++;
  }
  return count;
}

module.exports = {
  addition : addition,
  sub : sub,
  divide : divide,
  multiply : multiply,
  maximum : maximum,
  minimum : minimum,
  length : length
};
