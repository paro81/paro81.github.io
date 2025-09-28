//ok hopefully this funny button logic also works
//so in theory how this would have worked is that the buttons would be at a random part of the page when loading the site, and when you tried to hover or click on them they would glide to a random part of the site and keep doing this
const buttonsData = [
  { text: "thoughts", url: "https://paro81.github.io/notes.html" },
  { text: "trash", url: "https://paro81.github.io/media.html" },
  { text: "why", url: "https://paro81.github.io/ultimatum.html" },
  { text: "youtube", url: "https://www.youtube.com/channel/UCIyvR-8so62F9bvozMfPqlA" },
  { text: "newgrounds", url: "https://paro81.newgrounds.com" },
  { text: "gdstats", url: "https://docs.google.com/spreadsheets/d/1r2fCobUjmPva9yHVj4yEpq1GkAZfugfhrPSEBOVbt20/edit?usp=sharing" },
  { text: "os", url: "https://osu.ppy.sh/users/35677182" },
  { text: "tetrio", url: "https://ch.tetr.io/u/parzo" },
  { text: "hmm", url: "https://paro81.github.io/otherstuff.html" },
];

function createRunawayButton(label, link) {
  const button = document.createElement("button");
  button.textContent = label;

  // base styles
  Object.assign(button.style, {
    display: "inline-block",
    padding: "7.5px 12.5px",
    font: "14px Georgia, Times",
    cursor: "pointer",
    textAlign: "center",
    textDecoration: "none",
    outline: "none",
    color: "#FFF",
    backgroundColor: "#999",
    border: "none",
    borderRadius: "0px",
    boxShadow: "0 9px #777",
    transitionDuration: "0.4s",
    position: "absolute", // for movement
  });

  // hover effect
  button.addEventListener("mouseenter", () => {
    button.style.backgroundColor = "#555";
    button.style.transition = "top 0.5s ease, left 0.5s ease";
  });

  button.addEventListener("mouseleave", () => {
    button.style.backgroundColor = "#999";
    button.style.transitionDuration = "0.4s";
  });

  // active effect (click)
  button.addEventListener("mousedown", () => {
    button.style.transitionDuration = ".1s";
    button.style.backgroundColor = "#111";
    button.style.boxShadow = "0 5px #666";
    button.style.transform = "translateY(4px)";
  });

  button.addEventListener("mouseup", () => {
    button.style.backgroundColor = "#555";
    button.style.boxShadow = "0 9px #777";
    button.style.transform = "translateY(0px)";
  });

  // moev movement
  button.addEventListener("mouseover", () => {
    const moveInterval = setInterval(() => {
      const maxX = window.innerWidth - button.offsetWidth;
      const maxY = window.innerHeight - button.offsetHeight;

      const randomX = Math.floor(Math.random() * maxX);
      const randomY = Math.floor(Math.random() * maxY);

      button.style.left = `${randomX}px`;
      button.style.top = `${randomY}px`;
    }, 600);

    button.addEventListener(
      "mouseleave",
      () => clearInterval(moveInterval),
      { once: true }
    );
  });

  // make button actually go to link
  button.addEventListener("click", () => {
    window.open(link);
  });

  // add to page
  document.body.appendChild(button);
}

// create buttons
buttonsData.forEach((btn) => createRunawayButton(btn.text, btn.url));
