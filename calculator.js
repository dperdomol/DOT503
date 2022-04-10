//alert("Hellow world");

function addNumbers(num1, num2){
    let res = num1 + num2;
    return res;
}

const addButton = document.getElementById("addButton");

addButton.addEventListener("click", function(){

    let inp1 = document.getElementById("inp1").value;
    let inp2 = document.getElementById("inp2").value;

    inp1 = parseInt(inp1);
    inp2 = parseInt(inp2);
    console.log(addNumbers(inp1, inp2));

    document.getElementById("result").innerHTML = addNumbers(inp1, inp2);
});