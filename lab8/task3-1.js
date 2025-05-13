export async function getData() {
    const names = ['Иван', 'Мария', 'Пётр', 'Екатерина', 'Алексей', 'Анна', 'Дмитрий', 'Ольга', 'Сергей', 'Наталья'];
    const surnames = ['Иванов', 'Петрова', 'Сидоров', 'Кузнецова', 'Смирнов', 'Попова', 'Васильев', 'Новикова', 'Морозов', 'Волкова'];
    const streets = ['Ленина', 'Пушкина', 'Советская', 'Мира', 'Гагарина', 'Кирова', 'Жукова', 'Садовая', 'Школьная', 'Парковая'];
    const genders = ['male', 'female'];

    const randInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

    const count = randInt(5, 15);
    const humans = [];

    for (let i = 0; i < count; i++) {
        const gender = genders[randInt(0, 1)];
        const name = gender === 'male' ? names[randInt(0, 4)] : names[randInt(5, 9)];
        const surname = gender === 'male' ? surnames[randInt(0, 4)] : surnames[randInt(5, 9)];
        const age = randInt(10, 90);
        const address = `ул. ${streets[randInt(0, 9)]}, д. ${randInt(1, 100)}`;
        const phone = `+7-${randInt(900, 999)}-${randInt(100, 999)}-${randInt(10, 99)}-${randInt(10, 99)}`;
        humans.push({ id: Date.now() + i, firstName: name, lastName: surname, age, gender, address, phone });
    }
    
    return new Promise(resolve => setTimeout(() => resolve(humans), 300));
}
