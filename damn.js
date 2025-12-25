const cursorImg = document.getElementById("cursorImage");

let x = Math.random() * window.innerWidth;
let y = Math.random() * window.innerHeight;
let targetX = x;
let targetY = y;
let angle = 0;

cursorImg.style.left = `${x}px`;
cursorImg.style.top = `${y}px`;

// mouse
document.addEventListener("mousemove", (e) => {
  targetX = e.clientX;
  targetY = e.clientY;

  createTrail(x, y, angle);
});

// follow
function animateCursor() {
  x += (targetX - x) * 0.15;
  y += (targetY - y) * 0.15;

  angle += 6; // rotation speed
  cursorImg.style.left = `${x}px`;
  cursorImg.style.top = `${y}px`;
  cursorImg.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;

  requestAnimationFrame(animateCursor);
}

animateCursor();

// trail
function createTrail(cx, cy, parentAngle) {
  const trail = cursorImg.cloneNode(true);
  trail.className = "cursor-trail";

  trail.style.left = `${cx}px`;
  trail.style.top = `${cy}px`;
  trail.style.transform = `translate(-50%, -50%) rotate(${parentAngle}deg)`;

  document.body.appendChild(trail);

  requestAnimationFrame(() => {
    trail.style.opacity = "0";
  });

  setTimeout(() => trail.remove(), 600);
}
