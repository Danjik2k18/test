 
 var str = 'урок-3-был слишком легким'.toUpperCase(); // метод toUpperCase() делает все буквы заглавными.
 console.log(str);

var replaced = str.replace(/-/g, ' '); // метод replace делает замену знаков на другие знаки.
console.log(replaced);

var cut = replaced.substring(25, 19); // метод substring вырезает слова.
console.log(cut);

alert('легким'.replace("им", "оо").toUpperCase());

/*replaced = str.slice('легким', -6); вырезает слова со строки*/

let arr = [20, 33, 1, "Человек", 2, 3];
let sum = 0;

for(let i = 0; i < arr.length; i++) {
  sum += Math.pow(arr[i], 3);
}

let sumSqrt = Math.sqrt(sum);
console.log(sumSqrt);

