

// kilometer to meter conversion
function kilometerToMeter(kilometer) {
    var meter = kilometer * 1000;
    if (kilometer < 0) {
        return "Distance cannot be negative";
    }
    return meter;
}
// console.log(kilometerToMeter(-1));

// total budget calculation
function budgetCalculator(watches, phones, laptops) {
    if ((watches < 0) || (phones < 0) || (laptops < 0)) {
        return "The numbers given for laptops, watches, phones can't be negative";
    }
    var watchesPrice = watches * 50;
    var phonesPrice = phones * 100;
    var laptopsPrice = laptops * 500;
    var totalPrice = watchesPrice + phonesPrice + laptopsPrice;
    return totalPrice;
}
// console.log(budgetCalculator(2,10,2));

// hotel rent calculation
function hotelCost(days) {
    var totalCost = 0;
    if (days < 0) {
        return "Please enter the correct value. Give a value of at least 0 or above"
    } else if (days <= 10) {
        totalCost = days * 100;
    } else if (days <= 20) {
        var firstTenDays = 10 * 100;
        var remaining = days - 10;
        var secondTenDays = remaining * 80;
        totalCost = firstTenDays + secondTenDays;
    } else {
        var firstTenDays = 10 * 100;
        var secondTenDays = 10 * 80;
        var remaining = days - 20;
        var afterTwentyDays = remaining * 50;
        totalCost = firstTenDays + secondTenDays + afterTwentyDays;
    }
    return totalCost;
}
// console.log(hotelCost(11));

// find the largest name on an array
function megaFriend(friendsList) {
    var largeName = friendsList[0];
    if (friendsList.length == 0) {
        return "Please, enter an array that carries the name";
    }
    for (var i = 0; i < friendsList.length; i++) {
        var eachOne = friendsList[i];
        if (eachOne.length > largeName.length) {
            largeName = eachOne;
        }
    }
    return largeName;
}
// console.log(megaFriend(["Olil", "Jolil", "Kholil", "Molil"]));