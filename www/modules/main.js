import * as Utils from './utils.js';
import {React} from './React.js';
import {ReactDOM} from './ReactDOM.js';
import './custom/String.js';
import './custom/Object.js';
import {Hello} from './component/Hello.js'

// class Test {
//     display () {
//         console.log('display');
//     }
// }

// class instanciateClass {
//     instanciateClass(className) {
//         console.log(test.display());
//         // console.log(className.display());
//     }
// }

// var className = "ExtandsTest";

// var insst = new instanciateClass();
// insst.instanciateClass(Test);


// const str = "ludo";
// console.log(str.__proto__);
// for (const key in true) {
//     // console.log(key);
// }

const root = document.getElementById("root");
const element = React.createElement(Hello, {});

ReactDOM.render(element, root);


// ReactDOM.render(
//   React.createElement(Hello, {toWhat: 'monde'}, null),
//   document.getElementById('root')
// );


// // ----------------------------------- Demo -------------------------------------------

// const element = React.createElement(
//     "div",
//     { id: "div1" },
//     React.createElement("div", { id: "div2" }, "text"),
//     React.createElement("div", { id: "div2" }, React.createElement("div", { id: "div21" }))
// );

// React.render(element, document.getElementById('root'));
// console.log(element);

// const regex = /\{\{ (.*?) \}\}/g;
// const array = [..."{{ sdfsdf }}ludo {{ dlskfjld }}".matchAll(regex)];

// function (text) {
//     if (this === "undefined") return this;
//     if (typeof text !== "string" || text === "") return "";

//     let access = text.split(".");
//     let propPath = access[0];
//     let value = this;

//     for (let i = 0; i < access.length; i++) {
//         propPath += access[i];

//         if (!value[access[i]]) {
//             return this + " n'existe pas";
//         }
//         value = value[access[i]];
//     }

//     return value;
// };




// const props = {
//     personne: {
//         name: "Ludo"
//     }
// }

// console.log("Je suis {{ personne.name }}".interpolate(props));