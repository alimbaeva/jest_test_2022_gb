/*
function expect - это функция которое тестирует  ананимную функцию 
sum = (a, b) => a + b; в переменную value передается функция sum с переменными
expect(sum(41, 1)), но чтобы проверить мы вызываем метод toBe функции expect,
е ему передаем значение что мы ожидаем от функции sum при выходе или после выполнения.
expect(sum(41, 1)).toBe(42). 

если правильно выполнилось в консоль выводится слово Success.
усли нет  то Value is 43, but expectation is 42  (expect(sum(41, 2)).toBe(42))

*/


function expect(value) {
    return {
        toBe: exp => {
            if (value === exp) {
                console.log('Success')
            } else {
                console.error(`Value is ${value}, but expectation is ${exp}`)
            }
        }
    }
}

const sum = (a, b) => a + b;

const nativNull = () => null;

// console.log(sum(41, 1))

expect(sum(41, 1)).toBe(42)
expect(sum(41, 2)).toBe(42)