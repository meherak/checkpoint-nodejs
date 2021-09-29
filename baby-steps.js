let arr = process.argv;
let sum = arr.filter((e, i) => i >= 2).reduce((acc, e) => acc + +e, 0);
console.log(sum);
