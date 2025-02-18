let countries = ["Малайзия", "Нидерланды", "Швеция", "Швейцария"];
let population = [543, 345, 454, 146];

function displayCountries(countries, population) {
    if (countries.length !== population.length) {
        console.log("Количество стран и численность населения не совпадают!");
        return;
    }

    console.log("Информация о странах и их населении (цикл for):");
    for (let i = 0; i < countries.length; i++) {
        console.log(countries[i] + " -- " + population[i]);
    }
}

displayCountries(countries, population);

function displayCountriesPopulation(countries, population) {
    if (countries.length !== population.length) {
        console.log("Количество стран и численность населения не совпадают!");
        return;
    }

    console.log("Информация о странах и их населении (цикл for...in):");
    for (let i in countries) {
        console.log(countries[i] + " -- " + population[i]);
    }
}

displayCountriesPopulation(countries, population);