function oddNumber(max) {
  const newArr = [];
  let nums = 1;

  while (nums <= max) {
    if (nums % 2 === 1) {
      newArr.push(nums);
    }
    nums++;
  }

  console.log(newArr.join(", "));
}

oddNumber(100);
