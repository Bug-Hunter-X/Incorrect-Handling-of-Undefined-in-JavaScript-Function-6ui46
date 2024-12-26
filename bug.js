function foo(a, b) {
  if (a === null || b === null) {
    return null; //Incorrect, should handle undefined
  }
  return a + b;
}

console.log(foo(1, undefined)); //Outputs null instead of NaN