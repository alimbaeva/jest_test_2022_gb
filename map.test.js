const mapArr = require('./map');

describe('map', () => {
    test("Корректная значение", () => {
        expect(mapArr([1, 2, 3])).toEqual(['1', '2', '3'])
    })
    test("Лишнее", () => {
        expect(mapArr([1, 2, undefined, null, 3])).toEqual(['1', '2', '3'])
    })
    test("Пустой массив", () => {
        expect(mapArr([])).toEqual([])
    })
})