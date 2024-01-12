let getElById = (el) => document.getElementById(String(el));
const mainGrid = document.querySelector('.grid');
let maxRow = getElById('size').value;
let iteration = getElById('iteration');
let loop;

function createGrid(size) {
    mainGrid.innerHTML = ''
    mainGrid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    mainGrid.style.gridTemplateRows = `repeat(${size}, 1fr)`
    for (let i = 1; i <= size ** 2; i++) {
        let cell = document.createElement('div');
        cell.classList.add('cell');
        cell.setAttribute('id', i);
        cell.addEventListener('click', () => cell.classList.toggle('alive'));
        mainGrid.append(cell);
    }
}


function getGrid(id) {
    let neighbors = [];
    let directions = [-1, 0, 1];

    for (let rowOffset of directions) {
        for (let colOffset of directions) {
            const neighborId = id + rowOffset * maxRow + colOffset;
            // Exclude the center and out-of-bounds neighbors
            if (neighborId !== id && neighborId > 0 && neighborId < maxRow**2) {
                neighbors.push(neighborId);
            }
        }
    }
    return neighbors;
}




function getIterCells() {
    let targetCell = document.querySelectorAll('.alive')
    let arrCellsId = [...targetCell];
    for (let cell of targetCell) {
        let arrNeighbors = getGrid(+cell.id).map(el => getElById(el))
        arrCellsId.push(...arrNeighbors)
    }
    return [...new Set(arrCellsId)]
}

function oneStep() {
    let arrIterCells = getIterCells()
    if (!arrIterCells.length) return resetInterval()
    let setAlive = [];
    let removeAlive = [];
    for (let cell of arrIterCells) {
        let aliveCount = getGrid(+cell.id).filter(el => getElById(el).classList.contains('alive')).length;
        (![2, 3].includes(aliveCount)) ? removeAlive.push(cell) : (aliveCount === 3) && setAlive.push(cell);
    }
    removeAlive.forEach(item => item.classList.remove('alive'))
    setAlive.forEach(item => item.classList.add('alive'))
    iteration.innerText = +iteration.innerText + 1
}

function resetInterval() {
    clearInterval(loop);
    loop = null;
}

function resetGrid() {
    resetInterval()
    document.querySelectorAll('.alive').forEach(item => item.classList.remove('alive'))
    getElById('iteration').innerText = 0
}

function setRandom() {
    for (let i = 1; i < maxRow**2; i++) {
        Math.random() < +getElById('random').value / 100 ? getElById(i).classList.add('alive') : getElById(i).classList.remove('alive')
    }
}

createGrid(maxRow);

getElById('btn-1').addEventListener('click', () => loop || (loop = setInterval(oneStep, getElById('speed').value)));
getElById('btn-2').addEventListener('click', resetInterval);
getElById('btn-3').addEventListener('click', resetGrid);
getElById('btn-4').addEventListener('click', setRandom);
getElById('size').addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.code === 'Enter') {
        e.preventDefault();
        maxRow = getElById('size').value;
        createGrid(maxRow);
        resetGrid();
    }
});
