function sum(numbers) {
  let sum = 0;
  for (const num of numbers) {
    sum += num;

  }
  return sum;
}


let args = (process.argv.slice(2));
args = args.map(function(number) {
  return Number(number);
});

console.log(sum(args));