let promiseToClean = new Promise((resolve, reject) => {
  let isClean = false;
  if (isClean) {
    resolve("yeah clean");
  } else {
    reject("Not Clean");
  }
});
promiseToClean
  .then(fromResolve => {
    console.log("Room Clean? " + fromResolve);
  })
  .catch(fromReject => {
    console.log("Room clean? " + fromReject);
  });
let cleanRoom = () => {
  return new Promise((resolve, reject) => {
    resolve("Cleaned the room");
  });
};
let removeGarbage = message => {
  return new Promise((resolve, reject) => {
    resolve(message + " remove garbage");
  });
};
let winIceCream = message => {
  return new Promise((resolve, reject) => {
    resolve(message + " Won ice-cream");
  });
};
//cleanRoom()
//  .then(result => {
//   return removeGarbage(result);
// })
//.then(result => {
//   return winIceCream(result);
// })
// .then(result => {
//   console.log("Finshed " + result);
// });

Promise.race([cleanRoom(), removeGarbage(), winIceCream()]).then(() => {
  console.log("one is finish");
});
