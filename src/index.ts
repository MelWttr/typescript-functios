import { normalizeData } from "./normalize-data.js";
import { posts } from "./posts.js";
import {totalPrice} from './total-price.js'

console.log(normalizeData(posts));

const price = totalPrice({ price: 100000, discount: 25, isInstallment: true, months: 12 });
console.log(price); // 6250

