//your JS code here. If required.
var onresize = function() {
   //your code here
   //this is just an example
   width = document.body.clientWidth;
   height = document.body.clientHeight;
	let divElement= document.querySelector("h1");
	console.log(divElement)
	divElement.innerHTML=`Width: ${width} and Height: ${height}`;
}

window.addEventListener("resize", onresize);