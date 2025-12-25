const cursorImg = document.getElementById("cursorImage");

// ramdpm start 
let x = Math.random() * window.innerWidth;
let y = Math.random() * window.innerHeight;
let targetX = x;
let targetY = y;

//  initial 
cursorImg.style.left = `${x}px`;
cursorImg.style.top = `${y}px`;

// maus
document.addEventListener("mousemove", (e) => {
  targetX = e.clientX;
  targetY = e.clientY;

  createTrail(x, y);
});

// fllow
function animateCursor() {
  x += (targetX - x) * 0.15;
  y += (targetY - y) * 0.15;

  cursorImg.style.left = `${x}px`;
  cursorImg.style.top = `${y}px`;

  requestAnimationFrame(animateCursor);
}

animateCursor();

// tailralrailta
function createTrail(x, y) {
  const trail = cursorImg.cloneNode(true);

  trail.className = "cursor-trail";
  trail.style.left = `${x}px`;
  trail.style.top = `${y}px`;

  document.body.appendChild(trail);

  requestAnimationFrame(() => {
    trail.style.opacity = "0";
  });

  setTimeout(() => {
    trail.remove();
  }, 600);
}
