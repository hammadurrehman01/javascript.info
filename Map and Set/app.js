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


let obj = {
    name: "John",
    age: 30
};  

console.log(Object.entries(obj));

let map = new Map(Object.entries(obj))

console.log(map);

console.log(map.get("name"));