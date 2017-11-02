function solution(N) {
    // write your code in JavaScript (Node.js 6.4.0)
    let pow = Math.pow(2, 31);
    let acc = 0;
    let maxGap = 0;
    let currGap = 0;
    let capturing = false;
    let str = "";

    while (pow >= 1) {
      if (acc + pow <= N) { // one
        acc += pow;
        str += "1";
        if (!capturing) {
          capturing = true;
        } else {
          if (currGap > maxGap) {
            maxGap = currGap;
          }
          currGap = 0;
        }
      } else { // zero
        str += "0";
        if (capturing) {
          currGap += 1;
        }
      }

      pow /= 2;
    }

    return maxGap;
}


console.log(solution(74901729));
