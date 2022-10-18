/*1) У нас есть массив с элементами 1, 2, 5, 6, 88, 5.
С помощью цикла надо найти сумму элементов этого массива.*/

// let arr = [1, 2, 5, 6, 88, 5];
// let result = 0;
// for (let i = 0; i < arr.length; i++) {
//     result += arr[i];
// }
// alert(result);

/*2) Создайте массив с различными числами. Должно быть как минимум 10 элементов
внутри массива. С помощью цикла найдите сумму квадратов элементов этого массива.
    Квадрат числа 5 будет 25.*/


// let array = [4, 5, 6, 8, 7, 3, 2, 1, 12, 14];
// let result1 = 0;
// for(let i = 0; i < array.length; i++){
//     result1 += array[i] * array[i];
// }
//
// alert(result1);


/*
3) Имеется массив с элементами 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20;
Нужно найти перебирая эти элементы с помощью цикла четные числа.
И эти найденные четные числа должны быть собраны в одном массиве.*/

// let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
// let new_numbers = [];
// for(let i = 0; i < numbers.length; i++){
//     if (!(numbers[i] % 2)){
//        new_numbers.push(numbers[i]);
//     }
// }
// console.log(new_numbers);

/************* Do While *************/

// let users = ['Ulan', 'Imran', 'Sasha', 'Rufat'];
// let index = 0;
//
// do{
//     let userName = users[index];
//     console.log(userName);
//     index++;
// } while(index < users.length);

/************* Do While *************/
// const numbers = [1,2,3,4,9,15,8,22,5];
// for(let i= 0; i < numbers.length; i++){
//     if (numbers[i] > 10){
//         break;
//     }
//     console.log(numbers[i]);
// }

/************* continue *************/
// const numbers = [1,2,3,4,9,15,8,22,5];
// for(let i= 0; i < numbers.length; i++){
//     if (numbers[i] > 10){
//         continue;
//     }
//     console.log(numbers[i]);
// }

/************* Функции *************/
// function showMassage() {
//     // document.write('наша первая функция')
//
// }

// function showNotification(massage:string = 'good morning')  {
//     alert(massage);
//
// }
// showNotification('Hello')
// showNotification('Hello world')
// showNotification()

// function display() {
//    for(let i = 0; i < arguments.length; i++){
//        console .log(arguments[i]);
//    }
// }
//     display(5, 6);

function getSum(x, y) {
    return x + y;

}
let result = getSum(x:5, y:15);
