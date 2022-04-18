
/*
groupBy => на вчод получаем массив и на выходе должны получить объект!
массив перебираем array с методом reduce и ему вторым параметром передаем пустой объект 
чтобы при выходе получить объект {}.
первым параметром акумулятор асс вторым параметром ,
при итерации создаем ключь key получим если в функцию prop получим елемент i prop(i)
или если тип не ровна на 'function'  то ключ создаем по  i[prop]
если в акумуляторе нету такого ключа (!acc[key])
то ее создаем  acc[key] = []
после в акумулятор кладем елемент по ключу acc[key].push(i)

*/

class Lodash {
    compact(array) {
        return array.filter(val => !!val)
    }

    groupBy(array, prop) {
        return array.reduce((acc, i) => {
            const key = typeof prop === 'function' ? prop(i) : i[prop]
            if (!acc[key]) {
                acc[key] = []
            }
            acc[key].push(i)
            return acc
        }, {})
    }
}

module.exports = Lodash;

