function XO(str) {
  const x = str.match(/x/gi);
  const o = str.match(/o/gi);
  return (x && x.length) === (o && o.length);
}

// This function checks if a string has the same amount of 'x's and 'o's. Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false


console.log(XO('xo')) // true
console.log(XO("xxOo")) // true
console.log(XO("xxxm")) // false
console.log(XO("Oo")) // false
console.log(XO("ooom")) // false
