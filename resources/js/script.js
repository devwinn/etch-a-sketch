const gridContainer = document.getElementById('grid-container');


makeGrids(16);

function makeGrids(size) {
    let squareSize = (500 / size) - 2;
    let x = 0;
    while (x < size) {
        let insert = document.createElement('div');
        let y = 0;
        insert.className = `grid-row-${x}`;
        insert.id = 'grid-row'
        gridContainer.appendChild(insert);
        let gridRow = document.getElementsByClassName(`grid-row-${x}`);
        while (y < size) {
            let gridSquare = document.createElement('div');
            gridSquare.id = 'grid-square';
            gridSquare.style.height = `${squareSize}px`;
            gridSquare.style.width = `${squareSize}px`;
            gridRow[0].appendChild(gridSquare);
            y++;
        }
        x++;
    }
}