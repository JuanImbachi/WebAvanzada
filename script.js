
var modal1 = document.getElementById("modal1");
var modal2 = document.getElementById("modal2");
var modal3 = document.getElementById("modal3");
var modal4 = document.getElementById("modal4");
var modal5 = document.getElementById("modal5");
var modal6 = document.getElementById("modal6");
var modal7 = document.getElementById("modal7");
var modal8 = document.getElementById("modal8");
var modal9 = document.getElementById("modal9");
var modal10 = document.getElementById("modal10");
var modal11 = document.getElementById("modal11");
var modal12 = document.getElementById("modal12");


// Get the button that opens the modal
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");
var btn5 = document.getElementById("btn5");
var btn6 = document.getElementById("btn6");
var btn7 = document.getElementById("btn7");
var btn8 = document.getElementById("btn8");
var btn9 = document.getElementById("btn9");
var btn10 = document.getElementById("btn10");
var btn11 = document.getElementById("btn11");
var btn12 = document.getElementById("btn12");

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close1")[0];
var span2 = document.getElementsByClassName("close2")[0];
var span3 = document.getElementsByClassName("close3")[0];
var span4 = document.getElementsByClassName("close4")[0];
var span5 = document.getElementsByClassName("close5")[0];
var span6 = document.getElementsByClassName("close6")[0];
var span7 = document.getElementsByClassName("close7")[0];
var span8 = document.getElementsByClassName("close8")[0];
var span9 = document.getElementsByClassName("close9")[0];
var span10 = document.getElementsByClassName("close10")[0];
var span11 = document.getElementsByClassName("close11")[0];
var span12 = document.getElementsByClassName("close12")[0];

// When the user clicks the button, open the modal 
btn1.onclick = function() {
  modal1.style.display = "block";
}
btn2.onclick = function() {
  modal2.style.display = "block";
}
btn3.onclick = function() {
  modal3.style.display = "block";
}
btn4.onclick = function() {
  modal4.style.display = "block";
}
btn5.onclick = function() {
  modal5.style.display = "block";
}
btn6.onclick = function() {
  modal6.style.display = "block";
}
btn7.onclick = function() {
  modal7.style.display = "block";
}
btn8.onclick = function() {
  modal8.style.display = "block";
}
btn9.onclick = function() {
  modal9.style.display = "block";
}
btn10.onclick = function() {
  modal10.style.display = "block";
}
btn11.onclick = function() {
  modal11.style.display = "block";
}
btn12.onclick = function() {
  modal12.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
  modal1.style.display = "none";
}
span2.onclick = function() {
  modal2.style.display = "none";
}
span3.onclick = function() {
  modal3.style.display = "none";
}
span4.onclick = function() {
  modal4.style.display = "none";
}
span5.onclick = function() {
  modal5.style.display = "none";
}
span6.onclick = function() {
  modal6.style.display = "none";
}
span7.onclick = function() {
  modal7.style.display = "none";
}
span8.onclick = function() {
  modal8.style.display = "none";
}
span9.onclick = function() {
  modal9.style.display = "none";
}
span10.onclick = function() {
  modal10.style.display = "none";
}
span11.onclick = function() {
  modal11.style.display = "none";
}
span12.onclick = function() {
  modal12.style.display = "none";
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }else if (event.target == modal2) {
    modal2.style.display = "none";
  }else if (event.target == modal3) {
    modal3.style.display = "none";
  }else if (event.target == modal4) {
    modal4.style.display = "none";
  }else if (event.target == modal5) {
    modal5.style.display = "none";
  }else if (event.target == modal6) {
    modal6.style.display = "none";
  }else if (event.target == modal7) {
    modal7.style.display = "none";
  }else if (event.target == modal8) {
    modal8.style.display = "none";
  }else if (event.target == modal9) {
    modal9.style.display = "none";
  }else if (event.target == modal10) {
    modal10.style.display = "none";
  }else if (event.target == modal11) {
    modal11.style.display = "none";
  }else if (event.target == modal12) {
    modal12.style.display = "none";
  }
}
