
// function loadScript(src, callback) {

//     let script = document.createElement("script");
//     script.src = src;

//     script.onload = () => callback(script);

//     document.head.append(script);
// }


// loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js', script => {
//     alert(`Cool, the script ${script.src} is loaded`);
//     alert(_); // _ is a function declared in the loaded script
// });

// const promise = new Promise((resolve, reject) => {
//     resolve()

// })

// console.log(promise);

// const promise = new Promise((resolve, reject) => {
// setTimeout(() => resolve({
//     status: 200,
//     message: "Data retrived successfully!",
//     data: [{
//         name: "Hammad Ur Rehman",
//         age: 20,
//         gender: "Male"
//     }]
// }), 1000);
//     setTimeout(() => reject({
//         status: 400,
//         message: "Bad Request!"
//     }), 1000);
// })


// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => reject(new Error("Failed to retrieved data:(")), 1000);
// })

// promise.then((res) => {
//     console.log(res);
// }).catch((error) => {
//     console.error(error.message);
// })


// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Data updated!")
//     }, 1500);
// });

// let para = document.createElement("p");
// para.style.color = "white";
// para.style.textAlign = "right";
// document.body.append(para);

// let loading = true;
// if(loading) {
//     para.innerHTML = "Loading...";
// }

// promise.then((res) => {
//     loading = false;
//     para.innerHTML = res
// }).catch((err) => {
//     console.error(err);
// })


// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("Done") , 1000);
// })

// console.log(promise);


// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => reject(new Error("Whoops!")) , 1000);
// })

// console.log(promise);


// let promise = new Promise((resolve, reject) => {
//     // resolve("Promise resolved!");

//     reject("Promise Rejected!!")

// })

// console.log(promise);


// let loading = false;

// const button = document.createElement("button");
// document.body.append(button);
// button.innerHTML = "Register";
// button.addEventListener("click", () => {
//     loading = true;
//     if(loading) {
//         console.log("Loading...");
//     }
//     let promise = new Promise((resolve, reject) => {
//         setTimeout(() => resolve("Data Retrieved Successfully!"), 1000);
//         loading = false;
//         if(!loading) {
//             console.log("");
//         }
//         // setTimeout(() => reject("Failed retrieved to data!"), 1000);
//     })

//     promise.then(console.log);
// })

// %%%%





// let numbers = [1, 2, 3, 4, 5];

// const arr2 = arr.map((num) => {
//   return num * 2
// })

// console.log(arr2);
// console.log(arr);

// let mapReturn = numbers.map((num) => num * num)
// console.log(mapReturn);

// let forEachReturn = numbers.forEach((elem) => elem * elem);
// console.log(forEachReturn);

// let mapArr = numbers.map((num) => num * num);
// let gtrThanTenNums = mapArr.filter((num) => num > 10);
// let result = gtrThanTenNums.reduce((acc, val) => val);
// console.log(result);

// %%%



// =================== PROMISE API ================== //


// Promise.all([
//     new Promise(resolve => setTimeout(() => resolve(2), 3500)),
//     new Promise(resolve => setTimeout(() => resolve(3), 1500)),
//     new Promise(resolve => setTimeout(() => resolve(1), 2500)),
// ]).then(console.log)


// let urls = [
//     'https://api.github.com/users/iliakan',
//     'https://api.github.com/users/remy',
//     'https://api.github.com/users/jeresig'
// ];

// const request = urls.map((url) => fetch(url));

// Promise.all(request).then((result) => result.forEach((response) => console.log(`${response.status} ${response.url}`)))




// let names = ['iliakan', 'remy', 'jeresig'];

// let requests = names.map(name => fetch(`https://api.github.com/users/${name}`));

// Promise.all(requests).then(responses => {
//     for (let response of responses) {
//         console.log(`${response.status} ${response.url}`);

//     }
//     return responses;
// })
//     .then(responses => Promise.all(responses.map(r => r.json())))
//     .then(users => users.forEach(user => alert(user.name)));


// Promise.all([
//     new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
//     new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 2000)),
//     new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
//   ]).catch(alert); // Error: Whoops


// let urls = [
//   'https://api.github.com/users/iliakan',
//   'https://api.github.com/users/remy',
//   'https://no-such-url'
// ];


// Promise.allSettled(urls.map(url => fetch(url)))
//   .then(results => {
//     results.forEach((result, num) => {
//       if (result.status == "fulfilled") {
//         console.log(`${urls[num]} - ${result.value.status}`)
//       }
//       if (result.status == "rejected") {
//         console.log(`${urls[num]} - ${result.reason}`)
//       }
//     })
//   })

// Promise.race([
//   new Promise((resolve, _reject) => setTimeout(() => resolve(1), 1000)),
//   new Promise((resolve, _reject) => setTimeout(() => resolve(3), 700)),
//   new Promise((resolve, _reject) => setTimeout(() => resolve(2), 1200)),
// ]).then(console.log)





// ===================== PROMISE-API ========================= //
// ******** There are 6 static methods of Promise class ********* //

