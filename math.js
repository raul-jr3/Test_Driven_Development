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

function len(a){
  let count = 0;
  for (let i = 0; i < a.length; i++){
    count++;
  }
  return count;
}

function addArray(a, b){
  if (len(a) != len(b)){
    console.log("shapes do not match");
    return false;
  }
  let result = [];
  for (let i = 0; i < len(a); i++){
      result[i] = a[i] + b[i];
  }
  return result;
}

function subArray(a, b){
  if (len(a) != len(b)){
    console.log("shapes do not match");
    return false;
  }
  let result = [];
  for (let i = 0; i < len(a); i++){
    result[i] = a[i] - b[i];
  }
  return result;
}

function maxNum(a){
  let max = a[0];
  for(let i = 0; i < len(a); i++){
    if (a[i] > max){
      max = a[i];
    }
  }
  return max;
}
function minNum(a){
  let min = a[0];
  for(let i = 0; i < len(a); i++){
    if (a[i] < min){
      min = a[i];
    }
  }
  return min;
}


module.exports = {
  addition : addition,
  sub : sub,
  divide : divide,
  multiply : multiply,
  maximum : maximum,
  minimum : minimum,
  len : len,
  addArray : addArray,
  subArray : subArray,
  maxNum : maxNum,
  minNum : minNum
};
