console.log('task-07');
console.log('');

enum TypeTransaction {
  DEPOSIT = 'deposit',
  WITHDRAW = 'withdraw',
}

interface ITransaction {
  id: number;
  type: TypeTransaction;
  amount: number;
}

interface IAccount {
  balance: number;
  transactions: ITransaction[];
  createTransaction(amount: number, type: TypeTransaction): ITransaction;
  deposit(amount: number): void;
  withdraw(amount: number): void;
  getBalance(): number;
  getTransactionDetails(id: number): ITransaction | string;
  getTransactionTotal(type: TypeTransaction): number;
}

const account: IAccount = {
  balance: 0,
  transactions: [],

  createTransaction(amount, type) {
    const id = this.transactions.length + 1;

    return { id, amount, type };
  },

  deposit(amount) {
    this.balance += amount;
    this.transactions.push(this.createTransaction(amount, TypeTransaction.DEPOSIT));
  },

  withdraw(amount) {
    if (amount > this.balance) {
      console.log('Недостаточно средств');
      return;
    }

    this.balance -= amount;
    this.transactions.push(this.createTransaction(amount, TypeTransaction.WITHDRAW));
  },

  getBalance() {
    return this.balance;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    return this.transactions.find(el => el.id === id) || `id: ${id} не найден`;
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    return this.transactions
      .filter(el => el.type === type)
      .reduce((sum, el) => {
        return (sum += el.amount);
      }, 0);
  },
};

account.deposit(400);
console.log(account.getBalance());
console.log('');
account.withdraw(500);
console.log(account.getBalance());
console.log('');
account.withdraw(100);
console.log(account.getBalance());
console.log('');
account.deposit(400);
account.deposit(400);
account.deposit(400);

console.log(account.getTransactionDetails(2));
console.log('');
console.log(account.getTransactionDetails(7));
console.log('');

console.log(account.getTransactionTotal(TypeTransaction.DEPOSIT));

export {};
