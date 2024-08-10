console.log('task-04');
console.log('');

type CountTotalSalary = (employees: {}) => number;

const countTotalSalary: CountTotalSalary = function (employees) {
  return Object.values(employees).reduce((sum: number, el) => {
    return (sum += el as number);
  }, 0);
};

export {};

console.log(countTotalSalary({})); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  })
); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  })
); // 400
