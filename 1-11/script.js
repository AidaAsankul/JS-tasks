
/*1) Даны картинки. Привяжите к каждой картинке событие, чтобы по клику
на картинку алертом выводился ее описание.*!/*/

// const dino = document.querySelector('#dino');
// const japan = document.querySelector('#japan');
// const korea = document.querySelector('#korea');
//
// const showMessageOne = () => alert('park in Dubai');
// const showMessageTwo = () => alert('Japan');
// const showMessageThree = () => alert('Korea');
//
//
// dino.addEventListener('click',showMessageOne);
// japan.addEventListener('dblclick',showMessageTwo);
// korea.addEventListener('contextmenu',showMessageThree);




/*2) Даны ссылки. Привяжите всем ссылкам событие - по наведению на ссылку выведите
куда данная ссылка ссылается.*/

// const links = document.querySelectorAll('a');
//
// const showData = (elem) => {
//     console.log(elem.href);
// }
//
// for(let i = 0; i < links.length; i++){
//     links[i].onmouseenter = () => {
//         showData(links[i]);
//     }
// }


/*3) Напишите функцию, которая объединяет несколько строк и возвращает их.
    Используйте глобальный массив arguments.*/

// function getStrings() {
//     let str = '';
//    for (let i = 0; i < arguments.length; i++){
//        str += `${arguments[i]} `;
//    }
//    return str;
// }
//
// const result = getStrings('Hello', 'world', 'Javascrips');
//
// console.log(result);