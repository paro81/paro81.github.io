const cursorImg = document.getElementById("damn-bird.png");
        
let x = 0, y = 0;
let targetX = 0, targetY = 0;

document.addEventListener("mousemove", (e) => {
  targetX = e.clientX;
  targetY = e.clientY;
});

function animate() {
  x += (targetX - x) * 0.15;
  y += (targetY - y) * 0.15;
  cursorImg.style.left = x + "px";
  cursorImg.style.top = y + "px";
  requestAnimationFrame(animate);
}
animate();
