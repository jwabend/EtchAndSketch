document.addEventListener("DOMContentLoaded", function() {
    const gridContainer = document.getElementById("container");

    gridContainer.addEventListener("mouseover", event => {
        event.target.style.backgroundColor = "black";
        event.target.style.borderColor = "white";
    });

    // element.addEventListener("click", function() {
    //     alert("test");
    // });

    const gridSizeButton = document.querySelector("button[type='grid-size']");
    gridSizeButton.addEventListener("click", function() {
        const container = document.getElementById('container');
        container.innerHTML = ''; // Clear existing grid

        let rowCount = prompt("Enter row number");
        let columnCount = prompt("Enter column number");

        makeGrid(rowCount,columnCount)
    });
});



function makeGrid(rowCount, colCount) {
    const container = document.getElementById('container');

    for (let r = 0; r < rowCount; r++) {
        let row = document.createElement("div");
        row.classList.add("row");
        row.setAttribute("id", "row-id");
        container.appendChild(row);

        for (let c = 0; c < colCount; c++) {
            let column = document.createElement("div");
            column.classList.add("column");
            column.setAttribute("id", "column-id");
            row.appendChild(column);
        }
    }
}