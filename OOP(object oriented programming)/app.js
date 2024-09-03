// ================== class ====================== //

// What is a class?
// So, what exactly is a class? It's not an entirely new language, as one might think.
// Let’s learn what a class really is.
// In JavaScript, a class is a kind of function.

// ******** Proof ********
class User {
    constructor(name) {
        this.name = name;
    }
    sayHi() {
        alert(this.name);
    }
}

console.log(typeof User); // function
console.log(User === User.prototype.constructor); // true
console.log(User.prototype.sayHi); // the code of the sayHi method
console.log(Object.getOwnPropertyNames(User.prototype)); // (2) ['constructor', 'sayHi']





// class User {
//     constructor(name) {
//         this.name = name
//     }
//     sayHi() {
//         alert(this.name);
//     }
// }


// const user = User("Hammad") // Error: Class constructor User cannot be invoked without 'new'
// const user = new User("Hammad");

// console.log(user)