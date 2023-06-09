export const mergeSort = (array) => {
  const length = array.length

  if (length <= 1) return array

  const mid = Math.floor(length / 2)
  const left = array.slice(0, mid)
  const right = array.slice(mid)

  return merge(mergeSort(left), mergeSort(right))
}

const merge = (arrLeft, arrRight) => {
  const arrSorted = []
  let leftLength = arrLeft.length
  let righLength = arrRight.length
  let leftIndex = 0
  let rightIndex = 0

  while (leftIndex < leftLength && rightIndex < righLength) {
    arrLeft[leftIndex] < arrRight[rightIndex]
      ? arrSorted.push(arrLeft[leftIndex++])
      : arrSorted.push(arrRight[rightIndex++])
  }

  return [
    ...arrSorted,
    ...arrLeft.slice(leftIndex),
    ...arrRight.slice(rightIndex)
  ]
}

// Test
// const arr = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]
// const sorted = mergeSort([...new Set(arr)])
// console.log(sorted)
