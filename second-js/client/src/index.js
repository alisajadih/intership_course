// function fib(n) {
//   if (n <= 1) return 1;
//   return fib(n - 1) + fib(n - 2);
// }
// console.log(fib(36));
// console.log("hello ");

//timer
// setTimeout(() => {
//   console.log("after 1 seconds");
// }, 1000);
// console.log("hi");

//pending --> resolve || pending --> reject
// resolve !-> reject
// resolve <-! reject
//Promise style**
function wait(ms) {
  return new Promise((resolve, reject) => {
    // resolve("HERE!!!!!!");
    // reject("ERROR!!!");
    setTimeout(() => {
      resolve(ms);
    }, ms);
  });
}

// function wait(ms, cb) {
//   setTimeout(() => {
//     cb(ms);
//   }, ms);
// }
// wait(4000, (ms) => {
//   console.log("after " + ms / 1000 + " seconds");
// });

// wait(2000).then((ms) => {
//   console.log("promise resolved after " + ms / 1000 + " seconds");
// });
// wait(8000)
//   .then((res) => {
//     console.log("promise resolved", res);
//   })
//   .then((data) => console.log(data))
//   .catch((err) => {
//     console.log("promise rejected", err);
//   });

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//     return "after users data";
//   })
//   .then((input) => {
//     console.log(input);
//   })
//   .catch((err) => {
//     throw err;
//   })
//   .catch((err) => {
//     console.log("in second catch function", err);
//   });
// console.log("hi");

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//     wait(5000).then((ms) => {
//       fetch("https://jsonplaceholder.typicode.com/posts")
//         .then((res) => {
//           return res.json();
//         })
//         .then((data) => {
//           console.log("second data after " + ms + " recieved");
//           console.log(data);
//         });
//     });
//   })
//   .catch((err) => {
//     throw err;
//   })
//   .catch((err) => {
//     console.log("in second catch function", err);
//   });
// console.log("hi");

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//     wait(4000, (ms) => {
//       console.log("after " + ms / 1000 + " seconds");
//     });
//   })
//   .catch((err) => {
//     throw err;
//   })
//   .catch((err) => {
//     console.log("in second catch function", err);
//   });
// console.log("hi");

// async/await

async function request() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const responseData = await response.json();
    console.log("first request :");
    console.log(responseData);
    console.log("----------------------");

    const ms = await wait(5000);
    console.log("after " + ms / 1000 + " seconds");
    const secondResponse = await fetch(
      "https://jsonplaceholder.typicode.com/posts"
    );
    const secondResponseData = await secondResponse.json();
    console.log("second request :");
    console.log(secondResponseData);
    console.log("----------------------");
  } catch (err) {
    console.log(err);
  }
}

// console.log("before request");

// request().then(() => {
//   console.log("after request function resolved");
// });
request();

// console.log("after request");
