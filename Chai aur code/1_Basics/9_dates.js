//! VIDEO NO 13 :: DATES IN JAVASCRIPT

//! Date Functions
let myDate = new Date();
console.log(typeof myDate); // object
console.log(myDate);
console.log(myDate.toString()); // Day, Date, Time, Time Zone
console.log(myDate.toDateString()); // Day and Date
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString()); // Date in MM/DD/YY
console.log(myDate.toLocaleTimeString()); // Time
console.log("-------------------------");

let myCreatedDate = new Date(2024, 3, 24); // YYYY, MM , DD (O-JAN , 3-APRIL, 11-DECEMBER)
console.log(myCreatedDate.toDateString());
let myDateTime = new Date(2055, 11, 22, 4, 23); // YYY, MM , DD , HOUR, MIN
console.log(myDateTime.toLocaleString());
let mySimpleDate = new Date("2-15-2040");
console.log(mySimpleDate.toLocaleDateString());
console.log("------------------------");

//! Compare Time (concept not cleared)
let myTimeStamp = Date.now();
