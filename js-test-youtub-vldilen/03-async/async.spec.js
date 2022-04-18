const Ajax = require('./async');
/*
Здесь не должны создовать инстанс класса Ajax
так как метод является статическим (static)
*/

describe('Ajax: echo', () => {
    test('should return value async', async () => {
        const result = await Ajax.echo('some data')
        expect(result).toBe('some data')
    })

    //  при работе с промисами
    test('should return value with promise', () => {
        return Ajax.echo('some data').then(data => {

            expect(data).toBe('some data')
        })
    })

    test('should catch error with promise', () => {
        return Ajax.echo('some data').catch(err => {

            expect(err).toBeInstanceOf(Error)
        })
    })


    test('should catch error with promise', async () => {
        try {
            await Ajax.echo('some data')
        } catch (e) {
            expect(e.message).toBe('error')
        }
    })
})