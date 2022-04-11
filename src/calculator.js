//alert("Hellow world");

const addNumbers = (num1, num2) => num1 + num2;

const subtraction = (num1, num2) => num1 - num2;

const multiplication = (num1, num2) => num1 * num2;

const division = (num1, num2) => num1 / num2;


// const addButton = document.getElementById("addButton");
// const subButton = document.getElementById("subButton");
// const mulButton = document.getElementById("mulButton");
// const divButton = document.getElementById("divButton");

// addButton.addEventListener("click", function(){

//     let inp1 = document.getElementById("inp1").value;
//     let inp2 = document.getElementById("inp2").value;

//     inp1 = parseInt(inp1);
//     inp2 = parseInt(inp2);
//     console.log(addNumbers(inp1, inp2));

//     document.getElementById("result").innerHTML = addNumbers(inp1, inp2);
// });


// subButton.addEventListener("click", function(){

//     let inp1 = document.getElementById("inp1").value;
//     let inp2 = document.getElementById("inp2").value;

//     inp1 = parseInt(inp1);
//     inp2 = parseInt(inp2);
//     console.log(subtraction(inp1, inp2));

//     document.getElementById("result").innerHTML = subtraction(inp1, inp2);
// });

// mulButton.addEventListener("click", function(){

//     let inp1 = document.getElementById("inp1").value;
//     let inp2 = document.getElementById("inp2").value;

//     inp1 = parseInt(inp1);
//     inp2 = parseInt(inp2);
//     console.log(subtraction(inp1, inp2));

//     document.getElementById("result").innerHTML = subtraction(inp1, inp2);
//     console.log(multiplication(inp1, inp2));

//     document.getElementById("result").innerHTML = multiplication(inp1, inp2);
// });

// divButton.addEventListener("click", function(){

//     let inp1 = document.getElementById("inp1").value;
//     let inp2 = document.getElementById("inp2").value;

//     inp1 = parseInt(inp1);
//     inp2 = parseInt(inp2);
//     console.log(division(inp1, inp2));

//     document.getElementById("result").innerHTML = division(inp1, inp2);
// });

module.exports = {
    addNumbers, subtraction, multiplication, division
};