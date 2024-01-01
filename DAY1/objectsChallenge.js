const person1 = {
  fullName: "John Doe",
  mass: 70,
  height: 1.75,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

const person2 = {
  fullName: "Jane Smith",
  mass: 65,
  height: 1.68,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return +this.bmi;
  },
};

person1.calcBMI();
person2.calcBMI();

// methods for calculating rounded decimals for 2 digits after the decimal point
// console.log(+person1.bmi.toFixed(2));
// console.log(+person2.bmi.toFixed(2));
// console.log(Math.round(person1.bmi * 100) / 100);
// console.log(Math.round(person2.bmi * 100) / 100);

if (person1.bmi > person2.bmi) {
  console.log(
    `${person1.fullName}'s BMI (${+person1.bmi.toFixed(2)}) is higher than ${
      person2.fullName
    }'s (${+person2.bmi.toFixed(2)})!`
  );
} else if (person2.bmi > person1.bmi) {
  console.log(
    `${person2.fullName}'s BMI (${+person2.bmi.toFixed(2)}) is higher than ${
      person1.fullName
    }'s (${+person1.bmi.toFixed(2)})!`
  );
}
