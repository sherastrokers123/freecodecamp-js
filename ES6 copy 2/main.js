function freezeObj() {
    const MATH_CONSTANTS = {
        PI: 3.14
    };
    // Only change code below this line
    Object.freeze(MATH_CONSTANTS);
    // Only change code above this line
    try {
        MATH_CONSTANTS.PI = 99;
    } catch (ex) {
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}
const PI = freezeObj();
//В этой задаче вы собираетесь использовать Object.freeze, чтобы предотвратить изменение математических констант. Вам нужно заморозить объект MATH_CONSTANTS, чтобы никто не мог изменять значение PI, добавлять или удалять свойства.