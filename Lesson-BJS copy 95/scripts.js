const myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};

const gloveBoxContents = myStorage.car.inside["glove box"];

//Получите доступ к объекту myStorage и назначьте содержимое свойства glove box переменной gloveBoxContents. Используйте точечную нотацию для всех свойств, где это возможно, в противном случае используйте скобки.
