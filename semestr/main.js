import {
    fetchShips,
    fetchStarlinkSatellites,
    fetchDragons,
    filterShipsByName,
    sortShipsByName,
    getShipsStatistics,
    sortStarlinkByLaunchDate,
    getStarlinkStatistics
} from './data.js';

import {
    showGreeting,
    renderShipsControls,
    renderShipsData,
    renderShipsStatistics,
    renderStarlinkControls,
    renderStarlinkData,
    renderStarlinkStatistics,
    renderDragonsControls,
    renderDragonsData,
    renderDragonsStatistics
} from './ui.js';

// DOM-элементы
const welcomeSection = document.getElementById('welcome-section');
const mainSection = document.getElementById('main-section');
const greetingHeader = document.getElementById('greeting');
const shipsBtn = document.getElementById('ships-btn');
const starlinkBtn = document.getElementById('starlink-btn');
const dragonsBtn = document.getElementById('dragons-btn');

const shipsPage = document.getElementById('ships-page');
const starlinkPage = document.getElementById('starlink-page');
const dragonsPage = document.getElementById('dragons-page');

const shipsControls = document.getElementById('ships-controls');
const shipsData = document.getElementById('ships-data');
const shipsStatistics = document.getElementById('ships-statistics');
const starlinkControls = document.getElementById('starlink-controls');
const starlinkData = document.getElementById('starlink-data');
const starlinkStatistics = document.getElementById('starlink-statistics');
const dragonsControls = document.getElementById('dragons-controls');
const dragonsData = document.getElementById('dragons-data');
const dragonsStatistics = document.getElementById('dragons-statistics');

const welcomeForm = document.getElementById('welcome-form');
const usernameInput = document.getElementById('username');

// Состояние приложения
let userName = '';
let shipsRaw = [];
let shipsFiltered = [];
let starlinkRaw = [];
let starlinkFiltered = [];
let dragonsRaw = [];
let dragonsFiltered = [];

// --- Приветственная страница ---
welcomeForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    userName = usernameInput.value.trim();
    if (userName) {
        welcomeSection.style.display = 'none';
        mainSection.style.display = 'block';
        showGreeting(userName, greetingHeader);

        shipsData.textContent = 'Загрузка...';
        starlinkData.textContent = 'Загрузка...';
        dragonsData.textContent = 'Загрузка...';
        try { shipsRaw = await fetchShips(); } catch { shipsData.textContent = 'Ошибка загрузки кораблей'; }
        try { starlinkRaw = await fetchStarlinkSatellites(); } catch { starlinkData.textContent = 'Ошибка загрузки спутников'; }
        try { dragonsRaw = await fetchDragons(); } catch { dragonsData.textContent = 'Ошибка загрузки Dragon'; }

        showShipsPage();
        setActiveButton(shipsBtn);
    }
});

// --- Навигация между разделами ---
shipsBtn.addEventListener('click', () => { showShipsPage(); setActiveButton(shipsBtn); });
starlinkBtn.addEventListener('click', () => { showStarlinkPage(); setActiveButton(starlinkBtn); });
dragonsBtn.addEventListener('click', () => { showDragonsPage(); setActiveButton(dragonsBtn); });

function setActiveButton(activeBtn) {
    [shipsBtn, starlinkBtn, dragonsBtn].forEach(btn => btn.classList.remove('active'));
    activeBtn.classList.add('active');
}

// --- Корабли SpaceX ---
function showShipsPage() {
    shipsPage.style.display = 'block';
    starlinkPage.style.display = 'none';
    dragonsPage.style.display = 'none';

    renderShipsControls(shipsControls, onShipsControlChange);
    shipsFiltered = [...shipsRaw];
    renderShipsData(shipsFiltered, shipsData);
    renderShipsStatistics(getShipsStatistics(shipsFiltered), shipsStatistics);
}

function onShipsControlChange(options) {
    let result = filterShipsByName(shipsRaw, options.search);
    result = sortShipsByName(result, options.sort === 'asc');
    shipsFiltered = result;
    renderShipsData(shipsFiltered, shipsData);
    renderShipsStatistics(getShipsStatistics(shipsFiltered), shipsStatistics);
}

// --- Спутники Starlink ---
function showStarlinkPage() {
    shipsPage.style.display = 'none';
    starlinkPage.style.display = 'block';
    dragonsPage.style.display = 'none';

    renderStarlinkControls(starlinkControls, onStarlinkControlChange);
    starlinkFiltered = [...starlinkRaw];
    renderStarlinkData(starlinkFiltered, starlinkData);
    renderStarlinkStatistics(getStarlinkStatistics(starlinkFiltered), starlinkStatistics);
}

function onStarlinkControlChange(options) {
    let result = [...starlinkRaw];
    result = sortStarlinkByLaunchDate(result, options.sort === 'asc');
    starlinkFiltered = result;
    renderStarlinkData(starlinkFiltered, starlinkData);
    renderStarlinkStatistics(getStarlinkStatistics(starlinkFiltered), starlinkStatistics);
}

// --- Корабли Dragon ---
function showDragonsPage() {
    shipsPage.style.display = 'none';
    starlinkPage.style.display = 'none';
    dragonsPage.style.display = 'block';

    renderDragonsControls(dragonsControls, onDragonsControlChange);
    dragonsFiltered = [...dragonsRaw];
    renderDragonsData(dragonsFiltered, dragonsData);
    renderDragonsStatistics(dragonsFiltered, dragonsStatistics);
}

function onDragonsControlChange(options) {
    dragonsFiltered = [...dragonsRaw];
    dragonsFiltered.sort((a, b) => {
        if (!a.name || !b.name) return 0;
        return options.sort === 'asc'
            ? a.name.localeCompare(b.name)
            : b.name.localeCompare(a.name);
    });
    renderDragonsData(dragonsFiltered, dragonsData);
    renderDragonsStatistics(dragonsFiltered, dragonsStatistics);
}

// --- Инициализация приложения ---
function init() {
    welcomeSection.style.display = 'block';
    mainSection.style.display = 'none';
    shipsPage.style.display = 'none';
    starlinkPage.style.display = 'none';
    dragonsPage.style.display = 'none';
    setActiveButton(shipsBtn);
}
init();
