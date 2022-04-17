

const asyncStr = (arr, ms) => {
    return new Promise((res => {
        setTimeout(() => {
            res(arr())
        }, ms)
    }))
}

module.exports = asyncStr;