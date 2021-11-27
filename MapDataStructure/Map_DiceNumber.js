
{
    const value = new Map();
    var one = 0, two = 0, three = 0, four = 0, five = 0, six = 0;
    while (one < 10 && two < 10 && three < 10 && four < 10 && five < 10 && six < 10) {

        var diceValue = (Math.floor((Math.random() * 10) % 6) + 1)
        console.log(diceValue);
        var maximumvalue = 0;
        value.set(diceValue, diceValue);
        maximumvalue = diceValue;
        let ONE = one++;
        let TWO = two++;
        let THREE = three++;
        let FOUR = four++;
        let FIVE = five++;
        let SIX = six++;

        switch (diceValue) {
            case ONE:
                one++;
                break;
            case TWO:
                two++;
                break;
            case THREE:
                three++;
                break;
            case FOUR:
                four++;
                break;
            case FIVE:
                five++;
                break;
            case SIX:
                six++;
            default:
                console.log("Intered invalid number");
        }

    }
    if (one < two && one < three && one < four && one < five && one < six) {
        console.log("The Minimum is " + one);
    } else if (two < one && two < three && two < four && two < five && two < six) {
        console.log("The Minimum is " + two);
    } else if (three < one && three < two && three < four && three < five && three < six) {
        console.log("The Minimum is " + three);
    } else if (four < one && four < two && four < three && four < five && four < six) {
        console.log("The Minimum is " + four);
    } else if (five < one && five < two && five < three && five < four && five < six) {
        console.log("The Minimum is " + six);
    }
    else {
        console.log("The Minimum is " + six);
    }
    console.log("Maximum Times is " + maximumvalue + " The map size is " + value.size);
}