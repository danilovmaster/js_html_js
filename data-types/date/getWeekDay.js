"use strict"

let date = new Date(2012, 0, 3);

let getWeekDay = (day) => ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"][day.getDay()];

console.log(getWeekDay(date));