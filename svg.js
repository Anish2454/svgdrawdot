/*
Anish Shenoy
SoftDev2 pd07
K07 -- Connect The Dots
2018-02-28
*/

var container = document.getElementById("vimage");
var clearButton = document.getElementById("clear");
var first = true;
var lastX = 0;
var lastY = 0;

var makeLine = function(x1, y1, x2, y2){
  var c1 = document.createElementNS("http://www.w3.org/2000/svg", "line");
	c1.setAttribute("x1", x1);
	c1.setAttribute("y1", y1);
  c1.setAttribute("x2", x2);
	c1.setAttribute("y2", y2);
	c1.setAttribute("stroke", "red");
	container.appendChild(c1);
}

var drawDot = function(x, y){
	var c1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	c1.setAttribute("cx", x);
	c1.setAttribute("cy", y);
	c1.setAttribute("fill", "red");
	c1.setAttribute("r", "25");
	container.appendChild(c1);
  if(first){
    console.log("It's the first circle");
    first = false;
  }
  else{
    makeLine(lastX, lastY, x, y);
  }
  lastX = x;
  lastY = y;
}

var clicked = function(e){
  /*
	console.log("clicked");
	console.log("e:");
	console.log(e);*/
	if(e.target == this){
		drawDot(e.offsetX, e.offsetY);
		console.log("drawn");
	}
};

//Remove all the inner nodes of the SVG area
var clear = function(e){
	console.log("Clear");
  var firstChild = container.firstChild;
  while(firstChild){
    console.log("Clearing: ");
    console.log(firstChild);
    container.removeChild(firstChild);
    firstChild = container.firstChild;
  }
  first = true;
}

container.addEventListener("click", clicked);
clearButton.addEventListener("click", clear);
