//Take a range from 0 – 100, find the digits that are repeated twice like 33, 77,
//etc and store them in an array
{
    const prompt = require('prompt-sync')();
    var limitOfLoop = prompt("enter the limit  ")
    let reimnder = 0;
    let quosent = 0;
    for (let i = 10; i <= limitOfLoop; i++) {
        reimnder = parseInt(i % 10);
        quosent = parseInt(i / 10);
        if (reimnder == quosent) {
            console.log(i);
        }
    }
}