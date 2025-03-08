// const p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Hotovo");
//   }, 500);
// });
//
// p
//   .then((zprava) => {
//     throw new Error("jeje");
//     console.log("Vazne hotovo: " + zprava);
//   }, (err) => {
//     console.error("spadlo to: " + err);
//   })
//
//   .catch((err) => {
//     console.error("catch chycen " + err);
//   })
//   .then(() => {
//     return Promise.resolve("ne a ne")
//   })
//   .catch((err) => {
//     console.error("spadlo M<M<M<<M<M< catch: " + err);
//   })
// const p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Hotovo");
//   }, 1000);
// });
//
//
//
// // p.then((data) => {
// //   console.log(data);
// //   throw new Error("oops");
// // });
//
//
// // catch
//
//
// const err = Promise.reject(new Error("oops error"));
// err
//   .then(() => {
//     console.log("step1");
//   })
//   .then(() => {
//     throw new Error("oops error");
//     console.log("step2");
//   })
//   .catch((err) => {
//     console.log("chycena chyba");
//     console.log(err.message);
//   });
//
//
const getTimeoutPromise = (timeout, shouldFail) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // if (shouldFail) {
      //   reject(`REJECTED Promise s timeout ${timeout}`);
      //   return;
      // }
      resolve(`FULFILLED Promise s timeout ${timeout}`);
    }, timeout);
  });
};
//
// Promise.all, Promise.allSettled, Promise.race
// Promise.race([readRestApiData(), getTimeoutPromise(200)])
//   .then(values => {
//     console.log(values);
//   })
// // Promise.all([getTimeoutPromise(10, true), getTimeoutPromise(20)])
// //   .then(values => {
// //     console.log(values);
// //   });
//
//
// Promise.allSettled([getTimeoutPromise(10, true), getTimeoutPromise(20)])
//   .then(values => {
//     console.log("ALL SETTLED");
//     console.log(values);
//   });
//
// Promise.race([getTimeoutPromise(10), getTimeoutPromise(200)])
//   .then(values => {
//     console.log("RACE");
//     console.log(values);
//   });
// // Promise.resolve(), Promise.reject()
