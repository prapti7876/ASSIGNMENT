function bubbleSortDescending(arr) {
    const n = arr.length;
  
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] < arr[j + 1]) {
          // Swap the elements
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
  }
  
  const numbers = [52, 20, 91, 11, 55, 66];
  
  bubbleSortDescending(numbers);
  console.log(numbers); // Output: [9, 6, 5, 5, 2, 1]
  