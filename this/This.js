// const user = {
// name: "Aza",
// age: 20,
// sayMyName() {
// console.log(this["name"]);
// }
// }
// console.log(user);
// user.sayMyName()

// const person = Object.assign({}, user)
// person.name = "Mat"

// person.sayMyName()
// user.sayMyName()

// const global = () => {
// console.log(this)
// }
// global()
// console.log(this);

// function hello() {
//   console.log("and", this);
// }


const person = {
  name: "Vladilen",
  age: 25,
  city: "bish",
  previouseAdress: {
    country: "Russ"
  },
  logInfo: function (job, phone) {
    console.group(this.name);
    console.log(`Name is ${this.name}`);
    console.log(`age is ${this.age}`);
    console.log(`city is ${this.city}`);
    console.log(`Job is ${job}`);
    console.log(`Phone is ${phone}`);
    console.groupEnd();

  }
}
person.logInfo()
console.log(person);

const lena = {
  name: "Elena",
  age: 23,
  city: "Moskva",
}
person.logInfo.apply(lena, ['Front-end', '55555555'])
console.log(lena);
