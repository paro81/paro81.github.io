document.addEventListener("DOMContentLoaded", function() {
        //add messages below
            var messages = [
                "in the works sometimes", 
                "rhythm music is interesting", 
                "the himothy is real",
                "don't go outside", 
                "touch grass, have you seen a tree before?", 
                "realizing my errors since 2013", 
                "minimal effort, high reward", 
                "a lackluster of ideas galore",
                "somehow, in the end, i still exist.",
                "asdjjfgjsklafjlasfjasdkjgfhkdsafdjfkll",
                "ERROR 404 PAGE NOT FOUND",
                "i hate circles, squares are okay, triangles are deadly",
                "watch me, i'm gonna cook soon, just you wait.",
                "redemption arc in the works",
                "i'm sorry that you're reading this",
                "when you put in the work and then things get worse:",
                "peggy the goat",
                "to cook or not to cook, there is no question. melt the frying pan",
                "bigger than the instagram, bigger than the twitch",
                "fake it till you make it",
                "rip good ol' laptop june2017-july2025",
                "why use a normal linktree type website"
            ];
        
            var randomIndex = Math.floor(Math.random() * messages.length);
            var randomMessage = messages[randomIndex];
        
            var messageElement = document.getElementById("message");
            messageElement.textContent = randomMessage;
            messageElement.style.color = "#d1d7e6";
        });
//ok hopefully this funny button logic also works
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
    button.style.transition =
      "top 0.6s cubic-bezier(0.19, 1, 0.22, 1), left 0.6s cubic-bezier(0.19, 1, 0.22, 1)";
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
    window.open(link, "_blank");
  });

  // add to page
  document.body.appendChild(button);
}

// create buttons
buttonsData.forEach((btn) => createRunawayButton(btn.text, btn.url));
