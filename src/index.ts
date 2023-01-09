/**
 * This is program.
 *
 * By: Igor
 * Version: 1.0
 * Since:   2022-07-21
 */

const MAGIC_NUM = 15
const NUM_ARR = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Process
function findDuplicates(arr: number[]): number[] {
  const sortedArr = arr.slice().sort(function (a, b) {
    return a - b
  })
  const results = []
  for (let counter = 0; counter < sortedArr.length - 1; counter++) {
    if (sortedArr[counter + 1] === sortedArr[counter]) {
      results.push(sortedArr[counter])
    }
  }
  return results
}

// Output
function printSquare(arr: number[]): void {
  console.log(
    `\n${arr[0]} ${arr[1]} ${arr[2]}
${arr[3]} ${arr[4]} ${arr[5]}\n${arr[6]} ${arr[7]} ${arr[8]}`
  )
}

//Process
function isMagic(square: number[]): boolean {
  const hasDuplicates = findDuplicates(square).length === 0
  const rows =
    square[0] + square[1] + square[2] === MAGIC_NUM &&
    square[3] + square[4] + square[5] === MAGIC_NUM &&
    square[6] + square[7] + square[8] === MAGIC_NUM

  const columns =
    square[0] + square[3] + square[6] === MAGIC_NUM &&
    square[1] + square[4] + square[7] === MAGIC_NUM &&
    square[2] + square[5] + square[8] === MAGIC_NUM

  const diagonals =
    square[0] + square[4] + square[8] === MAGIC_NUM &&
    square[2] + square[4] + square[6] === MAGIC_NUM

  return rows && columns && diagonals && hasDuplicates
}

// Process
function magicSquare(
  nums: number[],
  currentSquare: number[],
  index: number
): void {
  if (index === 9 && isMagic(currentSquare)) {
    printSquare(currentSquare)
  } else {
    if (index !== 9) {
      for (let count = 0; count < 9; count++) {
        currentSquare[index] = nums[count]
        magicSquare(nums, currentSquare, index + 1)
      }
    }
  }
}

const arr: number[] = []

console.log('All of the 3x3 Magic Squares: ')
magicSquare(NUM_ARR, arr, 0)

console.log('\nDone.')
