const {} = require('../isOdd');

describe('isOdd', () => {
    test('check false', () => {
        expect((4).isOdd()).toBe(false)
    })
    test('check true', () => {
        expect((5).isOdd()).toBe(true)
    })
})