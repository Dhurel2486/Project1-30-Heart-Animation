const bodyEl = document.querySelector("body")

bodyEl.addEventListener("mousemove", (event)=>{
const xPos = event.offsetX
const yPos = event.offsety
const spanEl = document.createElement("span");
spanEl.style.left = xPos + "px";
spanEl.style.top = yPos + "px";
bodyEl.appendChild(spanEl);
});