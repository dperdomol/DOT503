//alert("Hellow world");

function addNumbers(num1, num2){
    let res = num1 + num2;
    return res;
}

function subtraction(num1, num2){
    let res = num1 - num2;
    return res;
}

function multiplication(num1, num2){
    let res = num1 * num2;
    return res;
}

const addButton = document.getElementById("addButton");
const subButton = document.getElementById("subButton");
const mulButton = document.getElementById("mulButton");

addButton.addEventListener("click", function(){

    let inp1 = document.getElementById("inp1").value;
    let inp2 = document.getElementById("inp2").value;

    inp1 = parseInt(inp1);
    inp2 = parseInt(inp2);
    console.log(addNumbers(inp1, inp2));

    document.getElementById("result").innerHTML = addNumbers(inp1, inp2);
});


subButton.addEventListener("click", function(){

    let inp1 = document.getElementById("inp1").value;
    let inp2 = document.getElementById("inp2").value;

    inp1 = parseInt(inp1);
    inp2 = parseInt(inp2);
    console.log(subtraction(inp1, inp2));

    document.getElementById("result").innerHTML = subtraction(inp1, inp2);
});

mulButton.addEventListener("click", function(){

    let inp1 = document.getElementById("inp1").value;
    let inp2 = document.getElementById("inp2").value;

    inp1 = parseInt(inp1);
    inp2 = parseInt(inp2);
    console.log(subtraction(inp1, inp2));

    document.getElementById("result").innerHTML = subtraction(inp1, inp2);
    console.log(multiplication(inp1, inp2));

    document.getElementById("result").innerHTML = multiplication(inp1, inp2);
});