const gridContainer = document.getElementById('grid-container');
const resetButton = document.getElementById('reset');

resetButton.addEventListener('click', resetGrid);
makeGrid(16);


function makeGrid(size) {
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
            gridSquare.className = 'grid-square';
            gridSquare.style.height = `${squareSize}px`;
            gridSquare.style.width = `${squareSize}px`;
            gridRow[0].appendChild(gridSquare);
            y++;
        }
        x++;

    }

    let squares = document.getElementsByClassName('grid-square')
    for (var i = 0; i < squares.length; i++) {
        squares[i].addEventListener('mouseover', etch);
    }
}

function etch(e) {
    e.target.style.background = 'black';
}

function resetGrid() {
    let squares = document.getElementsByClassName('grid-square')
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = 'white';
    }
    console.log("grid resetting")
}