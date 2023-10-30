const gridContainer = document.getElementById('grid-container');

makeGrids();

function makeGrids() {
    let x = 0;
    while (x < 16) {
        let insert = document.createElement('div');
        let y = 0;
        insert.className = `grid-row-${x}`;
        insert.id = 'grid-row'
        gridContainer.appendChild(insert);
        let gridRow = document.getElementsByClassName(`grid-row-${x}`);
        while (y < 16) {
            let gridSquare = document.createElement('div');
            gridSquare.id = 'grid-square';
            gridSquare.innerHTML = ' ';
            gridRow[0].appendChild(gridSquare);
            y++;
        }
        x++;
    }
}