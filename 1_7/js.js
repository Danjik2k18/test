let mainList = {
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
	}

}
let first = ["skirt","second","ddr","ball","cap"];
	first.forEach(function(item,i,arr){
	console.log( "У нас вы можете купить: " + item + " (massiv: " + arr + ")");
	})

let magazin = {
	name: "test",
	budjet: 1000000,
	color: "blue"
}

for(let key in magazin) {
	console.log('Наш магазин включает в себя: ' + key + " = " + magazin[key] );
}