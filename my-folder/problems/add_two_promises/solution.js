/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(promise1, promise2) {
    let value1, value2
    return promise1.then((result1)=>{
        value1 = result1
        return promise2
    }).then((result2)=>{
        value2 = result2
        const sum = value1 + value2
        return new Promise((resolve)=>resolve(sum))
    })
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */