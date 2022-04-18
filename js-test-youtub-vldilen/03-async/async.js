
/*
тест на асинхронность
статическая функция echo принимает на себя некоторую дату
и через определенную setTimeout его возвращать.
для этого возвращаем новый промис с параметрами функции resolve, reject
все это оборачевается в setTimeout
если data определена, то ее возвращаем с функцией resolve(data)
иначе если data не передовали тоесть пустой или не определен
выводим ошибку   reject(new Error('error'))
*/

class Ajax {
    static echo(data) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (data) {
                    resolve(data)
                } else {
                    reject(new Error('error'))
                }
            }, 200)
        })
    }
}

module.exports = Ajax;