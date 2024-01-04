function getSum(...digits) {
  try {
    if (digits.length === 1 && Array.isArray(digits[0]))
      return getSum(...digits[0]);
    return digits.reduce((sum, digit) => {
      if (
        typeof digit === "number" &&
        typeof digit !== "boolean" &&
        typeof digit !== "string" &&
        !isNaN(digit) &&
        (sum += digit)
      )
        return +sum;
      else throw new Error("Please provide number or an array of numbers");
    }, 0);
  } catch (error) {
    return "Please provide number or an array of numbers";
  }
}

module.exports = getSum;
