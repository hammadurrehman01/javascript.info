// let userData = {
//     name: "John",
//     age: 18,
//     isAdmin: true
// }
// delete userData.age
// console.log(userData);

// We can also use multiword property names, but then they must be quoted:

// let userData = {
//     "full name": "Hammad Ur Rehman",
//     age: 18
// };
// console.log(userData);

// let userData = {
//     "full name": 'Hammad Ur Rehman',
//     age: 18,
// }
// console.log(userData["age"]);
// console.log(userData.age);

// let isAdmin = true;
// let user = {
//     name: "Hammad",
//     age: 18
// }
// user[isAdmin] = true;
// console.log(user);

// let user = {
//     name: "Hammad",
//     age: "18"
// }

// let key = prompt("What is your age?", "age");
// console.log( user[key] );

// let fruit = prompt("What fruit to be purchased?", "apple");

// let bag = {
//     [fruit]: 5
// }

// console.log(bag.apple);


// let fruit = "apple";
// let bag = {
//     [fruit + "Computers"] : 5
// }

// console.log(bag.appleComputers);

// let team = "Karachi";
// let teamToWin = {
//     [team + "Kings"] : "Champions"
// }
// console.log(teamToWin.KarachiKings)

// function makeUser(name, age) {
//     return {
//         name: name,
//         age: age
//     }
// }

// let userData = makeUser("Hammad Ur Rehman", 18);
// console.log(userData.name);

// function makeUser(name, age) {
//     return {
//         name,
//         age,
//     }
// }

// let userData = makeUser("Hammad Ur Rehman", 18);
// console.log(userData.name);

// We can use both normal properties and shorthands in the same object:
// let name = "Hammad";
// let user = {
//     name,
//     age: 18
// }
// console.log(user);


// a variable cannot have a name equal to one of the language-reserved words like “for”, “let”, “return” etc.
// But for an object property, there’s no such restriction:
// let obj = {
//     for: 1,
//     let: 2,
//     return: 3
//   };

//   alert( obj.for + obj.let + obj.return );  // 6


// // Other types are automatically converted to strings.
// // For instance, a number 0 becomes a string "0" when used as a property key:
// let obj = {
//     0: "test"
// };

// let obj2 = {
//     1: "test1"
// }

// console.log(obj["0"]);
// console.log(obj[0]);
// console.log(obj2["1"]);
// console.log(obj2[1]);
// // console.log(obj2.1); // error


// // Reading a non-existing property just returns undefined. So we can easily test whether the property exists:
// let user = {};
// console.log(user.name === undefined)

// There’s also a special operator "in" for that.

// let user = {
//     name: "Hammad",
//     age: 18
// }
// let name = "name"
// console.log(name in user);
// console.log("hobby" in user);

// let userData = {
//     name: "Hammad",
//     age: 18,
//     isAdmin: true
// }
// for (let key in userData) {
//     console.log("key ===>>>", key);
//     console.log("value ===>>>", userData[key]);

// }

// // integer properties are sorted,
// let codes = {
//     "49": "Germany",
//     "41": "Switzerland",
//     "44": "Great Britain",
//     // ..,
//     "1": "USA"
// };

// for (let key in codes) {
//     console.log(key);
// }

// // let's check fot others data type props
// let user = {
//     b: "Hammad",
//     a: 19
// }
// for (let key in user) {
//     console.log(key);
// }

// // Math.trunc is a built-in function that removes the decimal part

// console.log(String(Math.trunc(Number("+49"))));
// console.log(String(Math.trunc(Number("1.222"))));


// let user = {
//     name: "Hammad",
//     age: 18,
// }
// user.surName = "Ur Rehman"
// for (let key in user) {
//     console.log(key);
// }

// let userData = {
//     name: "Hammad",
//     childrenName: {
//         child1: "mariam",
//         child2: "izhaan"
//     },
//     surname: "Ur Rehman"
// }
// console.log(userData);


