function fibonacci(n) {
  function rec(n, memo = { 0: 0, 1: 1 }) {
    if (n in memo) {
      return memo[n];
    }
    memo[n] = rec(n - 1, memo) + rec(n - 2, memo);
    return memo[n];
  }

  return rec(n);
}
