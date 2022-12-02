function VigenèreCipher(key, abc) {
  function getKeyLettersPosition() {
    return key.split("").reduce((set, val) => {
      if (abc.indexOf(val) !== -1) {
        set.push(abc.indexOf(val) + 1);
      }

      return set;
    }, []);
  }

  this.encode = function (str) {
    const cryptoKey = getKeyLettersPosition();

    const encodedAbc = str.split("").map((letter, index) => {
      if (abc.indexOf(letter) === -1) return letter;

      if (cryptoKey[index]) {
        const jump = abc.indexOf(letter) - 1 + cryptoKey[index];

        if (jump > abc.length - 1) {
          return abc[jump % abc.length];
        }

        return abc[jump];
      } else {
        const jump =
          abc.indexOf(letter) - 1 + cryptoKey[index % cryptoKey.length];

        if (jump > abc.length - 1) {
          return abc[jump % abc.length];
        }

        return abc[jump];
      }
    });

    return encodedAbc.join("");
  };

  this.decode = function (str) {
    const cryptoKey = getKeyLettersPosition();

    const decoded = str.split("").map((letter, index) => {
      if (abc.indexOf(letter) === -1) return letter;
      if (cryptoKey[index]) {
        let jump = abc.indexOf(letter) - cryptoKey[index] + 1;

        if (jump < 0) jump += abc.length;

        return abc[jump];
      } else {
        let jump =
          abc.indexOf(letter) - cryptoKey[index % cryptoKey.length] + 1;

        if (jump < 0) jump += abc.length;

        return abc[jump];
      }
    });

    return decoded.join("");
  };
}

export default VigenèreCipher;
