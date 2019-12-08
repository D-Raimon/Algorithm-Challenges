// In this kata, you are asked to square every digit of a number.
// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
// Note: The function accepts an integer and returns an integer

// My Solution:
function squareDigits(num){
  const nums = Array.from(num.toString()).map(Number)
  const squaredNums = (nums) => {
    return nums.map((num) => {
      return Math.pow(num, 2);
    })
  }
  const squareDigits = (squaredNums(nums))
  return (+squareDigits.join(''))
}