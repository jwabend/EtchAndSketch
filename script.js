function makeGrid(rowCount, colCount) {
    const container = document.getElementById('container');

    for (let r = 0; r < rowCount; r++) {
        let row = document.createElement("div");
        row.classList.add("row");
        container.appendChild(row);

        for (let c = 0; c < colCount; c++) {
            let column = document.createElement("div");
            column.classList.add("column");
            row.appendChild(column);
        }
    }
}