// 1- Promise.all 
// It waits for all promises to be resolved and returns an array of their results, if any of the given promises rejects, it becomes the error for promise.all, and all other results are ignored.
// Example:

// let urls = [
// 'https://api.github.com/users/iliakan',
// 'https://api.github.com/users/remy',
// 'https://no-such-url'  // This url is wrong which means promise will be failed in the case of promise.all if I comment this url so promise.all will return success result but if I uncomment this so this url will be failed to fetch which causes all urls to be failed and promise.all ignored all other urls whether that are wrong or not 
// ];

// const requests = urls.map((url) => fetch(url));
// Promise.all(requests)
//   .then((req) => req.map((result) => console.log(result)))


// =============================================================================================
// Above code can also written in this way shorter
// Promise.all(urls.map((url) => fetch(url))).then((responses) => responses.map((response) => {
//   console.log(response);
// }))
// =============================================================================================


// 2- Promise.allSettled
// It waits for all promises to be settled and returns their results as an array of objects
// Example:

// let urls = [
//   'https://api.github.com/users/iliakan',
//   'https://api.github.com/users/remy',
//   'https://no-such-url'
// ]

// Promise.allSettled(urls.map((url) => fetch(url)))
//   .then((results) => results.map((res) => {
//     if (res.status === "fulfilled") {
//       console.log(`URL: ${res.value.url}`);
//     }
//     if (res.status === "rejected") {
//       console.log(res.reason);
//     }
//   }))





// 3- Promise.race
// waits for the first promise to settle, and its result/error becomes the outcome.
// Example:

// Promise.race([
//   new Promise((resolve, reject) => setTimeout(() => resolve(1), 200)),
//   new Promise((resolve, reject) => setTimeout(() => resolve(2), 2000)),
//   new Promise((resolve, reject) => setTimeout(() => reject(new Error("Something went wrong")), 500)),

// ]).then(console.log)




// 4- Promise.any
// Similar to Promise.race, but waits only for the first fulfilled promise and gets its result. If all of the given promises are rejected, then the returned promise is rejected with AggregateError – a special error object that stores all promise errors in its errors property.

// Promise.any([
//   new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)), // This will render
//   new Promise((resolve, reject) => setTimeout(() => reject(new Error("Something went wrong")), 800)),
//   new Promise((resolve, reject) => setTimeout(() => resolve(2), 1200)),
// ]).then(console.log)

// Promise.any([
//   new Promise((resolve, reject) => setTimeout(() => reject(new Error("Something went wrong")), 1000)),
//   new Promise((resolve, reject) => setTimeout(() => reject(new Error("Something went wrong")), 1200)),
//   new Promise((resolve, reject) => setTimeout(() => reject(new Error("Something went wrong")), 1200)),
// ]).then(console.log)


// ================= Before going ahead MAP and SET ==================== //


// let map = new Map();

// map.set('1', 'str1');
// map.set(1, 'num1');
// map.set(true, 'bool1');
// map.set(false, 'bool1');
// map[1] = false

// console.log(map.get(1));

// console.log(map);

// console.log(map.size);


// let john = { name: "Hammad" };

// let visitsCountMap = new Map();

// visitsCountMap.set(john, 123)

// console.log(visitsCountMap.get(john));



// let john = { name: "John" }
// let ben = { name: "Ben" }

// let visitsCountObj = {}

// visitsCountObj[ben] = 234;


// let user = { name: "Hammad" }


// let obj = {}

// obj["name"] = "John"

// console.log(obj);


// let john = { name: "John" };
// let ben = { name: "Ben" };

// let visitsCountObj = {}

// visitsCountObj[ben] = 234;
// const a = visitsCountObj[john] = 123;

// console.log(a);

// console.log(visitsCountObj[john])


// const promise = Promise.resolve({ data: { name: "Hammad", age: 20 }, status: 200 })
//     .then((res) => console.log(res))
//     .then(() => console.log("Another console"))

// console.log();


// const promise = Promise.reject(new Error("Promise Failed!"));
// promise.catch((err => console.log("Internal Server", err)));

// window.addEventListener('unhandledrejection', event => console.log(event))


// let promise = Promise.reject(new Error("Promise Failed!"));


// let promise = Promise.reject(new Error("Promise Failed!"));
// setTimeout(() => promise.catch(err => console.log('caught')), 1000);

// window.addEventListener('unhandledrejection', event => alert(event.reason));



// async function test() {
//     return 1
// } 

// test().then((res) => console.log(res))

// async function test2() {
//    Promise.resolve(2)
// }

// test2().then(res => console.log(res))

// async function f() {
//     let promise = new Promise((resolve, reject) => {
//         setTimeout(() => resolve("Done!") , 1000);
//     })

//     let result = await promise;
//     console.log(result);
// }

// f()


// async function loadJson(url) {
//     try {
//         const response = await fetch(url);
//         if (response.status == 200) {
//             const result = response.json();
//             return result;
//         } else {
//             throw new Error(response.status || "Internal Server Error")
//         }
//     } catch (error) {
//         console.log(error)
//     }

// }

// loadJson('https://javascript.info');

