const {every} = require('../every');

describe('every', () => {
    test('check array', () => {
        expect(every('asf', function (num) {
            return num % 2 === 0
        })).toBe(false);
    })
    test('check function', () => {
        expect(every([1, 2], 'asdf')).toBe(false);
    })
    test('check correct', () => {
        expect(every([1, 2], function (num) {
            return num % 2 === 0
        })).toBe(true);

    })
})