function solution(A) {
  let val,
      pairFound;
  for (var i = 0; i < A.length; i++) {
    if (A[i] !== -1) {
      val = A[i];
      A[i] = -1;
      pairFound = false;
      for (var j = i + 1; j < A.length; j++) {
        if (A[j] === val) {
          A[j] = -1;
          pairFound = true;
          break;
        }
      }
      if (!pairFound) {
        return val;
      }
    }
  }
}

console.log(solution([9, 3, 9, 3, 9, 7, 9]));
