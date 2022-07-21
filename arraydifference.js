// This function subtracts one list from another and returns the result.
// arrayDiff([1,2],[1]) == [2]

// If a value is present in b, all of its occurrences are removed from the other:
// arrayDiff([1,2,2,2,3],[2]) == [1,3]

const arrayDiff = (a, b) => {
  return a.filter(e => !b.includes(e));
}

console.log(arrayDiff([1,2], [1]))  // [2]
console.log(arrayDiff([1,2,2], [1]))  // [2,2]
console.log(arrayDiff([1,2,2], [2]))  // [1]
console.log(arrayDiff([1,2,2], []))  // [1,2,2]
console.log(arrayDiff([], [1,2]))  // []
console.log(arrayDiff([1,2,3]))  // [1,2]
