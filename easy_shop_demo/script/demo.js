// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}




var u = document.getElementById("u");
var uArray = ["images/11.jpg","images/0.jpg","images/11.jpg","images/0.jpg","images/11.jpg","images/0.jpg","images/11.jpg","images/0.jpg","images/11.jpg"];
var uIndex = 0;
function changeImageU() {
  
  u.setAttribute("src",uArray[uIndex]);
  uIndex++
  if (uIndex > uArray.length) {
    uIndex = 0;
  }
}
 
setInterval(changeImageU,2000);



var v = document.getElementById("v");
var vArray = ["images/10.jpg","images/1.jpg","images/10.jpg","images/1.jpg","images/10.jpg","images/1.jpg","images/10.jpg","images/1.jpg","images/10.jpg"];
var vIndex = 0;
function changeImageV() {
  
  v.setAttribute("src",vArray[vIndex]);
  vIndex++
  if (vIndex > vArray.length) {
    vIndex = 0;
  }
}
 
setInterval(changeImageV,2000);



var w = document.getElementById("w");
var wArray = ["images/9.jpg","images/2.jpg","images/9.jpg","images/2.jpg","images/9.jpg","images/2.jpg","images/9.jpg","images/2.jpg","images/8.jpg"];
var wIndex = 0;
function changeImageW() {
  
  w.setAttribute("src",wArray[wIndex]);
  wIndex++
  if (wIndex > wArray.length) {
    wIndex = 0;
  }
}
 
setInterval(changeImageW,2000);



var x = document.getElementById("x");
var xArray = ["images/8.jpg","images/3.jpg","images/8.jpg","images/3.jpg","images/8.jpg","images/3.jpg","images/8.jpg","images/3.jpg","images/8.jpg"];
var xIndex = 0;
function changeImageX() {
  
  x.setAttribute("src",xArray[xIndex]);
  xIndex++
  if (xIndex > xArray.length) {
    xIndex = 0;
  }
}
 
setInterval(changeImageX,2000);



var y = document.getElementById("y");
var yArray = ["images/7.jpg","images/4.jpg","images/7.jpg","images/4.jpg","images/7.jpg","images/4.jpg","images/7.jpg","images/4.jpg","images/7.jpg"];
var yIndex = 0;
function changeImageY() {
  
  y.setAttribute("src",yArray[yIndex]);
  yIndex++
  if (yIndex > yArray.length) {
    yIndex = 0;
  }
}
 
setInterval(changeImageY,2000);




var z = document.getElementById("z");
var zArray = ["images/6.jpg","images/5.png","images/6.jpg","images/5.png","images/6.jpg","images/5.png","images/6.jpg","images/5.png","images/4.jpg"];
var zIndex = 0;
function changeImageZ() {
  
  z.setAttribute("src",zArray[zIndex]);
  zIndex++
  if (zIndex > zArray.length) {
    zIndex = 0;
  }
}
 
setInterval(changeImageZ,2000);


