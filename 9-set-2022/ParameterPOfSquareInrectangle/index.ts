export const perimeter = (n: number): number => {
  // your code
  const fibonacciSequence = (): number[] => {
    const sequence: number[] = [];

    let nextTerm = 0;
    let n1 = 1;
    let n2 = 1;

    for (let i = 0; i < n + 1; i++) {
      sequence.push(n1);
      nextTerm = n1 + n2;
      n1 = n2;
      n2 = nextTerm;
    }

    return sequence;
  };

  console.log({ sequence: fibonacciSequence(), n });

  return fibonacciSequence().reduce((a, b) => a + b, 0) * 4;
};
