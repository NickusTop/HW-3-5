// 1
const vibir = "Сік"

switch (vibir) {
    case "Кава":
        console.log("Кава")
        break;
    case "Чай":
        console.log("Чай")
        break;
    case "Сік":
        console.log("Сік")
        break;
    default:
        console.log("Нічого не знайдено, перевірте змінну!");
        break;
}
// 2
const dayWeek = prompt("Введіть день тижня").toLocaleLowerCase()

if (dayWeek) {
    switch (dayWeek) {
        case "понеділок":
        case "вівторок":
        case "середа":
        case "четвер":
        case "п'ятниця":
            console.log("Це робочий день.");
            break;
        case "субота":
        case "неділя":
            console.log("Це вихідний день.");
            break;
        default:
            console.log("Невідомий день, перевірте правильність введення.");
            break;
    }
} else {
    console.log("Не введено жодного дня.");
}
// 3
const month = parseInt(prompt("Введіть номер місяця (від 1 до 12):"));

switch (month) {
    case 12:
    case 1:
    case 2:
        console.log("Це зима.");
        break;
    case 3:
    case 4:
    case 5:
        console.log("Це весна.");
        break;
    case 6:
    case 7:
    case 8:
        console.log("Це літо.");
        break;
    case 9:
    case 10:
    case 11:
        console.log("Це осінь.");
        break;
    default:
        console.log("Невірний номер місяця. Введіть число від 1 до 12.");
        break;
}
// 4
const color = "Жовтий"

switch (color) {
    case "Червоний":
        console.log("Стоп");
        break;
    case "Зелений":
        console.log("Йти");
        break;
    case "Жовтий":
        console.log("Чекати");
        break;
    default:
        console.log("Невідомий колір");
        break;
}
// 5
const num1 = parseFloat(prompt("Введіть перше число:"));
const num2 = parseFloat(prompt("Введіть друге число:"));
const operator = prompt("Введіть оператор (+, -, *, /):");

let result;

switch (operator) {
    case "+":
        result = num1 + num2;
        console.log(`Результат: ${result}`);
        break;
    case "-":
        result = num1 - num2;
        console.log(`Результат: ${result}`);
        break;
    case "*":
        result = num1 * num2;
        console.log(`Результат: ${result}`);
        break;
    case "/":
        if (num2 === 0) {
            console.log("Ділення на нуль неможливе!");
        } else {
            result = num1 / num2;
            console.log(`Результат: ${result}`);
        }
        break;
    default:
        console.log("Невідомий оператор");
        break;
}




