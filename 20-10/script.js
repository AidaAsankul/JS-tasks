/*
Дан массив с числами: -5,  10,  5, 55,  -1, 22,  -4 , 36, -45:
Оставьте в нем только отрицательные числа.*/

// const arr = [-5, 10, 5, 55, -1, 22, -4, 36, -45];
// function num(numbers){return numbers < 0};
// const newArr = arr.filter(num);
// console.log(newArr);

/*
Напишите функцию, которая принимает 2 числа и возвращает:
    1 - если первое число больше, чем второе;
-1 -  если первое число меньше, чем второе;
и 0 - если числа равны.
    Попробуйте реализовать эту функцию не только с помощью if...else,
но и с помощью тернарного оператора, и в виде стрелочной функции.*/

/*const compare = (x, y) => {
    return x > y ? 1 (x < y) ? -1 : 0;
}


let result = compare(5, 4);
let result2 = compare(65,66);
let result3 = compare(4, 4);

console.log(result);
console.log(result2);
console.log(result3);*/

// /************* reduce *****************/
// const numbers = [5, 6, 7, 8];
// const result = numbers .reduce(function(sum,item){
//     return sum + item;
// }, 0)
//  console.log(result);
//
// /*
// /!*!/ function (sum, item) {
//     return sum + item;
// }
// // 1. sum = 8; item = 5;
// // return 0 + 5 = 5;
// //
// // 2.sum = 5; item = 6;
// // return 5+6 =11;
// //
// // 3. sum = 11; item = 7;
// // return 11 + 7 = 18;
// //
// // 4. sum = 18; item =8;
// // return 18 + 8 = 26

cont users = [
    {
        first_name: 'Ulan',
        last_name:'Jumabaev',
        isProgrammer: false
    }
    {
        first_name: 'Rufat',
        last_name:'Ashimov',
        isProgrammer: true
    }
    {
        first_name: 'Imran',
        last_name:'Ashimov',
        isProgrammer: true
    }
]
const found users.find(isProgrammer => isProgrammer == isProgrammer);
console.log(name);
