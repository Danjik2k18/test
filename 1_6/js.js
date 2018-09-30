/*let options = {
	name: "test",
	width: 1024,
	height: 1024
}

options.bool = false;
options.colors = {
	border: "black",
	background: 'red'
}

delete options.bool;

console.log(options);

for(let key in options) {
	console.log('Свойство ' + key + " имеет значение " + options[key] );
}

console.log(Object.keys(options).length);*/

let first = [1,"second",3,4,5];

//console.log(arr.pop()); // метод pop удаляет из конца массива последний єлемент

//arr.push(6); // метод push добавляет один элемент в массиве

//arr.shift(); // метод shift удаляет первый элемент массива

//arr.unshift(10); // метод shift добавляет элемент в начале массива

//console.log(arr);

first[99] = 99;

console.log(first.length);

first.forEach(function(item,i,arr){
	console.log(i + ": " + item + "(massiv: " + arr + ")");
})
/*for(let i = 0; i < arr.length; i++) {
	alert(arr[i]);
}*/

/*Домашнее задание
 Методы для трансформации массивов через callback функцию:
1. filter
2. map
3. everysum
4. a reduse*/

let twofirst = ["dsds", "sd", "sd", "s", "ds", "ds"];

let i = twofirst.sort() // метод sort сортирует массив

console.log(i);

// Отправка массива строчкой на сервер
/*let i = twofirst.join(","); // метод join отправляет массив одной строкой на сервер

console.log(i);*/

/*let i = prompt("", "")
twofirst = i.split(",") // метод split транформирует строку и передает ее сразу в массив

console.log(twofirst);*/

let threefirst = [1,20,36,70,7,5];

function sortNumbers(a,b) { // function sortNumbers сортирует массив по числам
	return a - b;
}

let i = threefirst.sort(sortNumbers);

console.log(i);

let soldier = {
	health: 400,
	armor: 100
}

let john = {
	health: 100
}

john.__proto__ = soldier; // __proto__ это прототипное наследование
console.log(john);
console.log(john.armor);