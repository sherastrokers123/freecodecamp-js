function multiplyAll(arr) {
    let product = 1;
    for (let i = 0; i < arr.length; i++) {
        for (let k = 0; k < arr[i].length; k++) {
            product = product * arr[i][k];
            console.log(product);
        }
        console.log(product);
    }
    return product;
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

// Измените функцию multiplyAll так, чтобы она возвращала произведение всех чисел в подмассивах arr.