function solution(A) {
  let firstElem = 1,
      lastElem = A.length + 1,
      members = A.length + 1,
      s = (members / 2) * (firstElem + lastElem),
      acc = 0;

  for (var i = 0; i < A.length; i++) {
    acc += A[i];
  }

  return s - acc;
}

console.log(solution([2, 3, 1, 5]));
