// Before we starting OOP we should clear constructor

// function User(name) {
//     this.name = name;
//     this.isVerified = true

// }

// let user1 = new User("Hammad Ur Rehman");
// let user2 = new User("Ali Khan");
// let user3 = new User("Muhammad");

// console.log(user1);
// console.log(user2);
// console.log(user3);


// function User() {
//     alert(new.target);
//   }

//   // without "new":
//   User(); // undefined

//   // with "new":
//   new User(); // function User { ... }


// function User(name) {
//     if(!new.target) {
//         return new User(name)
//     }
//     this.name = name;
// }

// let user = User("Hammad Ur Rehman");
// console.log(user);

// function BigUser() {
//     this.name = "John";
//     return { name: "Hammad" }
// }

// console.log(new BigUser().name)


// function SmallUser() {
//     this.name = "John";
//     return
// }

// console.log(new SmallUser().name)


// function Test() {
//     console.log("Ran")
// }

// const test = new Test;

// console.log(test);



// function User(name) {
//     this.name = name;

//     this.sayHi = function() {
//         console.log("My name is ", this.name)
//     }
// }

// const user = new User("Hammad");

// console.log(user.sayHi())






// // function A() { }
// // function B() { }

// // let a = new A();
// // let b = new B();

// // alert(a == b); // true

// let obj = {};

// function A() { return obj; }
// function B() { return obj; }

// alert( new A() == new B() ); // true




// function Calculator() {
//     this.read = function () {
//         const a = prompt("Enter first number");
//         const b = prompt("Enter second number");
//         this.a = a;
//         this.b = b;
//         console.log(this.a)
//         console.log(this.b)
//     }

//     this.sum = function () {
//         return Number(this.a) + Number(this.b);
//     }

//     this.mul = function () {
//         return Number(this.a) * Number(this.b);
//     }
// }

// let calculator = new Calculator();
// console.log(calculator.read());
// console.log(`Your sum is: ${calculator.sum()}`);
// console.log(`Your mul is: ${calculator.mul()}`);



// function Accumulator(startingValue) {
//     this.value = startingValue;

//     this.read = function () {
//        const result = this.value = this.value + +prompt('How much to add', 0);
//        console.log(result);
//     }
// }

// const accumulator = new Accumulator(1);
// accumulator.read();



// function name_shortner(name, maxLength) {
//     if(name.length > maxLength) {
//         return name.substring(0, maxLength) + "..."
//     }
// }

// console.log(name_shortner("Maximilian Alexander Sterling III", 6));