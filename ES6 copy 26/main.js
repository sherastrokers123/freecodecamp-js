const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer represents a response from a server
    let responseFromServer;

    if (responseFromServer) {
        resolve("We got the data");
    } else {
        reject("Data not received");
    }
});

/*Сделайте обещание, чтобы справиться с успехом и неудачей. Если responseFromServer имеет значение true, вызовите метод resolve, чтобы успешно завершить обещание. Передайте разрешение строки со значением Мы получили данные. Если responseFromServer имеет значение false, используйте метод reject и передайте ему строку: Данные не получены. */