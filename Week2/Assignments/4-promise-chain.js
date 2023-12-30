/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function wait1(t) {
    return new Promise((resolve, reject) => {
        setTimeout(() => { resolve(); /*console.log(1)*/ }, t * 1000)
    })
}

function wait2(t) {
    return new Promise((resolve, reject) => {
        setTimeout(() => { resolve(); /*console.log(2)*/ }, t * 1000)
    })
}

function wait3(t) {
    return new Promise((resolve, reject) => {
        setTimeout(() => { resolve();/* console.log('3')*/ }, t * 1000)
    })
}

function calculateTime(t1, t2, t3) {
    let time = new Date().getTime();
    return wait1(t1)
        .then((value) => {
            return wait2(t2)
        })
        .then((value) => {
            return wait3(t3)
        })
        .then((value) => {
            return (new Date().getTime() - time);
        })



}
// console.log(calculateTime(10, 1, 1));

module.exports = calculateTime;
