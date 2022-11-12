const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
};

const { today: { low: lowToday, high: highToday } } = LOCAL_FORECAST;

// Замените два назначения эквивалентным деструктивным назначением. Он все равно должен присваивать переменным lowToday и highToday значения today.low и today.high из объекта LOCAL_FORECAST.Only change code above this line
