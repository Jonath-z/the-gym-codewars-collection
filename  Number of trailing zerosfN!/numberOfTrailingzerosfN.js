//  time complexity O(n)

function zeross(n) {
  let traillingZeros = 0;

  for (let i = 1; i < n; i++) {
    const check = Math.trunc(n / Math.pow(5, i));

    if (check > 0) {
      traillingZeros += check;
    }
  }

  return traillingZeros;
}

/* 
 the code below resolve the time complexity of the code above !!!! using Recursion.
 tested on n = 4617, and found the trailling zero in less then 5ms , while the above code crushed on 1,2 s time out!
*/

function zerosFactored(n) {
  let traillingZeros = 0;

  while ((n = Math.floor(n / 5))) {
    traillingZeros += n;
  }

  return traillingZeros;
}

/* code refactored using recursion :
   time complexity constant O(n) / n = 4617 with 1151 trailling zeros resolved in around 5ms ,
   n = 5 resolved in 3ms with 1 trailling zero
*/

function zeros(n) {
  return Math.floor(n / 5) <= 0
    ? 0
    : Math.floor(n / 5) + zeros(Math.floor(n / 5));
}

export default zerosFactored;
