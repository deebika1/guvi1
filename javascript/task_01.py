var x = document.createElement("div"); 
x.id="img";
x.style.color="red";
var t = document.createTextNode("Paragraph is created."); 
x.appendChild(t);
document.body.appendChild(x); 
document.getElementById("img").onmouseover = function() {
mouseOver()
};
function mouseOver() {
  document.getElementById("img").style.color = "blue";
}
