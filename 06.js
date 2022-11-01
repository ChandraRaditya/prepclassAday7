function printNumber(start, end) {
  const newArr = [];
  for (let i = start; i <= end; i++) {
    newArr.push(i);
  }

  console.log(newArr.join(", "));
}

printNumber(4, 12);
