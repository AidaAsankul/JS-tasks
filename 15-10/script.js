/*
Напишите функцию hello(), которая при вызове будет возвращать строку
   «Привет, JavaScript!»
*/

function hello() {
   console.log("Привет, JavaScript!");
}
hello();

/*
Нужно создать функцию, которая будет выводить куб числа на страничку.
    Число должно передаваться параметром.*/

function cubeofNumber (number) {
    console.log(number * number * number);

}
cubeofNumber(3,3,3); //27

/*
Напишите функцию getName(), которая при вызове будет принимать переменную
name (например, «Василий») и выводить строку (в нашем случае «Привет, Василий»).
В случае отсутствующего параметра выводить «Привет, гость»*/

let name = 'Василий';

function userName() {
    let message = 'Привет, ' + name;
    alert(message);

    let userName = 'Привет гость!';
    alert(userName);
    
   }

userName();



/*На старте вы получаете массив. Необходимо написать функцию, которая будет
возвращать массив удвоенных значений исходного массива.
    Пример кода:
example([1, 2, 3]) => [2, 4, 6]
example([4, 1, 1, 1, 4]) => [8, 2, 2, 2, 8]
example([2, 2, 2, 2, 2, 2]) => [4, 4, 4, 4, 4, 4]*/
