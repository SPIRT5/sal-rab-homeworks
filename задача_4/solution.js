// Задание 4.1. Вывод карточек товаров

function parseProducts(json) {
    // Аргументом функции является JSON

    let data = JSON.parse(json);
    return data.products;
    // Преобразуйте строку json, переданную как аргумент функции,
    // в объект с помощью функции JSON.parse(json)
    // и запишите в переменную data
    // Верните как результат функции свойство products объекта data
}

function renderProductsCards(json) {
    clearProducts();
    let products = parseProducts(json);
    let length = products.length;
    for (let i = 0; i <= length - 1; i++) { // выведет 0, затем 1, затем 2
        addProduct(products[i]);
    }
}
