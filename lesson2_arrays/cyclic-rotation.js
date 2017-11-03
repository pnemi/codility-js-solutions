function solution(A, K) {
  let len = A.length,
      shift = K % len,
      swap, shifted;

  for (var i = 0; i < shift; i++) {
    shifted = A[len - 1];
    for (var j = len - 2; j >= 0; j--) {
      swap = A[j + 1];
      A[j + 1] = A[j];
      A[j] = swap;
    }
    A[0] = shifted;
  }

  return A;
}

console.log(solution([3, 8, 9, 7, 6], 3)); // => [ 9, 7, 6, 3, 8 ]
