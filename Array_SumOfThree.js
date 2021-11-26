//Write a Program to show Sum of three Integer adds to ZERO.
{
    var sumOfThreeInteger = [1, 2, -3];
    let sum = 0;
    for (let i = 0; i < sumOfThreeInteger.length; i++) {
        sum = sum + sumOfThreeInteger[i];
    }
    console.log(sum);
}