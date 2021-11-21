const sketchpad = document.querySelector("#sketchpad");
const reloadBtn = document.getElementById("reload");
const submitBtn = document.getElementById("submit");

function makeRows(rows, cols) {
    sketchpad.style.setProperty('--grid-rows', rows);
    sketchpad.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
      let cell = document.createElement("div");
      sketchpad.appendChild(cell).className = "grid-item";
    };
};
  
makeRows(16, 16);
draw();

let rows = 0;
let cols = 0;

reloadBtn.addEventListener('click', () => {
    while (sketchpad.firstChild){
        sketchpad.removeChild(sketchpad.firstChild);
    }
    makeRows(16, 16);
    draw();
});

function draw(){
    const gridItems = document.querySelectorAll(".grid-item") 
    gridItems.forEach((div) => {
        div.addEventListener('mouseenter', () => {
          div.style.cssText = "background-color: black";
        });
    });
}

submitBtn.addEventListener('click', () =>{
    let text=document.getElementById('grid-size').value;
    console.log(text);
    while (sketchpad.firstChild){
        sketchpad.removeChild(sketchpad.firstChild);
    }
    makeRows(text, text);
    draw();
});