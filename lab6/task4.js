const ageTable = document.querySelector('#age-table');
console.log("Таблица с id='age-table':");
console.log(ageTable);

const labelsInTable = ageTable.querySelectorAll('label');
console.log("Все элементы <label> внутри таблицы:");
console.log(labelsInTable);

const firstTd = ageTable.querySelector('td');
console.log("Первый <td> в таблице:");
console.log(firstTd);

const searchForm = document.querySelector('form[name="search"]');
console.log("Форма с name='search':");
console.log(searchForm);

const firstInputInSearch = searchForm.querySelector('input');
console.log("Первый <input> в форме name='search':");
console.log(firstInputInSearch);

const inputsInSearch = searchForm.querySelectorAll('input');
const lastInputInSearch = inputsInSearch[inputsInSearch.length - 1];
console.log("Последний <input> в форме name='search':");
console.log(lastInputInSearch);