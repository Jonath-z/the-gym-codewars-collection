class G964 {
  digPow = (n, p) => {
    if (n < 0 || p < 0) return -1;
    // your code
    const SUM = n
      .toString()
      .split("")
      .map((digit, index) => Math.pow(parseInt(digit), p + index))
      .reduce((a, b) => a + b, 0);

    const K_number = SUM / n;

    if (!Number.isInteger(K_number)) return -1;

    return K_number;
  };
}

const g964 = new G964();

export default g964;
