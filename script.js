//your JS code here. If required.
var onresize = function() {
   //your code here
   //this is just an example
   width = document.body.clientWidth;
   height = document.body.clientHeight;
	divElement= document.querySelector("h1");
	divElement.innerHTML=`Width: ${width} and Height: ${height}`;
}

window.addEventListener("resize", onresize);