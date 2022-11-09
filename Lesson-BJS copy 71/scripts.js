function testLogicalOr(val) {
    // Only change code below this line

    if (val < 10 || val > 20) {
        return "Outside";
    }
    else {
        return "Inside";
    }

}

testLogicalOr(15);

// Объедините два оператора if в один оператор, который возвращает строку Outside, если val не находится между 10 и 20, включительно.В противном случае верните строку Inside.