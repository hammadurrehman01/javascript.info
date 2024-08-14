
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


// TODO comment office pc code here
// =================================================== //




// =================================================== //






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


Promise.all([
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 2000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
  ]).catch(alert); // Error: Whoops

