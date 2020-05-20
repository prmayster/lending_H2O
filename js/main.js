
// Переменные
var message; // a-z, A-Z, 0-9, $, _
message = "Я стану программистом";

var myNumber = 111;
var myString = "Точно буду программистом";
var myBooleen = true; // false

var myNull = null;
var myUndefined = undefined;

var myObject = {
    name: "Vbif",
    age: 25
};

//числа
//var result = 40 + 10;
alert(result);
console.log(myNumber + 11);
console.log(myNumber - 11);
console.log(myNumber * 11);
console.log(myNumber / 11);
myNumber = myNumber * 2;
console.log(myNumber);

console.log(Math.round(6.25)); // округление

var neNumber = 2.578;
console.log(neNumber.toFixed(1));

// СТРОКИ 
console.log("45" + neNumber);
console.log(myString + "как дела");
console.log(myString.toUpperCase()); // заглавные буквы

// МАССИВЫ

var names = ["Петя", "Андреев"]; // начинается с 0
console.log(names[1].toUpperCase());

names[0] = "Vfif"
console.log(names[0]);

names.push("Света");
console.log(names);


// Условия 
if (15 > 12) {
    console.log("условия выполнено");
}

if ("Вася" != "Петя" && myNumber > 25) {
    console.log("условия выполнено");
}
if (myNumber < 20){
    console.log("условия выполнено");
} else {
    console.log("условия не выполнено");
}

// Циклы 
for (var i = 0; i < 10; i++) {
    if (i = 5) {
        break;
    }

    console.log(i);
}
