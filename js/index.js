const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

function enrage() {
  alert("ow");
  ctx.fillColor = "#FF0000";
  ctx.fill();
  setTimeout(() => alert("I'm mad now >:("), 2000);
}

document.addEventListener("click", () => {
  enrage();
  document.removeEventListener("click", enrage);
});
