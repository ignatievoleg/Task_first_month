/*3) Написать функцию every, которая будет принимать первым аргументом массив, а
вторым функцию колбэк(которая будет принимать каждый элемент массива и
возвращать true либо false). Результатом функции должно быть логическое
выражение true/false в зависимости от того, выполняется ли условие для каждого
из элементов.
    Example:
every([8, 2, 4], function (num){
    return num%2===0
}) // true*/

function every(array, cb) {
    if (!Array.isArray(array) || typeof cb !== 'function') {
        return false;
    }
    array.forEach(el => {
        if (cb(el) === false) {
            return false;
        }
    });
    return true;
}
module.exports = {every};