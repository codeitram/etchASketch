let container = document.querySelector(".container");
updateContainer(5);

let cols = document.querySelectorAll(".col");

cols.forEach((col) => {
  col.addEventListener("mouseover", changeColor);
});

function changeColor(e) {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  console.log(this);
  this.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  e.stopPropagation();
}

let button = document.querySelector("button");
button.addEventListener("click", (b) => {
  noOfRows = Number(prompt("Enter Grid Size"));
  while (noOfRows > 100 || noOfRows == 0) {
    noOfRows = prompt("Enter valid no rows less than 100");
  }
  removeGrid();
  updateContainer(noOfRows);
});

function removeGrid() {
  let rows = document.querySelectorAll(".row");
  rows.forEach((row) => {
    row.remove();
  });
}

function updateContainer(noOfRows) {
  for (let i = 0; i < noOfRows; i++) {
    const div = document.createElement("div");
    div.className = `row`;
    container.appendChild(div);
    const row = container.querySelector(`.row:last-child`);
    for (let j = 0; j < noOfRows; j++) {
      const div = document.createElement("div");
      div.className = `col`;
      row.appendChild(div);
    }
  }
  let cols = document.querySelectorAll(".col");

  cols.forEach((col) => {
    col.addEventListener("mouseover", changeColor);
  });
}
