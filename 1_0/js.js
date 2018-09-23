var money = "Ваш бюджет?";
var magazin = "Название вашего магазина?";
let time = 19;

console.log(money);
console.log(magazin);

let mainList = {
	budget: 150,
	name_magazin: "Skar",
	open : true,
	shopGoods: [],
	employers: {},
}

for (let i = 0; i < 5; i++) {
	let a = prompt("Какой тип товаров будем продавать?");
	
	if ((typeof(a)) === 'string' && (typeof(a)) === null && a != '' && a.length < 50){
		console.log('All good!');
		mainList.shopGoods[i] = a;
	} else {

	}
}

if (time < 0) {
	console.log('Такого просто не может быть');
} else if(time > 8 && time < 20){
	console.log('Время работать!')
	} else if(time < 24) {
		console.log('Уже слишком поздно!');
	} else {
		console.log('В сутках только 24 часа!');
	};


alert(mainList.budget/30);

console.log(mainList);