let booksByAuthors = {
    "Пушкин": ["Евгений Онегин", "Руслан и Людмила", "Сказка о рыбаке и рыбке"],
    "Есенин": ["Чёрный человек"],
    "Толстой": ["Война и мир", "Анна Каренина"],
    "Гоголь": ["Мертвые души", "Ревизор"]
};

for (let author in booksByAuthors) {
    console.log("Автор:", author);
    console.log("Книги:");

    for (let book of booksByAuthors[author]) {
        console.log("-", book);
    }
    
    console.log(""); // Пустая строка для разделения между авторами
}