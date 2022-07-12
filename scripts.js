var circle = document.getElementById("circle");
var upbotton= document.getElementById("upbotton");
var downbotton= document.getElementById("downbotton");

var rotateValue = circle.style.transform;
var rotateSum;

upbotton.onclick= function()
{
    rotateSum=rotateValue + "rotate(-90deg)";
    circle.style.transform = rotateSum;
    rotateValue= rotateSum;
}

