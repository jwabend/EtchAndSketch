document.addEventListener("DOMContentLoaded", function() {
    const gridContainer = document.getElementById("container");
    const gridSizeButton = document.querySelector("button[type='grid-size']");

    document.addEventListener("mouseover", function(event) {
        if (event.target.classList.contains("column")) {
            event.target.style.backgroundColor = "black";
            event.target.style.borderColor = "white";
        }
    });

   

    
    gridSizeButton.addEventListener("click", function() {
        const container = document.getElementById('container');
        container.innerHTML = ''; // Clear existing grid

        let rowCount = prompt("Enter row number");
        let columnCount = prompt("Enter column number");

        makeGrid(rowCount,columnCount)
    });
});



function makeGrid(rowCount,columnCount) {
    const container = document.getElementById('container');

    for (let r = 0; r < rowCount; r++) {
        let row = document.createElement("div");
        row.classList.add("row");
        container.appendChild(row);

        for (let c = 0; c < columnCount; c++) {
            let column = document.createElement("div");
            column.classList.add("column");
            row.appendChild(column);
        }
    }
}

makeGrid(16,16)
