let mouse1 = document.getElementById("mouse1");
let mousemsg = document.getElementById("mousemsg");

mouse1.addEventListener("mouseover", function(){
    mousemsg.textContent = "Mouse over button";
});
mouse1.addEventListener("mouseout", function(){
    mousemsg.textContent = "Mouse has gone";
});

let keyboard1 = document.getElementById("keyboard1");
let keyboardmsg = document.getElementById("keyboardmsg");

keyboard1.addEventListener("keydown", function(event){
    keyboardmsg.textContent = `last key pressed: ${event.key}`
});

let form = document.getElementById("simpleform");
let simpleformmsg = document.getElementById("simpleformmsg");

form.addEventListener("submit",function(event) {
    console.log(`Form submitted`);
    event.preventDefault();
    alert(`your name is: ${document.getElementById("name").value}`);
});

function focusFunction(){
    document.getElementById("lastName").style.background = "green";
}

function blurFunction(){
    document.getElementById("lastName").style.background = "orange";
};