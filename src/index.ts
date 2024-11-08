import { getData } from "./get-data.js";
import { UserData } from "./constants.js";

const { COMMENTS_URL } = UserData;

getData<UserData.User[]>(COMMENTS_URL)
  .then((data) => {
    data.forEach((el: UserData.User) => {
        console.log(`ID: ${el.id}, Email: ${el.email} `);
    });
  });