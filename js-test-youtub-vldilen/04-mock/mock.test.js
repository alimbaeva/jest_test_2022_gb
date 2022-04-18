const { map } = require('./mock');

/*
тестируем - CALLBACK которое передается к методу map
test-1;
предположим у нас есть массив array
  в тесте : вызывая функцию  map с определенным 
  методом, мы должны убедится чтобы функция колбек была вызвона
Для этого мы создаем переменную fn  и создаем псевдофункцию с помошью
mock jest test=> fn = jest.fn(x => x ** 2),
если данная функция было предопределенна с jest то в долнейшем мы можем проверять
разные элементы которое связано с этой функции. Теперь fn - это колбэк но 
с функционалом jest
при проверке array пропускаем через fn , после ожидаем 
что функция fn toBeCalled тоесть вызволся.
toBeCalledTimes мечер Times проверяем сколько раз вызвался наша колбэк функция.
ключь mock ключь calls ключь length -делает--> количество вызовов этой функции



*если делаем асинхронную функцию внутри  beforeEach 
* то что бы он работал нужго сделать
*надо вернуть промис, или воспользоваться с операторами async await
*/


describe('Map functian', () => {
    let array
    let fn

    beforeEach(() => {
        array = [1, 2, 3, 5];
        fn = jest.fn(x => x ** 2);
        map(array, fn);
    })

    test('should call callback', () => {
        // map(array, fn)
        expect(fn).toBeCalled()
        expect(fn).toBeCalledTimes(4)
    })


    test('should call callback 4 times', () => {
        // map(array, fn)
        expect(fn).toBeCalledTimes(4)
        expect(fn.mock.calls.length).toBe(4)
    })


    // test keys  по значениям

    test('should pow 2 each element', () => {
        expect(fn.mock.results[0].value).toBe(1)
        expect(fn.mock.results[1].value).toBe(4)
        expect(fn.mock.results[2].value).toBe(9)
        expect(fn.mock.results[3].value).toBe(25)
    })

    // мокать возврашаемые функции

    test('should fn work', () => {
        fn
            .mockReturnValueOnce(100)
            .mockReturnValueOnce(200)
            .mockReturnValue('42')
        expect(fn()).toBe(100)
        expect(fn()).toEqual(200)
        expect(fn()).toEqual('42')
        expect(fn()).toEqual('42')
    })
})