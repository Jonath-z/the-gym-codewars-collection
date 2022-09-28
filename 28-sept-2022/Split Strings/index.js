function solution(str) {
  return str
    .split(/([a-zA-Z0-9]{1,2})/g)
    .filter((el) => el !== "")
    .map((el) => (el.length === 1 ? el + "_" : el));
}
