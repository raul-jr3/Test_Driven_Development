function move_neg_to_end(a, n){
  result = [];
  let k = 0;
  for (let i = 0; i < n; i++){
    if (a[i] > 0){
      result[k] = a[i];
      k++;
    }
  }
  for (let i = 0; i < n; i++){
    if (a[i] < 0){
      result[k] = a[i];
      k++;
    }
  }
  return result;
}

module.exports = move_neg_to_end; 
