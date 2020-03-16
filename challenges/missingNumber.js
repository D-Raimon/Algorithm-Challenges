// Create a function that takes two arrays of numbers. The first array complete and the second array
// missing a number. Return the missing number from the second array.

// ex: const missingNum([2,3,4,5,6], [2,3,5,6]) => {
//   return the missing number
// }

const missingNum = (numArrOne, numArrTwo) => {
  const sumArrOne = numArrOne.reduce((x, y) => x + y, 0)
  const sumArrTwo = numArrTwo.reduce((x, y) => x + y, 0)
  return (sumArrOne - sumArrTwo)
}
