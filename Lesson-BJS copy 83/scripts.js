// Setup
function abTest(a, b) {
    // Only change code below this line
    if (a < 0 || b < 0) {
        return undefined;
    }


    // Only change code above this line

    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2, 2);

// Измените функцию abTest так, чтобы, если a или b меньше 0, функция немедленно завершала работу со значением undefined.

//     Намёк

// Помните, что undefined - это ключевое слово, а не строка.