// // Exercise 1
// let user = {}
// user.name = "John"
// user.surname = "Smith"
// console.log(user);
// user.name = "Pete";
// console.log(user);
// delete user.name;
// console.log(user);

// // Exercise 2
// function isEmpty(obj) {
//     for (let key in obj) {
//         console.log(key);
//         return false
//     }
//     return true
// }
// isEmpty(obj)

// // Exercise 3
// let salaries = {
//     John: '',
//     Ann:'',
//     Pete: '',
// }
// let sum = 0;
// for (let key in salaries) {
//     sum = sum + salaries[key]
// }
// console.log(sum);

// // Exercise 3
// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
// }

// function multiplyNumeric(obj) {
//     for (let key in obj) {
//         console.log(obj[key]);
//         if (typeof obj[key] == 'number') {
//             obj[key] = obj[key] * 2
//             delete menu.title
//             console.log(obj[key]);
//         }
//     }
// }
// multiplyNumeric(menu)


// ******** Object references and copying ****** //

// let user = {
//     name: "John"
// }

// let admin = user;
// admin.name = "Hammad"

// console.log(user);

// let a = {}
// let b = a;

// console.log(a === b);


// let a = {}
// let b = {}

// console.log(a === b);


// ************* Cloning and merging an object ***********

// let user = {
//     name: "John",
//     age: 18
// }

// let clone = {}

// for (let key in user) {
//     clone[key] = user[key]
// }

// clone.name = "Hammad"; // will not be change
// console.log(user.name); // John


// *** Object.assign *** //
// syntax: Object.assign(dest, ...sources)
// The first argument dest is a target object.
// Further arguments is a list of source objects.

// let userFirstName = {
//     firstName: "John",
// }

// console.log(userFirstName);

// let userLastName = {
//     lastName: "Ur Rehman",
// }

// let userAge = {
//     age: "18",
// }

// Object.assign(userFirstName, userLastName, userAge);
// console.log(userFirstName);



////// ************ GARBAGE COLLECTION ********* //////////


// function marry(man, woman) {
//     man.wife = woman;
//     woman.husband = man;
//     return {
//         father: man,
//         mother: woman
//     }
// }
// let family = marry({
//     name: "John"
// }, {
//     name: "Ann"
// })

// console.log(family);



////// ************ Optional chaining  ********* //////////

// let user = {}
// console.log(user.address ? user.address.street : undefined);

// let html = document.querySelector('.elem') ? document.querySelector('.elem').innerHTML : null;

// console.log(html);

// let user = {}
// console.log(user.address && user.address.street && user.address.street.house);

// let user = {};
// console.log(user?.address?.street?.house);

// The variable must be declared (e.g. let/const/var user or as a function parameter). The optional chaining works only for declared variables.



// ?.also works for paranthesis (functions)

// let userAdmin = {
//     isAdmin() {
//         console.log("I am an admin");
//     }
// }

// let userGuest = {};

// console.log(userAdmin?.isAdmin());
// console.log(userGuest?.isAdmin());



// ?.also works for square brackets []

// let key = "firstname";

// let user1 = {
//     firstname: "Hammad"
// }

// let user2 = null;

// console.log(user1?.[key]);
// console.log(user2?.[key]);


// Also we can use ?. with delete:

// let user = {
//     name: "John"
// }
// delete user?.name;

// console.log(user);


// let state = {
//     count: 0
// }
// console.log(state);
// let prevState = state;
// console.log(prevState);

// function increment() {
//     // Mutating State
//     // Mutate means to direct modify that state
//     // state.count = state.count + 1

//     state = { count: state.count + 1 }
// }

// increment();
// increment();
// increment();
// increment();
// console.log(state);


let reduxState = {
    count: 0,
    name: "Anuraj Singh",
    age: 26,
}

function reducer(state) {
    return {
        ...state,
        count: state.count + 1
    }
}

console.log(reducer(reduxState))