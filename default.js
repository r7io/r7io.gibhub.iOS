let typing = document.getElementById("r7io");
let text = "r7io.github.io";
typing.innerHTML = "";
let index = 0;
let speed = 125;
function type() {
  if (index < text.length) {
    typing.innerHTML += text.charAt(index);
    index++;
    setTimeout(type, speed);
  }
}
type();
