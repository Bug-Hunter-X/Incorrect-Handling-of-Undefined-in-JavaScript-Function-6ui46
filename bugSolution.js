function foo(a, b) {
  if (a == null || b == null) {
    return NaN; // Correctly handles undefined
  }
  return a + b;
}

console.log(foo(1, undefined)); //Outputs NaN