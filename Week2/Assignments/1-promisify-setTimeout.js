/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    const p = new Promise((resolve, reject) => {
        setTimeout((error) => {
            if (!error) {
                resolve();
            } else {
                reject();
            }
        }, n * 1000);
    });
}

const ans = wait(2);
ans.then();

module.exports = wait;
