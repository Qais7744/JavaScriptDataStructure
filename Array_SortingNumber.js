//Extend the above program to sort the array and then find the 2nd largest and the 2nd smallest element.
{
    var numbers = new Array(10);

for (let i = 0; i <= 9; i++) {
    let randomeNumber = Math.floor(Math.random() * 1000);
    numbers[i] = randomeNumber;

}
var temp = 0;
for (j = 0; j < numbers.length; j++) {
    for (i = 0; i < numbers.length - 1; i++) {
        if (numbers[i] > numbers[j]) {
            temp = numbers[j];
            numbers[j] = numbers[i];
            numbers[i] = temp;
        }
    }
}
console.log("SecondSmallest: " + numbers[1] + " SecondLargest: " + numbers[numbers.length - 2]);
}