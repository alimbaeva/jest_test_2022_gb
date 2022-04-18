const axios = require('axios')
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


    /*
    у Ajax будет реализован метод get будет работать с axios
    и это будет работать асинхронно, и будет ждать данные с 'https://jsonplaceholder.typicode.com/todos'
    и надо импортировать axios  (const axios = require('axios'))
    получаем данные
    в действительности мы хотим проверить работу библиотеку axios, и в реальности он не делал запрос к бэкенду (серверу)
    а мы должны это поймать и ее обработали
    */

    static async get() {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
            return response.data
        } catch (e) {
            console.log(e)
        }
    }
}

module.exports = Ajax;