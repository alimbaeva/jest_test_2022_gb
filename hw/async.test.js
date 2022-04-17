const asuncStr = require('./async');

describe('asuncStr', () => {
    test('array', async () => {
        const arr = await asuncStr(() => Math.floor(9 / 4), 500)
        expect(arr).toBe(2)
    })
    test('array', async () => {
        const arr = await asuncStr(() => Math.floor(9 / 5), 200)
        expect(arr).toBe(1)
    })
    test('array', async () => {
        const arr = await asuncStr(() => Math.floor(9 / 8), 300)
        expect(arr).toBe(1)
    })
})