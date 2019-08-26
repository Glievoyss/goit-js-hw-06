"use strict";
import users from "./users.js";

// Получить массив имен всех пользователей (поле name).
const getUserNames = users => users.map(user => user.name);
console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

//Получить массив объектов пользователей по цвету глаз (поле eyeColor).
const getUsersWithEyeColor = (users, color) =>
  users.filter(user => user.eyeColor === color);
console.log(getUsersWithEyeColor(users, "blue")); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

//Получить массив имен пользователей по полу (поле gender).
const getUsersWithGender = (users, gender) => users.filter(user => user.gender === gender).map(user => user.name);
console.log(getUsersWithGender(users, "male")); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

//Получить массив только неактивных пользователей (поле isActive).
const getInactiveUsers = users => users.filter(user => user.isActive === false);
console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

//Получить пользоваля (не массив) по email (поле email, он уникальный).
const getUserWithEmail = (users, email) => users.find(user => user.email === email);
console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}

//Получить массив пользователей попадающих в возрастную категорию от min до max лет (поле age).
const getUsersWithAge = (users, min, max) => users.filter(user => user.age > min && user.age < max);
console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]
console.log(getUsersWithAge(users, 30, 40)); // [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

//Получить общую сумму баланса (поле balance) всех пользователей.
const calculateTotalBalance = users => users.reduce((totalBalance, user) => totalBalance + user.balance, 0);
console.log(calculateTotalBalance(users)); // 20916

//Массив имен всех пользователей у которых есть друг с указанным именем.
const getUsersWithFriend = (users, friendName) => users.filter(user => user.friends.find(friend => friend === friendName)).map(user => user.name);
console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]


//Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)
const getNamesSortedByFriendsCount = users => [...users].sort((a, b) => a.friends.length - b.friends.length).map(user => user.name);
console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]


//Получить массив всех умений всех пользователей (поле skills), при этом не должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке.

  const getSortedUniqueSkills = users => {
    const arr = [];
     users
      .reduce((allSkills, {skills}) => [...allSkills, ...skills], [])
      .forEach(elem => {
        if (!arr.includes(elem)) {
          arr.push(elem);
        }
      });
    return arr.sort();
  };
  

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]