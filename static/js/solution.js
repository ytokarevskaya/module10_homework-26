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
    return uniformArrayElement == uniformArray[0];
});
showConsole(
    `Does [${uniformArray}] contain only identical elements? 👉🏾 ${ifUniformArray}`,
    "console6"
);

// 10.6.7

const meshedArray = [1, "", null, 4.5, 0, null, 23];

let totalZeroIndexes = 0;
let totalOddIndexes = 0;
let totalEvenIndexes = 0;
let totalZeroElements = 0;
meshedArray.forEach(function (meshedArrayElement, meshedArrayIndex) {
    if (meshedArrayIndex === 0) {
        totalZeroIndexes++;
    } else if (meshedArrayIndex % 2 === 0 && meshedArrayElement !== 0) {
        totalEvenIndexes++;
    } else if (meshedArrayIndex % 2 !== 0 && meshedArrayElement !== 0) {
        totalOddIndexes++;
    } else {
        totalZeroElements++;
    }
});
showConsole(
    `Zero indexes: ${totalZeroIndexes};
     Odd indexes: ${totalOddIndexes};
     Even indexes: ${totalEvenIndexes};
     Null elements: ${totalZeroElements};
     Total indexes: ${meshedArray.length}`,
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
