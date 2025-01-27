/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(promise1, promise2) {

    const firstValue = await promise1
    const secondValue = await promise2

    const sumPromise = new Promise((resolve) => {
        const result = firstValue + secondValue
        if(result != undefined) {
            resolve(result)
        }
    })

    return (
        sumPromise.then((result) => {return result})
    )
};