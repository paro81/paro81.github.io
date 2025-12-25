const cursorImg = document.getElementById("cursorImage");

const IMAGE_SIZE = 32;

cursorImg.style.width = `${IMAGE_SIZE}px`;
cursorImg.style.height = `${IMAGE_SIZE}px`;

const size = cursorImg.offsetWidth;
let x = Math.random() * (window.innerWidth - size) + size / 2;
let y = Math.random() * (window.innerHeight - size) + size / 2;
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

function createTrail(x, y) {
  const trail = cursorImg.cloneNode(true);
  trail.classList.add("cursor-trail");

  trail.style.left = `${x}px`;
  trail.style.top = `${y}px`;

  document.body.appendChild(trail);

  requestAnimationFrame(() => {
    trail.style.opacity = "0";
  });

  setTimeout(() => {
    trail.remove();
  }, 800);
}
