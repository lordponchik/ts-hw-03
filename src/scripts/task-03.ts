console.log('task-03');
console.log('');

type FindBestEmployee = (employees: {}) => string;

const findBestEmployee: FindBestEmployee = function (employees) {
  const keysObj: string[] = Object.keys(employees);
  const valuesObj: number[] = Object.values(employees);

  return keysObj[valuesObj.indexOf(Math.max(...valuesObj))];
};

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  })
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  })
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  })
); // lux

export {};
