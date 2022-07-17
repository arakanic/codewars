// This function returns the nth power of the element in the array with the index n.
index([1, 2, 3, 4],2)  // 9
index([1, 3, 10, 100],3)  // 1000000
index([1, 2],3)  // -1
index([1,1,1,1,1,1,1,1,1,1], 9)  // 1
index([1,1,1,1,1,1,1,1,1,2], 9)  // 512
index([29,82,45,10], 3)  // 1000
index([6,31], 3)  // -1
index([75,68,35,61,9,36,89,0,30], 10)  // -1

function index(array, n){
  return array.length > n ? array[n] ** n : -1
}
