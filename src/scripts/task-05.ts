console.log('task-05');
console.log('');

type Products = {
  name: string;
  price: number;
  quantity: number;
}[];
type GetAllPropValues = (arr: object[], prop: string) => string[] | number[];

const products: Products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];

const getAllPropValues: GetAllPropValues = function (arr, prop) {
  const array: string[] | number[] = [];

  for (const iterator of arr) {
    if (prop in iterator) {
      array.push(iterator[prop as keyof typeof iterator]);
    } else return [];
  }

  return array;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']

console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]

console.log(getAllPropValues(products, 'category')); // []

export {};
