// function hello() {
//     let massage = "Привет, JavaScript!";
//    return massage;
// }
// let result = hello();
// console.log(result);

// const hello = () => {
//     let message = "Привет, JavaScript!";
//     return message;
// }
// alert(hello());


/*************** HW 18-10**************/
/*
Напишите функцию, которая заполняет новый массив предоставленным значением
и затем ее возвращает. Функция должна первым параметром принимать
элемент (значение для массива), вторым параметром размер массива.
    Например: myFunc('a', 3)   // ['a', 'a', 'a']*/
//
// const fillArr = (value, arraySize) => {
//     return new Array(arraySize).fill(value);
// };
//
// console.log(fillArr("a",3 ));

/*
Напишите функцию, которая разворачивает массив в обратном порядке
и затем ее возвращает.  Функция наша  принимает массив любых элементов.
    Например:
const data = [1, 2, 3];
myFunc(data);  // [3, 2, 1];*/

// const myFunc = array => array.map((item, index, listing) => listing[listing.length - 1 - index]);
// const data = [1, 2, 3];
// console.log(myFunc(data));

/*Составьте программу, которая принимает с клавиатуры числа, пока не будет
введено значение 0.
Для каждого введенного с клавиатуры положительного числа, программа должна
выводить на экран "плюс", для каждого отрицательного – "минус".
    Например: ввод: 7, 14, -18, 0 ⇒ вывод: плюс, плюс, минус*/


const sortValues = () => {
    let number = +prompt('Введите число');

    if (number < 0){
        alert("минус");
        sortValues();
    }else if (number > 0 && number !==0){
        alert("плюс");
        sortValues();
    }
}
sortValues();