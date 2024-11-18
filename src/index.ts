
import { getData } from "./get-data.js";
import { UserData } from "./constants.js";
import { normalizeData } from "./normalize-data.js";
import { posts } from "./posts.js";
import {totalPrice} from './total-price.js'

const { COMMENTS_URL } = UserData;

getData<UserData.User[]>(COMMENTS_URL)
  .then((data) => {
    data.forEach((el: UserData.User) => {
        console.log(`ID: ${el.id}, Email: ${el.email} `);
    });
  });

console.log(normalizeData(posts));

const price = totalPrice({ price: 100000, discount: 25, isInstallment: true, months: 12 });
console.log(price); // 6250
