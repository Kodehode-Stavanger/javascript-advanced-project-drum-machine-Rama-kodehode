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

  drumKits.append(squareFace);
}

window.addEventListener("keydown", (e) => {
  for (let key in keys) {
    if (e.key === keys[key]) {
      const audio = new Audio(`./sounds/${key}.wav`);
      audio.play();
      console.log(audio);
      break;
      // } else if (e.key === keys[key[1]] + keys[key[2]]) {
      //   const audio = new Audio(`./wave/${key}.wav`);
      //   audio.play();
    }
  }
});
