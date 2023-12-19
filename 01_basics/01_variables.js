const accountId = 234960
let accountEmail = "jaykhandekar@gmail.com"
var accountPassword = "12345"
accountCity = "Jaiput"
let accountState;

// accountId = 2 // not allowed

accountEmail = "jk@gmail.com"
accountPassword = "456789"
accountCity = "Mumbai"


console.log(accountId);

/*
prefer not to use var
because of issue in block scope in block scope
*/



console.table([accountId, accountEmail, accountPassword, accountCity, accountState])