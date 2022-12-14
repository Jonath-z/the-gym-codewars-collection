var lcm = function (...args) {
  if (args.length === 1) {
    return args[0];
  }

  if (args.length === 0) {
    return 0;
  }

  function findGCD(a, b) {
    return !b ? a : findGCD(b, a % b);
  }

  let result = args[0];

  for (let i = 1; i < args.length; i++) {
    result = (args[i] * result) / findGCD(args[i], result);
  }

  return result;
};

export default lcm;
