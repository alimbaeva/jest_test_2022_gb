const { sum, nativNull } = require('./intro');  //  импортируем функцию sum из файла intro

describe('Sum functiom', () => {


    // test() это глобальная функция, принимает 3 переменных : 1- строка, 2=call back функцию
    // expect() гдобальная функуия-ожидание, оно принимает парамерт sum(1, 3) и через точку обращаемся MATCH 
    // метчеру (метеоду мли объекту) toBe - передаем параметр для сравнения с выводом функции sum который мы ожидаем
    test('should return sum of to values', () => {
        expect(sum(1, 3)).toBe(4)
        expect(sum(1, 5)).toEqual(6)
        // expect(sum(1, 5)).toEqual(7)
    })

    /*
    toEqual и toBe они здесь работает одинаково
    так как они написаны в одном test то если один из них даст ошибку то весь
    test упадет, тоесть даст ошибку
    */


    // ---


    /*
    MATCHER!
    toBeGreaterThan(n) - быть больше чем n: expect(sum(2, 3)).toBeGreaterThan(4)- здесь sum даст 5 и оно должно быть больше чем 4
    toBeGreaterThanOrEqual(n) - быть больше или равно чем n: expect(sum(2, 3)).toBeGreaterThan(5)- здесь sum даст 5 и оно должно быть больше или равно чем 4
    toBeLessThan(n) - быть меньше чем n: expect(sum(2, 3)).toBeGreaterThan(6)- здесь sum даст 5 и оно должно быть меньше чем 6
    toBeLessThan(n) - быть меньше или равно чем n: expect(sum(2, 3)).toBeGreaterThan(5)- здесь sum даст 5 и оно должно быть меньше или равно чем 5
    
    */


    test(' should retirn value correctly comparing to other', () => {
        expect(sum(2, 3)).toBeGreaterThan(4)
        expect(sum(2, 3)).toBeGreaterThanOrEqual(5)
        expect(sum(2, 3)).toBeLessThan(6)
        expect(sum(2, 3)).toBeLessThanOrEqual(5)
    })


    /*
    при работе с плавающей точкой toBe будет доваь ошибку в некоторых случаях
    */
    test(" should sum 2 float values correctly", () => {
        // expect(sum(0.1, 0.2)).toBe(0.3)
        expect(sum(0.1, 0.2)).toBeCloseTo(0.3)
    })
})



// ============== nativNull =========

/*
toBeNull- должен быть null
toBeFalsy - должен быть '', [], {}, 0, undefind, null которое не проходит через блок if
toBeDefined - не определен
*/

describe('nativNull function', () => {
    test('should return false value null', () => {
        expect(nativNull()).toBe(null)
        expect(nativNull()).toBeNull()
        expect(nativNull()).toBeFalsy()
        expect(nativNull()).toBeDefined()
        expect(nativNull()).not.toBeTruthy()
        expect(nativNull()).not.toBeUndefined()
    })
})