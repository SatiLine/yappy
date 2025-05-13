import { getData } from './task3-1.js';

let originalData = [];
let filteredData = [];
let currentFilter = 'all';

document.getElementById('loadBtn').addEventListener('click', async () => {
    originalData = await getData();
    applyFilter(currentFilter);
    renderTable();
});

document.getElementById('filter').addEventListener('change', (e) => {
    currentFilter = e.target.value;
    applyFilter(currentFilter);
    renderTable();
});

document.getElementById('addBtn').addEventListener('click', addNewRow);

function applyFilter(filter) {
    if (filter === 'all') filteredData = [...originalData];
    else filteredData = originalData.filter(h => h.gender === filter);
}

function renderTable() {
    const table = document.getElementById('table');
    table.innerHTML = '';

    table.insertAdjacentHTML('beforeend', `
        <thead>
            <tr>
                <th>Имя</th>
                <th>Фамилия</th>
                <th>Возраст</th>
                <th>Пол</th>
                <th>Адрес</th>
                <th>Телефон</th>
                <th>Действия</th>
            </tr>
        </thead>
    `);

    const tbody = document.createElement('tbody');
    filteredData.forEach(human => {
        const row = document.createElement('tr');
        row.dataset.id = human.id;

        if (human.age < 18) {
            row.style.backgroundColor = '#90EE90'; // зелёный
        } else if (human.age >= 18 && human.age < 60) {
            row.style.backgroundColor = '#FFFFE0'; // жёлтый
        } else {
            row.style.backgroundColor = '#FFB6C1'; // красный
        }

        row.innerHTML = `
            <td>${human.firstName}</td>
            <td>${human.lastName}</td>
            <td>${human.age}</td>
            <td>${human.gender === 'male' ? 'муж.' : 'жен.'}</td>
            <td>${human.address}</td>
            <td>${human.phone}</td>
            <td>
                <button class="delete">Удалить</button>
                <button class="edit">Изменить</button>
            </td>
        `;
        tbody.appendChild(row);
    });
    table.appendChild(tbody);
    addEventListeners();
}

function addEventListeners() {
    // Удаление
    document.querySelectorAll('.delete').forEach(btn => {
        btn.onclick = (e) => {
            const id = Number(e.target.closest('tr').dataset.id);
            originalData = originalData.filter(h => h.id !== id);
            applyFilter(currentFilter);
            renderTable();
        };
    });

    // Редактирование
    document.querySelectorAll('.edit').forEach(btn => {
        btn.onclick = (e) => {
            const row = e.target.closest('tr');
            const id = Number(row.dataset.id);
            const human = originalData.find(h => h.id === id);

            row.innerHTML = `
                <td><input value="${human.firstName}"></td>
                <td><input value="${human.lastName}"></td>
                <td><input type="number" min="10" max="90" value="${human.age}"></td>
                <td>
                    <select>
                        <option value="male" ${human.gender === 'male' ? 'selected' : ''}>муж.</option>
                        <option value="female" ${human.gender === 'female' ? 'selected' : ''}>жен.</option>
                    </select>
                </td>
                <td><input value="${human.address}"></td>
                <td><input value="${human.phone}"></td>
                <td>
                    <button class="save">Сохранить</button>
                    <button class="cancel">Отмена</button>
                </td>
            `;

            row.querySelector('.save').onclick = () => {
                const inputs = row.querySelectorAll('input, select');
                human.firstName = inputs[0].value;
                human.lastName = inputs[1].value;
                human.age = Number(inputs[2].value);
                human.gender = inputs[3].value;
                human.address = inputs[4].value;
                human.phone = inputs[5].value;
                applyFilter(currentFilter);
                renderTable();
            };
            row.querySelector('.cancel').onclick = renderTable;
        };
    });
}

function addNewRow() {
    const firstName = prompt('Имя:');
    const lastName = prompt('Фамилия:');
    const age = Number(prompt('Возраст (10-90):'));
    const gender = prompt('Пол (male/female):');
    const address = prompt('Адрес:');
    const phone = prompt('Телефон:');
    if (!firstName || !lastName || !age || !gender || !address || !phone) return;
    originalData.push({
        id: Date.now() + Math.random(),
        firstName,
        lastName,
        age,
        gender,
        address,
        phone
    });
    applyFilter(currentFilter);
    renderTable();
}
