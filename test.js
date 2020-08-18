let dateToday = new Date()
console.log(dateToday)
dateToday.setDate(dateToday.getDate() + (365 * 35));
let dateBefore = new Date();
dateBefore.setDate(dateToday.getDate() - 60);

console.log('диапазон времени поиска!', dateToday, dateBefore)

console.log('диапазон времени поиска!', (dateToday - dateBefore) / 31536000000)

let nowDay = dateToday.toISOString().substring('0', '10')
let beforeDay = dateBefore.toISOString().substring('0', '10')
console.log('диапазон времени поиска отредактированный!', nowDay, beforeDay)