const sketchpad = document.querySelector("#sketchpad");


function makeRows(rows, cols) {
    sketchpad.style.setProperty('--grid-rows', rows);
    sketchpad.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
      let cell = document.createElement("div");
      sketchpad.appendChild(cell).className = "grid-item";
    };
  };
  
  makeRows(16, 16);

const gridItems = document.querySelectorAll(".grid-item")  

gridItems.forEach((div) => {
    div.addEventListener('mouseenter', () => {
      div.style.cssText = "background-color: black";
    });
  });
