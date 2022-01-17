/*
1) Напишите функцию getDays, которая принимает год и месяц, а возвращает
количество дней в месяце
getDays( 2021 , 4) //30
getDays( 2021 , ‘April’) //30*/

function getDays(year, month) {
    const months = ['January', 'February', 'Match', 'April', 'May', 'June', 'July', 'August', 'September', 'November', 'December'];
    if (typeof month === 'string') {
        if (months.includes(month) === false) {
            return 'Invalid input data';
        }
        month = months.indexOf(month) + 1;
    }
    if (typeof month === 'number' && typeof year === 'number') {
        if (month > 0 && month <= 12 && year > 0) {
            return new Date(year, month, 0).getDate();
        }
        return 'Invalid input data';
    }

}

module.exports = {getDays};
