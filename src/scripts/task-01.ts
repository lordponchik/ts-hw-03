console.log('task-01');

interface IUser {
  [key: string]: number | string | boolean;
}

const user: IUser = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

user.mood = 'happy';

user.hobby = 'skydiving';

user.premium = false;

const userKeys: string[] = Object.keys(user);

for (const value of userKeys) {
  console.log(`${value}: ${user[value]}`);
}

export {};
