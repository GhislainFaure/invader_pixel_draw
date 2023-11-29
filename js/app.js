const app = {
  styles: ["black", "grey", "yellow", "green"],
  selectedColor: "",
  invaderDiv: document.getElementById("invader"),
  createForm: function () {
    const gridSizeInput = document.createElement("input");
    gridSizeInput.setAttribute("id", "sizeGrid");
    gridSizeInput.setAttribute("class", "input");
    gridSizeInput.setAttribute("placeholder", "Taille de la grille");
    gridSizeInput.type = "number";
    gridSizeInput.min = "2";
    gridSizeInput.max = "24";
    gridSizeInput.setAttribute("value", "");
    gridSizeInput.required = true;

    const pixelSizeInput = document.createElement("input");
    pixelSizeInput.setAttribute("id", "sizePixel");
    pixelSizeInput.setAttribute("class", "input");
    pixelSizeInput.setAttribute("placeholder", "Taille des pixels");
    pixelSizeInput.setAttribute("value", "");
    pixelSizeInput.type = "number";
    pixelSizeInput.min = "2";
    pixelSizeInput.max = "40";
    pixelSizeInput.required = true;

    const formButton = document.createElement("button");
    formButton.textContent = "Valider";
    formButton.setAttribute("id", "formButton");
    formButton.setAttribute("type", "submit");

    const form = document.querySelector(".configuration");
    form.append(gridSizeInput);
    form.append(pixelSizeInput);
    form.append(formButton);
  },
  createGrid: function (nbCases, pixelSize) {
    const table = document.createElement("table");
    app.invaderDiv.append(table);
    for (let i = 0; i < nbCases; i++) {
      const tr = document.createElement("tr");

      for (let j = 0; j < nbCases; j++) {
        const newCase = document.createElement("td");
        tr.append(newCase);
        newCase.classList.add("case");
        newCase.style.width = `${pixelSize}px`;
        newCase.style.height = `${pixelSize}px`;
      }
      table.append(tr);
    }
  },
  createColorsChoice: function () {
    const containerColors = document.createElement("div");
    containerColors.classList.add("containerColorsDiv");
    const colors = ["black", "grey", "yellow", "green"];
    for (const color of colors) {
      const colorDiv = document.createElement("div");
      colorDiv.style.backgroundColor = color;
      colorDiv.classList.add("colorDiv");
      containerColors.append(colorDiv);
      const main = document.querySelector(".main");
      main.append(containerColors);
    }
  },
  addListeners: function () {
    app.invaderDiv.addEventListener("click", (event) => {
      const styles = app.styles;
      for (const style of styles) {
        if (style !== app.selectedColor) {
          event.target.classList.remove(style);
        }
      }
      console.log(app.selectedColor);
      event.target.classList.toggle(app.selectedColor);
    });

    // gestion formulaire
    const form = document.querySelector(".configuration");
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      console.log(event);

      const newGridSizeValue = event.target[0].valueAsNumber;
      const newPixelSizeValue = event.target[1].valueAsNumber;

      app.invaderDiv.innerHTML = "";
      app.createGrid(newGridSizeValue, newPixelSizeValue);
    });
    // gestion click sur les divColor
    const colorDivs = document.querySelectorAll(".colorDiv");
    for (const colorDiv of colorDivs) {
      colorDiv.addEventListener("click", (event) => {
        for (const colorDiv of colorDivs) {
          colorDiv.classList.remove("bump");
        }
        event.target.classList.add("bump");
        app.selectedColor = event.target.style.backgroundColor;
      });
    }
  },

  init: function () {
    app.createForm();
    app.createColorsChoice();
    app.createGrid(16, 20);
    app.addListeners();
  },
};

window.addEventListener("DOMContentLoaded", app.init);
