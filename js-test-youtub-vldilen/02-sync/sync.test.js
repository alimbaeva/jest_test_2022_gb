const Lodash = require('./sync');
let _ = new Lodash()  // переменная Lodash, или undescord

describe('Lodash: compact', () => {
    let array;
    // Хук который будет вызываться перед каждым тест кейсом (это для переменной)
    // beforeEach - запускается перед каждым тестом
    // beforeAll - запускается один раз для всех
    // afterEach - запускается после каждого теста
    // afterAll - запускается один раз после всеч
    beforeEach(() => {
        array = [false, 42, 0, '', true, null, 'hello'];
    })

    afterAll(() => {
        _ = new Lodash()
    })


    // Так как мы обращаемся к библиотеку Lodash, и не можем на прямоую вызвать методы compact и groupBy
    // создаем инстанс данного класса здесь

    test('should be defined', () => {
        expect(_.compact).toBeDefined()  // она должна быть определена
        expect(_.compact).not.toBeUndefined()
    })

    test('should working array be editable', () => {
        array.push(...['one', 'two'])
        expect(array).toContain('one')
        expect(array).toContain('two')
    })

    test('should remove falsy values from array', () => {
        const result = [42, true, 'hello']
        expect(_.compact(array)).toEqual(result) // если мы проверяем массивы , объекты то нужно использовать toEqual
    })

    test('shoud NOT contain falsy values', () => {
        expect(_.compact(array)).not.toContain(false)  // toContain работает и для массивов и для строк
        expect(_.compact(array)).not.toContain('')  // toContain работает и для массивов и для строк
        expect(_.compact(array)).not.toContain(0)  // toContain работает и для массивов и для строк
        expect(_.compact(array)).not.toContain(null)  // toContain работает и для массивов и для строк
    })
})





describe("Lodash : groupBy", () => {
    test('should be defined', () => {
        expect(_.groupBy).toBeDefined()
        expect(_.groupBy).not.toBeUndefined()

    })

    test('should group array items by Math.floor', () => {
        const array = [2.2, 2.4, 4.2, 3.1];
        const result = {
            2: [2.2, 2.4],
            4: [4.2],
            3: [3.1]
        }
        expect(_.groupBy(array, Math.floor)).toEqual(result)
    })


    test('should group array items bylength', () => {
        const array = ['one', 'two', 'three'];
        const result = {
            5: ['three'],
            3: ['one', 'two']
        }
        expect(_.groupBy(array, 'length')).toEqual(result)
    })

    test('should NOT return array', () => {
        expect(_.groupBy([], Math.trunc)).not.toBeInstanceOf(Array)
    })
})