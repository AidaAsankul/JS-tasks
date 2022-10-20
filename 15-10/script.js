/*
Напишите функцию hello(), которая при вызове будет возвращать строку
   «Привет, JavaScript!»
*/

// function hello() {
//     let massage = "Привет, JavaScript!";
//    return massage;
// }
// let result = hello();
// console.log(result);

/*
Нужно создать функцию, которая будет выводить куб числа на страничку.
    Число должно передаваться параметром.*/
//
// function cubeofNumber (number) {
//     console.log(number * number * number);
//
// }
// cubeofNumber(3,3,3); //27

/*********************************/

// function cubeofNumber(num){
//     let result = num * num * num;
//     console.log(result);
// }
// cubeofNumber(5);
// cubeofNumber(65);
// cubeofNumber(655);
/*
Напишите функцию getName(), которая при вызове будет принимать переменную
name (например, «Василий») и выводить строку (в нашем случае «Привет, Василий»).
В случае отсутствующего параметра выводить «Привет, гость»*/



// function getName(userName = 'гость!') {
//     let str = 'Привет ${userName}';
//     console.log(str);
// }
// let name = 'Васлий'
// getName(name);
// getName();


/*На старте вы получаете массив. Необходимо написать функцию, которая будет
возвращать массив удвоенных значений исходного массива.
    Пример кода:
example([1, 2, 3]) => [2, 4, 6]
example([4, 1, 1, 1, 4]) => [8, 2, 2, 2, 8]
example([2, 2, 2, 2, 2, 2]) => [4, 4, 4, 4, 4, 4]*/

// function getDoubleNumbers(arr) {
//     let newArray = [];
//     for(let i = 0; i < arr.length; i++){
//         newArray.push(arr[i] * 2);
//
//
//     }
//     return newArray;
// }
// let result = getDoubleNumbers([1.2.3]);
// console.log(result);
/******************************/
// const showMessage = () => {
//     alert('Hello programmers');
// }
//
// showMessage();//

// const showMessage = (a, b) => console.log(a,b);
// showMessage(5, true);

//
// const showMessage = a => console.log(a);
// showMessage(5);

const showMessage = a => {
    let result = a + a;
    return result;

}
showMessage(5);
