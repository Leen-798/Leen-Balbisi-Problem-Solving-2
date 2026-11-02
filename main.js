// 1
// var prize = ["car","house","mobile"]
// function withDraw(prize) {
//     while (prize.length > 0) {
//         var rand = Math.floor(Math.random() * prize.length);
//         var rand2=prize[rand]
//         prize[rand]=prize[prize.length-1]
//         prize[prize.length-1]=rand2;
//         var randomePrize= prize.pop();
//         console.log(randomePrize);
//     }
// } 
//   withDraw(prize);
//   console.log(prize);
//    console.log(prize.length);


//  2
// var people= "Ahmad:25,Sara:17,Khaled:30,Leen:20"
// var adults = [];

// people.split(",").forEach(function(person) {

//     var info = person.split(":");

//     var name = info[0];
//     var age = +info[1];

//     if (age > 18) {
//         adults.push(name);
//     }
// });
// console.log(adults);


// 3
// var store1 = ["Phone", "Laptop", "Tablet"];
// var store2 = ["Watch", "Camera", "Headphones"];

// var allProducts = store1.concat(store2);

// if (allProducts.length > 5) {

//     var firstThree = allProducts.slice(0, 3);

//     console.log(firstThree);
// }


// 4
// var cart = {
//     Phone: 500,
//     Laptop: 1000,
//     Watch: 200
// };

// var total = 0;

// for (var product in cart) {
//     total += cart[product] * 1.15;
// }

// console.log(total);

// 5
// <button id="myButton">Click Me</button>

// var button = document.getElementById("myButton");
// var count = 0;

// button.addEventListener("click", function() {

//     count++;

//     if (count % 2 == 0) {
//         button.style.backgroundColor = "green";
//     } else {
//         button.style.backgroundColor = "blue";
//     }

// });

// 6
// var correctNumber = Math.floor(Math.random() * 10) + 1;

// var guess = 0;

// while (guess !== correctNumber) {

//     guess = Math.floor(Math.random() * 10) + 1;

//     if (guess == correctNumber) {
//         console.log("تخمين صحيح!");
//     } else {
//         console.log("محاولة خاطئة");
//     }

// }

// 7
// function formatWords(sentence) {

//     var words = sentence.split(" ");
//     var result = [];

//     words.forEach(function(word) {

//         if (word.length > 5) {
//             result.push(word.slice(0, 3) + "-");
//         } else {
//             result.push(word);
//         }

//     });

//     return result;
// }

// console.log(formatWords("JavaScript is amazing and wonderful"));


// 8
// var users1 = [
//     { name: "Ahmad", active: true },
//     { name: "Sara", active: false }
// ];

// var users2 = [
//     { name: "Khaled", active: true },
//     { name: "Lina", active: false }
// ];

// var allUsers = users1.concat(users2);

// for (var i = 0; i < allUsers.length; i++) {

//     if (allUsers[i].active == true) {
//         console.log(allUsers[i].name);
//     }

// }

// 9
// var tasks = ["Study", "Read", "Exercise", "Write"];

// var completed = [];

// while (tasks.length > 0) {

//     var task = tasks.pop();

//     completed.push(task);

// }

// console.log(completed);

// 10
// <input type="text" id="myInput">

// var input = document.getElementById("myInput");

// input.addEventListener("keydown", function(event) {

//     if (event.key == "Enter" && input.value.trim() !== "") {

//         console.log(input.value);

//     }

// });
