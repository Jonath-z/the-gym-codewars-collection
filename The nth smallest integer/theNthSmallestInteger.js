function nthSmallest__(arr, n) {
  // your code
  const newArr = [...new Set(arr.sort((a, b) => a - b))];

  return n > newArr.length ? null : newArr[n - 1];
}

// with quick sort algorithm time complexity over 1.2 s

function nthSmallest_(arr, n) {
  // your code

  const quickSort = (newArray) => {
    if (newArray.length === 1) return newArray;

    const pivot = newArray[newArray.length - 1];
    const leftArray = [];
    const rightArray = [];

    for (let i = 0; i < newArray.length - 1; i++) {
      if (newArray[i] > pivot) {
        rightArray.push(newArray[i]);
      } else {
        leftArray.push(newArray[i]);
      }
    }

    if (leftArray.length > 0 && rightArray.length > 0) {
      return [...quickSort(leftArray), pivot, ...quickSort(rightArray)];
    } else if (leftArray.length > 0) {
      return [...quickSort(leftArray), pivot];
    } else {
      return [pivot, ...quickSort(rightArray)];
    }
  };

  const newArr = [...new Set(quickSort(arr))];

  return n > newArr.length ? null : newArr[n - 1];
}

// removing odd duplication before quick sorting , time complexity 800 ms

export function nthSmallest(arr, n) {
  // your code

  const quickSort = (array) => {
    const newArray = [...new Set(array)];
    if (newArray.length === 1) return newArray;

    const pivot = newArray[newArray.length - 1];
    const leftArray = [];
    const rightArray = [];

    for (let i = 0; i < newArray.length - 1; i++) {
      if (newArray[i] > pivot) {
        rightArray.push(newArray[i]);
      } else {
        leftArray.push(newArray[i]);
      }
    }

    if (leftArray.length > 0 && rightArray.length > 0) {
      return [...quickSort(leftArray), pivot, ...quickSort(rightArray)];
    } else if (leftArray.length > 0) {
      return [...quickSort(leftArray), pivot];
    } else {
      return [pivot, ...quickSort(rightArray)];
    }
  };

  const newArr = quickSort(arr);

  return n > newArr.length ? null : newArr[n - 1];
}
