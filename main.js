const drumKits = document.getElementById("drum-container");
// drumKits.style.flexDirection = "row";

const keys = {
  clap: "q",
  hihat: "w",
  kick: "e",
  openhat: "r",
  ride: "t",
  snare: "y",
  tink: "u",
  tom: "i",
  sound9: "o",
};

for (let key in keys) {
  const squareFace = document.createElement("div");
  squareFace.classList.add("squares");

  squareFace.textContent = keys[key].toUpperCase();

  squareFace.style.backgroundImage = `url(./images/${keys[key]}.jpg)`;
  squareFace.style.backgroundSize = "cover";

  squareFace.addEventListener("click", () => {
    // Can also execute without but not flexible. Not recommended
    new Audio(`./sounds/${key}.wav`).play();
    console.log(audio);
  });

  drumKits.append(squareFace);
}

window.addEventListener("keydown", (e) => {
  for (let key in keys) {
    if (e.key === keys[key]) {
      // Constructor function
      const audio = new Audio(`./sounds/${key}.wav`);
      // It's Instance(obj)
      audio.play();
      // Dont work
      audio.currentTime = 0;
      console.log(audio);
    }
  }
});
