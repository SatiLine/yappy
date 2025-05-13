const proxy = 'https://cors-anywhere.herokuapp.com/';

const usernameSpan = document.getElementById('username');
const changeNameBtn = document.getElementById('changeName');
const acceptNameBtn = document.getElementById('acceptName');
const animalChoiceDiv = document.getElementById('animalChoice');
const animalInfoDiv = document.getElementById('animalInfo');
const animalImg = document.getElementById('animalImg');
const animalFact = document.getElementById('animalFact');

let currentFact = '';

async function safeFetchJson(url) {
  try {
    const resp = await fetch(url);
    const text = await resp.text();
    if (text.trim().startsWith('<')) {
      throw new Error('Сервер вернул HTML вместо данных');
    }
    return JSON.parse(text);
  } catch (error) {
    throw new Error('Ошибка при получении или обработке данных: ' + error.message);
  }
}

async function getRandomName() {
  try {
    const data = await safeFetchJson(proxy + 'https://random-data-api.com/api/v2/users');
    return data.first_name || 'Гость';
  } catch (error) {
    console.error(error.message);
    return 'Гость';
  }
}

async function getAnimalInfo(animal) {
  try {
    const data = await safeFetchJson(proxy + `https://some-random-api.ml/animal/${animal}`);
    if (!data.image || !data.fact) throw new Error('Некорректный ответ API');
    return {
      fact: data.fact,
      img: data.image
    };
  } catch (error) {
    console.error(error.message);
    return {
      fact: error.message || 'Не удалось загрузить факт',
      img: 'https://via.placeholder.com/400x300?text=Image+Not+Found'
    };
  }
}

async function updateName() {
  usernameSpan.textContent = '...';
  const name = await getRandomName();
  usernameSpan.textContent = name;
}

changeNameBtn.onclick = updateName;

acceptNameBtn.onclick = () => {
  animalChoiceDiv.classList.remove('hidden');
  changeNameBtn.disabled = true;
  acceptNameBtn.disabled = true;
};

animalChoiceDiv.onclick = async (e) => {
  if (e.target.tagName === 'BUTTON') {
    const animal = e.target.dataset.animal;
    animalFact.textContent = 'Загрузка...';
    animalImg.src = '';
    const info = await getAnimalInfo(animal);
    animalImg.src = info.img;
    animalFact.textContent = info.fact;
    currentFact = info.fact;
    animalInfoDiv.classList.remove('hidden');
  }
};

updateName();
