//Extend the Prime Factorization Program to store all the Prime Factors of a
//number n into an array and finally display the output.
{
    const readline = require("readline");
    const read = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    read.question("Enter the  Number ", function (number) {
        let Number_For_Prime = parseInt(number);

        let DivisorArr = new Array();
        let PrimeDivisorArr = new Array();
        let isPrime = true;
        for (let i = 0; i < Number_For_Prime; i++) {
            if (Number_For_Prime % i == 0) {
                DivisorArr.push(i);
                for (let j = 2; j < i; j++) {
                    if (i % j == 0) {
                        isPrime = false
                        break;
                    }
                }
                if (isPrime) {
                    PrimeDivisorArr.push(i);
                }
            }
        }
        console.log("Divisor " + DivisorArr);

        console.log("Prime divisor " + PrimeDivisorArr);
        read.close();
    });
}