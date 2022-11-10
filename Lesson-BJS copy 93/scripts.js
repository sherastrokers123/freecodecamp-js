function checkObj(obj, checkProp) {
    if (obj.hasOwnProperty(checkProp)) {
        return obj[checkProp];
    } else {
        return "Not Found";
    }
    // Only change code above this line
}




// Измените функцию checkObj, чтобы проверить, содержит ли объект, переданный функции (obj), определенное свойство (checkProp). Если свойство найдено, верните значение этого свойства. Если нет, верните "Не найдено".