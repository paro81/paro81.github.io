const cursorImg = document.getElementById("cursorImage");

// position
let x = Math.random() * window.innerWidth;
let y = Math.random() * window.innerHeight;
let targetX = x;
let targetY = y;

// initial rotation
let angle = Math.random() * 360;
cursorImg.style.left = `${x}px`;
cursorImg.style.top = `${y}px`;

// mouse
document.addEventListener("mousemove", (e) => {
  targetX = e.clientX;
  targetY = e.clientY;

  // spawn trail 
  spawnTrail(x, y, angle);
});

// animation loop
function animateCursor() {
  x += (targetX - x) * 0.15;
  y += (targetY - y) * 0.15;

  angle = (angle + 4) % 360;

  cursorImg.style.left = `${x}px`;
  cursorImg.style.top = `${y}px`;
  cursorImg.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;

  requestAnimationFrame(animateCursor);
}

animateCursor();

// taril
function spawnTrail(cx, cy, startAngle) {
  const trail = cursorImg.cloneNode(true);
  trail.className = "cursor-trail";

  trail.style.left = `${cx}px`;
  trail.style.top = `${cy}px`;
  trail.style.opacity = "0.5";

  // speed
  let trailAngle = startAngle;
  const trailSpeed = 6 + Math.random() * 3; // funny variation
  const lifetime = 600;
  const startTime = performance.now();

  document.body.appendChild(trail);

  function animateTrail(now) {
    const elapsed = now - startTime;
    const progress = elapsed / lifetime;

    trailAngle += trailSpeed;

    trail.style.transform =
      `translate(-50%, -50%) rotate(${trailAngle}deg)`;

    trail.style.opacity = `${0.5 * (1 - progress)}`;

    if (progress < 1) {
      requestAnimationFrame(animateTrail);
    } else {
      trail.remove();
    }
  }

  requestAnimationFrame(animateTrail);
}
