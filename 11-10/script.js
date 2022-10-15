/*
Создайте объект заработных плат.
    Назовите userSalaries.
    Свойствами выступают: Ella, Sophia, Ellie
Выведите на экран зарплату Ella, Sophia.*/
//
// let userSalaries = {'Ella':'10 000', 'Sophia':'12 000', 'Ellie':'15 000'};
// console.log(userSalaries.Ella,userSalaries.Sophia);


/*
Создайте объект с ключами a, b и c значениями 5 , 6 и 10.
Найдите сумму его элементов.*/

//     let arr = {
//     a: 5,
//     b: 6,
//     c: 10
//     };
// alert( arr.a + arr.b + arr.c ); //21

/*Сделайте рефакторинг кода, с помощью тернарного оператора.*/

/*let number;
if(data === true){
    number = 3;
} else{
    number = 5;
}*/

// let data = true;
// let number = data === true ? 3 : 5;
// console.log(number);

/*********************** Циклы For ******************************/
for(let i = 0; i < 5; i++){
    console.log(i);
}
/*
*1. let i = 0;
*    0 < 5
*    console.log(i); 0
*
* 2.i++
* 1 < 5;
* console.log(i); 2
*
* 3. i++
* 2 < 5;
* console.log(i); 3
*
* 4. i++
* 3 < 5;
* console.log(i); 4
*
*
* 5. i++
* 4 < 5;
* console.log(i); 5
*
* 6. i++
* 5 < 5;
* Завершается цикл
 */

for(let i = 5; i >= 0; i--){
    console.log(i);
}
/*1. let i = 5;
*    5 >= 0;
*    console.log(i); 5
*
* 2.i--;
* 4 >= 0;
* console.log(i);4
*
* 3. i--;
* 3 >= 0;
* console.log(i); 3
*
* 4. i--;
* 2 >= 0;
* console.log(i); 2
*
*
* 5. i--;
* 1 >= 0;
* console.log(i); 1
*
* 7. i--;
*  0 >= 0;
*
* 7. i--;
*  0 >= 0;
* Завершается цикл
*/
/******** for of ************/

let users = ['Admin', 'Director', 'Manajer'];

for(let value of users){
    console.log(value);

}

/*1. let value = 'Admin';
console.log(value); 'Admin'
2. value = 'Director'; 'Director'
console.log(value);

3. value = 'Manajer';
console.log(value); 'Manajer'
 */
/******** while ************/

let users = [
    {
        name: 'Имран',
        surname: 'Ашимов',
        email: 'imran@gmail.com',
        phone: '+996555400057'
    },
    {
        name: 'Руфат',
        surname: 'Ашимов',
        email: 'rufat@gmail.com',
        phone: '+996555554457'
    }
    {
        name: 'Улан',
        surname: 'Жумабаев',
        email: 'ulan@gmail.com',
        phone: '+996555401031'
    }
]
let i = 0;
while (i < 3){
    let userName = users[i].name;
    let userPhone = users[i].phone;
    console.log(userName);
    i++
}