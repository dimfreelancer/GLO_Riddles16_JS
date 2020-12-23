'use strict';
//Курс JS_16 от GLO Academy
//загадка 4_1 неделя 4 

/**
Логическая задача №1 | 4 Неделя
При помощи цикла for..in перебрать объект-справочник с датами рождения и смерти людей и вернуть справочник с продолжительностью их жизни. 

Например:

const persons = {
    'Уитни Хьюстон': { born: 1963, died: 2012 },
    'Оскар Уайльд': { born: 1854, died: 1900 },
    'Коко Шанель': { born: 1883, died: 1971 },
    'Джими Хендрикс': { born: 1942, died: 1970 },
};

console.log(ages(persons));
 {
   'Уитни Хьюстон': 49,
   'Оскар Уайльд': 46,
   'Коко Шанель': 88,
   'Джими Хендрикс': 28,
 }

В качестве ответа ссылка на CodePen.io
https://codepen.io/dimfreelancerdn/pen/LYRzegJ
*/


const persons = {
    'Уитни Хьюстон': { born: 1963, died: 2012 },
    'Оскар Уайльд': { born: 1854, died: 1900 },
    'Коко Шанель': { born: 1883, died: 1971 },
    'Джими Хендрикс': { born: 1942, died: 1970 },
    'Шон Коннери': { born: 1930, died: 2020 },
    'Майкл Джексон': { born: 1958, died: 2009 },
    'Алан Тьюринг': { born: 1912, died: 1954 },
    'Стивен Хокинг': { born: 1942, died: 2018 },
    'Альберт Эйнштейн': { born: 1879, died: 1955 }
};


const ages = function(persons) {
    
    let result = {};
    for (const key in persons) {

      if (persons.hasOwnProperty(key)) {
            result[key] = Math.abs(persons[key].died - persons[key].born);
        }
    }
    return result;
};

console.log(ages(persons));