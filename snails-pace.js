// A snail crawls up a column. Each day, it crawls up some distance. At night, she sleeps and slides down some distance.
// Assuming she crawls up more than she slides down over 24 hours, this function returns the number of days the snail needs to reach the top of the column.
// It takes three arguments: height of the column, distance the snail crawls during the day, and distance the snail slides down at night.

function snail(column, day, night) {
  return Math.ceil(1 + ((column - day) / (day - night)))
}

console.log(snail(3,2,1)) // 2
console.log(snail(10,3,1)) // 5
console.log(snail(10,3,2)) // 8
console.log(snail(100,20,5)) // 7
console.log(snail(5,10,3)) // 1
