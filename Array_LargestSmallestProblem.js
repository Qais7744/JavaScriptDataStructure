//Write a program in the following steps
//a. Generates 10 Random 3 Digit number.
//b. Store this random numbers into a array.
//c. Then find the 2nd largest and the 2nd smallest element without sorting the array.
{
    let largest = 0;
    let secondlargest = 0;
    let secondsmallest = 0;
    let numbers = new Array(10);
    var smallest;
    for (let i = 0; i <= 9; i++) {
        let randomeValue = Math.floor(Math.random() * 10);
        numbers[i] = randomeValue;
    }
    smallest = numbers[0];
    for (let value = 0; value < numbers.length; value++) {
        if (largest < numbers[value]) {
            secondlargest = largest;
            largest = numbers[value];
        }

        if (smallest > numbers[value]) {
            secondsmallest = smallest;
            smallest = numbers[value];
        }
    }
    console.log("secondsmallest: " + secondsmallest + " secondlargest: " + secondlargest);
}