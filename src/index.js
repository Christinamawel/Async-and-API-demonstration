import CatService from './CatService';
import './css/styles.css';

// let testPromise = new Promise(function(resolve, reject) {
//     resolve("yay");
// });

// console.log(testPromise);

// function getCat() {
//   loading();
//   let promise = new Promise(function(resolve, reject) {
//     let request = new XMLHttpRequest();
//     const url = "https://api.thecatapi.com/v1/images/search?limit=1";
//     request.addEventListener("loadend", function() {
//       const response = JSON.parse(this.responseText);
//       if(this.status === 200) {
//         resolve(response);
//       } else {
//         reject([this, response]);
//       }
//     });
//     request.open("GET", url, true);
//     request.send();
//   });

//   promise.then(function(response) {
//     console.log(response)
//     printCat(response[0].url);
//   }, function(errorMessage) {
//     console.log(errorMessage);
//   });
// }

async function getCat() {
  loading();
  const response = await CatService.getCat();
  if(response[0].url) {
    printCat(response[0].url);
  } else {
    console.log(response);
  }
}

function loading() {
  const loadingMessage = document.getElementById("loading-text");
  loadingMessage.classList.remove("invisible");
}

function finishLoading() {
  const loadingMessage = document.getElementById("loading-text");
  loadingMessage.classList.add("invisible");
}

function printCat(catImage) {
  const catImg = document.getElementById("cat-image");
  catImg.setAttribute("src", catImage);
  finishLoading();
}

function handleGetCatClick() {
  getCat();
}

window.addEventListener("load", function() {
  getCat();
  document.getElementById("get-cat-btn").addEventListener("click", handleGetCatClick)
})