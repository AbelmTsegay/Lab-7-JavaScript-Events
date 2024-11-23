let mouse1 = document.getElementById("mouse1");
let mousemsg = document.getElementById("mousemsg");
mouse1.addEventListener("mouseover", function(){
    mousemsg.textContent = "Mouse over button";
});
mouse1.addEventListener("mouseout", function(){
    mousemsg.textContent = "Mouse has gone";
});
