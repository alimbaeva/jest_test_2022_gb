
const axios = require('axios')
const Ajax = require('./async');

jest.mock('axios')
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


/*
первую очередь мы должны отловить запрос на сервер мы должны подключить axios  (const axios = require('axios'))
дальше что бы управлять мы должны замокать axios в jest  jest.mock('axios')

создадим переменные  let respose    let todos
В beforeEach определим todos 
дальше в respose так как выглядит в axios ключь todos к массиву  todos

в тесте обращаемся к axios и методу get и вызываем функцию mock mockReturnValue() и в качестве значения мы хотим вернуть respose
axios.get.mockReturnValue(respose)
при вызове метода axios.get  jest отловит данные и проста вернет mockReturnValue(respose), вот так не будет отправлен запрос к серверу


Далше работаем с промисами Ajax говорим что работаем с методом get()  Ajax.get()  и когда он выполнится
получаем некоторую дату и мы ожидаем что дата todos должно быть похож массиву todos
then(data => { expect(data.todos).toEqual(todos)}

*/

describe('Ajax: GET', () => {

    let respose
    let todos

    beforeEach(() => {
        todos = [
            { id: 1, title: 'Todo 1', completed: false }
        ]

        respose = {
            data: {
                todos
            }
        }
    })

    test('should return data from backend', () => {
        axios.get.mockReturnValue(respose)

        return Ajax.get().then(data => {
            expect(data.todos).toEqual(todos)
        })
    })
})