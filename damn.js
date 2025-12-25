const cursorImg = document.getElementById("cursorImage");

const IMAGE_SIZE = 24;

cursorImg.style.width = `${IMAGE_SIZE}px`;
cursorImg.style.height = `${IMAGE_SIZE}px`;

let x = window.innerWidth / 2;
let y = window.innerHeight / 2;
let targetX = x;
let targetY = y;

document.addEventListener("mousemove", (e) => {
  targetX = e.clientX;
  targetY = e.clientY;
});

function animateCursor() {
  x += (targetX - x) * 0.15;
  y += (targetY - y) * 0.15;

  cursorImg.style.left = `${x}px`;
  cursorImg.style.top = `${y}px`;

  requestAnimationFrame(animateCursor);
}

animateCursor();
