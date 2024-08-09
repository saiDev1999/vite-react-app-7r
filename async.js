// 1. Chop the vegetables
// 2. Cook the vegetables
// 3. Serve the vegetables

// const chopVegetables = (callback) => {
//   console.log("started chopping Vegetables");
//   setTimeout(() => {
//     console.log("chopping of Vegetables done");
//     callback();
//   }, 2000);

//   console.log("thinking of next steps");
// };

// const cookVegetables = (callback) => {
//   console.log("started cooking Vegetables");
//   setTimeout(() => {
//     console.log("cooking Vegetables done");
//     callback();
//   }, 2000);
//   console.log("thinking of next steps");
// };

// const serveVegetables = (callback) => {
//   console.log("Serving of vegetables done");
//   setTimeout(() => {
//     console.log("Eat the vegetables dish ");
//     callback();
//   }, 2000);
//   console.log("thinking of next steps");
// };

// console.log("cooking of dish started");
// chopVegetables(() => {
//   cookVegetables(() => {
//     serveVegetables(() => {
//       console.log("Cooking and esting of dish ended");
//     });
//   });
// });

// Promise: Promise is an object, which tells eventually completion or failure of a particular task in a more way compared with callbacks

// Promise:
// 1. Pending
// 2. Fulfill
// 3. Reject (with some reason)

//Producing code
const chopVegetables = (name) => {
  console.log("started chopping Vegetables by" + name);
  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("chopping of Vegetables done");
      resolve();
    }, 2000);
    console.log("thinking of next steps");
  });
  return myPromise;
};

const cookVegetables = () => {
  console.log("started cooking Vegetables");
  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("cooking Vegetables done");
      resolve();
    }, 2000);
    console.log("thinking of next steps");
  });
  return myPromise;
};

const serveVegetables = () => {
  console.log("Serving of vegetables done");
  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Eat the vegetables dish ");
      resolve();
    }, 2000);
    console.log("thinking of next steps");
  });
  return myPromise;
};

// consuming code
// console.log("cooking of dish started");
// chopVegetables("sai")
//   .then(() => {
//     return cookVegetables();
//   })
//   .then(() => {
//     return serveVegetables();
//   })
//   .then(() => {
//     console.log("Cooking and eating of dish ended");
//   })
//   .catch((message) => console.log(message));

const dishMaker = async () => {
  console.log("cooking of dish started");
  await chopVegetables();
  await cookVegetables();
  await serveVegetables();
  console.log("Cooking and eating of dish ended");
};

dishMaker();

const fetchData = async () => {
  const response = await fetch("url");
  const finalResponse = await response.json();
};
fetchData();

// consuming code
// fetch("http/fakestop")
//   .then((res) => res.json())
//   .then((response) => console.log(response));

// 1. .then
// 2. async and await
