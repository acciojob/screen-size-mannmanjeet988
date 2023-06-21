//your JS code here. If required.
var onresize = function() {
   //your code here
   //this is just an example
   width = document.body.clientWidth ||  window.innerWidth;
   height = document.body.clientHeight || window.innerHeight;
	divElement= document.getElementById("sizeInfo");
	divElement.innerHTML=`Width: ${width} and Height: ${height}`;
}

window.addEventListener("resize", onresize);