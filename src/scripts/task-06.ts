console.log('task-06');
console.log('');

type Products = { name: string; price: number; quantity: number }[];
type CalculateTotalPrice = (allProducts: Products, productName: string) => number;

const products: Products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];

const calculateTotalPrice: CalculateTotalPrice = function (allProdcuts, productName) {
  let total: number = 0;

  for (const { name, price, quantity } of allProdcuts) {
    if (productName === name) {
      total = price * quantity;
    }
  }

  return total;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(calculateTotalPrice(products, 'Радар')); // 5200

console.log(calculateTotalPrice(products, 'Дроид')); // 2800

export {};
