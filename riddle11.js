'use strict';
//Курс JS_16 от GLO Academy
//загадка 1_1 неделя 1 

/**
Логическая задача №1 | 1 Неделя
Написать функцию, которая рассчитает угол между часовой и минутной стрелками часов.
Функция принимает два аргумента: часы и минуты.
Задачу выполнить в Сodepen и код должен быть рабочим! Ответы не в Сodepen не принимаются!
(Ссылка на Сodepen codepen.io)
https://codepen.io/dimfreelancerdn/pen/ExgvXGm

Пример вызова функции: 
func(6, 0)  =>>>  180
func(3, 0)  =>>>  90
func(3, 30)  =>>>  75

https://docs.google.com/forms/d/e/1FAIpQLSfewOKKWt8rtJBYk0T-X9nRpSrw3dazu3LH1O3jhchnQyah4Q/viewform
*/


function func(h, m) {

    m %= 60;
    h %= 12;
    let mDeg = m*6;
    let hDeg = h*30 + m/2;

    return Math.abs( hDeg - mDeg );
}







/** TEST */
console.log('func(6, 0)  =>>> ', func(6, 0));
console.log('func(3, 0)  =>>> ', func(3, 0));
console.log('func(3, 30)  =>>> ', func(3, 30));

// console.log('func(1, 0)  =>>> ', func(1, 0));
// console.log('func(12, 5)  =>>> ', func(12, 5));

console.log('func(20, 30)  =>>> ', func(20, 30));
console.log('func(8, 30)  =>>> ', func(8, 30));
console.log('func(20, 90)  =>>> ', func(20, 90));
console.log('func(30, 0)  =>>> ', func(30, 0));

