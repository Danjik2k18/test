let money,
	name,
	time,
	price,
	dn_budget 

function start() {
	 money = prompt("Ваш бюджет?", '');

	 while (isNaN(money) || money == "" || money == null) {
	 	money = prompt("Ваш бюджет?", '');
	 }

	 name = prompt("Название вашего магазина?", '').toUpperCase();
	 time = 21;
}

//start();


let mainList = {
	budget: 70000,
	name_magazin: name,
	open : false,
	shopGoods: [],
	employers: {},
	discount: false,
	shopItems: [],
	chooseGoods: function chooseGoods() {
	for (let i = 0; i < 5; i++) {
	let a = prompt("Какой тип товаров будем продавать?", '');
	
			if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50){
				console.log('All good!');
				mainList.shopGoods[i] = a;
			} else {
				i = i - 1;
			}
		}	
	},
	workTime: function workTime(time) {
		if (time < 0) {
			console.log('Такого просто не может быть');
		} else if(time > 8 && time < 20){
			console.log('Время работать!');
			mainList.open = true;
		} else if(time < 24) {
			console.log('Уже слишком поздно!');
		} else {
			console.log('В сутках только 24 часа!');
		}
	},
	dnevnoyBudget: function dnevnoyBudget () {
		alert("Ежедневный бюджет составляет - " + mainList.budget / 30 );
	},
	discontSystem: function discontSystem() {
		price = 1000;
			if(mainList.discount == true) {
				price = (price/100)*80;
			}
		console.log("Скидка - " + price + "грн");
	},
	hireEmployers: function hireEmployers() {
		for (let i = 0; i < 4; i++) {
			let name = prompt("Имя сотрудника?");
			mainList.employers[i] = name;
		}
	},
	chooseShopItems: function chooseShopItems() {
		let items = prompt("Перечислите через запятую ваши товары", "");

		mainList.shopItems = items.split(",");
		mainList.shopItems.push(prompt("Подождите, еще ", "")); 
		mainList.shopItems.sort();
	}
}

//chooseGoods();

//workTime(18);

//dnevnoyBudget();

//discontSystem();

//hireEmployers();

//alert(mainList.budget/30);

console.log(mainList);