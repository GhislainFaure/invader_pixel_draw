const app = {
  createForm: function () {
    const gridSizeInput = document.createElement("input");
    gridSizeInput.setAttribute("id", "sizeGrid");
    gridSizeInput.setAttribute("class", "input");
    gridSizeInput.setAttribute("placeholder", "Taille de la grille");
    gridSizeInput.setAttribute("value", "");

    const pixelSizeInput = document.createElement("input");
    pixelSizeInput.setAttribute("id", "sizePixel");
    pixelSizeInput.setAttribute("class", "input");
    pixelSizeInput.setAttribute("placeholder", "Taille des pixels");

    const formButton = document.createElement("button");
    formButton.textContent = "Valider";
    formButton.setAttribute("id", "formButton");
    formButton.setAttribute("type", "submit");

    const form = document.querySelector(".configuration");
    form.append(gridSizeInput);
    form.append(pixelSizeInput);
    form.append(formButton);
  },
  createGrid: function (nbCases) {
    const invader = document.getElementById("invader");
    for (let i = 0; i < nbCases; i++) {
      let newCase = document.createElement("div");
      newCase.classList.add("case");
      invader.append(newCase);
    }
  },
  addListeners: function () {
    const invader = document.getElementById("invader");
    invader.addEventListener("click", (event) => {
      event.target.classList.toggle("black");
    });
    const form = document.querySelector(".configuration");
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      console.log(event);
      const gridSizeInput = event.target[0];
      const newGridSizeValue = parseInt(gridSizeInput.value);
      invader.innerHTML = "";
      app.createGrid(newGridSizeValue);
    });
  },
  init: function () {
    app.createForm();
    app.createGrid(64);
    app.addListeners();
  },
};

document.addEventListener("DOMContentLoaded", app.init);
