import { COMMENTS_URL } from "./constants.js";

interface User {
    id: number,
    email: string,
};

const getData = async<T>(url: string): Promise<T> => {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Ошибка ${response.status}`);
      }
    const data = await response.json() as T;
    return data
};

getData<User[]>(COMMENTS_URL)
  .then((data) => {
    data.forEach((el: User) => {
        console.log(`ID: ${el.id}, Email: ${el.email} `);
    });
  });