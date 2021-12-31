// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = scrollFunction;


window.addEventListener('load', dateFunction, false);

function dateFunction() {
  var options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  var today = new Date();
  var nextFriday = nextWeekdayDate(today, 5).toLocaleDateString("en-US", options);
  var nextSaturday = nextWeekdayDate(today, 6).toLocaleDateString("en-US", options);
  var nextSunday = nextWeekdayDate(today, 7).toLocaleDateString("en-US", options);

  document.getElementById('today-date').innerHTML = today.toLocaleDateString("en-US", options);
  document.getElementById('nextFriday').innerHTML = nextFriday;
  document.getElementById('nextSaturday').innerHTML = nextSaturday;
  document.getElementById('nextSunday').innerHTML = nextSunday;

}


function nextWeekdayDate(date, day_in_week) {
  var ret = new Date(date || new Date());
  ret.setDate(ret.getDate() + (day_in_week - 1 - ret.getDay()) % 7 + 1);
  return ret;
}


function scrollFunction() {
  //Get the button
  var mybutton = document.getElementById("myBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}