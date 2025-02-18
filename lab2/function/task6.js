function calculatePerimeter(...coords) { // "rest parameter" (параметр остатка). 
                                         // Он позволяет функции принимать любое количество аргументов и собирает их в массив coords.
    let perimeter = 0;
    const n = coords.length / 2;

    for (let i = 0; i < n; i++) {
        const x1 = coords[i * 2]; // индекс элемента массива, где хранится координата текущей вершины
        const y1 = coords[i * 2 + 1]; 
        const x2 = coords[((i + 1) % n) * 2]; // координата следующей вершины
        const y2 = coords[((i + 1) % n) * 2 + 1];

        perimeter += Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    }

    return perimeter;
}

// тест функции
const perimeter = calculatePerimeter(0, 0, 4, 0, 4, 3, 0, 3); 
console.log(perimeter);