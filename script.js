function trailingZeros(n) {
  let count = 0;
  for (let i = 5; n / i >= 1; i *= 5) {
    count += Math.floor(n / i);
  }
  return count;
}

function getFactorialInput() {
  const input = prompt("Enter a positive integer:");
  const num = parseInt(input);

  if (isNaN(num) || num <= 0) {
    alert("Please enter a valid positive integer.");
  } else {
    const result = trailingZeros(num);
    alert(`Number of trailing zeros in ${num}! is: ${result}`);
  }
}
