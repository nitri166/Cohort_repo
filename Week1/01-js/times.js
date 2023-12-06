/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/


function calculateTime(n) {
    let sum = 0;
    let d = new Date();
    console.log(d);

    d = Date.now();
    // in js the timestamps are in milisecs. Below is the timestamp of current time.
    let x = d.valueOf();
    console.log(x);
    for (let i = 1; i <= n; i++) {
        sum = sum + i;
    }
    let end = Date.now();
    let y = end.valueOf();
    console.log(y);

    const time = y - x;
    console.log(time);

    return 0.01;
}
calculateTime(10000000);
