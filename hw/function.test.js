
const funSum = require('./function');

describe('funSum', () => {
    test('True', () => {
        expect(funSum(1, 2)).toBe(true)
    })
    test('True', () => {
        expect(funSum(10, 2)).toBe(true)
    })
    test('false', () => {
        expect(funSum(-10, 2)).toBe(false)
    })
    test('True', () => {
        expect(funSum(-10, 20)).toBe(true)
    })
    test('false', () => {
        expect(funSum(-10, -20)).toBe(false)
    })
})
