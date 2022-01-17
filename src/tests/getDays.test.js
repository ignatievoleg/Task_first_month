const {getDays} = require ('../getDays');

describe ('getDays', () => {
    test('check month = string', () => {
        expect(getDays(2022, 'April')).toBe(30)
    })
    test('check month = number', () => {
        expect(getDays(2022,12)).toBe(31)
    })
    test('check month !== string', () => {
        expect(getDays(2021, 'asdgf')).toBe('Invalid input data')
    })
})