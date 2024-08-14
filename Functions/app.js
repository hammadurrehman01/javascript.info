// function showMessage() {
//     alert("Hello Everyone!");
// }
// showMessage();



// function showMessage() {
//     let message = "Hello Everyone!"
//     alert(message);
// }
// showMessage();
// alert(message) // error: message is not defined



// let userName = "John";
// function showMessage() {
//     let concatenation = " "
//     alert("Hello" + concatenation + userName);
// }   
// showMessage()




// let userName = "John";
// function showMessage() {
//     userName = "Bob";
//     let message = `Hello ${userName}`;
//     alert(message)
// } 
// alert(userName) // John
// showMessage() 
// alert(userName) // Bob



// let userName = "John";
// function showMessage() {
//     let userName = "Bob";
//     let message = `Hello ${userName}`;
//     alert(message)
// }
// showMessage()
// alert(userName) 



// function showMessage(from, text) {
//     from = "*" + from + "*";
//     alert(from + ":" + text)
// }
// let from = "Ann";
// showMessage(from, " Hello");

// function showMessage(from, text) {
//     alert(from + " : " + text)
// }

// showMessage("Ann")


// function showMessage(from, text = "this is default value") {
//     alert(from + " : " + text)
// }

// showMessage("Ann", undefined)

// function anotherFunction(message) {
//     console.log("Another is running!", message);
// }

// function showMessage(from, text = anotherFunction("abc")) {
//     alert(from)
// }

// showMessage("Hello!")


// function showMessage(text) {
//     if (text === undefined) {
//         text = "Jugaaaar!"
//     }
//     alert(text);
// }
// showMessage()


// function showMessage(text) {
//     text = text || "Jugaaaaarr!"
//     alert(text);
// }
// showMessage()


// function showCount(count) {
//     // if count is undefined or null, show "unknown"
//     alert(count ?? "unknown");
//   }

//   showCount(0); // 0
//   showCount(null); // null hay tw unknown show hoga 
//   showCount(); // undefined hay tw unknown show hoga



// function sum(a, b) {
//     alert(a + b)
// }
// sum(1, 3) // 1 + 3 = 4


// function checkAge(age) {
//     if (age >= 18) {
//         return true
//     } else {
//         return confirm("Do you have the permissions from your parents?")
//     }
// }

// let age = prompt("How old are you", 18);

// if (checkAge(age)) {
//     alert("Access granted")
// } else {
//     alert("Access denied")
// }



// function sayHi() {
//     console.log("Hello");
// }

// sayHi();
// func();



// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
// }

// function showOk() {
//     alert("You agreed!")
// }

// function showCancel() {
//     alert("You canceled the execution")
// }

// ask("Do you agree?", showOk, showCancel);


// function func1() {
//     alert("I am function one!")
// }
// func1()


// function func2() {
//     alert("I am function two!")
// }
// func2()


// let age = 16;

// if (age < 18) {
//     welcome();

//     function welcome() {
//         alert("Welcome!!")
//     }

//     welcome();
// } else {

//     function welcome() {
//         alert("Greetings!")
//     }

//     welcome()
// }

// greetings()
// welcome() 


// let age = prompt("What is your age!", 18);
// let welcome;

// if (age < 18) {
//     welcome = function () {
//         alert("Welcome!")
//     }

// } else {
//     welcome = function() {
//         alert("Greetings!")
//     }
// }

// welcome()


// let age = prompt("What is your age!", 18);
// let welcome = (age < 18) ?
//     function () { alert("Welcome!") } :
//     function () { alert("Greetings!") }
// welcome();  



// Arrow functions

// let sum = (a, b) => a + b;
// console.log(sum(1, 2));

// let double = a => a * 2;
// console.log(double(6));

// let func = () => console.log("WOWW!");
// func();

// let age = prompt("What is your age!", 18);
// let welcome = (age <= 18) ?
//     () => { console.log("I am younger than 18") } :
//     () => { console.log("I am older than 18!"); }
// welcome();

// let sum = (a, b) => {
//     let result = a + b;
//     return result;
// }
// console.log(sum(2, 3))

// let sum = (a, b) => {
//     return a + b;
// }
// console.log(sum(2, 3))

// let ask = (question, yes, no) => {
//     if (confirm(question)) yes();
//     else no();
// }
// ask("Do you agree?",
//     () => { alert("You agreed!") },
//     () => { alert("You canceled the execution.") }
// )

// // Code structure
// // Statements are delimited with a semicolon:
// alert('Hello'); alert('World');

// // Usually, a line-break is also treated as a delimiter, so that would also work:
// alert('Hello')
// alert('World')

alert("There will be an error after this message")

[1, 2].forEach(alert)