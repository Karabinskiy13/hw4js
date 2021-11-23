// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
//
// function rectangle(sideA, sideB){
//     let Srectangle= sideA * sideB;
//     return Srectangle
// }
// console.log(rectangle(1, 3))
// document.write('area of rectangle' + rectangle(1, 3))

//- створити функцію яка обчислює та повертає площу кола з радіусом r

// function areaofcircle(radius, P){
//     let scircle= (radius**2) * P
//     return scircle
// }
// console.log(areaofcircle(3), 3.14)
// document.write('area of circle' + areaofcircle(3,3.14))

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
//
// function areaofcylinder(r, h) {
//     let scylinder = 2 * 3.14 * r * h;
//     return scylinder;
// }
// console.log(areaofcylinder(1,3))
// document.write('area of cylinder ' + areaofcylinder(1, 3))

// - створити функцію яка приймає масив та виводить кожен його елемент

// let array= [123, 'string', true]
//  function arraydata(array){
//     for ( let i=0; i<3; i++){
//         document.write(array[i])
//     }
//  }
//  arraydata(array)

//- створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function ptext(text){
//     document.write(`<p>${text}</p>`)
// }
//
// ptext('individualstory')


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function litext (arg1){
//     document.write(`<ul>`)
//     document.write(`<li>${arg1}</li>`)
//     document.write(`<li>${arg1}</li>`)
//     document.write(`<li>${arg1}</li>`)
//     document.write(`</ul>`)
// }
// litext('text')


//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function numberli(arg1, numb){
//         document.write(`<ul>`)
//     for (let i=0; i<numb; i++){
//     document.write(`<li>${arg1}</li>`)
//         }
//     document.write(`</ul>`)
// }
//  numberli(`text`, 3)

 //- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
//
// let array=[1, 'string', true]
// function forarray(mix){
//     document.write(`<ul>`)
//     for (let i=0; i<3; i++){
//         document.write(`${mix[i]}`)
//     }
//     document.write(`</ul>`)
//
// }
// forarray(array)

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// let info=[{id:1, name:'ivan', age:25}, {id:2, name:'kolya',age:40}, {id:3, name:'olya', age:50}]
// function informofarray(array){
//     for (const arrayElement of array) {
//         document.write(`<div>${arrayElement.id}. ${arrayElement.name}- ${arrayElement.age}</div>`)
//
//     }
// }
// informofarray(info)