// let user =
//   [1, 2, 3, 4, 5,2,3,4]
// console.log(user[user.length -2]);

// user.auth =false
// console.log(user);

// 


// let symbol = Symbol("Alex");  
// let symbol1 = Symbol("Alex");
// console.log(symbol === symbol1);

let Aza = {
  name: "Aza",
  password: false,
  [Symbol.for("login")]: "AN.SE",
  [Symbol.for("login1")]: "AN.SE"
}
console.log(Aza[Symbol.for("login")]);
console.log(Aza[Symbol.for("login1")]);
console.log(Aza[Symbol.for("login")] == Aza[Symbol.for("login1")]);