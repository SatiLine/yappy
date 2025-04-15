const table = document.querySelector('table');

for (let i = 0; i < table.rows.length; i++) {
    const row = table.rows[i];
    for (let j = 0; j < row.cells.length; j++) {
        const cell = row.cells[j];
        const content = cell.textContent.trim();
        const [rowIndex, colIndex] = content.split(':').map(Number);
        if ((rowIndex + colIndex) % 2 === 0) {
            cell.style.backgroundColor = 'red';
        }
    }
}