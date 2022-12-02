function validParentheses(parens) {
  const stack = [];
  const map = new Map([["(", ")"]]);

  for (let paren of parens.split("")) {
    if (map.has(paren)) {
      stack.push(map.get(paren));
    } else if (paren !== stack.pop()) {
      console.log(stack.length);
      return false;
    }
  }
  return stack.length === 0;
}

export default validParentheses;
