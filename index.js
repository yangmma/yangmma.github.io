// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 

function change() {
  var rect = document.getElementById("invis");
  if (rect.style.display === "none") {
      rect.style.display = "block";
  } else {
      rect.style.display = "none";
  }
}
