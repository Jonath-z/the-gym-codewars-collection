function parseInt(string) {
  //   ref object
  const refObject = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    ten: 10,
    eleven: 11,
    twelve: 12,
    thirteen: 13,
    fourteen: 14,
    fifteen: 15,
    sixteen: 16,
    seventeen: 17,
    eighteen: 18,
    nineteen: 19,
    twenty: 20,
    thirty: 30,
    forty: 40,
    fifty: 50,
    sixty: 60,
    seventy: 70,
    eighty: 80,
    ninety: 90,
    hundred: 100,
    thousand: 1000,
    million: 1000000,
  };

  //   split the string number
  let splitedString = string.split(" ");
  const result = [];

  function findComplexValue(value) {
    if (value.length === 1 && !value[0].includes("-")) {
      return refObject[subString[0]] + refObject[subString[1]];
    } else if (value.length === 1 && value[0].includes("-")) {
      let subString = value[0].split("-");
      console.log({ valueFromObject: refObject[subString[0]] });
      return refObject[subString[0]] + refObject[subString[1]];
    } else if (value.length > 1 && !value[0].includes("-")) {
      console.log({
        value,
        isContainsDash: value[0].includes("-"),
        input: string,
      });
      console.log({ fromObje: [refObject[value[0]], refObject[value[1]]] });
      return refObject[value[0]] * refObject[value[1]];
    }
    //     else {
    //       if(subString.length > 1){
    //         console.log({input: string});
    //         let sum = (refObject[value[0]] + refObject[subString[1]]) * refObject[value[1]];
    //         return sum
    //       }else{
    //         return refObject[subString[0]] * refObject[value[1]]
    //       }
    //     }
  }

  //   block to review
  if (splitedString.length === 1) {
    const subSplitedString = splitedString[0].split("-");

    if (
      subSplitedString.length === 1 &&
      refObject[splitedString[0]] !== undefined
    ) {
      result.push(refObject[splitedString[0]]);
    } else if (subSplitedString.length > 1) {
      result.push(findComplexValue(splitedString));
    }
  }

  //   block to review
  if (splitedString.length === 2 && refObject[splitedString[1]] !== undefined) {
    result.push(findComplexValue(splitedString));
  }

  if (splitedString.length <= 2) {
    return result[0];
  } else {
    console.log({ greaterInput: string });
    const newResult = splitedString
      .filter(
        (str) =>
          str !== "hundred" &&
          str !== "thousand" &&
          str !== "million" &&
          str !== "and"
      )
      .map((split) => {
        if (!split.includes("-")) {
          return refObject[split];
        } else {
          console.log({ withDash: split });
          return findComplexValue([split]);
        }
      })
      .join("");

    console.log({ newResult, toNumber: Number(newResult) });

    return Number(newResult);
  }
}
