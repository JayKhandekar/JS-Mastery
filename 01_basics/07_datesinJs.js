// Dates

let myDate = new Date(
)

// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toTimeString());

console.log(typeof myDate);

// let myCreatedDate = new Date(2024, 10, 14);

// console.log(myCreatedDate.toDateString());


// let myCreatedDate1 = new Date(2024, 10, 15, 3, 9
// );

// console.log(myCreatedDate1.toLocaleString());


// let myCreatedDate2 = new Date("2024-04-23");

// console.log(myCreatedDate2.toLocaleString());



let myCreatedDate3 = new Date("04-23-2024");

// console.log(myCreatedDate3.toLocaleString());



let myTimeStamp = Date.now(
)


// console.log(myTimeStamp);
// console.log(myCreatedDate3.getTime());


// console.log(Math.floor(Date.now()/1000));


let newDate = new Date(
);
// console.log(newDate.getMonth());
// console.log(newDate.getDay());


newDate.toLocaleString('default',{
    weekday: "long",
   
 } );

