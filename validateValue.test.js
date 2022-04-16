const validateValueTest = require('./validateValue');

test('Валидация значение', () => {
    expect(validateValueTest(50)).toBe(true)
})

describe('validateValueTest', () => {
    test('Коректное значение', () => {
        expect(validateValueTest(50)).toBe(true)
    })
    test('меньше корректного', () => {
        expect(validateValueTest(-1)).toBe(false)
    })
    test('больше корректного', () => {
        expect(validateValueTest(101)).toBe(false)
    })
    test('пограничное значение снизу', () => {
        expect(validateValueTest(0)).toBe(true)
    })
    test('пограничное значение сверху', () => {
        expect(validateValueTest(100)).toBe(true)
    })
})