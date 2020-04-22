// given an unsorted array, find the
// maximum difference between the
// successive elements in its sorted form

// usArr = [3,1,7,4,2]
// maxDiff = 6

// // O(nlog(n))
// const maxGap = usArr => {
//   if (usArr.length < 2) return 0;
//   usArr.sort((a, b) => a - b);
//   console.log(usArr);
//   let maxDiff = 0;
//   for (let i = 1; i < usArr.length; i++) {
//     let diff = usArr[i] - usArr[i - 1];
//     maxDiff = Math.max(diff, maxDiff);
//   }
//   return maxDiff;
// };
// let arr = [3];
// console.log(maxGap(arr));

// O(n)
const maxGap = usArr => {

};

let arr = [3, 1, 7, 4, 2];
maxGap(arr);
