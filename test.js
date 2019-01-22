'use strict';

const compareStrings = require('./index');


// let r = compareStrings("wolves", "wolveshampton fc");

let r1 = compareStrings(
  "Newcastle Utd - Manchester City",
  "Newcastle United - Man. City"
);
let r2 = compareStrings("Arsenal - Cardiff City", "Arsenal Fc - Cardiff City");
let r3 = compareStrings(
  "Fulham Fc V Brighton & Hove Albion Fc",
  "Fulham - Brighton & Hove"
);
let r4 = compareStrings(
  "Manchester Utd - Burnley",
  "Manchester United v Burnley Fc"
);
let r5 = compareStrings("healed", "help");
let r6 = compareStrings("healed", "sold");
console.log(r1);
console.log(r2);
console.log(r3);
console.log(r4);
// console.log(r5);
// console.log(r6);
