// Map is a collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type
// Methods and properties are:

// new Map() – creates the map.
// map.set(key, value) – stores the value by the key.
// map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
// map.has(key) – returns true if the key exists, false otherwise.
// map.delete(key) – removes the element (the key/value pair) by the key.
// map.clear() – removes everything from the map.
// map.size – returns the current element count.


// const map = new Map();
// console.log(map); // Map(0) {size: 0}

// setting key as a string type
// map.set("Developer", "Hammad")
// console.log(map) // Map(1) {'Developer' => 'Hammad'}

// setting key as a boolean type
// map.set(true, 1);
// console.log(map); // Map(2) {'Developer' => 'Hammad', true => 1}

// setting key as a number type
// map.set(0, false);
// console.log(map); // Map(3) {'Developer' => 'Hammad', true => 1, 0 => false}

// setting key as an array type
// map.set(["hammad", "Ali", "Mukarram"], 1); // Map(4) {'Developer' => 'Hammad', true => 1, 0 => false, Array(3) => 1}
// console.log(map);




// Map.get

// map.set("user", "Hammad Ur Rehman");
// const user = map.get("user");
// // console.log(user); // Hammad Ur Rehman

// let john = { name: "John" };
// let ben = { name: "Ben" };

// let visitsCountObj = {};

// visitsCountObj[john] = 123

// console.log(visitsCountObj);

// Chaining in Map

// map.set('1', 'str1')
//     .set(1, 'num1')
//     .set(true, 'bool1')

// console.log(map);


// let recipeMap = new Map([
//     ['cucumber', 500],
//     ['tomatoes', 350],
//     ['onion', 50]
// ]);

// for (let vegetable of recipeMap.keys()) {
//     console.log(vegetable)
// }


// for (let amount of recipeMap.values()) {
//     console.log(amount); // 500, 350, 50
//   }

// for(let entry of recipeMap) {
//     console.log(e);
// }

// recipeMap.forEach((value, key, map) => {
//     console.log(`${key} ${value}`);
// })


// let map = new Map([['1', 'str1'], [1, 'num1'], [true, 'bool1']]);

// console.log(map);


// let obj = {
//     name: "John",
//     age: 30
// };  

// console.log("entries ==>", Object.entries(obj));

// let map = new Map(Object.entries(obj))

// console.log("map ==>", map);

// console.log(map.get("name"));



// const fromEntries = Object.fromEntries([
//     ['banana', 100],
//     ['orange', 280],
//     ['meat', 300],
// ]);


// const entries = Object.entries([
//     ['banana', 100],
//     ['orange', 280],
//     ['meat', 300],
// ]);


// console.log("fromEntries =>", fromEntries);
// console.log("entries =>", entries);


// let map = new Map();
// map.set('banana', 1);
// map.set('orange', 2);
// map.set('meat', 4);

// // let obj = Object.fromEntries(map.entries()); // make a plain object (*)
// let obj = Object.fromEntries(map); 

// console.log(obj);

// // done!
// // obj = { banana: 1, orange: 2, meat: 4 }

// alert(obj.orange); // 2




// ================ Set ================
// A Set is a special type collection – “set of values” (without keys), where each value may occur only once.
// Its main methods are:

// new Set([iterable]) – creates the set, and if an iterable object is provided (usually an array), copies values from it into the set.
// set.add(value) – adds a value, returns the set itself.
// set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
// set.has(value) – returns true if the value exists in the set, otherwise false.
// set.clear() – removes everything from the set.
// set.size – is the elements count.
// The main feature is that repeated calls of set.add(value) with the same value don’t do anything. That’s the reason why each value appears in a Set only once.

// For example, we have visitors coming, and we’d like to remember everyone. But repeated visits should not lead to duplicates. A visitor must be “counted” only once.

// Set is just the right thing for that:
// let set = new Set();

// set.add("Hammad");   
// console.log(set);


// let john = { name: "John" };
// let pete = { name: "Pete" };
// let mary = { name: "Mary" };

// set.add(john);
// set.add(pete);
// set.add(mary);
// set.add(john);
// set.add(mary);

// console.log(set.size);

// for(let user of set) {
//     console.log(user.name);
// }


// let set = new Set(["oranges", "apples", "bananas"]);
// let set = new Set("bananas");

// for (let value of set) {
//     console.log(value);
// }

// set.forEach((value, valueAgain, set) => {
//     console.log("value ===>", value);
//     console.log("valueAgain ===>", valueAgain);
// });



// function unique(arr) {
//     let set = new Set();
//     set.add(arr)
//     console.log(set);  // Set(1) {Array(9)}

//     for (let val of set) {
//         console.log(val);  //  ['Hammad', 'Khan', 'Abdullah', 'Abbas', true, 12, false, 100, ':-O']
//     }

//     let sol = Array.from(new Set(arr));

//     console.log(sol); //  ['Hammad', 'Khan', 'Abdullah', 'Abbas', true, 12, false, 100, ':-O']
// }


// let values = ["Hammad", "Khan", "Abdullah", "Abbas", true, 12, false, 100, ":-O"];

// unique(values)

