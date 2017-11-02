function solution(N) {
    // write your code in JavaScript (Node.js 6.4.0)
    let pow = Math.pow(2, 31);
    let acc = 0;
    let maxGap = 0;
    let currGap = 0;
    let capturing = false;

    while (pow >= 1) {
      if (acc + pow <= N) { // one
        acc += pow;
        if (!capturing) {
          capturing = true;
        } else {
          if (currGap > maxGap) {
            maxGap = currGap;
          }
          currGap = 0;
        }
      } else { // zero
        if (capturing) {
          currGap += 1;
        }
      }

      pow /= 2;
    }

    return maxGap;
}


console.log(solution(74901729));
