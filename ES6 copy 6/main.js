const sum = (...args) => {
    return args.reduce((a, b) => a + b, 0);
}
//Измените сумму функции, используя параметр rest таким образом, чтобы сумма функции могла принимать любое количество аргументов и возвращать их сумму.