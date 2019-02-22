//Javascript for Clock
function clock() {
  const fullDate = new Date();
  const hours = fullDate.getHours();
  const minutes = fullDate.getMinutes();
  const seconds = fullDate.getSeconds();
  var formatted = ("0" + minutes).slice(-2);

  document.getElementById("hour").innerHTML = hours;
  document.getElementById("minute").innerHTML = ":" + formatted + ":";
  document.getElementById("second").innerHTML = seconds;
}

setInterval(clock, 100);
