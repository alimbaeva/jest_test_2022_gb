const squer = require('./squer');

describe('squar', () => {
    beforeEach(() => {

    })
    beforeAll(() => {

    })
    test('Корректное значение', () => {
        const spyMathPow = jest.spyOn(Math, 'pow')
        squer(2)
        expect(spyMathPow).toBeCalledTimes(1)
    })
    test('Корректное значение', () => {
        const spyMathPow = jest.spyOn(Math, 'pow')
        squer(1)
        expect(spyMathPow).toBeCalledTimes(0)
    })
    afterEach(() => {
        jest.clearAllMocks()
    })
    afterAll(() => {

    })
})