function returnText() {
  let input = document.getElementById("userInput").value;
  alert(input);
}
let input = localStorage.getItem("input");

function returnText() {
  input = document.getElementById("userInput").value;
  localStorage.setItem("input", input);
  alert(input);
}

console.log(input);
