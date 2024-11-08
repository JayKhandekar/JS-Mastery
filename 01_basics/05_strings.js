const name = "Jay";
const repoCount = 50;

console.log (name + repoCount + " Value");

// string intropolation

console.log (`Hello my nmae is ${name} and my repo count is ${repoCount} `);


const gameName = new String ("JayPuttin-The-Work");

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.charAt('8'));
console.log(gameName.indexOf('J'));

const newString = gameName.substring(0, 4);

console.log(newString);

const anotherString = gameName.slice(-16, 4);

console.log(anotherString);

const newStringOne = "     TheJay   ";
console.log (newStringOne);
console.log(newStringOne.trim());

const url = "https://jay.com/jay%20khandekar";

url.replace('%20', '-');

console.log(url.replace('%20', '-'));


console.log (url.includes('jay'));


console.log(gameName.split('-'));

console.log(gameName.substring(4,8));


