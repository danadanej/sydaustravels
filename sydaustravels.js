/* JavaScript/.js Document */

var d = new Date(2018, 11, 24, 10);
document.getElementById("datetime").innerHTML = d;

/* button Contact Form and styling */
var i = 0;
var txt = 'To the staff at Code Louisville - Thank you for all of your hardwork; and to the Mentors - thank you for your assistance, suggestions, and time!';
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

/* click hide button Form and styling */
$(document).ready(function(){
  $("button").click(function(){
    $("#message").hide("slow", function(){
      alert("The paragraph is now hidden");
    });
  });
});
