/*
  Вам потрібно реалізувати інтерфейс KeyValuePair, який описує пару ключ-значення. 
  Використовуйте generics, щоб цей інтерфейс міг працювати з будь-якими типами ключів та значень.
*/

interface KeyValuePair<T, K> {
  key: T;
  value: K;
}

// function fn<T, K>(key: T, value: K) {
//   return { key, value };
// }

// second variant чтобы указать тип возвращенных данных

function fn<T, K>(key: T, value: K): KeyValuePair<T, K> {
  return { key, value };
}

export {};
