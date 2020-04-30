document.getElementById("aata").innerHTML = "Aashirvaad : Whole Wheat";
document.getElementById("price").innerHTML = "399";

var header = document.getElementById("myDIV");
var btns = header.getElementsByClassName("btn");
// window.alert(btns[0]);
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  	  // document.getElementById("price").innerHTML = "396";

	  var current = document.getElementsByClassName("active");
	  current[0].className = current[0].className.replace(" active", "");
	  this.className += " active";
  });
}

var price = 399;
function change10() {
document.getElementById("price").innerHTML = "399";
price = 399;
}

function change5() {
document.getElementById("price").innerHTML = "209";
price = 209;
}

var value = 1;
function increaseValue() {
  value = parseInt(document.getElementById('number').value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  value > 10 ? value = 10 : value;
  document.getElementById('number').value = value;
// document.getElementById("value").innerHTML = price*value;
}

function decreaseValue() {
  value = parseInt(document.getElementById('number').value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? value = 1 : '';
  value--;
  value < 1 ? value = 1 : value;
  document.getElementById('number').value = value;
// document.getElementById("value").innerHTML = price*value;
}



function payable() {
	document.getElementById("value").innerHTML = price*value;
}