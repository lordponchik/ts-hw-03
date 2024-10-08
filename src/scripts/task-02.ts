console.log('task-02');

type CountProps = (obj: {}) => number;

const countProps: CountProps = function (obj) {
  return Object.keys(obj).length;
};

console.log(countProps({})); // 0

console.log(countProps({ name: 'Mango', age: 2 })); // 2

console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3

export {};
