/* JavaScript/.js Document */

/* JavaScript to show present date and time - shows in footer of html page*/
var d = new Date();
document.getElementById("datetime").innerHTML = d;

/* button Contact Form and styling */
var i = 0;
var txt = 'To the staff at Code Louisville - Thank you for all of your hardwork; and to the Mentors - thank you for your assistance, suggestions, and time!';
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("click").innerHTML += txt.charAt(i);
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
