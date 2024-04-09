/*
What is JSON
JSON.parse()=>Convert JSON to JS Object
JSON.stringify=> Convert JS object To JSON
*/

// const JSONObject = '{"UserName":"Saif","Age":30}';

// console.log(typeof JSONObject);
// console.log(JSONObject);

// const myJsObject = JSON.parse(JSONObject);
// console.log(typeof myJsObject);
// console.log(myJsObject);

// myJsObject.UserName = "Amine";
// myJsObject.Age = 20;

// console.log(myJsObject);

// const JsonToServer = JSON.stringify(myJsObject);

// console.log(typeof JsonToServer);
// console.log(JsonToServer);

//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------

/* Synchronous VS Asynchronous */

//Synchronous

// console.log("1");
// console.log("2");
// window.alert("Operation");
// console.log("3");

//Asynchronous

// console.log("1");
// console.log("2");
// setTimeout(() => console.log("Operation"), 5000);
// console.log("3");

/* Call Stack */
/*

setTimeout(() => {
  console.log("Web Api");
}, 0);

function One() {
  console.log("One");
}

function Two() {
  One();
  console.log("Two");
}

function Three() {
  Two();
  console.log("Three");
}

Three();

/*
 console.log("One");
===================================
===================================
  console.log("Two");
===================================
  console.log("Three");

===================================
*/

// setTimeout(() => {
//   console.log(num);
// }, 0);

// let num = 100;
// num += 100;

/*
Ajax 
-Ready State
0-No Request
1-Server connecton established
2-Request Received
3-Processing Request
4-Request is finished and response is ready

Status
200 - Response is successful
404 Not Found

*/

// const myRequest = new XMLHttpRequest();
// myRequest.open("GET", "https://api.github.com/users/BoubakerSaif");
// myRequest.send();
// console.log(myRequest);

// myRequest.onreadystatechange = function () {
//   // console.log(myRequest.readyState);
//   // console.log(myRequest.status);
//   if (this.readyState === 4 && this.status === 200) {
//     let JsData = JSON.parse(this.responseText);
//     console.log(JsData);
//     let div = document.createElement("div");
//     let user = document.createTextNode(JsData.login);
//     let userImg = document.createElement("img");
//     userImg.setAttribute("src", JsData.avatar_url);
//     div.appendChild(user);
//     div.appendChild(userImg);
//     document.body.appendChild(div);
//   }
// };

//---------------------------------------------------------

const myRequest = new XMLHttpRequest();
myRequest.open("GET", "https://jsonplaceholder.typicode.com/posts");
myRequest.send();
console.log(myRequest);

myRequest.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    let JsData = JSON.parse(this.responseText);
    for (let i = 0; i < JsData.length; i++) {
      let div = document.createElement("div");
      let title = document.createTextNode(JsData[i].title);
      div.appendChild(title);

      document.body.appendChild(div);
    }
  }
};
