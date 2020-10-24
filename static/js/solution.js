const showConsole = (message, element) => {
    const currentElement = document.getElementById(element);
    currentElement.innerHTML = message;
    console.log(message);
};

// 10.3.1

let inputValue = +prompt("input your value", 0);
console.log(inputValue);
if (!isNaN(inputValue) && inputValue != 0) {
    if (typeof inputValue == "number") {
        if (inputValue % 2 == 0) {
            const message = `✅ The input value ${inputValue} is even`;
            showConsole(message, "console1");
        } else {
            const message = `✅ The input value ${inputValue} is odd`;
            showConsole(message, "console1");
        }
    }
} else {
    const message = "Opps 😵. Please, input number 🔢 not equal to 0.";
    showConsole(message, "console1");
}

// 10.3.2

const x = "Hello";

switch (typeof x) {
    case "number":
        message = `${x} - number`;
        showConsole(message, "console2");
        break;
    case "boolean":
        message = `${x} - boolean`;
        showConsole(message, "console2");
        break;
    case "string":
        message = `${x} - string`;
        showConsole(message, "console2");
        break;

    default:
        message = `${x} - type is not defined`;
        showConsole(message, "console2");
        break;
}

// 10.4.3

const reversedStr = x.split("").reverse().join("");
showConsole(`${x} ➡️ ${reversedStr}`, "console3");

// 10.4.4

const min = 0;
const max = 100;
const randomValue = Math.floor(Math.random() * (max - min + 1)) + min;
showConsole(`Random value is ${randomValue}`, "console4");

// 10.5.5

const randomArray = [];
let randomArrayElements = "";
for (let i = 0; i < 10; i++) {
    randomArray.push(Math.floor(Math.random() * 10));
}
randomArray.forEach((element) => {
    console.log(element);
    randomArrayElements += element;
});
showConsole(
    `Random array [${randomArray}] elements 🔎 ${randomArrayElements}`,
    "console5"
);

// 10.5.6

const uniformArray = [1, 1, 1, 1, 1, 1];
const ifUniformArray = uniformArray.every(function (uniformArrayElement) {
    return uniformArrayElement === uniformArray[0];
});
showConsole(
    `Does [${uniformArray}] contain only identical elements? 👉🏾 ${ifUniformArray}`,
    "console6"
);

// Не совсем верно, т.к. если в массиве будет к примеру такой набор элементов: 1, 1, "1", то результатом будет true, т.е. элементы идентичны, что не соответствует действительности, т.к. они разного типа. Чтобы эта проблема не возникала, сравнение должно быть строгим: === вместо ==. Выше исправила

// 10.6.7

const meshedArray = [1, "", null, 4.5, 0, null, 23];

// let totalOddIndexes = 0;
// let totalEvenIndexes = 0;
// let totalZeroElements = 0;
// meshedArray.forEach(function (meshedArrayElement, meshedArrayIndex) {
//     if (meshedArrayIndex % 2 === 0 && meshedArrayElement !== 0) {
//         totalEvenIndexes++;
//     } else if (meshedArrayIndex % 2 !== 0 && meshedArrayElement !== 0) {
//         totalOddIndexes++;
//     } else {
//         totalZeroElements++;
//     }
// });
// showConsole(
//     `Odd indexes: ${totalOddIndexes};
//      Even indexes: ${totalEvenIndexes};
//      Null elements: ${totalZeroElements};
//      Total indexes: ${meshedArray.length}`,
//     "console7"
// );

// Вы иначе поняли задание. Нужно было посчитать четные, нечетные и нулевые элементы (не индексы), с учетом того, что в массиве могут быть не только числа, а абсолютно любые значения. Правильный вариант решения написала ниже.

let even = 0, odd = 0, zero = 0;

meshedArray.forEach(element => {
    if (typeof element === 'number' && !isNaN(element)) {
        if (element === 0) {
            zero++;
        } else if (element % 2 === 0) {
            even++;
        } else {
            odd++;
        }
    }
})

showConsole(
    `Odd elements: ${odd};
     Even elements: ${even};
     Zero elements: ${zero};`,
    "console7"
);

// 10.7.8

let randomMap = new Map();
let randomMapDecryption = "";
randomMap.set("key1", "value1");
randomMap.set("key2", "value2");
randomMap.set(false, 0);
randomMap.set(true, 1);
randomMap.set([0, 1], [2, 3]);
randomMapKeys = Array.from(randomMap.keys());
randomMapKeys.forEach((key) => {
    randomMapDecryption += `Key: ${key}, Value: ${randomMap.get(key)} | `;
});

showConsole(randomMapDecryption, "console8");
