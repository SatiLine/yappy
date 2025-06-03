// Приветствие пользователя
export function showGreeting(userName, greetingHeader) {
    greetingHeader.textContent = `Привет, ${userName}!`;
}

// --- Корабли SpaceX ---
export function renderShipsControls(container, onChange) {
    container.innerHTML = '';
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = 'Поиск по имени корабля...';
    const sortSelect = document.createElement('select');
    sortSelect.innerHTML = `
        <option value="asc">Сортировка: А-Я</option>
        <option value="desc">Сортировка: Я-А</option>
    `;
    function triggerChange() {
        onChange({
            search: searchInput.value,
            sort: sortSelect.value
        });
    }
    searchInput.addEventListener('input', triggerChange);
    sortSelect.addEventListener('change', triggerChange);
    container.append(' ', searchInput, ' ', sortSelect);
}

export function renderShipsData(data, container) {
    container.innerHTML = '';
    if (!data.length) {
        container.textContent = 'Нет данных для отображения.';
        return;
    }
    const table = document.createElement('table');
    table.innerHTML = `
        <thead>
            <tr>
                <th>Имя</th>
                <th>Тип</th>
                <th>Порт</th>
                <th>Активен</th>
            </tr>
        </thead>
        <tbody>
            ${data.map(ship => `
                <tr>
                    <td>${ship.name || '-'}</td>
                    <td>${ship.type || '-'}</td>
                    <td>${ship.home_port || '-'}</td>
                    <td>${ship.active ? 'Да' : 'Нет'}</td>
                </tr>
            `).join('')}
        </tbody>
    `;
    container.appendChild(table);
}

export function renderShipsStatistics(stat, container) {
    container.innerHTML = `Всего: ${stat.count}, Активных: ${stat.active}`;
}

// --- Спутники Starlink ---
export function renderStarlinkControls(container, onChange) {
    container.innerHTML = '';
    const sortSelect = document.createElement('select');
    sortSelect.innerHTML = `
        <option value="desc">Сортировка: Новые выше</option>
        <option value="asc">Сортировка: Старые выше</option>
    `;
    sortSelect.addEventListener('change', () => {
        onChange({
            sort: sortSelect.value
        });
    });
    container.append(' ', sortSelect);
}

export function renderStarlinkData(data, container) {
    container.innerHTML = '';
    if (!data.length) {
        container.textContent = 'Нет данных для отображения.';
        return;
    }
    const table = document.createElement('table');
    table.innerHTML = `
        <thead>
            <tr>
                <th>Имя</th>
                <th>Дата запуска</th>
                <th>Номер NORAD</th>
            </tr>
        </thead>
        <tbody>
            ${data.map(sat => `
                <tr>
                    <td>${sat.spaceTrack?.OBJECT_NAME || '-'}</td>
                    <td>${sat.spaceTrack?.LAUNCH_DATE || '-'}</td>
                    <td>${sat.spaceTrack?.OBJECT_ID || '-'}</td>
                </tr>
            `).join('')}
        </tbody>
    `;
    container.appendChild(table);
}

export function renderStarlinkStatistics(stat, container) {
    container.innerHTML = `Всего: ${stat.count}, Активных: ${stat.operational}`;
}

// --- Корабли Dragon ---
export function renderDragonsControls(container, onChange) {
    container.innerHTML = '';
    const sortSelect = document.createElement('select');
    sortSelect.innerHTML = `
        <option value="asc">Сортировка: А-Я</option>
        <option value="desc">Сортировка: Я-А</option>
    `;
    sortSelect.addEventListener('change', () => {
        onChange({
            sort: sortSelect.value
        });
    });
    container.append(' ', sortSelect);
}

export function renderDragonsData(data, container) {
    container.innerHTML = '';
    if (!data.length) {
        container.textContent = 'Нет данных для отображения.';
        return;
    }
    const table = document.createElement('table');
    table.innerHTML = `
        <thead>
            <tr>
                <th>Имя</th>
                <th>Тип</th>
                <th>Экипаж</th>
                <th>Масса (кг)</th>
                <th>Описание</th>
            </tr>
        </thead>
        <tbody>
            ${data.map(dragon => `
                <tr>
                    <td>${dragon.name || '-'}</td>
                    <td>${dragon.type || '-'}</td>
                    <td>${dragon.crew_capacity ?? '-'}</td>
                    <td>${dragon.dry_mass_kg ?? '-'}</td>
                    <td>${dragon.description ? dragon.description.slice(0, 80) + '...' : '-'}</td>
                </tr>
            `).join('')}
        </tbody>
    `;
    container.appendChild(table);
}

export function renderDragonsStatistics(data, container) {
    container.innerHTML = `Всего: ${data.length}`;
}
