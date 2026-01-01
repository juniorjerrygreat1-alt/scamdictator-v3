let points = localStorage.getItem("points");
if (!points) {
  points = 10; // signup bonus
  localStorage.setItem("points", points);
}
document.getElementById("points")?.innerText = points;

let count = localStorage.getItem("count") || 0;

function paste() {
  if (count >= 10) {
    alert("You have used 10 pastes today.");
    return;
  }
  count++;
  points = Number(points) + 5;
  localStorage.setItem("count", count);
  localStorage.setItem("points", points);
  document.getElementById("points").innerText = points;
  alert("Paste accepted. +5 points");
}

function clearText() {
  document.getElementById("text").value = "";
}

function login() {
  alert("Logged in on this device");
  location.href = "index.html";
}
