// recursive staircase problem
// n=4 {[0,1,2,3,4], [0,2,3,4],
// [0,1,3,4], [0,1,2,4], [0,2,4]}
// f(n)=5
// f(n) = f(n-1)+f(n-2)

var numWays = [];
numWays[0] = 1;
numWays[1] = 1;
function addNumWays(stepNum) {
  if (numWays.length > stepNum) {
    return parseInt(numWays[stepNum]);
  }
  numWays[stepNum] = addNumWays(stepNum - 1) + addNumWays(stepNum - 2);
  return numWays[stepNum];
}
// console.log(addNumWays(4));

// n=4, x= {1,3,5}
// {[0,1,2,3,4], [0,1,4], [0,3,4]}
// f(n)=3

// 0 -- 0 -- 1
// 1 -- 0,1 -- 1
// 2 -- 0,1,2 -- 1
// 3 -- 0,1,2,3; 0,3 -- 2
// 4 -- 0,1,2,3,4; 0,1,4; 0,3,4 -- 3
// 5 -- 0,1,2,3,4,5; 0,3,4,5; 0,1,4,5; 0,1,2,5; 0,5 -- 5

// function addCrazyNumWays(stepNum, possSteps) {
//   let numWays = 0;
//   possSteps.forEach(possStep => {
//     if (stepNum >= possStep)
//       if (stepNum / possStep > 0) {
//         numWays++;
//       }
//   });
//   return numWays;
// }

// console.log(addCrazyNumWays(3, [1, 3, 5]));

function addCrazyNumWays(stepNum, possSteps) {
  if (stepNum == 0) {
    return 1;
  }
  let total = 0;
  possSteps.forEach(possStep => {
    if (stepNum - possStep >= 0)
      total += addCrazyNumWays(stepNum - possStep, possSteps);
  });
  return total;
}

console.log(addCrazyNumWays(3, [1, 3, 5]));
