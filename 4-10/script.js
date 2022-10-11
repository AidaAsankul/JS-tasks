/********Переделать этот код так, чтобы в нем были операторы инкремента и декремента:************/
/*
   let num = 10;
   num = num + 1;
   num = num + 1;
   num = num - 1;
   console.log(num);*/

let num1 = 10;
++num1;
++num1;
--num1;
console.log(num1);

/****** Переделайте этот код так, чтобы в нем использовались операторы присвоения:*********/
/*
let num = 47;
num = num + 7;
num = num - 18;
num = num * 10;
num = num / 15;
alert(num);*/

/*let num1 = 47;
num1 += 7;
num1 -= 18;
num1 *= 10;
num1 /= 15;
alert(num1);*/

/***********Переделайте приведенный код так, чтобы в нем использовались операции
    +=, -=, *=, /=, ++, --.
Количество строк кода при этом не должно измениться.
    Код для переделки:***************/
/*let num = 1;
num = num + 12;
num = num - 14;
num = num * 5;
num = num / 7;
num = num + 1;
num = num - 1;
alert(num);*/

/*
let num2 = 1;
num2 += 12;
num2 -= 14;
num2 *= 5;
num2 /= 7;
num2++;
num2--;
alert(num2);
*/
/******************************  && *****************************/

const car = 'Mers' ;
const color = 'Black';
const result = car === 'Mers' && color === 'Black';
console.log(result)

const cat_name = 'Murka';
const cat_age = 2;
const result2 = cat_name === 'Ulan' && cat_age <= 4;
console.log(result2)

const gorod = 'Bishkek' ;
const strana = 'Kyrgyzstan';
const result3 = gorod === 'Bishkek' && strana === '100';
console.log(result3)

const menu = 'Manty' ;
const sena = 150;
const result4 = menu === 'Boorsok' && sena === '100';
console.log(result4)
