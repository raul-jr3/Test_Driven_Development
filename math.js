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

module.exports = {
  addition : addition,
  sub : sub,
  divide : divide,
  multiply : multiply,
  maximum : maximum
};
